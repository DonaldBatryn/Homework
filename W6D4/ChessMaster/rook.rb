require_relative 'piece'
require_relative 'slideable'

class Rook < Piece
    include Slideable

    def initialize(color, board, pos)
        super(color, board, pos)
    end

    def symbol
        if self.color == "white"
            "\u2656"
        else
            "\u265C"
        end
    end


    protected
    def move_dirs
        rook_moves = [
            [0, 1],[0, 2],[0, 3],[0, 4],[0, 5],
            [0, 6],[0, 7],[0, -1],[0, -2],[0, -3],
            [0, -4],[0, -5],[0, -6],[0, -7],[1, 0],
            [2, 0],[3, 0],[4, 0],[5, 0],[6, 0],[7, 0],
            [-1, 0],[-2, 0],[-3, 0],[-4, 0],[-5, 0],
            [-6, 0],[-7, 0]
        ]
    end
    
end