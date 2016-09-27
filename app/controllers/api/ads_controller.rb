class Api::AdsController < ApiController
  before_action :set_ad, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:show, :index]

  # GET /ads
  # GET /ads.json
  def index
    @ads = Ad.all.includes(:category, :user)
  end

  # GET /ads/1
  # GET /ads/1.json
  def show
  end

  # GET /ads/new
  def new
    @ad = Ad.new
  end

  # GET /ads/1/edit
  def edit
  end

  # POST /ads
  # POST /ads.json
  def create

    @ad = Ad.new(ad_params)
    @ad.category = Category.find params[:ad][:category_attributes]

    respond_to do |format|
      if @ad.save
        format.json { render :show, status: :created}
      else
        format.json { render json: @ad.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ads/1
  # PATCH/PUT /ads/1.json
  def update
    @ad.category.destroy_all
    @ad.category << Category.find(params[:ad][:category_attributes])
    respond_to do |format|
      if @ad.update(ad_params)
        format.json { render :show, status: :ok}
      else
        format.json { render json: @ad.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ads/1
  # DELETE /ads/1.json
  def destroy
    @ad.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ad
      @ad = Ad.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ad_params
      params.require(:ad).permit(:title, :body, :price, :user_id, :status)
    end
end
