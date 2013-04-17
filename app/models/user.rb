class User < ActiveRecord::Base
 has_and_belongs_to_many :roles
 # before_create :create_role
  
  #private
   # def create_role
    #  self.roles << Role.find_by_name(:user)  
    #end
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable  :recoverable, :registerable,
  devise :database_authenticatable, 
         :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :username, :admin
  # attr_accessible :title, :body

  protected
  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    username = conditions.delete(:username)
    where(conditions).where(["lower(username) = :value", { :value => username.downcase }]).first
  end
end
