class Hand

    HANDS = {
        # one_pair: 1,
        # two_pair: 2,
        # three_of_kind: 3,
        # straight: 4,
        # flush: 5,
        # full_house: 6,
        # four_of_kind:, 7,
        # straight_flush:, 8,
        # royal_flush: 10
    
    }

    def self.deal_from_deck(deck)
        hand = deck.take(5)
        self.new(hand)
    end

    def initialize(cards)
        @cards = cards
    end

    def rank
        # hand_hash = Hash.new(0)
        # @cards.each do |card|
        #     hand_hash[card.value] += 1
        # end
        # hand_hash.values.count(2)
        # hand_hash.values.count(3)
        # hand_hash.values.count(4)
        # hand_hash.values.count
      

    end

    def straight?
        #check if sequential
        @cards[-1].value - @cards[0].value
    end

    def flush?
        @cards.all? {|card| card.suit == :heart} ||
        @cards.all? {|card| card.suit == :club} ||
        @cards.all? {|card| card.suit == :spade} ||
        @cards.all? {|card| card.suit == :diamond} 
    end



    def beats?(other_hand)

    end


    def return_cards(deck)

    end

end