module ApplicationHelper

  def page_title()
    base = Rails.application.config.base_title
    secondary = Rails.application.config.secondary_title
    titles = YAML.load_file('app/helpers/titles.yml')
    controller = params[:controller]
    action = params[:action]
    sep = ' : '

    if controller == 'posts' && action == 'show'
      base + sep + titles[controller][action]['title']
    end

    if titles[controller][action]['title']
      base + sep + titles[controller][action]['title']
    else
      base + sep + secondary
    end
  end
end
