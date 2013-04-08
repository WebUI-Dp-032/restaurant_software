require 'spec_helper'

describe "foods/show" do
  before(:each) do
    @food = assign(:food, stub_model(Food,
      :order_id => 1,
      :title => "Title",
      :number => 2,
      :cost => 3,
      :summary => 4,
      :delivered => 5
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/Title/)
    rendered.should match(/2/)
    rendered.should match(/3/)
    rendered.should match(/4/)
    rendered.should match(/5/)
  end
end
