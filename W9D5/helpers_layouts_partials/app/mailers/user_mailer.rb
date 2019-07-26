class UserMailer < ApplicationMailer

    default from: 'from@example.com'

    def welcome_email(user)
        @user = user
        @url = 'http://example.com/login'
        mail(to: user.username, subject: "Welcome to 99Fats!")
    end
end
