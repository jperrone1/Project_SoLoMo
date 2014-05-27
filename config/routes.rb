Rails.application.routes.draw do
  devise_for :users


  resources :pins

  resources :comments do
  	resources :comments
  end
  
	resources :posts do
    resources :comments
  end

  root 'pins#new'

  get '/posts/delete/:id' => 'posts#destroy'

end
