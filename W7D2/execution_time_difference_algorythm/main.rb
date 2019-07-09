require "byebug"
def my_min(array) # O(n^2) - Quadratic
        lowest = array[0]

    (0...array.length).each do |i|
        (0...array.length).each do |j|
            if array[i] < array[j] && array[i] < lowest
                lowest = array[i]
            elsif array[i] > array[j] && array[j] < lowest
                lowest = array[j]
            end
        end
       
    end
    lowest
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

# p my_min(list)  # =>  -5

def my_min(array) # O(n) - Linear
    counter = array[0]

    (1...array.length).each do |i|
        if counter > array[i]
                counter = array[i]
        end
    end
    counter
end


def largest_contiguous_subsum(array) # O(n^2) - Quadratic
    sub_array = []

    (0...array.length - 1).each do |i|
        (i...array.length).each do |j|
                sub_array << array[i..j]
        end
    end
    counter = sub_array[0].sum

    (1...sub_array.length).each do |i|
        if counter < sub_array[i].sum
                counter = sub_array[i].sum
        end
    end
    counter
end


def largest_contiguous_subsum(array)
    i = 0
    j = 0
    largest_sum = 0
    while i < array.length
        if array[i..j].sum > largest_sum
            largest_sum = array[i..j].sum
        end
        i += 1
    end
        
end




list = [5, 3, -7]
# debugger
p largest_contiguous_subsum(list) # => 8

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])