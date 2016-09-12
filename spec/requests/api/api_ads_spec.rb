require 'rails_helper'

RSpec.describe "Api::Ads", type: :request do
  describe "GET /api_ads" do
    it "works! (now write some real specs)" do
      get api_ads_path
      expect(response).to have_http_status(200)
    end
  end
end
