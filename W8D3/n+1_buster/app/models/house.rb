class House < ApplicationRecord
  has_many :gardeners,
    class_name: 'Gardener',
    foreign_key: :house_id,
    primary_key: :id

  has_many :plants,
    through: :gardeners,
    source: :plants

  def n_plus_one_seeds
    plants = self.plants
    seeds = []
    plants.each do |plant|
      seeds << plant.seeds
    end

    seeds
  end

  def better_seeds_query
    # TODO: your code here
    plants = self
      .gardeners
      .plants
      .select('plants.*, COUNT(*) AS num_seeds')
      .joins(:seeds)
      .group('gardener.id')

      seeds_count = {}
      plants.each do |plant|
        seeds_count[plant.name] = plant.seeds.length 
      end 

      seeds_count
  end
end
