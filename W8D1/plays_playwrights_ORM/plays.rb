require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Play
  attr_accessor :id, :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    data.map { |datum| Play.new(datum) }
  end

  def self.find_by_title(title)
    # raise "#{title} not found" 
    # data = PlayDBConnection.instance.execute(<<-SQL)
    # SELECT *
    # FROM plays
    # WHERE title = title
    # SQL
    data = Play.all
    data.find {|instance| instance.title == title}
    # raise "#{title} not found" if data.nil?
  end

  def self.find_by_playwright(name)
    data = PlayDBConnection.instance.execute(<<-SQL)
    SELECT plays.id, plays.title, plays.year, playwrights.name
    FROM plays
    JOIN playwrights ON playwrights.id = plays.playwright_id
    WHERE playwrights.name = name
    SQL
    data.find { |instance| instance.has_value?(name) }
    # raise "#{name} not found" if data.nil?
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if self.id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id, @id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end

class Playwright
  attr_accessor :id, :name, :birth_year

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM playwrights")
    data.map { |datum| Playwright.new(datum) }
  end

  def self.find_by_name(name)
    # PlayDBConnection.instance.execute(<<-SQL)
    # # SELECT *
    # # FROM playwrights
    # # WHERE name = name
    
    # SQL
    data = Playwright.all
    data.find {|instance| instance.name == name }
    # raise "#{name} not found" if data.nil?
  end

  def initialize(options)
    @id = options['id']
    @name = options['name']
    @birth_year = options['birth_year']
  end

  def create
    # raise "#{self} already in database" if self.id
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
    INSERT INTO
      playwrights (name, birth_year)
    VALUES
      (?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    # raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year, @id)
    UPDATE
      playwrights 
    SET
      name = ? , birth_year = ?
    WHERE
      id = ?
    SQL
  end

  def get_plays
    data = PlayDBConnection.instance.execute(<<-SQL)
    SELECT 
      plays.title
    FROM
      plays
    JOIN 
      playwrights ON playwrights.id = plays.playwright_id
    WHERE
      playwrights.name = self.name
    SQL
    # raise "No entries found" if data.nil?
  end

end