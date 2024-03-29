class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password_digest, presence: { message: "Password cant be blank!"}
    validates :password_digest, length: { minimum: 6 }, allow_nil: true 
    after_initialize :ensure_session_token
    
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end
    
    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end


    def reset_session_token
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def password=(new_password)
        self.password_digest = BCrypt::Password.create(new_password)
        
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
