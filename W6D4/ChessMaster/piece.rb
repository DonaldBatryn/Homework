
class Piece
    attr_reader :color

    def initialize(color, board, pos)
        @color = color # symbol
        @board = board  # Board.new
        @pos = pos # Array
    end

    def to_s
        self.color.to_s
    end

    def empty?

    end

    def valid_moves

    end

    def pos=(val)

    end

    def symbol
        self.color.to_s
    end   

    private

    def move_into_check?(end_pos)
    end

end