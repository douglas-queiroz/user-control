Rails.application.routes.draw do
  root to: 'application#angular'
  
  get 'users/index'

  get 'users/show'

  devise_for :users
end
