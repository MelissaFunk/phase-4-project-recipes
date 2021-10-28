Rails.application.routes.draw do
  get '/recipes/top5', to: 'recipes#top5' # HOME
  resources :comments, only: [:create, :destroy] # DETAILS
  resources :reviews, only: [:create, :update, :destroy] # DETAILS
  resources :recipes, only: [:index, :show] # DISCOVER/DETAILS

  resources :users, only: [:create] # SIGNUP
  post '/login', to: 'sessions#create' # LOGIN
  get '/auth', to: 'users#show' # AUTHORIZE LOGIN -- ??
  delete '/logout', to: 'sessions#destroy' # LOGOUT

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html 
end
