Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :audiobooks do
       get "search", on: :collection
    end
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
