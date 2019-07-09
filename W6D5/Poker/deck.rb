require_relative "card"

class Deck
    def self.all_cards
        cards = []
        Card.suits.each do |suit|
            Card.values.each do |val|
                cards << Card.new(suit, val)
            end
        end
        cards.shuffle!
    end
    attr_reader :cards
    def initialize(cards = Deck.all_cards)
        @cards = cards
    end

    def take(n)
        new_cards = @cards.take(n)
        @cards = @cards.drop(n)
        new_cards
  
    end

    def return(cards)
        @cards += cards
    end



    def swap_cards(cards)
        self.return(cards)
        new_cards = take(cards.length)
        new_cards
    end
end
# deck = Deck.new
# deck.cards.each {|card| p "#{card.value} of #{card.suit}"}
