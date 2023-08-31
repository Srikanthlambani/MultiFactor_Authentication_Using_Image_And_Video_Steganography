from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from VerifyVideo.decode import VideoDecode
from django.contrib.auth.models import User
import base64
import json
import os
from login.models import OTP
from VerifyOtp.serializers import Data

@csrf_exempt
@api_view(['POSt'])
def VerifyVideo(request):
    # Create your views here.
    if request.method=='POST':
        username=request.headers['Username']
        data=User.objects.filter(username=username).count()
        if data:
            print(type(request.body))
            data=json.loads(request.body)
            print(type(data))
            # ne=bytes(data['image'][22:],'utf-8')
            ne=bytes(data['video'][29:],'utf-8')
            print(data['video'][:29])
            decoded = base64.decodebytes(ne)
            path=r'C:\Users\ragha\Desktop\projects\mfa\users\\'+str(username)+'\\UploadVideo\\'+str(username)+'.mkv'
    
            print(path)
            img=open(path,'wb')
            img.write(decoded)
            try:
                some=VideoDecode()
                r=r'C:\Users\ragha\Desktop\projects\mfa\users\\'+str(username)+'\\UploadVideo\\'
                print(r)
                otp_from_video=some.start(r,username)
                print("hello poooooooooooooooooooooooooooooooooooooooooo")
                if otp_from_video ==1:
                        return Response({'message':'warn'})
                else:
                    print("otp from video",otp_from_video)
                    otp_from_database=OTP.objects.get(username=username).otp
                    print("otp from database",otp_from_database)
                    if otp_from_video==str(otp_from_database):
                        
                        serializer_data=Data(User.objects.get(username=request.headers['Username']))
                        userData = dict(serializer_data.data)
                        userData['message'] = 'success'
                        return Response(userData)
                    else:
                        return Response({'message':'warn'})
            except Exception:
                return Response({'message':'warn'})
        else:
            return Response({'message':'warn'})
