
module Slideable

    def horizontal_dirs
    end

    def diagonal_dirs
    end

    def moves
    end

    private

    HORIZONTAL_DIRS = [] 
    DIAGONAL_DIRS = [] # array of arrays like [1, 1], [-1, -1] etc
    
    def move_dirs
        # overwritten by subclass
    end

    def grow_unblocked_moves_in_dir(dx, dy)
    end

end

module Stepable

    def moves

    end

    private
    def move_diffs(dir)

    end

end