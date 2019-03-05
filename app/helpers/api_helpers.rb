require 'httparty'
require 'json'

helpers do
  # include HTTParty

  def zip_weather_call(zipcode)
    route_address = "http://api.openweathermap.org/data/2.5/weather?zip=#{zipcode},us&APPID=#{ENV['WEATHERMAP_API']}"
    weather_call(route_address)
  end

  def gps_weather_call(longitude,latitude)
    route_address = "http://api.openweathermap.org/data/2.5/weather?lat=#{latitude}&lon=#{longitude}&APPID=#{ENV['WEATHERMAP_API']}"
    weather_call(route_address)
  end

  def weather_call(route_address)
    response = HTTParty.get(route_address, format: :plain)
    parsed = JSON.parse(response, symbolize_names: true)
    weather_code = parsed[:weather][0][:id]
    rain?(weather_code)
  end

  def rain?(forecast)
    # Thunderstorm codes are listed as 200s, drizzling 300s, and rain 500s
    # (There is no 400 id code)
    forecast >= 200 && forecast < 600
  end

end