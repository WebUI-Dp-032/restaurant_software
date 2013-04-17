require "spec_helper"

describe WaitersController do
  describe "routing" do

    it "routes to #index" do
      get("/waiters").should route_to("waiters#index")
    end

    it "routes to #new" do
      get("/waiters/new").should route_to("waiters#new")
    end

    it "routes to #show" do
      get("/waiters/1").should route_to("waiters#show", :id => "1")
    end

    it "routes to #edit" do
      get("/waiters/1/edit").should route_to("waiters#edit", :id => "1")
    end

    it "routes to #create" do
      post("/waiters").should route_to("waiters#create")
    end

    it "routes to #update" do
      put("/waiters/1").should route_to("waiters#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/waiters/1").should route_to("waiters#destroy", :id => "1")
    end

  end
end
