require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    self.class_name.constantize
  end

  def table_name
    "#{self.class_name}s".downcase 
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {}) #company, :class_name => "Humen"
    options.keys.include?(:primary_key) ? @primary_key = options[:primary_key] : @primary_key = :id
    options.keys.include?(:foreign_key) ? @foreign_key = options[:foreign_key] : @foreign_key = ("#{name}".to_s + "_id").to_sym
    options.keys.include?(:class_name) ? @class_name = options[:class_name] : @class_name =  "#{name}".to_s.camelcase


    # @primary_key = :id unless options.keys.include?(:primary_key)

    # @foreign_key = ("#{name}".to_s + "_id").to_sym unless options.keys.include?(:foreign_key)
    # @class_name = "#{name}".to_s.camelcase
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    options.keys.include?(:primary_key) ? @primary_key = options[:primary_key] : @primary_key = :id
    options.keys.include?(:foreign_key) ? @foreign_key = options[:foreign_key] : @foreign_key = ("#{self_class_name}".to_s.downcase + "_id").to_sym
    options.keys.include?(:class_name) ? @class_name = options[:class_name] : @class_name =  "#{name}".to_s.singularize.camelcase

  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    options = BelongsToOptions.new(name, options)
    define_method(name) do 
      
      options.model_class.where(options.primary_key => self.send(options.foreign_key)).first
    end
  end

  def has_many(name, options = {})
    options = HasManyOptions.new(name, self.name, options)
    define_method(name) do 
      
      options.model_class.where(options.foreign_key => self.send(options.primary_key))
    end
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
    @assoc_hash ||= {}
    
  end
end

class SQLObject
  # Mixin Associatable here...
  extend Associatable
end
