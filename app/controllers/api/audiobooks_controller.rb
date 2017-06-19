class Api::AudiobooksController < ApplicationController

  def index
    @books = Audiobook.where({user_id: params[:user_id]})
  end

  def show
    @book = Audiobook.find(params[:id])
    render :show
  end

  def create
    @book = Audiobook.new(book_params)
    p book_params
    if @book.save!
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def destroy
    @book = Audiobook.find(params[:id])
    if @book.destroy
      render :show
    else
      render json: ["here is nothing to delete"]
    end
  end

  def edit
    debugger
    @book = Audiobook.find(params[:book][:id])
    render :show
  end

  def update
    @book = Audiobook.find(params[:id])
    if @book.update(book_params)
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def search
    if params[:query].present?
      @books = Audiobook.where("title ~ ?", params[:query])
      render :index
    else
      @books = Audiobook.none
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :user_id,
    :image_url, :description, :audio)
  end

end
