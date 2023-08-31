

import os
import numpy
from PIL import Image
import tkinter as tk
import sys
import cv2
from moviepy.editor import *
import re
import math
import random
import shutil

global frame_location
class encoded():

    def encoder(self,newimage, data):
        w = newimage.size[0]
        # print(w)
        (x, y) = (0, 0)
        
        for pixel in self.modifyPixel(newimage.getdata(), data):
        
            # Putting modified pixels in the new image
            newimage.putpixel((x, y), pixel)
            if (x == w - 1):
                x = 0
                y += 1
            else:
                x += 1 
    # Improved Encoding Function
    # Instead of performing Steganography on all the frames, the function will now instead perform Steganography on selected range of frames
    def encode(self,start, end, secret_message, frame_loc):
        total_frame = end - start + 1
        #try:
        #   with open(filename) as fileinput: # Store Data to be Encoded
        #        filedata = fileinput.read()
        #except FileNotFoundError:
        #   print("\nFile to hide not found! Exiting...")
        #   quit()
        datapoints = math.ceil(len(secret_message) / total_frame) # Data Distribution per Frame
        # print(datapoints)
        counter = start
        # print()
        # print("Performing Steganography...")
        # print()
        for convnum in range(0, len(secret_message), datapoints):
            numbering = frame_loc + "\\" + str(counter) + ".png"
            encodetext = secret_message[convnum:convnum+datapoints] # Copy Distributed Data into Variable
            try:
                image = Image.open(numbering, 'r') # Parameter has to be r, otherwise ValueError will occur (https://pillow.readthedocs.io/en/stable/reference/Image.html)
            except FileNotFoundError:
                print()
                print("\n%d.png not found! Exiting..." % counter)
                print()
                quit()
            newimage = image.copy() # New Variable to Store Hiddend Data
            self.encoder(newimage, encodetext) # Steganography
            new_img_name = numbering # Frame Number
            newimage.save(new_img_name, str(new_img_name.split(".")[1].upper())) # Save as New Frame
            counter += 1
            print()
            # print("Complete!\n")
    
                
            
    def modifyPixel(self,pixel, data):
        datalist = self.generateData(data)
        lengthofdata = len(datalist)
        imagedata = iter(pixel)
        for i in range(lengthofdata):
            # Extracts 3 pixels at a time
            pixel = [value for value in imagedata.__next__()[:3] + imagedata.__next__()[:3] + imagedata.__next__()[:3]]
            # print(pixel)
            # Pixel value should be made odd for 1 and even for 0
            for j in range(0, 8):
                if (datalist[i][j] == '0' and pixel[j]% 2 != 0):
                    pixel[j] -= 1
                elif (datalist[i][j] == '1' and pixel[j] % 2 == 0):
                    if(pixel[j] != 0):
                        pixel[j] -= 1
                    else:
                        pixel[j] += 1
            # Eighth pixel of every set tells whether to stop ot read further. 0 means keep reading; 1 means thec message is over.
            if (i == lengthofdata - 1):
                if (pixel[-1] % 2 == 0):
                    if(pixel[-1] != 0):
                        pixel[-1] -= 1
                    else:
                        pixel[-1] += 1
            else:
                if (pixel[-1] % 2 != 0):
                    pixel[-1] -= 1
            pixel = tuple(pixel)
            yield pixel[0:3]
            yield pixel[3:6]
            yield pixel[6:9]
            
        
        
    
    def generateData(self,data):
        newdata = []
        for i in data: # list of binary codes of given data
            newdata.append(format(ord(i), '08b'))
        return newdata




   
    def get_frames(self,video_object, base_filename,path_to_save):
        # print("get_frames")
        """Returns all frames in the video object"""
        directory = path_to_save+'\\output\\'+ base_filename + '_frames\\'
        # print(directory)
        if not os.path.isdir(directory):
            os.makedirs(directory)
        for index, frame in enumerate(video_object.iter_frames()):
            img = Image.fromarray(frame, 'RGB')
            img.save(f'{directory}{index}.png')
            
        return directory
    def combine_audio_video(self,video_path,og_path,save_path,username,remove_path):
        # print(video_path)
        # print(og_path)
        # print(save_path)
        # print(username)
        # print(remove_path)
        """Combines an audio and a video object together"""
        # print()
        # print()
        capture = cv2.VideoCapture(og_path) # Stores OG Video into a Capture Window
        fps = capture.get(cv2.CAP_PROP_FPS) # Extracts FPS of OG Video

        video_path_real = video_path + "\\%d.png" # To Get All Frames in Folder
        save_path=save_path+'\\'+str(username)+'.mkv'
        # print("before")
        # 
        a=(r"C:\Users\ragha\Desktop\projects\mfa\login\ffmpeg-4.3.1-2020-10-01-full_build\bin\ffmpeg.exe -nostats -loglevel 0 -framerate %s -i %s -codec copy %s" % (str(int(fps)), video_path_real,save_path)) # Combining the Frames into a Video
        #install ffmpeg in your windows and give your path where ffmpeg.exe is installed
        os.system(a)
        # print("after")
        shutil.rmtree(remove_path)
        return save_path

    def start(self,otp,save_path,read_path,username,remove_path):
        files=os.listdir(read_path)
        random_index = random.randrange(len(files))
        read_path=read_path+'\\'+str(files[random_index])
        vf=read_path
        base_filename=os.path.splitext(os.path.basename(vf))[0]
        video_object = VideoFileClip(vf)
        path=self.get_frames(video_object,base_filename,save_path)
        frame_start=1
        frame_end=5
        frame_location =path
        secret_message=otp
        self.encode(frame_start, frame_end, secret_message, frame_location)
        video_file=frame_location
        og_file=vf
        return_path=self.combine_audio_video(video_file,og_file,save_path,username,remove_path)
        return return_path



# some=encoded()

# some.start('1234',r'C:\Users\ragha\Desktop\projects\mfa\users'+'\\Hemanth'+'\CreateVideo',r'C:\Users\ragha\Desktop\projects\mfa\videos','Hemanth',r'C:\Users\ragha\Desktop\projects\mfa\users\Hemanth\CreateVideo\output')
# some=encoded()

# some.start('1234',r'C:\Users\ragha\Desktop\projects\mfa\users\\raghavabilla\CreateVideo',r'C:\Users\ragha\Desktop\projects\mfa\videos','raghavabilla',r'C:\Users\ragha\Desktop\projects\mfa\users\\raghavabilla\CreateVideo\output')
