class ArtworksController < ApplicationController
    
    def index
        # owned_art = Artwork.find_by(artist_id: params[:user_id] )
        all_arts = Artwork.joins(:artwork_shares).where('artworks.artist_id = :user_id or viewer_id = :user_id', user_id: params[:user_id])

        # debugger
        # .where(viewer_id: params[:user_id])
        # .where('artworks.artist_id = :user_id', user_id: params[:user_id])
        
        # combined = [owned_art] + shared_art
        render json: all_arts
        
    end

    def create
        # debugger
        art = Artwork.new(artwork_params)

        if art.save!
            render json: art
        else
            render json: art.errors.full_messages, status: 422
        end
    end

    def show
        art = Artwork.find(params[:id])
        render json: art
    end

    def update
        art = Artwork.find(params[:id])
        art.update_attributes(artwork_params)

        if art.save!
            render json: art
        else
            render json: art.errors.full_messages, status: 422
        end
    end

    def destroy
        art = Artwork.find(params[:id])
        art.destroy
        render plain: "Artwork #{art.title} was deleted"
    end



    private
    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end