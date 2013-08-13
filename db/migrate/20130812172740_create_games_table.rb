class CreateGamesTable < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :winner
      t.integer :loser
      t.integer :race_time
      t.string  :game_code
      t.timestamps
    end 
  end
end
