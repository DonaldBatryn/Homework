module Slideable

    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def moves
        # gets all possible moves a piece can make
        # an array of valid moves
    end

    private

    HORIZONTAL_DIRS = [
        [1, 0], 
        [0, 1], 
        [0, -1], 
        [-1, 0] 
    ]
    
    DIAGONAL_DIRS = [ 
        [1, 1], 
        [-1,-1], 
        [-1, 1],  # [7, 2]  => [3, 6]
        [1, -1] 
    ]
    
    def move_dirs
        # overwritten by subclass
    end

    def grow_unblocked_moves_in_dir(dx, dy)
        # will check to see if move is blocked
    end

end