require_relative 'db_connection'
require 'active_support/inflector'
require "byebug"
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject #Parent SQL class
  

  def self.columns
    # ...
    return @columns if @columns
    cols = DBConnection.execute2("SELECT *
    FROM \"#{self.table_name}\"")
    
    
    @columns = cols[0].map(&:to_sym)
    @columns
  end

  def self.finalize! # attr_accesor
    self.columns.each do |column|
      define_method(column) do 
        self.attributes[column]
      end
      define_method("#{column}=") do |value|
        self.attributes[column] = value
      end
    end

  end

  def self.table_name=(table_name) # class Human - table name'humans'
    # ...
    # @table_name = table_name
    @table_name = table_name
  end

  def self.table_name 
    # ...
    return @table_name if @table_name 
    @table_name = self.name.tableize
    # @table_name = "#{self}".tableize
  end

  def self.all
    # ...
    results = DBConnection.execute(<<-SQL)
    SELECT #{self.table_name}.*
    FROM #{self.table_name}
    SQL
    self.parse_all(results)
  end

  def self.parse_all(results)
    objs = []
    results.each {|res| objs << self.new(res)}
    objs
  end

  def self.find(id)
    # ...
    results = DBConnection.execute(<<-SQL, id)
    SELECT *
    FROM #{self.table_name}
    WHERE #{self.columns[0]} = ?
    SQL
    return nil unless results.length > 0
    self.new(results.first)
  end
  # GO BACK!@!@@@@!@!
  # ABORT ABORT ABORT
  #AHHHHHHH SEA OFGREEN
  def initialize(params = {})
    # ...
    params.each do |attr_name, value|
      getter_sym = attr_name.to_sym
      setter_sym = "#{attr_name}=".to_sym
      raise "unknown attribute '#{attr_name}'" unless self.class.columns.include?(getter_sym)
      self.send(getter_sym)
      self.send(setter_sym, value)
    end
  end
  

  def attributes
    # ...
    @attributes ||= {}
    
  end

  def attribute_values
   # return an array of values for each attr with ARRAY#Map
    self.attributes.values
    # ...
  end
  

  def insert
    col_names = self.class.columns
    n = col_names.length - 1
    col_string = col_names.drop(1).join(",")
    questionmark = ["?"] * n
    quest_string = questionmark.join(",")
    # debugger
    DBConnection.execute(<<-SQL, *self.attribute_values)
    INSERT INTO
      #{self.class.table_name} (#{col_string})
    VALUES
      (#{quest_string})
    SQL
    self.id = DBConnection.last_insert_row_id
  end

  def update
    set_line = self.class.columns.map {|col| "#{col} = ?"}.join(',')
    DBConnection.execute(<<-SQL, *self.attribute_values, self.id)
    UPDATE
      #{self.class.table_name} 
    SET
      #{set_line}
    WHERE
      id = ?
    SQL
  end

  def save
    self.id.nil? ? self.insert : self.update
  end
end
