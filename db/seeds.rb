puts '<----------------Starting Seeds------------------------->'

['user', 'admin'].each do |role|
  Role.create(name: role)
end

['Different', 'Cars', 'Books', 'Animals', 'Audio', 'Appliances'].each do |category|
  Category.create(name: category)
end

admin = User.new(email: 'admin@admin.com', password: '12345678')
admin.add_role 'admin'
admin.add_role 'user'
admin.save!

rand(10..20).times do

  user = User.new(email: Faker::Internet.email, password: '12345678')
  user.add_role 'user'
  user.save!

  rand(1..6).times do
    ad = Ad.new(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph(5), price: Faker::Commerce.price)
    puts 'bitch'
    rand(1..3).times do
      ad.category << Category.find(Category.ids.sample)
    end
    ad.save!
    user.ads << ad
  end

end
