import smtplib
import imghdr
from email.message import EmailMessage

Sender_Email = "team.authentication5@gmail.com"
Password = ''
#replace the email and password with your email and password

def SendMail2(reciever,path,username):
    print("raghava executed")
    Reciever_Email = reciever
    newMessage = EmailMessage()                         
    newMessage['Subject'] = "Image from E4 Authentication Team" 
    newMessage['From'] = Sender_Email                   
    newMessage['To'] = Reciever_Email                   
    newMessage.set_content('here is your image to upload') 

    with open(path, 'rb') as f:
        image_data = f.read()
        image_type = imghdr.what(f.name)
        image_name = str(username)+'.png'

    newMessage.add_attachment(image_data, maintype='image', subtype=image_type, filename=image_name)

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    
        smtp.login(Sender_Email, Password)              
        smtp.send_message(newMessage)
        
