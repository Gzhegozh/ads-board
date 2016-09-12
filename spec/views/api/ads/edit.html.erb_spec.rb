require 'rails_helper'

RSpec.describe "api/ads/edit", type: :view do
  before(:each) do
    @api_ad = assign(:api_ad, Ad.create!())
  end

  it "renders the edit api_ad form" do
    render

    assert_select "form[action=?][method=?]", api_ad_path(@api_ad), "post" do
    end
  end
end
