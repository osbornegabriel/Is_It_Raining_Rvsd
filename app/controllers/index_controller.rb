get '/' do
  weather_call(20901)
  erb :'index'
end