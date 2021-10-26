Rails.application.routes.draw do
  get '/recipes/top5', to: 'recipes#top5'
  resources :comments, only: [:create, :destroy]
  resources :reviews, only: [:create, :update, :destroy]
  resources :recipes, only: [:index, :show]
  resources :users, only: [:create] 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
