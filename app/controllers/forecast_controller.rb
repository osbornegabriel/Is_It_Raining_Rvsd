post '/forecasts' do
  zipcode = params[:address][:zip]
  rain_status = weather_call(zipcode)
  if request.xhr?
    return rain_status.to_s
    # Should forecasts expansion occur:
    # erb :"forecasts/_forecast", layout: false, locals: {pic_route: @pic_route}
  else
    # redirect "/forecasts"
  end
end