class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :audiobooks

  has_many :friends
  has_many :friend_inf, :through => :friends, source: :friend
  has_many :inverse_friendships, :class_name => "Friend", :foreign_key => "friend_id"
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.base64(16);
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.base64(16);
    self.save
    self.session_token
  end

end
