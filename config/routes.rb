Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # Static
  root 'static#home'
  get '/about' => 'static#about'

  # Projects
  resources :projects

  # Posts
  get '/posts'     => 'posts#index', as: 'posts_index'
  get '/posts/:id' => 'posts#show', as: 'posts_show'

  # Sessions
  get '/login'  => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  # Users
  get '/signup' => 'users#new'
  post '/users' => 'users#create'
end
