class CommentsController < ApplicationController
# before_filter :load_post
  
  def new
    @commentable = find_commentable
  end

  # def index
  #   @comments = @post.comments.all # can .order by params (title, date, user, etc)
  # end

  # def show
  #   @comment = @post.comments.find(params[:id])
  # end

  def create
    @commentable = find_commentable
    @comment = @commentable.comments.build(comment_params)
    if @comment.save
      flash[:sucess] = "You have successfully created a comment."
      redirect_to get_master
    else
      render :action => 'new'
    end
  end

  # def destroy
  #   @comment = @post.comments.find(params[:id])
  #   @comment.destroy
  #   redirect_to post_comments_path(@post)
  # end

  #==================================================
  protected
  
  #polymorphic commenting
  def find_commentable
    params.each do |name, value|
      if name =~ /(.+)_id$/
        return $1.classify.constantize.find(value)
      end
    end
    nil
  end
  
  #resursive method
  def get_master
    @parent = @comment.commentable
    if @parent.respond_to?('commentable_type')
      @comment = @parent
      get_master
    else
      return @parent
    end
  end

  #==============================================
  private
  def comment_params
    params.require(:comment).permit(:title)
  end
  
end

