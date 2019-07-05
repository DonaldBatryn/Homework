require_relative 'piece'
require_relative 'slideable'

class Bishop < Piece
    include Slideable

    def initialize(color, board, pos)
        super(color, board, pos)
    end

    def symbol
        if self.color == 'black'
            "\u265D"
        else
            "\u2657"
        end
    end


    protected
    def move_dirs
        bishop_moves = [
            [1,1],
            [2,2],
            [3,3],
            [4,4],
            [5,5],
            [6,6],
            [7,7],
            [-1,1],
            [-2,2],
            [-3,3],
            [-4,4],
            [-5,5],
            [-6,6],
            [-7,7],

            [1,-1],
            [2,-2],
            [3,-3],
            [4,-4],
            [5,-5],
            [6,-6],
            [7,-7],
            [-1,-1],
            [-2,-2],
            [-3,-3],
            [-4,-4],
            [-5,-5],
            [-6,-6],
            [-7,-7]
        ]
        bishop_moves
    end
    
end