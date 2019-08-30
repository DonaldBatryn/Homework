class Bench < ApplicationRecord

    def self.in_bounds(bounds)
       
       
        # Bench.all.each do |bench|
        #   debugger
        #     if bench.lat < bounds["northEast"]["lat"] && bench.lat > bounds["southWest"]["lat"] && bench.lng < bounds["northEast"]["lng"] && bench.lng > bounds["southWest"]["lng"]
        #         return_benches << bench
        #     end
        # end
        return_benches = Bench.where("lat < ?", bounds["northEast"]["lat"])
            .where("lat > ?", bounds["southWest"]["lat"])
            .where("lng > ?", bounds["southWest"]["lng"])
            .where("lng < ?", bounds["northEast"]["lng"])
        debugger
        return return_benches
    end
end
