require "spec_helper"

describe OptionsController do
  describe "routing" do

    it "routes to #index" do
      get("/options").should route_to("options#index")
    end

    it "routes to #new" do
      get("/options/new").should route_to("options#new")
    end

    it "routes to #show" do
      get("/options/1").should route_to("options#show", :id => "1")
    end

    it "routes to #edit" do
      get("/options/1/edit").should route_to("options#edit", :id => "1")
    end

    it "routes to #create" do
      post("/options").should route_to("options#create")
    end

    it "routes to #update" do
      put("/options/1").should route_to("options#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/options/1").should route_to("options#destroy", :id => "1")
    end

  end
end
