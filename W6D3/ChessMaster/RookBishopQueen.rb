class Rook < Piece
    include Slideable

    def initialize
        super(color, board, pos)
    end

    def symbol

    end


    protected
    def move_diffs

    end
end

class Bishop < Piece
    include Slideable

    def initialize
        super(color, board, pos)
    end
    
    def symbol

    end


    protected
    def move_diffs

    end
end

class Queen < Piece
    include Slideable

    def initialize
        super(color, board, pos)
    end
    
    def symbol

    end


    protected
    def move_diffs

    end
end