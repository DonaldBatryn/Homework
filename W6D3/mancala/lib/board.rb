class Board
  attr_accessor :cups
  attr_reader :name1, :name2

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, i|
      unless i == 6 || i == 13
        4.times { cup << :stone }
      end
    end
  end

  def valid_move?(start_pos)
    valid_positions = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]
    if !valid_positions.include?(start_pos)
      raise "Invalid starting cup" 
    end
    if @cups[start_pos].length == 0
      raise "Starting cup is empty"
    end
    
    
    true
  end

  def make_move(start_pos, current_player_name)
    current_player_name == "Erica" ? skip = 13 : skip = 6
    stones = Array.new(@cups[start_pos].count, :stone)
    @cups[start_pos] = []
    i = 0
    while !stones.empty?
      i += 1
      next if (start_pos + i) % 14 == skip
      @cups[(start_pos + i )% 14] << stones.shift
    end
    render
    next_turn((start_pos + i) % 14, current_player_name)
  end

  def next_turn(ending_cup_idx, current_player_name)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if @cups[ending_cup_idx].empty?
      return :switch
    elsif ending_cup_idx < 7
      if current_player_name == "Erica"
        return :prompt
      else
        return :switch
      end
    else
      if current_player_name == "Erica"
        return ending_cup_idx
      else
        return :prompt
      end
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?(&:empty?) || @cups[7..12].all?(&:empty?)
  
  end

  def winner
    player1 = @cups[6].count
    player2 = @cups[13].count
    if player1 == player2
      return :draw
    elsif player1 > player2
      return "Erica"
    else
      return "James"
    end
  end
end
