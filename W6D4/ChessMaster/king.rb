require_relative 'piece'
require_relative 'stepable'

class King < Piece
    include Stepable

    def initialize(color, board, pos)
        super(color, board, pos)
    end

    def symbol
        if self.color == 'white'
            "\u2654"
        else
            "\u265A"
        end
    end

    protected
    def move_diffs
        king_moves =[
            [1, 0], 
            [0, 1], 
            [0, -1], 
            [-1, 0],
            [1, 1], 
            [-1,-1], 
            [-1, 1], 
            [1, -1]
        ]
        king_moves
    end

end