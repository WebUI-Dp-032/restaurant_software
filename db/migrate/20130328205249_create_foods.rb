class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.integer :order_id
      t.string :title
      t.integer :number
      t.integer :cost
      t.integer :summary
      t.integer :delivered

      t.timestamps
    end
  end
end
