class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    total = 0
    each_with_index do |ele,idx|
      total += ele.hash if idx.even?
      total -= ele.hash if idx.odd?
    end
    total
  end

end

class String
  def hash
    # alpha_hash = 0
    # each_char.with_index do |char, i|
    #   if i % 3 == 0
    #     alpha_hash += ((char.to_i % (i+1)).hash)/2
    #   else
    #     alpha_hash -= (char.to_i % (i+1)).hash
    #   end
    # end
    # alpha_hash
    self.split("")
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    alpha = ("a".."z").to_a
    num = 1998127349
    total = 0
    self.each do |k,v|
      new_k = alpha.index(k.to_s)+ 1 * num
      # new_v = alpha.index(v.to_s)+ 1 * num
      # total += new_v
      total += new_k
    end
    total
  end
end
