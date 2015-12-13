class AddDetailsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :sex, :integer
    add_column :users, :birth_date, :date
    add_column :users, :is_blocked, :boolean, default: false
  end
end
