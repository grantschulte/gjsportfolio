class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  USERS = { "grant" => "mememe" }

  before_filter :authenticate

  def authenticate
    authenticate_or_request_with_http_digest("Application") do |name|
      USERS["grant"]
    end
  end
end
