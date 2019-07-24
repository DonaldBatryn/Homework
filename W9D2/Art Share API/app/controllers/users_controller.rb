
class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def create
        # debugger
        user = User.new(user_params)
        # user.save!

        if user.save!
            render json: user
        else          
            render json: user.errors.full_messages, status: 422
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update_attributes(user_params)

        if user.save!
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render plain: "User #{user.username} was deleted"
    end



    private
    def user_params
        params.require(:user).permit(:username)
    end

end