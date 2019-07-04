class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize(sequence_length = 1)
    @sequence_length = sequence_length  
    @game_over = false
    @seq = []
  end

  def play
    system("clear")
    puts "~~~~SIMON~~~~"
    puts "Remember the sequence!"
    sleep(2)
    system("clear")
    until @game_over 
      self.take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    system("clear")
    show_sequence
    sleep(1)
    system("clear")
    require_sequence
    if !@game_over
      round_success_message
      # self.add_random_color
      self.sequence_length += 1

    end
  end

  def show_sequence
    add_random_color
    
    i = 0
    while i < @seq.length
      puts "#{@seq[i]}"
      sleep(0.5)
      system("clear")
      i += 1
      sleep(0.5)
    end
    
    
  end

  def require_sequence
    puts "Repeat the sequence!: "
    # system("clear")
    i = 0
    while i < @seq.length
      guess = gets.chomp
      @game_over = true if guess != @seq[i]
      i += 1
    end
    
  end

  def add_random_color
    @seq << COLORS.sample

  end

  def round_success_message
    system("clear")
    puts "Good job! Ready for more?"
    sleep(1.5)
  end

  def game_over_message
    puts "You lose!"
  end

  def reset_game
    @seq = []
    @sequence_length = 1
    @game_over = false
  end
end

if __FILE__ == $PROGRAM_NAME
  game = Simon.new()
  game.play
end