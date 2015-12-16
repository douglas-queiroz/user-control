Rails.application.routes.draw do
  root to: 'application#angular'

  scope "/admin" do
    resources :users do
	    member do
	    	put '/toggle_blocked' => 'users#toggle_blocked'
	    end
	end
  end
  
  devise_for :users, :controllers => {:registrations => "registrations"}
end
