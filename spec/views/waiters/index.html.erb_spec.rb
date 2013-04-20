require 'spec_helper'

describe "waiters/index" do
  before(:each) do
    assign(:waiters, [
      stub_model(Waiter,
        :id => "Id",
        :integer => "Integer",
        :name => "Name",
        :login => "Login",
        :password => "Password"
      ),
      stub_model(Waiter,
        :id => "Id",
        :integer => "Integer",
        :name => "Name",
        :login => "Login",
        :password => "Password"
      )
    ])
  end

  it "renders a list of waiters" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Id".to_s, :count => 2
    assert_select "tr>td", :text => "Integer".to_s, :count => 2
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Login".to_s, :count => 2
    assert_select "tr>td", :text => "Password".to_s, :count => 2
  end
end
