require 'sqlite3'
require 'singleton'

class QuestionsDB < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end    
end

class Question
    attr_accessor :id, :title, :body, :author
    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM questions")
        data.map { |datum| Question.new(datum) }
    end

    def self.find_by_id(id)
        question = QuestionsDB.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            questions
        WHERE
            id = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def self.find_by_author_id(author_id)
        question = QuestionsDB.instance.execute(<<-SQL, author_id)
        SELECT
            *
        FROM
            questions
        WHERE
            author = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author = options['author']
    end

    def create
        raise "#{self} already in database" if self.id 
        QuestionsDB.instance.execute(<<-SQL, self.title, self.body, self.author)
        INSERT INTO
            questions (title, body, author)
        VALUES
            (?, ?, ?)
        SQL
        self.id = QuestionsDB.instance.last_insert_row_id
    end

    def author
        auth = User.find_by_id(self.id)
        "Author: #{auth.fname} #{auth.lname}"
    end

    def replies
        reply = Reply.find_by_question_id(self.id)
        raise "This question has no replies" unless reply
        "Replies: #{reply.body}"
    end
end

class User
    attr_accessor :id, :fname, :lname

    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM users")
        data.map { |datum| User.new(datum) }
    end

    def self.find_by_id(id)
        user = QuestionsDB.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            users
        WHERE
            id = ?
        SQL
        return nil unless user.length > 0
        User.new(user.first)
    end

    def self.find_by_name(fname, lname)
        user = QuestionsDB.instance.execute(<<-SQL, fname, lname)
        SELECT 
            *
        FROM
            users
        WHERE
            fname = ? AND lname = ?
        SQL
        return nil unless user.length > 0
        User.new(user.first)
    end

    

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def create
        raise "#{self} already in database" if self.id 
        QuestionsDB.instance.execute(<<-SQL, self.fname, self.lname)
        INSERT INTO
            users (fname, lname)
        VALUES
            (?, ?)
        SQL
        self.id = QuestionsDB.instance.last_insert_row_id
    end

    def authored_questions
        data = Question.find_by_author_id(self.id)
        raise "#{self} doesnt have any questions" unless data
        data
    end

    def authored_replies
        data = Reply.find_by_user_id(self.id)
        raise "#{self} doesnt have any replies" unless data
        data
    end
end

class QuestionFollow
    attr_accessor :id, :user_id, :question_id

    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM question_follows")
        data.map { |datum| QuestionFollow.new(datum) }
    end

    def self.find_by_id(id)
        follow = QuestionsDB.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            question_follows
        WHERE
            id = ?
        SQL
        return nil unless follow.length > 0
        QuestionFollow.new(follow.first)
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

    def create
        raise "#{self} already in database" if self.id 
        QuestionsDB.instance.execute(<<-SQL, self.user_id, self.question_id)
        INSERT INTO
            question_follows (user_id, question_id)
        VALUES
            (?, ?)
        SQL
        self.id = QuestionsDB.instance.last_insert_row_id
    end
end

class Reply
    attr_accessor :id, :question_id, :parent_id, :user_id, :body

    
    def self.find_by_user_id(user_id)
        reply = QuestionsDB.instance.execute(<<-SQL, user_id)
        SELECT
            *
        FROM
            replies
        WHERE
            user_id = ?
        SQL
        return nil unless reply.length > 0
        replies = []
        reply.each {|rep| replies << Reply.new(rep)}
        replies
    end


    def self.find_by_question_id(question_id)
        reply = QuestionsDB.instance.execute(<<-SQL, question_id)
        SELECT
            *
        FROM
            replies
        WHERE
            question_id = ?
        SQL
        return nil unless reply.length > 0
        replies = []
        reply.each {|rep| replies << Reply.new(rep)}
        replies
    end


    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM replies")
        data.map { |datum| Reply.new(datum) }
    end

    def self.find_by_id(id)
        reply = QuestionsDB.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            replies
        WHERE
            id = ?
        SQL
        return nil unless reply.length > 0
        replies = []
        reply.each {|rep| replies << Reply.new(rep)}
        replies   
    end

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @parent_id= options['parent_id']
        @user_id = options['user_id']
        @body = options['body']
    end

    def create
        raise "#{self} already in database" if self.id 
        QuestionsDB.instance.execute(<<-SQL, self.question_id, self.parent_id, self.user_id, self.body)
        INSERT INTO
            replies (question_id, parent_id, user_id, body)
        VALUES
            (?, ?, ?, ?)
        SQL
        self.id = QuestionsDB.instance.last_insert_row_id
    end
end

class QuestionLike
    attr_accessor :id, :question_id, :user_id

    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM question_likes")
        data.map { |datum| QuestionLike.new(datum) }
    end
    def self.find_by_id(id)
        like = QuestionsDB.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            question_likes
        WHERE
            id = ?
        SQL
        return nil unless like.length > 0
        like.each {|lik| QuestionLike.new(lik)}
        
    end

    def intialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @user_id = options['user_id']
    end

    def create
        raise "#{self} already in database" if self.id 
        QuestionsDB.instance.execute(<<-SQL, self.question_id, self.user_id)
        INSERT INTO
            question_likes (question_id, user_id)
        VALUES
            (?, ?)
        SQL
        self.id = QuestionsDB.instance.last_insert_row_id
    end
end

