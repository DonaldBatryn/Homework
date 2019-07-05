require_relative 'piece'

class Pawn < Piece

    def initialize(color, board, pos)
        super(color, board, pos)
    end

    def symbol
        if color == 'white'
            "\u2659"
        else
            "\u265F"
        end
    end

    def move_dirs
        if color == "white"
            pawn_moves = [
                [-1, 0],
                [-2, 0],
                [-1, 1],
                [-1, -1]
            ]
        else
            pawn_moves = [
                [1, 0],
                [2, 0],
                [1, 1],
                [1, -1]
            ]
        end
        pawn_moves
    end
    
end