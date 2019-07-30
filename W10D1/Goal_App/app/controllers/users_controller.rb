class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      flash[:success] = "    YOU SADLY MADE A PAGE      "
      redirect_to goals_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
      
  end
  

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
