# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'spec_helper'
require 'rails_helper'
system("rails db:setup")


RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
    
  #   it do
  #     should have_many(:acquaintances).
  #       through(:friends).
  #       class_name('Person')
  #   end
  # end



  describe "::find_by_credentials" do
    user = User.create(email: "tommy@mail.com", password: "hunter2")
      it "finds user with matching email" do
        expect(User.find_by_credentials("tommy@mail.com", "hunter2")).to eq(user)
      end
    end
    
  describe "#is_password?" do
    let(:user) {create(:user)}   
    it "checks if password of user matches given password" do
      expect(user.is_password?( "hunter2" ) ).to be(true)
    end
  end

end



# self.find_by_credentials

# reset_session_token!

# password=(password)

# is_password?

#ensure_session_token

#has_many links
#has_many comments

#validates email/passworddigest/sessiontoken, presence
#validates password, length min 6, allow nil
