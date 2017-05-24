class Api::FriendsController < ApplicationController
  def show
    @friendship = Friend.find(params[:id])
    render :show
  end

  def create
    @friendship = Friend.new(friendship_params)
    if @friendship.save
      render :show
    end
  end

  def destroy
    @friendship = Friend.find(params[:id])
    if @friendship.destroy
      render :show
    else
      render json: ["You are not friends"], status: 422
    end
  end

  def index
    @user = User.find(params[:user_id])
    @friends = @user.friends
    debugger
    render :index
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
