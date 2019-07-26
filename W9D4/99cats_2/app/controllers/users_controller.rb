class UsersController < ApplicationController

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)

      if user.save
        login_user!(@user)
        flash[:notice] = "Ello kitty"
        redirect_to cats_url
      else
        flash.now[:errors] = @user.errors.full_message
        render new_user_url

      end
    end

    private

    def user_params
      params.require(:user).permit(:user_name, :password)
    end
end
