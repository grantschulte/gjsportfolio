class ProjectsController < ApplicationController
  def index
    @projects = Project.all

    @db = Rails.configuration.database_configuration[Rails.env]["database"]

    respond_to do |format|
      format.html
      format.json { render json: @projects }
    end
  end

  def show
    @project = Project.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @project }
    end
  end

  def edit
    @project = Project.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @project }
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.save
      redirect_to project_path(params[:id])
     else
       render action: 'show'
    end
  end
end
