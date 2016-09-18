puts '<----------------Starting Seeds------------------------->'

['user', 'admin'].each do |role|
  Role.create(name: role)
end

['Different', 'Cars', 'Books', 'Animals', 'Audio', 'Appliances'].each do |category|
  Category.create(name: category)
end

rand(10..20).times do

  user = User.new(email: Faker::Internet.email, name: Faker::Name.name, password: '12345678')
  user.add_role 'user'
  user.save!

  rand(1..6).times do
    ad = Ad.new(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph(5), price: Faker::Commerce.price)

    rand(1..3).times do
      category = Category.find(Category.ids.sample)
      if !(ad.category.include? category)
        ad.category << category
      end
    end

    ad.save!
    user.ads << ad
  end

end
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
puts 'Success!'
