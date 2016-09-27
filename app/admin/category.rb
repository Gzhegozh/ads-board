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
      if params[:id].to_i == 1
        redirect_to admin_categories_path, :alert => 'Cannot delete default category'
      else
        @ads = Ad.all.includes(:category)
        @default_category = Category.find(1)
        @ads.each do |ad|
          if (ad.category.include? @category) && !(ad.category.include? @default_category)
            ad.category << @default_category
          end
        end
        @category.destroy
        redirect_to admin_categories_path, :notice => 'Successfully deleted'
      end
    end

    private

      def category_params
        params.require(:category).permit(:name)
      end

  end

end
