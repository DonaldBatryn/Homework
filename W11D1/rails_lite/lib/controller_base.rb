require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res, params = {})
    @req = req
    @res = res
    @params = params.merge(@req.params)
    @already_built_response = false
    
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    # debugger
    raise "error" if already_built_response?
    @res.set_header("Location", url)
    @res.status = 302
    session.store_session(@res)
    @already_built_response = true
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    # debugger
    raise "error" if already_built_response?
    @res.set_header("Content-Type", content_type) 
    @res.write(content)
   
    session.store_session(@res)
    @already_built_response = true
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    controller_name = self.class.to_s.underscore.downcase
    # file_name = "views/#{controller_name}/#{template_name}.html.erb"
    current_directory = File.dirname(__FILE__)
    file_data = File.join(current_directory, "..", "views", controller_name, "#{template_name}.html.erb")
    # debugger
    # file_data = File.dirname("#{}views/#{controller_name}/#{template_name}.html.erb")
    new_erb_template = ERB.new(File.read(file_data))
    evaluated_template = new_erb_template.result(binding)
    # path = "views/#{controller_name}/#{template_name}.html.erb"
    # content = ERB.new(File.dirname(path))
    
    
    self.render_content(evaluated_template, "text/html")
  end

  # method exposing a `Session` object
  def session
    @current_session ||= Session.new(@req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
    self.render(name) unless already_built_response?
  end
end

