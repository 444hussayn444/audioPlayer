from flask import Flask
import os
import dotenv
from flask_cors import CORS


dotenv.load_dotenv()
app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*"}})

app.config["FLASK_SECRET"] = os.environ["FLASK_SECRET"]
print(app.config["FLASK_SECRET"])

