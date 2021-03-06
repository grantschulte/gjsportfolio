class PostsController < ApplicationController
  def index
    @posts = Post.all.limit(params[:limit]).offset(params[:offset]).reverse_order
    @post_count = Post.count

    respond_to do |format|
      format.html
      format.json { render json: @posts }
    end
  end

  def show
    @post = Post.find_by_slug(params[:id])
    @post_title = @post.title

    respond_to do |format|
      format.html
      format.json { render json: @post }
    end
  end
end
