from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class OTP(models.Model):
    username=models.CharField(primary_key=True,max_length=20)
    otp=models.IntegerField()