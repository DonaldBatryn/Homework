Rails.application.routes.draw do


  # get 'cats/index'
  # get 'cats/show'

  resources :cats, only: [:index, :show]
end



# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html