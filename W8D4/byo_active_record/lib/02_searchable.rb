require_relative 'db_connection'
require_relative '01_sql_object'
require 'byebug'

module Searchable
  def where(params)
    where_line = params.keys.map {|key| "#{key} = ?"}.join(" AND ")
    results = DBConnection.execute(<<-SQL, *params.values)
    SELECT *
    FROM #{self.table_name}
    WHERE #{where_line}
    SQL
    # debugger
    objs = []
    results.each {|res| objs << self.new(res)}
    objs
  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
