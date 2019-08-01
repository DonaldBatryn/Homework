class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout
        self.session_token = current_user.reset_session_token!
        session[:session_token] = nil
    end

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    def moderator?(sub)
        redirect_to subs_url unless sub.moderator_id == @current_user.id
    end

    def author?(post)
        redirect_to post_url unless post.author_id == current_user.id
    end
    
end
