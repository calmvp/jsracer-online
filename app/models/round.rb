class Round < ActiveRecord::Base
  belongs_to :player
  belongs_to :game

  def self.random_code
    5.times.map { (rand(0..25) + 97).chr }.join
  end

end
