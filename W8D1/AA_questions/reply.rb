require_relative 'questions'

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

    def author
        auth = Reply.find_by_user_id(self.user_id) 
        "Author: #{auth.fname} #{auth.lname}"
    end

    def question
        question = Question.find_by_id(self.question_id)
        "Question: #{question.body}"
    end

    def parent_reply
        parent_reply = Reply.find_by_id(self.parent_id)
        raise "No parent reply!" unless parent_reply
        "Previous reply: #{parent_reply.last.body}"
    end

    def child_replies
        child_replies = QuestionsDB.instance.execute(<<-SQL, self.id)
        SELECT
            *
        FROM
            replies
        WHERE
            parent_id = ?
        SQL
        Reply.new(child_replies.first)
    end
end