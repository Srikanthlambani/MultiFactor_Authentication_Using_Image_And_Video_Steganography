import os
import numpy
from PIL import Image
#import sys
import cv2
from moviepy.editor import *
import re
import math
global frame_location
def get_frames(video_object, base_filename):
    """Returns all frames in the video object"""
    directory = "output\\" + base_filename + '_frames\\'
    if not os.path.isdir(directory):
        os.makedirs(directory)
    for index, frame in enumerate(video_object.iter_frames()):
        img = Image.fromarray(frame, 'RGB')
        img.save(f'{directory}{index}.png')

def get_audio(base_filename, video_object):
    """Returns the audio track only of a video clip"""
    video_object.audio.write_audiofile(filename=f'output\\{base_filename}_audio.wav')
    
def generateData(data):
    newdata = []
    for i in data: # list of binary codes of given data
        newdata.append(format(ord(i), '08b'))
    return newdata

def modifyPixel(pixel, data):
    datalist = generateData(data)
    lengthofdata = len(datalist)
    imagedata = iter(pixel)
    for i in range(lengthofdata):
        # Extracts 3 pixels at a time
        pixel = [value for value in imagedata.__next__()[:3] + imagedata.__next__()[:3] + imagedata.__next__()[:3]]
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
 
def encoder(newimage, data):
    w = newimage.size[0]
    (x, y) = (0, 0)
 
    for pixel in modifyPixel(newimage.getdata(), data):
 
        # Putting modified pixels in the new image
        newimage.putpixel((x, y), pixel)
        if (x == w - 1):
            x = 0
            y += 1
        else:
            x += 1
 
# Improved Encoding Function
# Instead of performing Steganography on all the frames, the function will now instead perform Steganography on selected range of frames
def encode(start, end, secret_message, frame_loc):
    total_frame = end - start + 1
    #try:
    #   with open(filename) as fileinput: # Store Data to be Encoded
    #        filedata = fileinput.read()
    #except FileNotFoundError:
     #   print("\nFile to hide not found! Exiting...")
     #   quit()
    datapoints = math.ceil(len(secret_message) / total_frame) # Data Distribution per Frame
    counter = start
    print()
    print("Performing Steganography...")
    print()
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
        encoder(newimage, encodetext) # Steganography
        new_img_name = numbering # Frame Number
        newimage.save(new_img_name, str(new_img_name.split(".")[1].upper())) # Save as New Frame
        counter += 1
        print()
    print("Complete!\n")

def combine_audio_video(video_path,og_path):
    print()
    print()
    print()
    """Combines an audio and a video object together"""
    print()
    print()
    capture = cv2.VideoCapture(og_path) # Stores OG Video into a Capture Window
    fps = capture.get(cv2.CAP_PROP_FPS) # Extracts FPS of OG Video

    video_path_real = video_path + "\\%d.png" # To Get All Frames in Folder

    os.system("ffmpeg-4.3.1-2020-10-01-full_build\\bin\\ffmpeg -framerate %s -i \"%s\" -codec copy output\\hidden_content_video.mkv" % (str(int(fps)), video_path_real)) # Combining the Frames into a Video

    print("Combining Complete!")

def decode(number):
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
        
if not os.path.exists('output'):
    os.makedirs('output')



vf=input("Enter the entire the path of the video  -> ")
print()
print()
base_filename=os.path.splitext(os.path.basename(vf))[0]
video_object = VideoFileClip(vf)
print("frames are extracting in output/"+base_filename+"_frames folder check it out " )
print()
print()
print()
print("wait and have some patiences there are many frames to extract I am still working on it")
print()
print()
print()
get_frames(video_object, base_filename)
print("frames extraction is completed")
print()
print()
#frames and audio is extracted upto now
frame_start=1
frame_end=5
frame_location = input("Enter Frames Location that where extracted from the video which are in output/: "+base_filename+"_frames  ---- >")
print()
print()
print()
print("Ok now give me the file location of your secret message which you wrote and saved with .txt extension")
print()
#filename = input("File to Hide (inc. extension): like secret.txt   ----> ")
secret_message=input("Enter your secret message to hide ")
print()
print()
encode(frame_start, frame_end, secret_message, frame_location)
#encoded frames are created uptonow
video_file=frame_location
og_file=vf
combine_audio_video(video_file,og_file)
#upto now a new encoded video is created
print()

vf=input("Enter the entire the path of the .mkv which is encoded video(hidden_content_video.mkv), this video has to be sent to user mail address  ----> ")
base_filename=os.path.splitext(os.path.basename(vf))[0]
video_object = VideoFileClip(vf)
get_frames(video_object, base_filename)
#upto now we passed the encoded video and frames are extracted
print()
frame_location = input("Enter location of mkv video Frames Location that will be in output/combined_videos_only_frames  ---------->")
print()
print()
print()
print("The secret message which we hide in the frames is beloww ")
message_extracted=""
for convnum in range(frame_start, frame_end + 1):
    try:
        message_extracted=message_extracted+decode(convnum)
    except StopIteration:
        print("No data found in Frame %d" % convnum)
print()
print("Hidden message is :"+message_extracted)
print("\nExtraction Complete!")


