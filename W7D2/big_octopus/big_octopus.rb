require "byebug"
require "set"

def sluggish_octopush(array) #O(n^2)
    current_longest = 0
    (0...array.length - 1).each do |i|
        (i+1...array.length).each do |j|
            if array[i].length > array[j].length
                current_longest = array[i]
            else
                current_longest = array[j]
            end
        end
    end 
    current_longest
end

def dominant_octopus(array) #quicksort, O(nlogn)
    return array if array.length <= 1
    pivot = array.first

    left = array.drop(1).select {|ele| ele.length < pivot.length }
    right = array.drop(1).select {|ele| ele.length >= pivot.length }
    debugger
    sorted_left = dominant_octopus(left)
    sorted_right = dominant_octopus(right)
    (sorted_left + [pivot] + sorted_right).last

end

def clever_octopus(array)
    array.inject do |acc, ele| 
        if acc.length > ele.length
            acc
        else
            ele
        end
    end
end

def slow_dance(dir, array) #O(n)
    array.index(dir)
end

def constant_dance!(dir, hash)
    hash[dir]
end


tiles_array = ["up", "right-up", "right", 
                "right-down", "down", "left-down",
                 "left",  "left-up" ]

new_tiles = {"up" => 0, "right-up" => 1, "right" => 2, 
                "right-down" => 3, "down" => 4, "left-down" => 5,
                 "left" => 6, "left-up" => 7}

# fish_array = ['fish', 'fiiish', 'fiiiiish',
#              'fiiiish', 'fffish', 'ffiiiiisshh', 
#              'fsh', 'fiiiissshhhhhh']

# p sluggish_octopush(fish_array)
# p dominant_octopus(fish_array)
# p clever_octopus(fish_array)
# p slow_dance("right-down", tiles_array)
# p constant_dance!("right-down", new_tiles)
