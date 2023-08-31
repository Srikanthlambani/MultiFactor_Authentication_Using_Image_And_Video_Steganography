from django.test import TestCase
import base64
import requests
import json
# Create your tests here.
url='http://127.0.0.1:8000/api/VerifyImage/'
path=r'C:\Users\ragha\Desktop\projects\mfa\raghavabilla.png'
img_file=open(path, "rb")
headers={'username':'raghavabilla'}
my_string = base64.b64encode(img_file.read())
data={'image':my_string.decode()}
print(type(data['image']))
data=json.dumps(data)

req=requests.post(url,data=data,headers=headers)
print(req.content)