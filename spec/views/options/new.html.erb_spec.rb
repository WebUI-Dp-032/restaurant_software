require 'spec_helper'

describe "options/new" do
  before(:each) do
    assign(:option, stub_model(Option,
      :key => "MyString",
      :value => "MyString"
    ).as_new_record)
  end

  it "renders new option form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", options_path, "post" do
      assert_select "input#option_key[name=?]", "option[key]"
      assert_select "input#option_value[name=?]", "option[value]"
    end
  end
end
