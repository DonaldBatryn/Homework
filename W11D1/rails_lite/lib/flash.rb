require 'json'

class Flash
  attr_reader :now
  def initialize(req)
    if req.cookies["_rails_lite_app_flash"]
        result = req.cookies["_rails_lite_app_flash"]
        @now = JSON.parse(result)
    else
        @now = {}
    end
    @current = {}
    # @cookie = {}
    # @req = req
    # @cookie = req.cookies.merge(@cookie)
    # result = req.cookies["_rails_lite_app_flash"]
    # @cookie = JSON.parse(result)
  end

  def [](key)
    key_str = key.to_s
    if @now[key_str]
      @now[key_str]
    elsif @current[key_str]
      @current[key_str]
    else
      nil
    end
  end
  
  def []=(key, val)
    key_str = key.to_s
    @current[key_str] = val
  end

    # serialize the hash into json and save in a cookie
    # add to the responses cookies
  def store_flash(res)
    cookie = @current.to_json
    res.set_cookie("_rails_lite_app_flash", value: cookie, path:"/")
    
  end

end
