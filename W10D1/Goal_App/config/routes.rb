Rails.application.routes.draw do

  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
