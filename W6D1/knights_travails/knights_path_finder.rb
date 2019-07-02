require_relative "../TreeNode/lib/00_tree_node.rb"
require "byebug"

class KnightPathFinder
    attr_reader :root_node, :considered_positions
    def initialize(pos)
        @root_node = PolyTreeNode.new(pos)
        @considered_positions = [pos]
    end

    def self.valid_moves(pos)
        one = [-2, -1, 1, 2]
        two = [-2, -1, 1, 2]
        row, col = pos
        possible = []
        one.each do |i|
            two.each do |j|
                next if row + i > 7 || row + i < 0 || col + j > 7 || col + j < 0 || (i + j).even?
                possible << [row + i, col + j]
            end
        end
        possible    
    end

    def build_move_tree
        queue = [@root_node]
        while !queue.empty?
            new_moves = new_move_positions(queue[0]) 
            new_moves.each  do |pos| 
                child = PolyTreeNode.new(pos)
                queue << child
                queue[0].add_child(child)
                
            end
            queue.shift
        end
    end

    def find_path(target)
        result = @root_node.dfs(target)
        path = []
        while result
            path << result.value
            result = result.parent
        # return root, [] if root.value == target
    
        # root.children.each do |child| 
        #     result, path = find_path(child, target)

        #     if result != nil  
        #         return result, trace_back_path(result)
        #     else
        #         root.remove_child(child)
        #         child.parent = nil
        #         # erase parent/children
        #     end
        # end
                   
        # # always start from root.
        # # does this node exist
        # nil
        end
        path.reverse
    end

    # kpf = KnightPathFinder.new([0, 0])
    # kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
    # kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]

    def trace_back_path(target)
        path = []

        until target.parent.value == @root_node.value
            path.unshift(target.value)
            target = target.parent
        end
        path.unshift(target.value)
        path.unshift(@root_node.value)
        path
        # return array of all positions in a chain
        # unshift each node as it heads back to root
        # [[0,0], [1,2], [3,3], [5,4]]
        
    end
    
    def new_move_positions(parent_node)
        # p "in the new_move #{parent_node}"
        new_moves = KnightPathFinder::valid_moves(parent_node.value)
        new_moves.reject! {|child| @considered_positions.include?(child)}
        new_moves.each do |pos|
            
            @considered_positions << pos
      
        end
 
        new_moves
    end
    
end
if __FILE__ == $PROGRAM_NAME
    k = KnightPathFinder.new([0,0])
    k.build_move_tree

    p "find_path is "
    p k.find_path([4,4]) #works good but the path is not ideal yet
end


# nodes = []
# for i in 0..5
#     nodes << PolyTreeNode.new([i,i])
# end
# for i in 0..4
#     nodes[i+ 1].parent = nodes[i]
#     nodes[i].add_child(nodes[i + 1])
# end

# p k.trace_back_path # 0,0 1,1 2,2 3,3 4,4