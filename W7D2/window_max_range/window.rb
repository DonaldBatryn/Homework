


def windowed_max_range(array, win_size)
    max_range = 0
    (0..array.length - win_size).each do |i|
        subs = []
        subs += array[i...i + win_size]
        range = subs.max - subs.min
        if max_range < range
            max_range = range
        end
    end
    max_range
end










p windowed_max_range([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8