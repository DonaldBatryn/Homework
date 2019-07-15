require_relative 'questions'
require_relative 'user'

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

    
    def self.followers_for_question_id(question_id)
        users = QuestionsDB.instance.execute(<<-SQL, question_id)
        SELECT
            *
        FROM
            users
        JOIN 
            questions ON (users.id = questions.author)
        WHERE
            questions.id = ?
        SQL
        user_array = []
        users.each {|usr| user_array << User.new(usr) }
        user_array
    end

    def self.followed_questions_for_user_id(user_id)
        questions = QuestionsDB.instance.execute(<<-SQL, user_id)
        SELECT
            *
        FROM
            questions
        JOIN
            users ON (questions.author = users.id)
        WHERE
            users.id = ?
        SQL
        questions_array = []
        questions.each { |ques| questions_array << Question.new(ques) }
        questions_array
    end

    def self.most_followed_questions(n)
        questions = QuestionsDB.instance.execute(<<-SQL)
        SELECT
            *
        FROM
            questions
        JOIN
            question_follows ON (questions.id = question_follows.question_id)
        GROUP BY
            question_follows.question_id
        ORDER BY
            COUNT(question_follows.user_id) DESC
        SQL
        num_requested_questions = questions.take(n)
        arr = []
        num_requested_questions.each { |i| arr << Question.new(i) }
        arr
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
