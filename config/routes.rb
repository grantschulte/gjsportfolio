Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'static#home'

  get '/projects' => 'projects#index', as: 'projects_index'
  get '/projects/:id' => 'projects#show', as: 'projects_show'

  get '/posts' => 'posts#index', as: 'posts_index'
  get '/posts/:id' => 'posts#show', as: 'posts_show'
end
