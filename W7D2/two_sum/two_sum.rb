
#------------Bad Two Sum------------------------------------------------
# def two_sum?(arr, target_sum) # Time: O(n^2) Space: O(n)
#     (0...arr.length-1).each do |i|
#         (i+1...arr.length).each do |j|
#             if arr[i] + arr[j] == target_sum
#                 return true
#             end
#         end
#     end
#     false
# end


#------------Sorting Two Sum------------------------------------------------

# def two_sum?(arr, target_sum)

#     i = 3
#     while i < arr.length
#         mid = arr.length / 2
#         search = target_sum - arr[i]
        
#         if arr[mid] != search
#             case arr[mid] <=> search
#             when -1
#                 sub = arr.take(mid)
#                 two_sum?(sub, search)
#             when 0
#                 return true
#             when 1
#                 sub = arr.drop(mid+1)
#                 result = two_sum?(sub, search)

#                 # if result.nil?
#                 #     return false
#                 # else
#                 #     return true
#                 # end
#             end
#         end
#         i += 1
#     end
#     false
# end


#---------------------Hash Map--------------------------------------------

def two_sum?(arr, target_sum)
    hash = Hash.new {|h, k| h[k] = false}
    arr.each { |ele| hash[ele] = true }
    current_key = nil
    hash.each do |k, v|
        current_key = k
        if hash.has_key?(target_sum-k) && current_key != k
           return true
        else
            hash[k] = true
        end
    end
    false
end



arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false






