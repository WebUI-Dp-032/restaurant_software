class AddPositionsToTables < ActiveRecord::Migration
  def change
    add_column :tables, :position_x, :integer
    add_column :tables, :position_y, :integer
  end
end
