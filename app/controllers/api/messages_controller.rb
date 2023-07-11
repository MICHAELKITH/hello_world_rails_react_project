class Api::MessagesController < ApplicationController
  def index
    unless Message.exists?
      Message.create([
                       { message: 'Hello!' },
                       { message: 'Hi there!' },
                       { message: 'Greetings!' },
                       { message: 'Hey, how are you?' },
                       { message: 'Good to see you!' }
                     ])

    end

    @message = Message.order(Arel.sql('RANDOM()')).limit(1)
    render json: @message
  end
end
