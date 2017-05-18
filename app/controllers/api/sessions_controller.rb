class Api::SessionsController < ApplicationController

  # def new
  #   @user = User.new
  #   render :new
  # end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      signin(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      signout
      render 'api/users/show'
    else
      render json: ["Nobody signed in"]
    end
  end
end
