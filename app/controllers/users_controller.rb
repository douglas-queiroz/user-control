class UsersController < ApplicationController
  def index
  	respond_with User.all
  end

  def show
  	responde_with User.find(params[:id])
  end

  def create
  	user = User.new(user_params)
  	respond_with User.create(:name=> user.name, :email => user.email, :sex => user.sex, :birth_date => user.birth_date, :password => 'password', :password_confirmation => 'password')
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :sex, :birth_date, :password, :password_confirmation)
  end
end
