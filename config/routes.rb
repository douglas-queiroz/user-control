Rails.application.routes.draw do
  root to: 'application#angular'

  resources :users, only: [:index, :show]

  devise_for :users
end
