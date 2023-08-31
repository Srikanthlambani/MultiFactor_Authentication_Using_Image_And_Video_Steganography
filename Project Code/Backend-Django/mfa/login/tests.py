from django.test import TestCase
import requests
import json
# Create your tests here.
def otp():
    url='http://127.0.0.1:8000/api/login/'
    data1=json.dumps({'username':'raghavabilla','password':'R@gh@v@143','otp':'otp'})
    headers={'content-Type':'application/json'}
    req=requests.post(url,data=data1,headers=headers)
    print(req.status_code)
    print(req.headers)
    print(req.content)
    
    
def image():
    url='http://127.0.0.1:8000/api/login/'
    data1=json.dumps({'username':'raghavabilla','password':'R@gh@v@143','otp':'image'})
    headers={'content-Type':'application/json'}
    req=requests.post(url,data=data1,headers=headers)
    print(req.status_code)
    print(req.headers)
    print(req.content)
def video():
    url='http://127.0.0.1:8000/api/login/'
    data1=json.dumps({'username':'raghavabilla','password':'R@gh@v@143','otp':'video'})
    headers={'content-Type':'application/json'}
    req=requests.post(url,data=data1,headers=headers)
    print(req.status_code)
    print(req.headers)
    print(req.content)
    
def update():
    url='http://127.0.0.1:8000/api/updatePassword/'
    data1=json.dumps({'password':'R@gh@v@143'})
    headers={'content-Type':'application/json'}
    req=requests.post(url,data=data1,headers=headers)
    print(req.status_code)
    print(req.headers)
    print(req.content)
    
update()