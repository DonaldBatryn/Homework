class MaxIntSet
  attr_reader :store

  def initialize(max)
    @max = max
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" unless is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    @store[num] = false if is_valid?(num)
  end

  def include?(num)
    @store[num] if is_valid?(num)
  end

  private

  def is_valid?(num)
    num < @max && num >= 0
  end

  def validate!(num)

  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @buckets = num_buckets
  end

  def insert(num)
    @store[num % @buckets] << num
  end

  def remove(num)
    bucket_array = @store[num % @buckets]
    bucket_array.delete_at(bucket_array.index(num)) 
  end

  def include?(num)
    return false if @store[num % @buckets] == []
    true
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count == num_buckets 
    if !@store[num % num_buckets].include?(num)
      @store[num % num_buckets] << num
      @count += 1
    end
    
  end

  def remove(num)
    if !@store[num].empty?
      @store[num].delete(num)
      @count -= 1
    end

  end

  def include?(num)
    return false if @store[num] == []
    true
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp_arr = @store.dup
    @store = Array.new(num_buckets * 2) {Array.new}
    @count = 0
    temp_arr.flatten.each { |ele| insert(ele) }
    @store
  end
end
