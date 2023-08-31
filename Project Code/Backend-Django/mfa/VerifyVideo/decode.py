import os
import numpy
from PIL import Image
import tkinter as tk
import sys
import cv2
from moviepy.editor import *
import re
import math
from shutil import rmtree




class VideoDecode():
    global frame_location
    def decode(self,number,frame_location):
        data = ''
        numbering = str(number)
        decoder_numbering = frame_location + "\\" + numbering + ".png"
        image = Image.open(decoder_numbering, 'r')
        imagedata = iter(image.getdata())
        while (True):
            pixels = [value for value in imagedata.__next__()[:3] + imagedata.__next__()[:3] + imagedata.__next__()[:3]]
            # string of binary data
            binstr = ''
            for i in pixels[:8]:
                if (i % 2 == 0):
                    binstr += '0'
                else:
                    binstr += '1'
            if re.match("[ -~]", chr(int(binstr,2))) is not None: # only decode printable data
                data += chr(int(binstr, 2))
            if (pixels[-1] % 2 != 0):
                return data

    
    def get_frames(self,path,video_object, base_filename):
        """Returns all frames in the video object"""
        directory = path+"\\output\\" + base_filename + '_frames\\'
        print(directory)
        if not os.path.isdir(directory):
            os.makedirs(directory)
        for index, frame in enumerate(video_object.iter_frames()):
            img = Image.fromarray(frame, 'RGB')
            img.save(f'{directory}{index}.png')
            
        return directory




    def start(self,path,username):
        vf=path+str(username)+'.mkv'#input("Enter the entire the path of the .mkv which is encoded video(hidden_content_video.mkv), this video has to be sent to user mail address  ----> ")
        base_filename=os.path.splitext(os.path.basename(vf))[0]
        print(base_filename)
        video_object = VideoFileClip(vf)
        frame_location=self.get_frames(path,video_object, base_filename)
        #upto now we passed the encoded video and frames are extracted
        print()
        #  = path+'\\output\\'+str(username)+'_frames'#input("Enter location of mkv video Frames Location that will be in output/combined_videos_only_frames  ---------->")
        frame_start=1
        frame_end=5
        print("The secret message which we hide in the frames is beloww ")
        message_extracted=""
        for convnum in range(frame_start, frame_end + 1):
            try:
                message_extracted=message_extracted+self.decode(convnum,frame_location)
            except StopIteration:
                print("error")
                return 1
        print("hello raghava")
        print(message_extracted)
        rmtree(path+'\\output')
        # os.remove(vf)
        return message_extracted
    
    
# a=VideoDecode()
# a.start(r'C:\Users\ragha\Desktop\projects\mfa\users\srikanth\UploadVideo\\','srikanth')
