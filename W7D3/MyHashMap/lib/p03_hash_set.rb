class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if @count == num_buckets 
    num = key.hash
    if !self[key].include?(key)
      self[key] << key
      @count += 1
    end
  end

  def include?(key)
    num = key.hash
    return true if self[key].include?(key)
    # return false if @store[num] == [] 
    # return true if @store[num]
    false
  end

  def remove(key)
    num = key.hash
     if !self[key].empty?
      self[key].delete(key)
      @count -= 1
    end

  end

  private

  def [](key)
    # optional but useful; return the bucket corresponding to `num`
    num = key.hash
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
