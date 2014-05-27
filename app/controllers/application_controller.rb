class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  protected

  # This method allows the new fields to be
  # added to the Devise User model. 
  def configure_permit
    devise_parameter_sanitizer.for(:sign_up).push(:first_name, :last_name, :city, :state, :zip, :home_phone, :mobile_phone, :latitude, :longitude)
  end

end
