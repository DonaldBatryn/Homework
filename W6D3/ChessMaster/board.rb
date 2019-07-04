require_relative 'piece.rb'

class Board
    attr_reader :rows
    
    def self.populate
        
    end
    
    def initialize
        @rows = Array.new(8) { Array.new(8, [" "]) }

    end

    def [](pos)
        row, col = pos
        @rows[row][col]
    end

    def []=(pos, value)
        row, col = pos
        @rows[row][col] = value
    end

    # def move_piece(color, start_pos, end_pos)
        
    # end
    def move_piece(start_pos, end_pos)
        #update 2D grid && move piece's position
        raise "There is no piece at start position" if start_pos == nil
        raise "Piece cannot move to end position" if end_pos != nil
    end


    def valid_pos(pos)
        # check if pos is in range of board
        # check if space occupied
    end

    def add_piece(piece, pos)
        # helper to place piece at designated pos
    end

    def checkmate?(color)

    end

    def in_check?(color)

    end

    def find_king(color)
    end

    def pieces
    end

    def dup
    end

    def move_piece!(color, start_pos, end_pos)
    end


end

board = Board.new                                                                                                                                                                                                         

# p board.grid.each do |row|
#     puts row
#     puts "\n"
# end
