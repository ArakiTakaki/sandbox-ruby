Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:3030"

    resource "localhost:3030",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      expose: ['Per-Page', 'Total', 'Link']
  end
end