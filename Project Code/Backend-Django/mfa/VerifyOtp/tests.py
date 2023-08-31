from django.test import TestCase
import requests
import json
# Create your tests here.

url='http://127.0.0.1:8000/api/VerifyOtp/'
data1=json.dumps({'otp':1234})
headers={'content-Type':'application/json','username':'raghavabilla'}
req=requests.post(url,data=data1,headers=headers)
print(req.status_code)
print(req.headers)
print(req.content)