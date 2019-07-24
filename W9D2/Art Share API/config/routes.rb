Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
  # get '/users/:id', to: 'users#show', as: 'user'

  # resources :users, only: [:index, :show, :create, :update, :delete]

  resources :users do
    resources :artworks, only: :index
  end

  resources :users, except: [:edit, :destroy]

  # resources :artworks, only: [:index, :show, :create, :update, :delete]
  resources :artworks, except: [:index, :edit, :destroy]
  resources :artwork_shares
end

# NewspapersApp::Application.routes.draw do
#   resources :magazines do
#     # provides a route to get all the articles for a given magazine.
#     resources :articles, only: :index
#   end

#   # provides all seven typical routes
#   resources :articles
# end