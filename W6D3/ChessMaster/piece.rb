require_relative 'pawn.rb'
require_relative 'KnightKing.rb'
require_relative 'RookBishopQueen.rb'


class Piece

    def initialize(color, board, pos)
        @color = color # symbol
        @board = board  # Board.new
        @pos = pos # Array
    end

    def moves
        # returns array of places a piece can move to
    end

    def to_s

    end

    def empty?

    end

    def valid_moves

    end

    def pos=(val)

    end

    def symbol
    end   

    private

    def move_into_check?(end_pos)
    end

end

class NullPiece < Piece
    include Singleton
    
    def initialize
        super(color, board, pos)
    end

    def moves
    end

    def symbol
    end

end