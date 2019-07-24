# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birthdate   :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord

    validates :birthdate, :name, :color, :sex, :description, presence: true 

    def age
        Date.today.year - birthdate.year
    end
end
