require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :children
  attr_accessor :prev_move_pos, :next_mover_mark
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
    @children = []
  end

  def losing_node?(evaluator)
    if evaluator == :o
      mark = :x
    else
      mark = :o
    end

    children.each do |child|
      arr = child.board.rows.flatten
      transpose = child.board.rows.transpose.flatten
      for i in 0..2
        if arr[i*3..i*3 + 2].uniq.length == 1 && arr[i*3] == evaluator
          return p "someone is winning"
        elsif transpose[i*3..i*3 + 2].uniq.length == 1 && transpose[i*3] == evaluator
          return p "someone is winning"
        end
      end

      diag1 = arr[0] + arr[5] + arr[8]
      diag2 = arr[2] + arr[5] + arr[6]
      if diag1.uniq.length == 1 && diag1[0] == evaluator
        return p "someone is winning"
      else diag2.uniq.length == 1 && diag1[0] == evaluator
        return p "someone is winning"
      end
    
    end
    p "someone is losing"
  end

  def winning_node?(evaluator)
    true
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    (0..2).each do |row|
      (0..2).each do |col|
        child = TicTacToeNode.new(@board.dup , @next_mover_mark, prev_move_pos)
        if child.board.rows[row][col] == nil
          if @next_mover_mark == :o
            child.next_mover_mark = :x
          else
            child.next_mover_mark = :o
          end
          child.prev_move_pos = [row, col]
          @children << child
          next
        end
      end

    end
    @children
  end
end

# For each empty position, create a node by duping the board and putting a next_mover_mark in the position. You'll want to alternate next_mover_mark so that next time the other player gets to move. Also, set prev_move_pos to the position you just marked, for reasons that will make sense when we use it later.



# 0 0 0
# 0 0 0
# 0 0 0

# X O 0
# 0 0 0
# 0 0 0

# X 0 O
# 0 0 0
# 0 0 0