import base64

from stegano import lsb
# secret=lsb.hide("2.png","1234")
# secret.save("3.png")

# with open("3.png", "rb") as img_file:
#     my_string = base64.b64encode(img_file.read())
# data=my_string.decode()
# ne=bytes(data,'utf-8')
# decoded = base64.decodebytes(ne)
# img=open('4.png','wb')
# img.write(decoded)



secret_data=lsb.reveal('raghavabilla.png')
print(secret_data)