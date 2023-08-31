from django.test import TestCase
import json
import requests
# Create your tests here.
url='http://127.0.0.1:8000/api/register/'
data={'username':'raghavabilla','email':'raghavabilla@gmail.com','first_name':'billa','last_name':'raghava','password':'R@gh@v@143'}
json_data=json.dumps(data)
#print(type(json_data))

req=requests.post(url,data=json_data)
print(req.status_code)
print(req.content)