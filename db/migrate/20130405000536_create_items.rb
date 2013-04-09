class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.text :name
      t.text :attachment
      t.integer :price
      t.text :description

      t.timestamps
    end
  end
end
