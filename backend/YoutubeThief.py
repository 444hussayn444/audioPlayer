from selenium import webdriver
from selenium.webdriver.common.by import By
import json
import time
import yt_dlp as YD
import uuid
import os

userInput = str(input("Please Enter channel: "))

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options)
driver.get(f"https://www.youtube.com/@{userInput}/videos")
time.sleep(3)

videos =  []
filename= "data.json"
limmit = 3

while limmit > len(videos):
     try:
          driver.execute_script("window.scrollTo(0,document.body.scrollHeight);")
          scamming_videos = driver.find_elements(By.CSS_SELECTOR,'a#video-title-link')
          images = driver.find_elements(By.TAG_NAME,"img")
          for video in scamming_videos:
               print("starting collecting...")
               title = video.get_attribute('title')
               video = video.get_attribute('href')
               img = [src.get_attribute("src") for src in images if src.get_attribute("src")]
               videoId = str(uuid.uuid4())
               data = {"title":title,"video":video,"id":videoId,"img":img}
               videos.append(data)
               with open(filename,"w") as file:
                    try:
                         json.dump(videos,file,indent=4)
                         if limmit == len(videos):
                               break
                    except Exception as error:
                       print(f"error: {str(error)}")    
     except Exception as error:
               print(f"error: {str(error)}")    

time.sleep(3)
video_op = {
      "format":"bestaudio+bestvideo/best",
      "outtmpl":"%(title)s.%(ext)s",
        "http_headers": {
         "User-Agent": "Mozilla/5.0"
        }
}
with open(filename,"r") as file:
      print("reading...")
      alldata =  json.load(file)
      os.chdir("videos")
      for d in alldata:
          print(d["video"])
          with YD.YoutubeDL(video_op) as youtube:
            try:
               youtube.download([d["video"]])
               if not d:
                  print("No data")
                  break
            except OSError as e:
                    print(f"error: {str(e)}")    
          file.close()
