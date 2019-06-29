require 'byebug'
class Array
  def merge_sort(&prc)
    new_array = self.map {|el | el}
    return new_array if new_array.size <= 1
    middle = new_array.size/2
    left = new_array[0...middle]
    right = new_array[middle..-1]
    the_left = left.merge_sort(&prc)
    the_right = right.merge_sort(&prc)
    the_left.merge(the_right,&prc)
  end
  
  def merge(right,&prc)
    sorted = []
    prc ||= Proc.new {|a,b| a <=> b }
    until self.empty? || right.empty?
      case prc.call(self.first,right.first)
      when -1 
        sorted << self.shift
      else
        sorted << right.shift
      end
    end
    self.empty? ? sorted.concat(right) : sorted.concat(self)
    sorted
  end
end


def bsearch(array, target)
    return nil if array.length == 0
    mid_idx = array.size / 2

    if target < array[mid_idx]
        sub_arr = array.take(mid_idx)
        bsearch(sub_arr, target)
    elsif target == array[mid_idx]
        return mid_idx
    else
      
        sub_arr = array.drop(mid_idx + 1)
        result = bsearch(sub_arr, target) 
        if result.nil?
            return nil
        else
            result + (mid_idx + 1)
        end
    end


end

class Array
  def my_flatten(lvl=nil,idx = 0)
    if lvl.nil?
      return self if none? {|el| el.is_a? Array}
      flattened = []
      each do |sub_ele|
        if  !sub_ele.is_a? Array
          flattened << sub_ele
        else
          flattened.concat(sub_ele.my_flatten)
        end
      end
      return flattened
    else
      return self if none? {|el| el.is_a? Array} || idx == lvl
      flattened = []
      each do |sub_ele|
        if  !sub_ele.is_a? Array
          flattened << sub_ele
        else
          flattened.concat(sub_ele.my_flatten(lvl,idx + 1))
        end
      end
      return flattened
    end
  end

  def my_flatten(level = nil)
    duped = self.dup
    return duped if level == 0
    next_level = level ? level - 1 : nil

    each_with_index do |el, i|
      duped[i..i] = el.my_flatten(next_level) if el.is_a?(Array)
    end

    duped
  end

    def my_each_with_index(&prc)
        i = 0
        while i < self.length
            prc.call(self[i], i)

            i += 1
        end
        self
    end

    def dupes
        hash = Hash.new {|h, k| h[k] = []}
        self.my_each_with_index do |ele, i|
            
            hash[ele] << i
        end
        hash.select {|k, v| v.length > 1}
    end


    def my_reduce(acc=nil,&blk)
      i = 0
      if acc.nil?
        i = 1
        acc = self.first
      end
      # acc ||= self.shift
      while i < size
        acc = blk.call(acc, self[i]) 
        i += 1
      end
      acc
    end

    
end 


def factorials(n)
    return [] if n == 0
    return [1] if n == 1
    return [1, 1] if n == 2
    debugger
    previous = factorials(n-1)
    next_ele = previous[-1] * (n - 1)
    previous << next_ele
end

# p factorials(6)
# 1 1 2 6 24  121
# 1 1 2*1! 3*2!  4*3!
# nth fact    1       2    3      4     5               6           n
# idx         0       1                 4                5
# next_ele    0!                      (n-1)(3!)          5(4!)                 (n-1)     (previous.[-1]) = (n-2)!
# next_ele    1     1!    2!    3!    4!

class String
  def shuffled_sentence_detector(other_string)

    self.split.sort == other_string.split.sort
  end
end