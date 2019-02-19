post '/forecasts' do
  p params
  zipcode = params[:zipcode]
  if request.xhr?
    weather_call(zipcode)
  else
    redirect "/forecasts"
  end
end