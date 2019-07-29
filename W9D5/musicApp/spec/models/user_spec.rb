require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

    subject(:user) do
    FactoryBot.build(:user,
      email: "jonathan@fakesite.com",
      password: "good_password")
    end

    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }

    describe "is_password?" do 

      it "var password is correct" do 
        expect(user.is_password?("good_password")).to be true
      end
      it "var password is not correct" do 
        expect(user.is_password?("bad_password")).to be false
      end


    end
end
