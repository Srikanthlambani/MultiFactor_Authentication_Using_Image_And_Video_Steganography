"""mfa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from registration import views
from login import views1
from VerifyImage import views2
from VerifyOtp import views_Otp
from VerifyVideo import viewsVideo
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/',views.create,name='create'),
    path('api/login/',views1.login,name='login'),
    path('api/forgot/',views1.forgot,name='forgot'),
    path('api/updatePassword/',views1.update,name='update'),
    path('api/VerifyOtp/',views_Otp.VerifyOtp,name='VerifyOtp'),
    path('api/VerifyImage/',views2.VerifyImage,name="VerifyImage"),
    path('api/VerifyVideo/',viewsVideo.VerifyVideo,name="VerifyVideo")
]
