from django.shortcuts import render
import base64
import json
from  stegano import lsb
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from login.models import OTP
from django.contrib.auth.models import User
from VerifyOtp.serializers import Data
from rest_framework.decorators import api_view

# Create your views here.

@csrf_exempt
@api_view(['POST'])
def VerifyImage(request):
    if request.method=='POST':
        username=request.headers['Username']
        data=User.objects.filter(username=username).count()
        if data:
            print(type(request.body))
            data=json.loads(request.body)
            print(type(data))
            ne=bytes(data['image'][22:],'utf-8')
            decoded = base64.decodebytes(ne)
            path=r'C:\Users\ragha\Desktop\projects\mfa\users\\'+str(username)+'\\UploadImage\\'+str(username)+'.png'
    
            print(path)
            img=open(path,'wb')
            img.write(decoded)
            try:
                otp_from_image=lsb.reveal(path)
                print("otp from image",otp_from_image)
                otp_from_database=OTP.objects.get(username=username).otp
                print("otp from database",otp_from_database)
                if otp_from_image==str(otp_from_database):
                    
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
    
