class LRUCache

    def initialize(capacity)
      @capacity = capacity
      @cache = []
    end

    def count
      @cache.count
    end

    def add(el)
      if count == 4 && @cache.include?(el)
        @cache.delete(el)
        
        @cache.push(el)
      elsif @cache.include?(el)
        @cache.delete(el)
        @cache.push(el)
      elsif count == 4
        @cache.shift
        @cache.push(el)
      else
        @cache.push(el)
      end
    end

    def show
      p @cache
    end

    private
    
    def accessed?(el)

    end

end
my_cache = LRUCache.new(4)
my_cache.add([1, 2, 3])
my_cache.add("hey")
my_cache.add("ca-ching")
my_cache.show

my_cache.add([1, 2, 3])
my_cache.add("new")
my_cache.add("bump")
my_cache.add("new")
my_cache.add("bump")
my_cache.add("new")
my_cache.add("bump")
my_cache.add("new")
my_cache.add("bump")
my_cache.add("new")
my_cache.show