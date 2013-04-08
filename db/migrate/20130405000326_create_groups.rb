class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.text :name

      t.timestamps
    end
  end
end
