ActiveAdmin.register Category do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  controller do

    def destroy
      @category = Category.find(params[:id])
      redirect_to admin_categories_path, :alert => 'Cannot delete default category' if params[:id].to_i == 1
      @ads = Ad.all.includes(:category)
      @ads.each do |ad|
        if ad.category.include? @category
          ad.category << Category.find(1)
        end
      end
      @category.destroy
      redirect_to admin_categories_path, :notice => 'Successfully deleted'
    end

    private

      def category_params
        params.require(:category).permit(:name)
      end

  end

end
