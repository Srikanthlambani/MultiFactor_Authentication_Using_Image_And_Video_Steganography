from rest_framework import serializers

from django.contrib.auth.models import User

# email unique identification 
def email_validation(value):
    r=User.objects.filter(email=value).count()
    if r!=0:
        raise serializers.ValidationError('email already exits')
    return value
class SignUp(serializers.ModelSerializer):
    email=serializers.EmailField(validators=[email_validation])
    class Meta:
        model=User
        fields=['username','email','first_name','last_name','password']
        
    # def validate_eamil(self,value):
    #     print(value)
    #     r=User.objects.filter(email=value).count()
    #     if r!=0:
    #         raise serializers.ValidationError('username already existed')
    #     return value        