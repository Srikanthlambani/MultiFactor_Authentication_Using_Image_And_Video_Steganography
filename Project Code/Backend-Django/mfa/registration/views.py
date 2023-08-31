from django.shortcuts import render
from registration.serializers import SignUp
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.views.decorators.csrf import csrf_exempt
import io
from django.http import JsonResponse
import os
# Create your views here.
@csrf_exempt
def create(request):
    if request.method=='POST':
        json=request.body
        stream = io.BytesIO(json)
        data = JSONParser().parse(stream)
        serializer=SignUp(data=data)
        if serializer.is_valid():
            path=r'C:\Users\ragha\Desktop\projects\mfa\users'+'\\'+str(serializer.validated_data['username'])
            print(path)
            os.mkdir(path)
            serializer.save()
            directories=['CreateImage','UploadImage','CreateVideo','UploadVideo']
            for i in directories:
                os.mkdir(path+'\\'+str(i))
            res={'data':'Account Created Successfully','message':'success2'}
            return JsonResponse(res)
        else:
            res={'data':'Account already Existed','message':'warn2'}
            return JsonResponse(res)
