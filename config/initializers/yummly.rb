# config/initializers/yummly.rb
Yummly.configure do |config|
  config.app_id = ENV['APP_ID']
  config.app_key = ENV['APP_KEY']
  config.use_ssl = true # Default is false
end
