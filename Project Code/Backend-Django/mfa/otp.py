import math, random
    
def generateOTP() :
 
    # Declare a digits variable 
    # which stores all digits
    digits = "1234567891"
    OTP = ""
 
   # length of password can be changed
   # by changing value in range
    # for i in range(4) :
    #     OTP += digits[math.floor(random.random() * 10)]
        
        
    while(len(OTP)<4):
        OTP += digits[math.floor(random.random() * 10)]
        if(OTP[0]=='0'):
            OTP=''
        
 
    return OTP
