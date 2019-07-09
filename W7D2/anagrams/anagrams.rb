



def first_anagram?(str1, str2) # Both: O(n!) -(bad) factorial
    letters1 = str1.split("")
    # letters2 = str2.split("")
    anagrams = letters1.permutation.to_a
    sets = anagrams.map {|ele| ele.join("")}
    sets.include?(str2)
end




# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true



def second_anagram?(str1, str2) #Time: O(n^2) Space: #O(n)
    copy1 = str1.dup
    copy2 = str2.dup
    copy1.each_char do |char|
        found_idx = copy2.index(char)
        if !found_idx.nil?
            copy2[found_idx]= ""
        end
    end
    copy2.empty?
end

# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true




def third_anagram?(str1, str2) # Time: O(nlogn) Space: O(n)
    str1.split("").sort == str2.split("").sort
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true




# def fourth_anagram?(str1, str2) # Time: O(n) (linear) Space: O(1) (constant)
#     hash1 = Hash.new(0)
#     hash2 = Hash.new(0)
#     str1.each_char { |char| hash1[char] += 1 }
#     str2.each_char { |char| hash2[char] += 1 }
#     hash1 == hash2
# end

#BONUS#

def fourth_anagram?(str1, str2) # Time: O(n) (linear) Space: O(1) (constant)
    the_hash = Hash.new(0)
    str1.each_char {|char| the_hash[char] += 1}
    str2.each_char {|char| the_hash[char] -= 1}
    the_hash.all? {|k, v| v == 0}
end

p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true