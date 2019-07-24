# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
   
    validates :title, uniqueness: {scope: :artist_id,
        message: "Artist must not have two artworks with the same title"  }

    has_many :artwork_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :ArtworkShares
        

    belongs_to :user,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer
end
