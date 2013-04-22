class UsersController < ApplicationController
  

	def start
		@groups = Group.all
    @categories = Category.all;
    @items = Item.all
	end

  def index
    @users = User.where({admin: false})

    respond_to do |format|
      # format.html {}
      format.json { render json: @users }
    end
  end

	# POST /users
  def create_user
    User.create(params[:user])
  end


  # PUT /users/1
  # PUT /users/1.json
  def update
    @user = User.find(params[:id])
    @user.update_attributes(name: params[:name], \
                            username: params[:username], \
                            password: params[:password], \
                            password_confirmation: params[:password_confirmation])
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.delete
  end
end
