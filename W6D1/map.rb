class Map
    def initialize
        @map = []
    end 

    def set(key, value)
        if @map.empty?
            @map.push([key, value])
        else
            @map.each do |ele| 
                if ele[0] == key
                    ele[1] = value
                else
                    @map.push([key, value])
                    return
                end
            end
        end
    end

    def get(key)
        @map.each do |pair|
            if pair[0] == key
                return pair[1]
            end
        end
    end

    def delete(key)
        @map.each do |pair|
            if pair[0] == key
                @map.delete(pair)
            end
        end
    end

    def show
        @map.map {|pair| puts "Key: #{pair[0]}  Val: #{pair[1]}"}
    end

end
