require 'spec_helper'

describe "foods/edit" do
  before(:each) do
    @food = assign(:food, stub_model(Food,
      :order_id => 1,
      :title => "MyString",
      :number => 1,
      :cost => 1,
      :summary => 1,
      :delivered => 1
    ))
  end

  it "renders the edit food form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", food_path(@food), "post" do
      assert_select "input#food_order_id[name=?]", "food[order_id]"
      assert_select "input#food_title[name=?]", "food[title]"
      assert_select "input#food_number[name=?]", "food[number]"
      assert_select "input#food_cost[name=?]", "food[cost]"
      assert_select "input#food_summary[name=?]", "food[summary]"
      assert_select "input#food_delivered[name=?]", "food[delivered]"
    end
  end
end
