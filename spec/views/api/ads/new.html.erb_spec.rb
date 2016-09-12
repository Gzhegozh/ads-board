require 'rails_helper'

RSpec.describe "api/ads/new", type: :view do
  before(:each) do
    assign(:api_ad, Ad.new())
  end

  it "renders new api_ad form" do
    render

    assert_select "form[action=?][method=?]", ads_path, "post" do
    end
  end
end
