class Visit < ApplicationRecord
    validates :visitor_id, presence:true
    validates :visited_url_id, presence:true

    def self.record_visit!(user, shortened_url)
        Visit.create!(visitor_id: user.id, visited_url_id: shortened_url.id)
    end
end