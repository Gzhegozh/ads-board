require "rails_helper"

RSpec.describe Api::AdsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/api/ads").to route_to("api/ads#index")
    end

    it "routes to #new" do
      expect(:get => "/api/ads/new").to route_to("api/ads#new")
    end

    it "routes to #show" do
      expect(:get => "/api/ads/1").to route_to("api/ads#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/api/ads/1/edit").to route_to("api/ads#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/api/ads").to route_to("api/ads#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/api/ads/1").to route_to("api/ads#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/api/ads/1").to route_to("api/ads#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/api/ads/1").to route_to("api/ads#destroy", :id => "1")
    end

  end
end
