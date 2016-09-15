json.array!(@ads) do |ad|
  json.extract! ad, :id, :title, :body, :price, :created_at, :updated_at
  json.user ad.user
  json.categories ad.category
end
