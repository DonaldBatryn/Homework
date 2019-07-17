# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShortenedURL < ApplicationRecord
    validates :long_url, uniqueness: true, presence: true

    def self.random_code
        code = nil
        until code && !ShortenedURL.exists?(short_url: code)
            code = SecureRandom::urlsafe_base64
        end
        code
    end
    #shrt_url.short_url = ShortenedURL.random_code

    def self.create_short_url(user, long_url)
        code = ShortenedURL.random_code
        ShortenedURL.create!(long_url: long_url, short_url: code, user_id: user.id)
    end

    belongs_to :submitter,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id



end
