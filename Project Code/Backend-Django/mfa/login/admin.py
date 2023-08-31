from django.contrib import admin
from login.models import OTP
# Register your models here.

class Result(admin.ModelAdmin):
    list_display=['username','otp']
admin.site.register(OTP,Result)