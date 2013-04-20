class CreateWaiters < ActiveRecord::Migration
  def change
    create_table :waiters do |t|
      t.string :id
      t.string :integer
      t.string :name
      t.string :login
      t.string :password

      t.timestamps
    end
  end
end
