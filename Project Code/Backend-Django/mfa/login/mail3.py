import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.utils import COMMASPACE
from email import encoders

# Define email details
sender = 'team.authentication5@gmail.com'
subject = ' Video from E4 Authentication Team'
body = 'Here is your video to Video Authetication'

def VideoMail(file_path,mail,username):
    recipient=mail

    # Define the file path and filename of the video to be attached
    filename = str(username)+'.mkv'

    # Create a message object and add email details
    msg = MIMEMultipart()
    msg['From'] = sender
    msg['To'] = COMMASPACE.join(recipient)
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    # Open and attach the video file
    with open(file_path, 'rb') as f:
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(f.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', f'attachment; filename={filename}')
        msg.attach(part)

    # Send the email using SMTP
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    username = "team.authentication5@gmail.com"
    password = ''
#repplace email and password with yours


    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(username, password)
        server.sendmail(sender, recipient, msg.as_string())
