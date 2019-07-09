require 'colorize'
require_relative 'cursor'
require_relative 'board'

class Display
    attr_reader :board
    attr_accessor :cursor

    def initialize(board)
        @board = board
        @cursor = Cursor.new(@board)
        
    end

    def render 
        # UPDATED RENDER   
        @board.rows.each_with_index do |row, i|
            puts
            # puts "----------------"
            row.each_with_index do |col, j|
                # tile coloring logic
                if (i+j).even?
                    bg = :white
                else
                    bg = :black
                end
                # cursor coloring logic
                if @cursor.cursor_pos == [i, j] && @cursor.selected == true
                    bg = :yellow
                elsif @cursor.cursor_pos == [i, j]
                    bg = :blue
                end
                color_set = { background: bg, color: :red }
                if j == 0
                    print "|" + "#{col.symbol}".colorize(color_set) + "|"
                    # "#{col.symbol}".colorize(:blue) 
                else
                    print "#{col.symbol}".colorize(color_set) + "|"
                end
            end
        end
        puts
    end

    def move
        result = nil
        until result == :ctrl_c
            system("clear")
            self.render
            puts "Please enter some input: "
            result = @cursor.get_input
        end
    end

end

board = Board.new    

display = Display.new(board)  
puts
board.populate    
# p board
puts                                                                                                                                                                                             
puts
display.render
# board.move_piece([6,0], [4,0])
# board.move_piece([7,1], [5,2])
# board.move_piece([6,3], [4,3])
# board.move_piece([7,2], [3,6])
puts
display.move
puts