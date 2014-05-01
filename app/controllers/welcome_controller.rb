class WelcomeController < ApplicationController
  before_action :sleeptime
  before_action :remember_effect
  def index
  end

  def index2
  end

  def index3
  end

  private
    def sleeptime
      time = params[:sleeptime] ? params[:sleeptime].to_i : 0
      # max sleep time is 10s
      time = 10 if  time > 10
      logger.debug "sleep #{time}"
      sleep time
    end

    def remember_effect
      session[:in]  = params[:in] if params[:in]
      session[:out] = params[:in] if params[:out]
    end
end
