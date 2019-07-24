class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)
  end

  private

  def cat_params
    valid = params.require(:cat).permit(:birthdate, :name, :color, :sex, :description)
    valid
  end

end
