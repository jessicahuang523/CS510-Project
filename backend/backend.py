import openai
from flask import Flask, request
from flask_cors import CORS
import json

openai.api_key_path = './key.txt'
messages = [
        {"role": "system", "content": "You are a helpful assistant."}
    ]

app = Flask(__name__)
CORS(app)

@app.route('/get_recipe')
def get_recipe():
    recipe = request.args.get('recipe_name')
    if recipe:
        ask_format = "Give me a list of basic ingredients and a list of optional ingredients for a " + recipe + " recipe. Return a json object with field names \"basic\" and \"optional\" and values as arrays."
        messages.append({"role": "user", "content": ask_format})

        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )
        reply = chat.choices[0].message.content

        cleaned_reply = reply.split('```')[1]
        cleaned_reply = cleaned_reply.replace('json', '')
        json_object = json.loads(cleaned_reply)
        return json_object
    else:
        return []
@app.route('/get_ingredient_detail')
def get_ingredient_detail():
    ingredient = request.args.get('ingredient')
    if ingredient:
        ask_format = "What is the purpose of " + ingredient + "in the recipe?"
        messages.append({"role": "user", "content": ask_format})

        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )
        reply = chat.choices[0].message.content
        reply = reply.replace('\n', ' ')
        return reply
    else:
        return []
    