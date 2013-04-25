class AddFieldsToTables < ActiveRecord::Migration
  def change
    add_column :tables, :description, :string
    add_column :tables, :capacity, :integer
    add_column :tables, :form, :string
  end
end
