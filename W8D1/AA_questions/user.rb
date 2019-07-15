require_relative 'questions'
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

    def followed_questions
        QuestionFollow.followed_questions_for_user_id(self.id)
    end

    def liked_questions
        QuestionLike.liked_questions_for_user_id(self.id)
    end
end