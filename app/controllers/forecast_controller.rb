post '/forecasts' do
  zipcode = params[:address][:zip]
  longitude = params[:address][:longitude]
  latitude = params[:address][:latitude]
  rain_status = zipcode ? weather_call(zipcode) : weather_call(longitude, latitude)
  if request.xhr?
    return rain_status.to_s
    # Should forecasts expansion occur:
    # erb :"forecasts/_forecast", layout: false, locals: {pic_route: @pic_route}
  else
    # redirect "/forecasts"
  end
end