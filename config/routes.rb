Rails.application.routes.draw do
  devise_for :users

  resources :comments do
  	resources :comments
  end

	resources :posts do
    resources :comments
  end

  root 'posts#index'

end
