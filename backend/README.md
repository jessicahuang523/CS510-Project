## Instructions
1. Create an OpenAI API key and store it in a file called `key.txt`.
2. Install these:
- `pip install flask`
- `pip install openai`
- `pip install python-dotenv`
3. Start by running `flask run`.
## APIs
### Get Recipe
Example request:
```
/get_recipe?recipe_name=sesame chicken
```
Example response:
```json
{
    "basic": [
        "Chicken Breast",
        "Soy Sauce",
        "Corn Starch",
        "Sesame Oil",
        "Garlic",
        "Ginger",
        "Green Onion",
        "Sesame Seeds",
        "Vegetable Oil",
        "White Sugar",
        "Rice Vinegar"
    ],
    "optional": [
        "Bell Peppers",
        "Broccoli",
        "Carrots",
        "Honey",
        "Red Pepper Flakes"
    ]
}
```
### Get Ingredient Detail
Example request:
```
/get_ingredient_detail?ingredient=sesame oil
```
Example response:
```
Sesame oil is commonly used in recipes to add flavor to a dish. It has a rich, nutty flavor that can enhance the overall taste of the dish, especially in Asian cuisine. In addition to its flavor, sesame oil also has a high smoke point, which makes it ideal for stir-frying or sauteing, as the oil will not break down or burn easily. In the context of a specific recipe, the purpose of sesame oil may vary, but in general, it is used for its flavor and cooking properties.
```