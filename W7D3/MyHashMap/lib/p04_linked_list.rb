require "byebug"

class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    self.prev.next = self.next
    self.next.prev = self.prev
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new("changed", "val")
    @tail = Node.new("changed", "val")
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail && @tail.prev == @head
  end

  def get(key)
    each do |node|
      return node.val if node.key == key 
    end
  end

  def include?(key)
    !get(key).nil?
  end

  def append(key, val)
    new_node = Node.new(key, val)
    # old_first = first
    # old_last = last
    new_node.next = @tail
    new_node.prev = @tail.prev

    # @head.next.prev = new_node
    @tail.prev.next = new_node
    @tail.prev = new_node
  
    # p new_node.next
    # p new_node.prev
  end

  def update(key, val)
    each do |node|
      node.val = val if node.key == key 
    end

  end

  def remove(key)
    each do |node|
      if node.key == key
        node.prev.next = node.next
        node.next.prev = node.prev
      end
    end
  end

  def each(&prc)
    current_node = first
    until current_node == @tail
      prc.call(current_node)
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
