require_relative "00_tree_node"
class Searchable.rb
    def dfs(root, target)
        return nil if root.nil?
        return self if self.value == target
        @children.each do |child|
            result = dfs(child, target)
            return nil if result.nil?
        end
        
    end

    def bfs()
    end
end