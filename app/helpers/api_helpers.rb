require 'HTTParty'
require 'json'

helpers do
  # include HTTParty

  def weather_call(zipcode)
    route_address = "http://api.openweathermap.org/data/2.5/forecast?zip=#{zipcode},us&APPID=#{ENV['WEATHERMAP_API']}"
    p "Inside weather call"
    response = HTTParty.get(route_address, format: :plain)
    parsed = JSON.parse(response, symbolize_names: true)
    description = parsed[:list][0][:weather][0][:description]
    p description
  end

end