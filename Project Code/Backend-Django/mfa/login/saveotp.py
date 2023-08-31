from login.models import OTP

def saveOtp(username,otp):
    data=OTP(username=username,otp=otp)
    data.save()