from django.test import TestCase

# Create your tests here.
from django.test import TestCase
import base64
import requests
import json
# Create your tests here.
url='http://127.0.0.1:8000/api/VerifyVideo/'
path=r'C:\Users\ragha\Desktop\projects\mfa\VerifyVideo\srikanth.mkv'
img_file=open(path, "rb")
headers={'username':'srikanth'}
my_string = base64.b64encode(img_file.read())
data={'video':my_string.decode()}
print(type(data['video']))
data=json.dumps(data)

req=requests.post(url,data=data,headers=headers)
print(req.content)