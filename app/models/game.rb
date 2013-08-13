class Game < ActiveRecord::Base
  has_many :rounds
  has_many :players, through: :rounds

  def self.random_code
    5.times.map { (rand(0..25) + 97).chr }.join
  end
  
end
