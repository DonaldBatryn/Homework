
class UsersController < ApplicationController

    def index
        render plain: "Index action performed!"
    end

    def create
        # debugger
        user = User.new(user_params)
        user.save!
        render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update_attributes(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render plain: "User #{user.name} was deleted"
    end



    protected
    def user_params
        params.require(:user).permit(:name, :school, :unit)
    end
    
end