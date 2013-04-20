class WaitersController < ApplicationController
  # GET /waiters
  # GET /waiters.json
  def index
    @waiters = Waiter.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @waiters }
    end
  end

  # GET /waiters/1
  # GET /waiters/1.json
  def show
    @waiter = Waiter.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @waiter }
    end
  end

  # GET /waiters/new
  # GET /waiters/new.json
  def new
    @waiter = Waiter.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @waiter }
    end
  end

  # GET /waiters/1/edit
  def edit
    @waiter = Waiter.find(params[:id])
  end

  # POST /waiters
  # POST /waiters.json
  def create
    @waiter = Waiter.new(params[:waiter])

    respond_to do |format|
      if @waiter.save
        format.html { redirect_to @waiter, notice: 'Waiter was successfully created.' }
        format.json { render json: @waiter, status: :created, location: @waiter }
      else
        format.html { render action: "new" }
        format.json { render json: @waiter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /waiters/1
  # PUT /waiters/1.json
  def update
    @waiter = Waiter.find(params[:id])

    respond_to do |format|
      if @waiter.update_attributes(params[:waiter])
        format.html { redirect_to @waiter, notice: 'Waiter was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @waiter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /waiters/1
  # DELETE /waiters/1.json
  def destroy
    @waiter = Waiter.find(params[:id])
    @waiter.destroy

    respond_to do |format|
      format.html { redirect_to waiters_url }
      format.json { head :no_content }
    end
  end
end
