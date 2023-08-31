from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from VerifyOtp.serializers import Data
from login.models import OTP
# Create your views here.


@api_view(['POST'])
def VerifyOtp(request):
    if request.method=='POST':
        print(request.headers)
        username=request.headers['Username']
        data=User.objects.filter(username=username).count()
        if data:
            otp=request.data['otp']
            print(type(otp))
            otp_database=OTP.objects.get(username=request.headers['Username']).otp
            print(type(otp_database))
            if str(otp_database)==str(otp):
                
                serializer_data=Data(User.objects.get(username=request.headers['Username']))
                userData=dict(serializer_data.data)
                userData['message'] = 'success'
                print(userData)
                return Response(userData)
            else:
                return Response({'msg':'warn'})
        else:
            return Response({'msg':'warn'})