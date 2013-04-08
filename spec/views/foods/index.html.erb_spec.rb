require 'spec_helper'

describe "foods/index" do
  before(:each) do
    assign(:foods, [
      stub_model(Food,
        :order_id => 1,
        :title => "Title",
        :number => 2,
        :cost => 3,
        :summary => 4,
        :delivered => 5
      ),
      stub_model(Food,
        :order_id => 1,
        :title => "Title",
        :number => 2,
        :cost => 3,
        :summary => 4,
        :delivered => 5
      )
    ])
  end

  it "renders a list of foods" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
    assert_select "tr>td", :text => 5.to_s, :count => 2
  end
end
