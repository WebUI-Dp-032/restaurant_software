require 'spec_helper'

describe "waiters/show" do
  before(:each) do
    @waiter = assign(:waiter, stub_model(Waiter,
      :id => "Id",
      :integer => "Integer",
      :name => "Name",
      :login => "Login",
      :password => "Password"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Id/)
    rendered.should match(/Integer/)
    rendered.should match(/Name/)
    rendered.should match(/Login/)
    rendered.should match(/Password/)
  end
end
