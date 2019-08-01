class PostsController < ApplicationController
  def new
    @post = Post.new
    @subs = Sub.all
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    # @post.sub_id = params[:post][:sub_id]
    if @post.save!
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      @subs = Sub.all
      render :new
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect to sub_url(@post.sub_id)
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end
