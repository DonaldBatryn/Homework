require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content "New User"
  end
  
  feature 'signing up a user' do
    before(:each) do 
        visit new_user_url
        fill_in 'Email', :with => "j@j.com"
        fill_in 'Password', :with => "jonathan"
        click_on "Sign Up" 
    end
    scenario 'shows username on the homepage after signup' do
        expect(page).to have_content "YOU SADLY MADE A PAGE"
    end
  end
end

feature 'logging in' do
    visit new_session_url
    fill_in 'Email', :with => 'j@j.com'
    fill_in 'Password', :with => "jonathan"
    click_on "Sign In"
  scenario 'shows username on the homepage after login' do
    expect(page).to have_content "YOU LOGGED IN"
  end

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end