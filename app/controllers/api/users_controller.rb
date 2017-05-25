class Api::UsersController < ApplicationController
  # def new
  #   render :new
  # end

  def show
    @user = User.find(params[:id])
    @user_id = @user.user_id
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
