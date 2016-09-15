json.extract! @ad, :id, :title, :body, :price, :status, :created_at, :updated_at
json.user @ad.user
json.categories @ad.category
