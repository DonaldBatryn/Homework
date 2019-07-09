class Node

  def bfs(target, &prc)
    prc ||= Proc.new {|a, b| a <=> b }
    queue = [self]
    until queue.empty?
      next_node = queue.shift
      p next_node
      return next_node if prc.call(next_node, target) == 0
      queue += next_node.children
    end
    nil
  end
end

# n1 = Node.new(1) making a node with a value of 1
# n1.bfs(1) #=> n1 

require "set"

class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        self.val = val
        self.neighbors = []
    end  
end

def depth_first(node, visited = Set.new)
  return nil if visited.include?(node.val)
  
      
end


def bredth_first(node, target_value)
    visited = Set.new


end 

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

depth_first(f) # f, e, a, c, b, d
p bredth_first(a, "b") # b
p bredth_first(a, "f") # nil