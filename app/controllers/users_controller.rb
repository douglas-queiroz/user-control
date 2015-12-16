class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :toggle_blocked]

  def index
  	respond_with User.all
  end

  def show
  	respond_with @user
  end

  def create
  	user = User.new(user_params)
  	respond_with User.create(:name=> user.name, :email => user.email, :sex => user.sex, :birth_date => user.birth_date, :password => 'password', :password_confirmation => 'password')
  end

  def update
    respond_with @user.update(user_params)
  end

  def destroy
    respond_with @user.destroy
  end

  def toggle_blocked
    @user.is_blocked = !@user.is_blocked

    respond_with @user.save
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :sex, :birth_date, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
