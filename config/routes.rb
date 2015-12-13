Rails.application.routes.draw do
  root to: 'application#angular'

  scope "/admin" do
    resources :users, only: [:index, :show, :create, :update]
  end
  
  devise_for :users, :controllers => {:registrations => "registrations"}
end
