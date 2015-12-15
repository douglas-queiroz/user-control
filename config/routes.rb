Rails.application.routes.draw do
  root to: 'application#angular'

  scope "/admin" do
    resources :users
  end
  
  devise_for :users, :controllers => {:registrations => "registrations"}
end
