Rails.application.routes.draw do
  devise_for :users

  resources :pins

  resources :posts do
      resources :comments
  end

  root 'pins#new'

end
