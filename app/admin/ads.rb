ActiveAdmin.register Ad do

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

  form do |f|
    f.semantic_errors # shows errors on :base
    f.inputs 'Details' do
      input :status, as: :select, collection: ['on_moderation', 'approved', 'rejected'], include_blank: false
    end
    f.actions         # adds the 'Submit' and 'Cancel' buttons
  end

  permit_params :status

end
