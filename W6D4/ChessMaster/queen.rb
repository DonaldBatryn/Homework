require_relative 'piece'
require_relative 'slideable'

class Queen < Piece
    include Slideable

    def initialize(color, board, pos)
        super(color, board, pos)
    end

    def symbol
        if self.color == 'white'
            "\u2655"
        else
            "\u265B"
        end
    end


    protected
    def move_dirs
        # diagonal moves
        [
        [1,1],[2,2],[3,3],[4,4],[5,5],
        [6,6],[7,7],[-1,1],[-2,2],[-3,3],
        [-4,4],[-5,5],[-6,6],[-7,7],[1,-1],
        [2,-2],[3,-3],[4,-4],[5,-5],[6,-6],
        [7,-7],[-1,-1],[-2,-2],[-3,-3],[-4,-4],
        [-5,-5],[-6,-6],[-7,-7],        
        
        # horizontal_moves
        [0, 1],[0, 2],[0, 3],[0, 4],[0, 5],
        [0, 6],[0, 7],[0, -1],[0, -2],[0, -3],
        [0, -4],[0, -5],[0, -6],[0, -7],[1, 0],
        [2, 0],[3, 0],[4, 0],[5, 0],[6, 0],
        [7, 0],[-1, 0],[-2, 0],[-3, 0],[-4, 0],
        [-5, 0],[-6, 0],[-7, 0]
        ]
    end
    
end