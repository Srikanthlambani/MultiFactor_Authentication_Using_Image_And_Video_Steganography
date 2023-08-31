from email.message import EmailMessage
import ssl
import smtplib

email = "team.authentication5@gmail.com"
password = ''
#replace the email and password with your credentials

def SendMail(reciever,otp):
    subject='From E4-major project Team'
    body='Here is your one time password   '+str(otp)
    em=EmailMessage()
    em['From']=email
    em['To']=reciever
    em['subject']=subject

    em.set_content(body)


    context=ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
        smtp.login(email,password)
        smtp.sendmail(email,reciever,em.as_string())
