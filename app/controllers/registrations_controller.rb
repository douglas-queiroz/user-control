class RegistrationsController < Devise::RegistrationsController
  def create
    puts "Enviar e-mail"
  	super
  end
end 