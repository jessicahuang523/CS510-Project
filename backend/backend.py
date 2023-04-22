import openai
from flask import Flask, request

openai.api_key_path = './key.txt'
messages = [
        {"role": "system", "content": "You are a helpful assistant."}
    ]

app = Flask(__name__)

@app.route('/')
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
        return cleaned_reply

    ingredient = request.args.get('ingredient')
    if ingredient:
        ask_format = "What is the purpose of " + ingredient + "in the recipe?"
        messages.append({"role": "user", "content": ask_format})

        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )
        reply = chat.choices[0].message.content

        return reply

    