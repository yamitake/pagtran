class WelcomeController < ApplicationController
  before_action :sleeptime
  def index
  end

  def index2
  end

  def index3
  end

  private
    def sleeptime
      time = params[:sleeptime] ? params[:sleeptime].to_i : 1
      # max sleep time is 10s
      time = 10 if  time > 10
      logger.debug "sleep #{time}"
      sleep time
    end
end
