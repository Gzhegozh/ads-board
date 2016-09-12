require 'rails_helper'

RSpec.describe "api/ads/show", type: :view do
  before(:each) do
    @api_ad = assign(:api_ad, Ad.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
