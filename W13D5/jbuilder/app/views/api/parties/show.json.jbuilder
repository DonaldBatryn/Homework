json.extract! @party, :name, :location

# json.guests do
#     @party.guests.each do |guest|
#         json.extract! guest, :id, :name, :age, :favorite_color
#         # json.set! guest.id do
#         json.gifts do
#             guest.gifts.each do |gift|
#                 json.set! guest.id do
#                     json.extract! gift, :id, :title, :description
#                 end
#             end
#         end
#     end
# end

json.guests @party.guests.each do |guest|
    json.extract! guest, :id, :name, :age, :favorite_color
    # json.set! guest.id do
    json.gifts do
        guest.gifts.each_with_index do |gift, i|
            json.set! i do
                json.extract! gift, :id, :title, :description
            end
        end
    end
    
end