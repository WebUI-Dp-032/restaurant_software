require 'spec_helper'

describe "waiters/new" do
  before(:each) do
    assign(:waiter, stub_model(Waiter,
      :id => "MyString",
      :integer => "MyString",
      :name => "MyString",
      :login => "MyString",
      :password => "MyString"
    ).as_new_record)
  end

  it "renders new waiter form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", waiters_path, "post" do
      assert_select "input#waiter_id[name=?]", "waiter[id]"
      assert_select "input#waiter_integer[name=?]", "waiter[integer]"
      assert_select "input#waiter_name[name=?]", "waiter[name]"
      assert_select "input#waiter_login[name=?]", "waiter[login]"
      assert_select "input#waiter_password[name=?]", "waiter[password]"
    end
  end
end
