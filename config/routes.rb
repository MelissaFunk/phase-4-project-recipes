Rails.application.routes.draw do
  get '/recipes/top5', to: 'recipes#top5' # HOME
  resources :comments, only: [:create, :destroy] # DETAILS
  resources :reviews, only: [:create, :update, :destroy] # DETAILS
  resources :recipes, only: [:index, :show] # DISCOVER/CARD/DETAILS 
  resources :users, only: [:create] # LOGIN
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html 
end
