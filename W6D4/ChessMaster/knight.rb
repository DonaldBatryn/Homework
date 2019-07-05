require_relative 'piece'
require_relative 'stepable'

class Knight < Piece
    include Stepable

    def initialize(color, board, pos)
        super(color, board, pos)
    end

    def symbol
        if self.color == 'white'
            "\u2658"
        else
            "\u265E"
        end
    end

    protected
    def move_diffs
        # [2, 1] [1, 2] []
        # return delta x and delta y for every possible move        
        knight_moves =[
            [2, 1],
            [1, 2],
            [-2, 1],
            [-2, -1],
            [1, -2],
            [2, -1],
            [-1, -2],
            [-1, 2]
        ]
        knight_moves
    end

end