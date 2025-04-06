from flask import jsonify, send_from_directory
from config import app
import os
import json


@app.route("/login")
def login():
    pass


@app.route("/register")
def register():
    pass


VideosFolder = "videos"


@app.route("/videos", methods=["GET"])
def load_music():
    try:
        videos = os.listdir(VideosFolder)
        imgs = []
        ids = []
        with open("data.json", "r") as file:
            data = json.load(file)
            for video_data in data:
                imgs.append(video_data["img"])
                ids.append(video_data["id"])
                if not video_data:
                    print("no img src")
                    break

            if not videos:
               return jsonify({"Error": "Videos Not Found"}), 404     
            v_urls = [
            {
                "name": video,
                "url": f"http://localhost:5000/videos/{video}",
                "img": imgs[index],
                "id": ids[index],
            }
            for index, video in enumerate(videos)
        ]
        if not VideosFolder:
            return jsonify({"Error": "Musics Not Found"}), 404
        return jsonify({"musics": v_urls}), 200
    except Exception as e:
        print(str(e))
        return jsonify(f"error: {str(e)}")


@app.route("/videos/<path:url>", methods=["GET"])
def load_song(url):
    try:
        if not url:
            return jsonify({"Error": "Musics Not Found"}), 404
        return send_from_directory(VideosFolder, url)
    except Exception as e:
        return jsonify(f"error: {str(e)}"), 500
