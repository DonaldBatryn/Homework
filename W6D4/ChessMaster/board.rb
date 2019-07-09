
require_relative 'pawn'
require_relative 'queen'
require_relative 'king'
require_relative 'knight'
require_relative 'rook'
require_relative 'bishop'
require_relative 'null_piece'

class Board
    attr_reader :rows
    
    def populate
        # fill in the pawns
        (0..7).each do |i|
            self[[1, i]] = Pawn.new("black", @board, [1, i])
        end
        (0..7).each do |i|
            self[[6, i]] = Pawn.new("white", @board, [1, i])
        end
        # fill in black pieces (top)
        self[[0,0]] = Rook.new('black', @board, [0,0])
        self[[0,7]] = Rook.new('black', @board, [0,7])
        self[[0,1]] = Knight.new("black", @board, [0,1]) 
        self[[0,6]] = Knight.new("black", @board, [0,6])
        self[[0,2]] = Bishop.new("black", @board, [0,2] )
        self[[0,5]] = Bishop.new("black", @board, [0,5])
        self[[0,3]] = Queen.new("black", @board, [0,3])
        self[[0,4]] = King.new("black", @board, [0,4]) 

        # fill in white pieces
        self[[7,0]] = Rook.new('white', @board, [7,0])
        self[[7,7]] = Rook.new('white', @board, [7,7])
        self[[7,1]] = Knight.new('white', @board, [7,1])
        self[[7,6]] = Knight.new('white', @board, [7,6])
        self[[7,2]] = Bishop.new('white', @board, [7,2])
        self[[7,5]] = Bishop.new('white', @board, [7,5])
        self[[7,3]] = Queen.new('white', @board, [7,3])
        self[[7,4]] = King.new('white', @board, [7,4])
    end
    
    def initialize
        @rows = Array.new(8) { Array.new(8) {NullPiece.instance}} #{Piece.new('black', @board, [0,0])} }

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
        initial_piece = self[start_pos]
        ending_piece = self[end_pos]

        self[end_pos] = initial_piece
        self[start_pos] = NullPiece.instance

        raise "There is no piece at start position" if start_pos == NullPiece.instance
        # Limits board possibilities to within 0..7
        raise "Piece cannot move to end position" if !valid_pos(end_pos)
    end


    def valid_pos?(pos)
        # check if pos is in range of board
        pos[0].between?(0, 7) && pos[1].between?(0, 7)
    end

    def add_piece(piece, pos)
        # helper to place piece at designated pos
    end

    def checkmate?(color)

    end

    def in_check?(color)
        self.find_king(color)
        
    end

    def find_king(color)
        king = @rows.flatten.find {|piece| piece.is_a?(King) && piece.color == color}
        king.pos
    end

    def pieces
    end

    def dup
    end

    def move_piece!(color, start_pos, end_pos)
    end

    


end

board = Board.new      
board.populate    
p board.find_king("white")

