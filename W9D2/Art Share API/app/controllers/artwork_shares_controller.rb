class ArtworkSharesController < ApplicationController
    # def index
    #     render json: ArtworkShare.all
    # end

    def create
        # debugger
        art_share = ArtworkShare.new(share_params)
        if art_share.save!
            render json: art_share
        else  
            render json: art_share.errors.full_messages, status: 422
        end        
    end

    # def show
    #     share = ArtworkShare.find(params[:id])
    #     render json: share
    # end

    # def update
    #     share = ArtworkShare.find(params[:id])
    #     share.update_attributes(share_params)
    #     render json: share
    # end

    def destroy
        art_share = ArtworkShare.find(params[:id])
        art_share.destroy
        render json: art_share
        # "ArtworkShare #{art_share.id} was deleted!"
    end

    private
    def share_params
        params.require(:artwork_share).permit(:viewer_id, :artwork_id)
    end
end