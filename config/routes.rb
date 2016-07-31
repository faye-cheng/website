Rails.application.routes.draw do
  
  root 'static_pages#about'

  get '/about', to: 'static_pages#about'

  get '/resume', to: 'static_pages#resume'

  get '/press', to: 'static_pages#press'

  get '/projects', to: 'static_pages#projects'

  get '/designs', to: 'static_pages#designs'

  get '/leadership', to: 'static_pages#leadership'

  get '/hackathons', to: 'static_pages#hackathons'

  
end
