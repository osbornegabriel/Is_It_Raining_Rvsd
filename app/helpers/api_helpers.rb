require 'HTTParty'
require 'json'

helpers do
  # include HTTParty

  def weather_call(zipcode)
    route_address = "http://api.openweathermap.org/data/2.5/forecast?zip=#{zipcode},us&APPID=#{ENV['WEATHERMAP_API']}"
    response = HTTParty.get(route_address, format: :plain)
    parsed = JSON.parse(response, symbolize_names: true)
    weather_code = parsed[:list][0][:weather][0][:id]
    p weather_code
    p rain?(weather_code)
  end

  def rain?(forecast)
    # Thunderstorm codes are listed as 200s, drizzling 300s, and rain 500s
    # (There is no 400 id code)
    forecast >= 200 && forecast < 600
  end

end