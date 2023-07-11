class Message < ApplicationRecord
  validates :message, presence: true, length: { minimum: 5, maximum: 100 }
end
