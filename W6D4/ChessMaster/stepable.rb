module Stepable

    def moves
    [
        # King Moves
        [1, 0], 
        [0, 1], 
        [0, -1], 
        [-1, 0],
        [1, 1], 
        [-1,-1], 
        [-1, 1], 
        [1, -1],
        # Knight Moves
        [2, 1],
        [1, 2],
        [-2, 1],
        [-2, -1],
        [1, -2],
        [2, -1],
        [-1, -2],
        [-1, 2]
    ] 
    end

    private
    def move_diffs(dir)

    end

end