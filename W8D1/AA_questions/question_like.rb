require_relative 'questions'

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
        arr = []
        like.each { |lik| arr << QuestionLike.new(lik) }
        arr
    end

    def self.likers_for_question_id(question_id)
        users = QuestionsDB.instance.execute(<<-SQL, question_id)
        SELECT
            *
        FROM
            users
        JOIN 
            question_likes ON question_likes.user_id = users.id
        WHERE 
            question_likes.id = ?
        SQL
        return nil unless users.length > 0
        arr = []
        users.each { |usr| arr << User.new(usr) }
        arr
    end

    def self.num_likes_for_question_id(question_id)
        num = QuestionsDB.instance.execute(<<-SQL, question_id)
        SELECT
            COUNT(users.id) AS num_likes
        FROM
            users
        JOIN 
            question_likes ON question_likes.user_id = users.id
        GROUP BY
            question_likes.question_id
        HAVING
            question_likes.question_id = ? 
        SQL
        num.first['num_likes']
    end

    def self.liked_questions_for_user_id(user_id)
        questions = QuestionsDB.instance.execute(<<-SQL, user_id)
        SELECT
            *
        FROM
            questions
        JOIN
            question_likes ON questions.id = question_likes.question_id
        WHERE
            question_likes.user_id = ?
        SQL
        return nil unless questions.length > 0        
        arr = []
        questions.each { |q| arr << Question.new(q) }
        arr
    end

    def self.most_liked_questions(n)
        questions = QuestionsDB.instance.execute(<<-SQL)
        SELECT
            *
        FROM
            questions
        JOIN
            question_likes ON (question_likes.question_id = questions.id)
        GROUP BY
            question_likes.question_id
        ORDER BY
            COUNT(question_likes.user_id) DESC
        SQL
        num_requested = questions.take(n)
        arr = []
        num_requested.each { |n| arr << Question.new(n) }
        arr
    end

    def initialize(options)
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

