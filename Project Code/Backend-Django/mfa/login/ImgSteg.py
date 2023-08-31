from stegano import lsb
import os
import random
    
    
def Hide(read_path,save_path,otp):
    files=os.listdir(read_path)
    random_index = random.randrange(len(files))
    read_path=read_path+str(files[random_index])
    secret=lsb.hide(read_path,otp)
    secret.save(save_path)
    
    
# Hide(r'C:\Users\ragha\Desktop\projects\mfa\images\\',r'C:\Users\ragha\Desktop\projects\mfa\users\raghavabilla'+'\CreateImage\\'+'raghavabilla'+'.png','1234',)