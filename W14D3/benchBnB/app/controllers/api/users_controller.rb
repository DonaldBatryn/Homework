class Api::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create 
        @user = User.new(user_params)
        # debugger
        if @user.save
            login(@user)
            # render or redirect?
            render 'api/users/show' 
        else
            render json: @user.errors.full_messages, status: 422
            # render login form
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
