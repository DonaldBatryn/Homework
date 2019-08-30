class Api::SessionsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def new
        
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            # debugger
            render 'api/users/show'
            # redirect home
        else
            render json: ["wrong credentials"], status: 401
            # render home page
        end
    end

    def destroy
        logout
        # redirect_to api_session_url
        render json: {}
    end
end
