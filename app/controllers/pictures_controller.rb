class PicturesController < ApplicationController

  def index
    @event= Event.find(params[:event_id])
    @pictures = @event.pictures.all
  end


  def show
    @event = Event.find(params[:event_id])
    @picture = @event.pictures.find(params[:id])
  end

  def new
    @event = Event.find(params[:event_id])
    @picture = @event.pictures.new
  end

  def edit
    @event = Event.find(params[:event_id])
    @picture = @event.pictures.find(params[:id])
  end

  def create
    @event = Event.find(params[:event_id])
    @picture = @event.pictures.new(picture_params)

      if @picture.save
        redirect_to [@event, @picture], notice: 'picture was successfully created.'
      else
        render action: 'new'
      end
  end


  def update
    @event = Event.find(params[:event_id])
    @picture = @event.pictures.find(params[:id])
      if @picture.update(picture_params)
        redirect_to [@event, @picture], notice: 'picture was successfully updated.'
      else
       render action: 'edit'
      end
  end


  def destroy
    @event = Event.find(params[:event_id])
    @picture = @event.pictures.find(params[:id])
    @picture.destroy
    redirect_to event_pictures_path(@event)
  end

  private
    def picture_params
      params.require(:picture).permit(:name)
    end
end