json.array!(@ads) do |ad|
  json.extract! ad, :id, :title, :body, :created_at, :updated_at
end