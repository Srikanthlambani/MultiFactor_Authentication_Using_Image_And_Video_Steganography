from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from login.serializer import Login
from django.http import JsonResponse
from otp import generateOTP
from login.models import OTP
from login.saveotp import saveOtp
from login.mail import SendMail
from login.ImgSteg import Hide
from login.mail2 import SendMail2
from login.mail3 import VideoMail
from login.VideoSteg import encoded
from os import remove
from django.views.decorators.csrf import csrf_exempt
import io
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
# Create your views here.

@api_view(['POST'])
def login(request):
    print(request.data)
    if request.method=='POST':
        count=User.objects.filter(username=request.data['username']).count()
        if count:
            password_check=User.objects.get(username=request.data['username']).password
            if request.data['password']==password_check:
                otp=generateOTP()
                saveOtp(User.objects.get(username=request.data['username']).username,otp)
                if request.data['otp']=='otp':
                    print(otp)
                    SendMail(User.objects.get(username=request.data['username']).email,otp)
                elif request.data['otp']=='image':
                    save_path=r'C:\Users\ragha\Desktop\projects\mfa\users\\'+str(request.data['username'])+'\CreateImage\\'+str(request.data['username'])+'.png'
                    print(save_path)
                    Hide(r'C:\Users\ragha\Desktop\projects\mfa\images\\',save_path,str(otp))
                    SendMail2(User.objects.get(username=request.data['username']).email,save_path,request.data['username'])
                else:
                    print("video")
                    print(otp)
                    save_path=r'C:\Users\ragha\Desktop\projects\mfa\users\\'+str(request.data['username'])+'\CreateVideo'
                    remove_path=save_path+'\output'
                    print(remove_path)
                    videos_folder_path=r'C:\Users\ragha\Desktop\projects\mfa\videos'
                    some=encoded()
                    mail_video_path=some.start(otp,save_path,videos_folder_path,request.data['username'],remove_path)
                    VideoMail(mail_video_path,User.objects.get(username=request.data['username']).email,request.data['username'])
                    remove(mail_video_path)
                re=JsonResponse({'message':'success','user':request.data['username']})
                return re
            else:
                return Response({'data':'wrong credentials','message':'warn2'})
        else:
            return Response({'data':'User not existed','message':'warn2'})
    
@api_view(['POST'])
def forgot(request):
    print(request.data)
    if request.method=='POST':
        count=User.objects.filter(email=request.data['email']).count()
        if count:
                otp=generateOTP()
                username = User.objects.get(email=request.data['email']).username
                saveOtp(username,otp)
                if request.data['otp']=='otp':
                    print(otp)
                    SendMail(request.data['email'],otp)
                elif request.data['otp']=='image':
                    save_path=r'C:\Users\ragha\Desktop\projects\mfa\users\\'+str(username)+'\CreateImage\\'+str(username)+'.png'
                    print(save_path)
                    Hide(r'C:\Users\ragha\Desktop\projects\mfa\images\\',save_path,str(otp))
                    SendMail2(request.data['email'],save_path,username)
                else:
                    print("video")
                    print(otp)
                    save_path=r'C:\Users\ragha\Desktop\projects\mfa\users\\'+str(username)+'\CreateVideo'
                    remove_path=save_path+'\output'
                    print(remove_path)
                    videos_folder_path=r'C:\Users\ragha\Desktop\projects\mfa\videos'
                    some=encoded()
                    mail_video_path=some.start(otp,save_path,videos_folder_path,username,remove_path)
                    VideoMail(mail_video_path,request.data['email'],username)
                    remove(mail_video_path)
                re=JsonResponse({'message':'success','user':username})
                return re
        else:
            return Response({'data':'User not existed','message':'warn2'})
    
    
@csrf_exempt
def update(request):
    json=request.body
    stream = io.BytesIO(json)
    data = JSONParser().parse(stream)
    print(data)
    if request.method == 'POST':
        user = User.save(commit=False)
        user.set_password(request.POST["password"])
        user.save()
        # user = User.objects.get(username=data['username'])
        # password = data['password']
        # user.password=password
        # user.save()
        # user = User.objects.get(username=data['username'])
        # print(user)
        return JsonResponse({'message':'success','data':'Password Updated successfully'})
    return JsonResponse({'message':'warn2','data':'Failed to update the password'})