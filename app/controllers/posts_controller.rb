class PostsController < ApplicationController
	
	def index
    @posts = Post.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @posts }
      format.xml  { render :xml => @posts }
    end
  end

  def show
    @post = Post.find(params[:id])

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @posts }
      format.xml  { render :xml => @posts }
    end
  end

  def new
    @posts = Post.all
    @post = Post.new

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @posts }
      format.xml  { render :xml => @posts }
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    # binding.pry

    respond_to do |format|
      if @post.save
        format.html { redirect_to(@post, :notice => 'post was successfully created.') }
        format.json { render :json => @post, :status => :created } #:location => @post }
        format.xml  { render :xml => @post, :status => :created }  #:location => @post }
      else
        format.html { render :action => "new" }
        format.json { render :json => @post.errors, :status => :unprocessable_entity }
        format.xml  { render :xml => @post.errors, :status => :unprocessable_entity }
      end
    end
    # redirect_to posts_path
  end

  def update
    @post = Post.find(params[:id])

    respond_to do |format|
      if @post.update_attributes(post_params)
        format.html { redirect_to(@post, :notice => 'post was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @post.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      format.json { render json: @post, status: :success }
    end
  end

  #==================================================================
  private
  def post_params
    params.require(:post).permit(:title, :body) #if params[:post]
  end
end

