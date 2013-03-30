class AddTotalToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :total, :integer
  end
end
