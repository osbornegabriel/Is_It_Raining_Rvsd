require 'HTTParty'

helpers do
  # include HTTParty

  def weather_call(zipcode)
    puts "Inside weather call"
    puts "HELLO #{ENV['WEATHERMAP_API']}"
    # response = HTTParty.get('http://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode.to_s + ",us&APPID={#{ENV['WEATHERMAP_ACCESS_KEY']}}")
    # puts response
  end

end