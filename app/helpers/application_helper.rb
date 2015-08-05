module ApplicationHelper

  def page_title()
    base = Rails.application.config.base_title
    secondary = Rails.application.config.secondary_title
    titles = YAML.load_file('app/helpers/titles.yml')
    controller = params[:controller]
    action = params[:action]
    page_title = titles[controller][action]['title']
    sep = ' : '

    title = base

    if (controller == 'projects')
      title = base + sep + page_title

      if (action == 'show')
        title = base + sep + @project['name']
      end
    end

    if (controller == 'posts')
      title = base + sep + page_title

      if (action == 'show')
        title = base + sep + @post['title']
      end
    end

    if (controller != 'posts' && controller != 'projects')
      title = base + sep + page_title
    end

    title
  end

  def header_title
    base = Rails.application.config.base_title
    secondary = Rails.application.config.secondary_title
    titles = YAML.load_file('app/helpers/titles.yml')
    controller = params[:controller]
    action = params[:action]
    page_title = titles[controller][action]['title']
    page_url = url_for(controller: controller, action: action)
    sep = ' : '

    title = content_tag(:a, base, href: root_path, class: 'link-root')

    if (controller == 'projects')
      title = title + content_tag(:span, sep) + content_tag(
        :a, page_title,
        href: projects_path,
        class: 'link-page'
      )

      if (action == 'show')
        title = title + content_tag(:span, sep) + content_tag(
          :a, @project['name'],
          href: page_url,
          class: 'link-item active'
        )
      end
    end

    if (controller == 'posts')
      title = title + content_tag(:span, sep) + content_tag(
        :a, page_title,
        href: posts_index_path,
        class: 'link-page'
      )

      if (action == 'show')
        title = title + content_tag(:span, sep) + content_tag(
          :a, truncate(@post['title'], length: 30, separator: ' '),
          href: page_url,
          class: 'link-item active'
        )
      end
    end

    if (controller != 'posts' && controller != 'projects')
      title = title + content_tag(:span, sep) + content_tag(
        :a, page_title,
        href: about_path,
        class: 'link-page'
      )
    end

    title
  end

  def body_class
    controller = params[:controller]
    action = params[:action]
    controller.to_s + '_' + action.to_s
  end

  def get_image(image_name)
    bucket = Rails.application.config.image_bucket
    controller = params[:controller]
    bucket + controller + '/' + image_name
  end

  def is_page?(page)
    controller = params[:controller]
    action = params[:action]
    page == controller + '_' + action
  end
end
