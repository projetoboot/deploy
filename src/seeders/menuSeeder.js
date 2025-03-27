const { Pool } = require('pg');
const DB_CONFIG = require('../config/database');
const pool = new Pool(DB_CONFIG);
console.log("começou");
const sampleDishes = [
    {
        "nome": "Red Lentil Soup with Chicken and Turnips",
        "descricao": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 55,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1604079681864-c6fbd7eb109c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxSZWQlMjBMZW50aWwlMjBTb3VwJTIwd2l0aCUyMENoaWNrZW4lMjBhbmQlMjBUdXJuaXBzfGVufDB8fHx8MTc0MzAxMjUzOXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Slow Cooker Beef Stew",
        "descricao": "If you want to add more gluten free and dairy free recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains 434 calories, 44g of protein, and 12g of fat. This recipe serves 6. For $2.7 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately 8 hours and 10 minutes. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. Autumn will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 490,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1527195575508-5b138d14a35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTbG93JTIwQ29va2VyJTIwQmVlZiUyMFN0ZXd8ZW58MHx8fHwxNzQzMDEyNTQwfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Red Kidney Bean Jambalaya",
        "descricao": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately 18g of protein, 6g of fat, and a total of 393 calories. For $1.68 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a tremendous spoonacular score of 99%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/red-kidney-bean-jambalaya-1407231\">Red Kidney Bean Jambalaya</a>, <a href=\"https://spoonacular.com/recipes/red-kidney-bean-salad-94525\">Red Kidney Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1604079681864-c6fbd7eb109c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxSZWQlMjBLaWRuZXklMjBCZWFuJTIwSmFtYmFsYXlhfGVufDB8fHx8MTc0MzAxMjU0MHww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries",
        "descricao": "Need a gluten free, dairy free, and vegetarian side dish? Quinoan and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries could be an awesome recipe to try. This recipe serves 6 and costs $1.87 per serving. One serving contains 539 calories, 21g of protein, and 15g of fat. 34 people have made this recipe and would make it again. Head to the store and pick up honey, juice of orange, chickpeas, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is spectacular. <a href=\"https://spoonacular.com/recipes/chickpea-and-cucumber-salad-with-dried-cherries-and-cheese-506468\">Chickpean and Cucumber Salad with Dried Cherries and Cheese</a>, <a href=\"https://spoonacular.com/recipes/spinach-quiche-with-sun-dried-tomatoes-923350\">Spinach Quiche with Sun-Dried Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-dried-tart-cherries-mint-and-feta-in-lemon-sumac-vinaigrette-605087\">Quinoa Salad With Dried Tart Cherries, Mint, and Fetan in Lemon-Sumac Vinaigrette</a> are very similar to this recipe.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1526066843114-f1623fde3476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxRdWlub2ElMjBhbmQlMjBDaGlja3BlYSUyMFNhbGFkJTIwd2l0aCUyMFN1bi1EcmllZCUyMFRvbWF0b2VzJTIwYW5kJTIwRHJpZWQlMjBDaGVycmllc3xlbnwwfHx8fDE3NDMwMTI1NDB8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Easy Homemade Rice and Beans",
        "descricao": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains 446 calories, 19g of protein, and 4g of fat. For $1.06 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 35 minutes. Overall, this recipe earns a tremendous spoonacular score of 98%. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
        "preco_unitario": 48,
        "tempo_preparo": 35,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1600626336264-60ef2a55bd33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxFYXN5JTIwSG9tZW1hZGUlMjBSaWNlJTIwYW5kJTIwQmVhbnN8ZW58MHx8fHwxNzQzMDEyNTQwfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Tuscan White Bean Soup with Olive Oil and Rosemary",
        "descricao": "Tuscan White Bean Soup with Olive Oil and Rosemary is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 6 servings. This main course has 242 calories, 16g of protein, and 1g of fat per serving. For 50 cents per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. It will be a hit at your Autumn event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 79%, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
        "preco_unitario": 20,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxUdXNjYW4lMjBXaGl0ZSUyMEJlYW4lMjBTb3VwJTIwd2l0aCUyME9saXZlJTIwT2lsJTIwYW5kJTIwUm9zZW1hcnl8ZW58MHx8fHwxNzQzMDEyNTQ2fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Slow Cooker: Pork and Garbanzo Beans",
        "descricao": "Slow Cooker: Pork and Garbanzo Beans takes approximately 45 minutes from beginning to end. This recipe serves 6. This main course has 587 calories, 66g of protein, and 14g of fat per serving. For $2.99 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. Head to the store and pick up water *2, cumin, pork should roast, and a few other things to make it today. This recipe is liked by 22 foodies and cooks. It is brought to you by Foodista. It is a good option if you're following a gluten free and dairy free diet. With a spoonacular score of 96%, this dish is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-619424\">Slow Cooker Pork and Beans</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-1242889\">Slow Cooker Pork and Beans</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-244959\">Slow Cooker Pork and Beans</a>.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1527195575508-5b138d14a35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTbG93JTIwQ29va2VyJTNBJTIwUG9yayUyMGFuZCUyMEdhcmJhbnpvJTIwQmVhbnN8ZW58MHx8fHwxNzQzMDE0MjUxfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Broccolini Quinoa Pilaf",
        "descricao": "Broccolini Quinoa Pilaf requires approximately 30 minutes from start to finish. For $4.14 per serving, you get a main course that serves 2. One portion of this dish contains around 20g of protein, 31g of fat, and a total of 625 calories. Head to the store and pick up vegetable broth, onion, olive oil, and a few other things to make it today. A few people made this recipe, and 94 would say it hit the spot. It is a rather expensive recipe for fans of Mediterranean food. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. It is brought to you by Pick Fresh Foods. With a spoonacular score of 98%, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/spring-broccolini-kale-quinoa-bowls-734866\">Spring Broccolini & Kale Quinoa Bowls</a>, <a href=\"https://spoonacular.com/recipes/orange-sesame-salmon-with-quinoa-broccolini-839832\">Orange-Sesame Salmon with Quinoa & Broccolini</a>, and <a href=\"https://spoonacular.com/recipes/black-pepper-goat-cheese-and-chard-quinoa-with-roasted-broccolini-625829\">Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1521354414378-fcffad1d3d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxCcm9jY29saW5pJTIwUXVpbm9hJTIwUGlsYWZ8ZW58MHx8fHwxNzQzMDE0MjUxfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Butternut Squash Frittata",
        "descricao": "The recipe Butternut Squash Frittata can be made in approximately 45 minutes. This recipe serves 1. Watching your figure? This gluten free recipe has 465 calories, 24g of protein, and 4g of fat per serving. For $3.4 per serving, this recipe covers 53% of your daily requirements of vitamins and minerals. A few people really liked this main course. This recipe from Foodista requires butternut squash, bell pepper, liquid egg substitute, and non-fat milk. 18 people have tried and liked this recipe. Overall, this recipe earns an awesome spoonacular score of 98%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-750335\">Butternut Squash Frittata</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-1225935\">Butternut Squash Frittata</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-and-quinoa-frittata-1313179\">Butternut Squash and Quinoa Frittata</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1507919181268-0a42063f9704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxCdXR0ZXJudXQlMjBTcXVhc2glMjBGcml0dGF0YXxlbnwwfHx8fDE3NDMwMTQyNTJ8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Herbivoracious' White Bean and Kale Soup",
        "descricao": "Herbivoracious' White Bean and Kale Soup might be a good recipe to expand your main course recipe box. One serving contains 332 calories, 17g of protein, and 10g of fat. This recipe serves 6 and costs 78 cents per serving. 10 people were impressed by this recipe. It will be a hit at your Autumn event. Head to the store and pick up juice of lemon, carrot, dinosaur kale, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is tremendous. <a href=\"https://spoonacular.com/recipes/kale-and-white-bean-soup-1214347\">Kale And White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/white-bean-and-kale-soup-15247\">White Bean And Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/white-bean-kale-soup-1571259\">White Bean Kale Soup</a> are very similar to this recipe.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxIZXJiaXZvcmFjaW91cyUyNyUyMFdoaXRlJTIwQmVhbiUyMGFuZCUyMEthbGUlMjBTb3VwfGVufDB8fHx8MTc0MzAxMjU0Nnww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Tomato and lentil soup",
        "descricao": "Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with 340 calories, 18g of protein, and 8g of fat each. For $1.16 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. It is perfect for Autumn. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. With a spoonacular score of 96%, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1711915408847-ae32b80a3fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxUb21hdG8lMjBhbmQlMjBsZW50aWwlMjBzb3VwfGVufDB8fHx8MTc0MzAxNDI1Mnww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Cheesy Chicken Enchilada Quinoa Casserole",
        "descricao": "Cheesy Chicken Enchilada Quinoa Casserole might be just the Mexican recipe you are searching for. One serving contains 594 calories, 34g of protein, and 24g of fat. This gluten free recipe serves 4 and costs $2.62 per serving. A mixture of corn, pepper, canned tomatoes, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately 30 minutes. It will be a hit at your Autumn event. Plenty of people made this recipe, and 9912 would say it hit the spot. It works well as an affordable main course. It is brought to you by Pink When. With a spoonacular score of 97%, this dish is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cheesy-chicken-enchilada-quinoa-casserole-1317125\">Cheesy Chicken Enchilada Quinoa Casserole</a>, <a href=\"https://spoonacular.com/recipes/cheesy-chicken-enchilada-quinoa-casserole-1340231\">Cheesy Chicken Enchilada Quinoa Casserole</a>, and <a href=\"https://spoonacular.com/recipes/cheesy-chicken-enchilada-quinoa-casserole-1280325\">Cheesy Chicken Enchilada Quinoa Casserole</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1471623817296-aa07ae5c9f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDaGVlc3klMjBDaGlja2VuJTIwRW5jaGlsYWRhJTIwUXVpbm9hJTIwQ2Fzc2Vyb2xlfGVufDB8fHx8MTc0MzAxNDI1Mnww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Jade Buddha Salmon Tartare",
        "descricao": "Need a gluten free, dairy free, paleolithic, and primal main course? Jade Buddha Salmon Tartare could be an outstanding recipe to try. This recipe serves 2 and costs $6.96 per serving. One serving contains 382 calories, 34g of protein, and 25g of fat. If you have olive oil to coat, green onion, salt and pepper, and a few other ingredients on hand, you can make it. 28 people were glad they tried this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns an awesome spoonacular score of 97%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/salmon-tartare-40385\">Salmon Tartare</a>, <a href=\"https://spoonacular.com/recipes/salmon-tartare-1281973\">Salmon Tartare</a>, and <a href=\"https://spoonacular.com/recipes/salmon-tartare-40377\">Salmon Tartare</a>.",
        "preco_unitario": 46,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxKYWRlJTIwQnVkZGhhJTIwU2FsbW9uJTIwVGFydGFyZXxlbnwwfHx8fDE3NDMwMTQyNTJ8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Moroccan chickpea and lentil stew",
        "descricao": "The recipe Moroccan chickpean and lentil stew can be made in roughly 30 minutes. This dairy free, lacto ovo vegetarian, and vegan recipe serves 3 and costs $1.26 per serving. This main course has 466 calories, 20g of protein, and 7g of fat per serving. This recipe is liked by 11 foodies and cooks. It can be enjoyed any time, but it is especially good for Autumn. It is brought to you by Foodista. If you have olive oil, salt and pepper, tomato paste, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/moroccan-chickpea-and-lentil-stew-1376773\">Moroccan chickpean and lentil stew</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-523871\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-1379167\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1591299177061-2151e53fcaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGNoaWNrcGVhJTIwYW5kJTIwbGVudGlsJTIwc3Rld3xlbnwwfHx8fDE3NDMwMTQyNTN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Caldo Verde - Portuguese Kale Soup",
        "descricao": "Caldo Verde - Portuguese Kale Soup takes approximately 45 minutes from beginning to end. One portion of this dish contains around 20g of protein, 10g of fat, and a total of 493 calories. For $2.24 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. 13 people were glad they tried this recipe. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. It is brought to you by Foodista. It works well as a main course. It will be a hit at your Autumn event. Head to the store and pick up onion, carrots, pepper flakes, and a few other things to make it today. With a spoonacular score of 92%, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/portuguese-kale-soup-caldo-verde-499535\">Portuguese Kale Soup (Caldo Verde)</a>, <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-1274837\">Caldo Verde - Portuguese Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-598606\">Caldo Verde | Portuguese Kale Soup</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1478749485505-2a903a729c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDYWxkbyUyMFZlcmRlJTIwLSUyMFBvcnR1Z3Vlc2UlMjBLYWxlJTIwU291cHxlbnwwfHx8fDE3NDMwMTQyNTN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Easy Vegetable Beef Soup",
        "descricao": "You can never have too many main course recipes, so give Easy Vegetable Beef Soup a try. This dairy free recipe serves 8 and costs $3.45 per serving. One serving contains 566 calories, 45g of protein, and 19g of fat. 130 people were glad they tried this recipe. It will be a hit at your Autumn event. A mixture of salt, seasoning, on carrots, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Pink When. From preparation to the plate, this recipe takes roughly 2 hours and 30 minutes. Taking all factors into account, this recipe earns a spoonacular score of 97%, which is awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-1050610\">Easy Vegetable Beef Soup</a>, <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-177116\">Easy Vegetable-Beef Soup</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-459390\">Easy Vegetable Beef Soup</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 150,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxFYXN5JTIwVmVnZXRhYmxlJTIwQmVlZiUyMFNvdXB8ZW58MHx8fHwxNzQzMDE0MjUzfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Mango Fried Rice",
        "descricao": "Mango Fried Rice is a Chinese main course. This recipe makes 2 servings with 486 calories, 16g of protein, and 4g of fat each. For $1.51 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. Several people made this recipe, and 262 would say it hit the spot. Head to the store and pick up scotch bonnet pepper, seasoning cubes, rice, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Afrolems. It is a good option if you're following a gluten free and dairy free diet. Overall, this recipe earns a great spoonacular score of 94%. <a href=\"https://spoonacular.com/recipes/mango-pork-fried-rice-176007\">Mango-Pork Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/thai-beef-mango-fried-rice-1326163\">Thai Beef & Mango Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/thai-chicken-and-mango-fried-rice-509300\">Thai Chicken and Mango Fried Rice</a> are very similar to this recipe.",
        "preco_unitario": 36,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxNYW5nbyUyMEZyaWVkJTIwUmljZXxlbnwwfHx8fDE3NDMwMTQyNTN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
        "descricao": "Spicy Salad with Kidney Beans, Cheddar, and Nuts might be just the main course you are searching for. One serving contains 719 calories, 27g of protein, and 49g of fat. This recipe serves 1 and costs $4.58 per serving. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. Head to the store and pick up almonds, greens, sundried tomatoes, and a few other things to make it today. From preparation to the plate, this recipe takes about 10 minutes. It is brought to you by spoonacular user <a href=\"/profile/coffeebean\">coffeebean</a>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/curried-red-kidney-beans-with-paneer-paneer-rajma-593415\">Curried Red Kidney Beans with Paneer (Paneer Rajma)</a>, <a href=\"https://spoonacular.com/recipes/steak-and-kidney-pie-with-port-and-pickled-walnuts-661494\">Steak and Kidney Pie With Port and Pickled Walnuts</a>, and <a href=\"https://spoonacular.com/recipes/lamb-and-kidney-hot-pot-157834\">LAMB AND KIDNEY HOT- POT</a>.",
        "preco_unitario": 68,
        "tempo_preparo": 10,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTcGljeSUyMFNhbGFkJTIwd2l0aCUyMEtpZG5leSUyMEJlYW5zJTJDJTIwQ2hlZGRhciUyQyUyMGFuZCUyME51dHN8ZW58MHx8fHwxNzQzMDEyNTQ1fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Stir Fried Quinoa, Brown Rice and Chicken Breast",
        "descricao": "You can never have too many main course recipes, so give Stir Fried Quinoa, Brown Rice and Chicken Breast a try. This recipe serves 1 and costs $3.58 per serving. One serving contains 750 calories, 58g of protein, and 20g of fat. 39 people were impressed by this recipe. If you have cherry tomatoes, spring onion, butter, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free diet. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/stir-fried-chicken-with-broccoli-brown-rice-793247\">Stir-fried chicken with broccoli & brown rice</a>, <a href=\"https://spoonacular.com/recipes/stir-fried-broccoli-with-brown-rice-meat-optional-569617\">Stir-Fried Broccoli with Brown Rice {Meat Optional}</a>, and <a href=\"https://spoonacular.com/recipes/stir-fried-chickpeas-and-asparagus-with-brown-rice-and-lemon-ta-31848\">Stir-fried Chickpeas And Asparagus With Brown Rice And Lemon Ta</a> for similar recipes.",
        "preco_unitario": 68,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1608533240306-9bf2a56958c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTdGlyJTIwRnJpZWQlMjBRdWlub2ElMkMlMjBCcm93biUyMFJpY2UlMjBhbmQlMjBDaGlja2VuJTIwQnJlYXN0fGVufDB8fHx8MTc0MzAxNDI1NHww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
        "descricao": "Greek-Style Baked Fish: Fresh, Simple, and Delicious might be just the Mediterranean recipe you are searching for. For $3.04 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 28g of protein, 12g of fat, and a total of 343 calories. This recipe serves 4. Plenty of people made this recipe, and 396 would say it hit the spot. It works well as a main course. Head to the store and pick up pepper, white wine, basil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 30 minutes. It is a good option if you're following a gluten free and pescatarian diet. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns a tremendous spoonacular score of 98%. Similar recipes are <a href=\"https://spoonacular.com/recipes/simple-greek-style-baked-fish-557560\">Simple Greek Style Baked Fish</a>, <a href=\"https://spoonacular.com/recipes/greek-style-baked-fish-526858\">Greek Style Baked Fish</a>, and <a href=\"https://spoonacular.com/recipes/delicious-greek-pastitsio-casserole-style-569500\">Delicious Greek Pastitsio {Casserole-Style}</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxHcmVlay1TdHlsZSUyMEJha2VkJTIwRmlzaCUzQSUyMEZyZXNoJTJDJTIwU2ltcGxlJTJDJTIwYW5kJTIwRGVsaWNpb3VzfGVufDB8fHx8MTc0MzAxNDI1NHww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Spinach Salad with Strawberry Vinaigrette",
        "descricao": "Need a gluten free and primal main course? Spinach Salad with Strawberry Vinaigrette could be a great recipe to try. This recipe makes 1 servings with 322 calories, 22g of protein, and 13g of fat each. For $3.39 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. A mixture of water, balsamic vinegar, ground pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It will be a hit at your Mother's Day event. 15 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-583232\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-1231959\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/spinach-strawberry-salad-with-strawberry-vinaigrette-1296303\">Spinach Strawberry Salad with Strawberry Vinaigrette</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTcGluYWNoJTIwU2FsYWQlMjB3aXRoJTIwU3RyYXdiZXJyeSUyMFZpbmFpZ3JldHRlfGVufDB8fHx8MTc0MzAxMjU0NXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Salmon with roasted vegetables",
        "descricao": "Salmon with roasted vegetables takes approximately 45 minutes from beginning to end. For $5.2 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. This recipe serves 2. One serving contains 496 calories, 39g of protein, and 18g of fat. Head to the store and pick up lemon juice, salt, carrot, and a few other things to make it today. Not a lot of people made this recipe, and 7 would say it hit the spot. It works well as a main course. It is a good option if you're following a gluten free, dairy free, whole 30, and pescatarian diet. It is brought to you by Foodista. Overall, this recipe earns a great spoonacular score of 94%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/roasted-salmon-vegetables-1312689\">Roasted Salmon & Vegetables</a>, <a href=\"https://spoonacular.com/recipes/roasted-salmon-vegetables-36765\">Roasted Salmon & Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/salmon-with-roasted-vegetables-1333407\">Salmon with roasted vegetables</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1633524792906-73b111908d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTYWxtb24lMjB3aXRoJTIwcm9hc3RlZCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzQzMDE0MjU1fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes",
        "descricao": "If you want to add more gluten free, dairy free, and whole 30 recipes to your collection, Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes might be a recipe you should try. This recipe serves 2 and costs $6.26 per serving. This main course has 733 calories, 56g of protein, and 40g of fat per serving. This recipe is liked by 14 foodies and cooks. Head to the store and pick up lemon juice, parsley leaves, parsley, and a few other things to make it today. It is perfect for Thanksgiving. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cod-stew-with-chorizo-leeks-potatoes-2655\">Cod Stew With Chorizo, Leeks & Potatoes</a>, <a href=\"https://spoonacular.com/recipes/tuna-steaks-in-spicy-tomato-sauce-with-mashed-potatoes-1204417\">Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/tuna-steaks-in-spicy-tomato-sauce-with-mashed-potatoes-668002\">Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes</a>.",
        "preco_unitario": 25,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1534099946341-34fe5ef39eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDb2QlMjB3aXRoJTIwVG9tYXRvLU9saXZlLUNob3Jpem8lMjBTYXVjZSUyMGFuZCUyME1hc2hlZCUyMFBvdGF0b2VzfGVufDB8fHx8MTc0MzAxNDI1NXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Balsamic & Honey Glazed Salmon with Lemony Asparagus",
        "descricao": "If you want to add more gluten free, dairy free, and pescatarian recipes to your recipe box, Balsamic & Honey Glazed Salmon with Lemony Asparagus might be a recipe you should try. For $4.44 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 25g of protein, 14g of fat, and a total of 301 calories. This recipe serves 2. 28 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly 1 hour. It is brought to you by Foodista. It works well as a pretty expensive main course. Head to the store and pick up juice of lemon, herbs de provence, salmon fillet, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1501683\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>, <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1614063\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>, and <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1363909\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 60,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1515624424395-231050e373d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxCYWxzYW1pYyUyMCUyNiUyMEhvbmV5JTIwR2xhemVkJTIwU2FsbW9uJTIwd2l0aCUyMExlbW9ueSUyMEFzcGFyYWd1c3xlbnwwfHx8fDE3NDMwMTQyNTV8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Instant Pot Quinoa Grain Bowl",
        "descricao": "Instant Pot Quinoa Grain Bowl might be a good recipe to expand your main course recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 416 calories, 16g of protein, and 10g of fat per serving. This recipe serves 4 and costs $3.02 per serving. From preparation to the plate, this recipe takes roughly 13 minutes. A mixture of baby brussell sprouts, broccoli, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. 1 person has made this recipe and would make it again. It is brought to you by Pink When. With a spoonacular score of 96%, this dish is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-quinoa-grain-bowl-1693765\">Instant Pot Quinoa Grain Bowl</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-sausage-cabbage-bowl-with-quinoa-or-stovetop-901463\">Instant Pot Sausage Cabbage Bowl with Quinoa (or Stovetop)</a>, and <a href=\"https://spoonacular.com/recipes/crock-pot-chicken-fajita-bowl-grain-free-paleo-1224627\">Crock Pot Chicken Fajita Bowl (Grain-Free, Paleo)</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 13,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1600025112931-e41e9a4c1a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxJbnN0YW50JTIwUG90JTIwUXVpbm9hJTIwR3JhaW4lMjBCb3dsfGVufDB8fHx8MTc0MzAxNDI1Nnww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Roasted Cauliflower Detox Bowl with Tahini Sauce",
        "descricao": "Roasted Cauliflower Detox Bowl with Tahini Sauce might be just the main course you are searching for. One serving contains 549 calories, 18g of protein, and 30g of fat. This recipe serves 2 and costs $3.06 per serving. 1 person were glad they tried this recipe. A mixture of kale leaves, garlic, ground cumin, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 50 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is awesome. <a href=\"https://spoonacular.com/recipes/quinoa-bowl-with-roasted-cauliflower-and-tahini-dressing-862308\">Quinoa Bowl with Roasted Cauliflower and Tahini Dressing</a>, <a href=\"https://spoonacular.com/recipes/quinoa-bowl-with-roasted-cauliflower-and-tahini-dressing-1667949\">Quinoa Bowl with Roasted Cauliflower and Tahini Dressing</a>, and <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-with-tahini-sauce-658541\">Roasted Cauliflower with Tahini Sauce</a> are very similar to this recipe.",
        "preco_unitario": 68,
        "tempo_preparo": 50,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Smoky Black Bean Soup With Sweet Potato & Kale",
        "descricao": "You can never have too many main course recipes, so give Smoky Black Bean Soup With Sweet Potato & Kale a try. One serving contains 555 calories, 23g of protein, and 7g of fat. This recipe serves 6. For $2.62 per serving, this recipe covers 41% of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. This recipe from Foodista requires chicken broth, onion, black beans, and salt & pepper. From preparation to the plate, this recipe takes around 10 hours and 30 minutes. It can be enjoyed any time, but it is especially good for Autumn. It is a good option if you're following a gluten free, dairy free, and lacto ovo vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-524599\">Smoky Sweet Potato and Black Bean Tacos</a>, <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-1316245\">Smoky Sweet Potato and Black Bean Tacos</a>, and <a href=\"https://spoonacular.com/recipes/sweet-and-smoky-sriracha-black-bean-soup-557795\">Sweet and Smoky Sriracha Black Bean Soup</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 630,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chorizo and Beef Quinoa Stuffed Pepper",
        "descricao": "Chorizo and Beef Quinoa Stuffed Pepper is a gluten free main course. One portion of this dish contains approximately 51g of protein, 37g of fat, and a total of 685 calories. This recipe serves 4 and costs $3.69 per serving. Plenty of people made this recipe, and 1254 would say it hit the spot. It is brought to you by Pink When. If you have bell peppers, chorizo, chili powder, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 30 minutes. With a spoonacular score of 93%, this dish is super. Similar recipes include <a href=\"https://spoonacular.com/recipes/pepper-stuffed-peppers-with-chorizo-498937\">Pepper-Stuffed Peppers with Chorizo</a>, <a href=\"https://spoonacular.com/recipes/chorizo-red-pepper-stuffed-potatoes-with-roasted-garlic-aioli-22379\">Chorizo & Red Pepper Stuffed Potatoes With Roasted Garlic Aioli</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-and-ground-turkey-stuffed-pepper-1318051\">QUINOAn AND GROUND TURKEY STUFFED PEPPER</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Coffee-braised Short Ribs",
        "descricao": "Need a gluten free and dairy free main course? Coffee-braised Short Ribs could be a great recipe to try. One portion of this dish contains approximately 74g of protein, 42g of fat, and a total of 877 calories. For $7.05 per serving, this recipe covers 64% of your daily requirements of vitamins and minerals. This recipe serves 5. 6 people have made this recipe and would make it again. A mixture of strong freshly coffee, short, brown sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 90%, which is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-492600\">Coffee-Braised Short Ribs</a>, <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-1547523\">Coffee-braised Short Ribs</a>, and <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-386092\">Coffee-Braised Short Ribs</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Herb chicken with sweet potato mash and sautéed broccoli",
        "descricao": "Herb chicken with sweet potato mash and sautéed broccoli might be a good recipe to expand your main course recipe box. One portion of this dish contains roughly 47g of protein, 25g of fat, and a total of 710 calories. For $3.13 per serving, this recipe covers 50% of your daily requirements of vitamins and minerals. This recipe serves 4. 9 people have made this recipe and would make it again. Head to the store and pick up broccoli, butter, pepper and salt, and a few other things to make it today. It is a good option if you're following a gluten free diet. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is awesome. Try <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1263701\">Herb chicken with sweet potato mash and sautéed broccoli</a>, <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1516743\">Herb chicken with sweet potato mash and sautéed broccoli</a>, and <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1337501\">Herb chicken with sweet potato mash and sautéed broccoli</a> for similar recipes.",
        "preco_unitario": 26,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chicken and Mango Skewer",
        "descricao": "Chicken and Mango Skewer takes roughly 45 minutes from beginning to end. This recipe serves 1 and costs $4.51 per serving. One portion of this dish contains about 31g of protein, 8g of fat, and a total of 479 calories. It is brought to you by Afrolems. A few people made this recipe, and 19 would say it hit the spot. A mixture of pepper, suya seasoning mix, mangos, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a pretty expensive main course. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. Overall, this recipe earns a spectacular spoonacular score of 95%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/grilled-chicken-caesar-on-a-skewer-338979\">Grilled Chicken Caesar on a Skewer</a>, <a href=\"https://spoonacular.com/recipes/thai-chicken-skewer-appetizers-with-sweet-and-spicy-chili-sauce-621582\">Thai Chicken Skewer Appetizers with Sweet and Spicy Chili Sauce</a>, and <a href=\"https://spoonacular.com/recipes/smore-skewer-bites-568008\">S’more Skewer Bites</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Turkish Chicken Salad with Home-made Cacik Yogurt Sauce",
        "descricao": "You can never have too many main course recipes, so give Turkish Chicken Salad with Home-made Cacik Yogurt Sauce a try. This recipe serves 4 and costs $4.48 per serving. Watching your figure? This gluten free recipe has 643 calories, 67g of protein, and 30g of fat per serving. 9 people found this recipe to be tasty and satisfying. Head to the store and pick up lebanese cucumber, roast chicken, garlic, and a few other things to make it today. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/spicy-lamb-kabobs-with-turkish-cacik-97380\">Spicy Lamb Kabobs With Turkish Cacik</a>, <a href=\"https://spoonacular.com/recipes/jerk-rubbed-chicken-thighs-with-home-made-mango-habanero-hot-sauce-313780\">Jerk Rubbed Chicken Thighs with Home-Made Mango-Habanero Hot Sauce</a>, and <a href=\"https://spoonacular.com/recipes/yogurt-and-cucumber-dip-cacik-891875\">Yogurt and Cucumber Dip Cacik</a>.",
        "preco_unitario": 25,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)",
        "descricao": "Need a gluten free, dairy free, paleolithic, and primal side dish? Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO) could be a great recipe to try. One portion of this dish contains around 135g of protein, 242g of fat, and a total of 3376 calories. For $4.24 per serving, this recipe covers 69% of your daily requirements of vitamins and minerals. This recipe serves 5. Head to the store and pick up sweet potatoes, roast, beef broth, and a few other things to make it today. From preparation to the plate, this recipe takes about 8 hours and 10 minutes. This recipe from Pink When has 8 fans. With a spoonacular score of 62%, this dish is pretty good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/shredded-roast-beef-stuffed-sweet-potatoes-whole-30-paleo-769774\">Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)</a>, <a href=\"https://spoonacular.com/recipes/paleo-s-chicken-stuffed-sweet-potatoes-592982\">Paleo s: Chicken Stuffed Sweet Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/paleo-shredded-slow-cooker-roast-beef-with-pumpkin-and-salsa-+-a-slow-cooker-roundup-and-giveaway-680175\">Paleo Shredded Slow Cooker Roast Beef with Pumpkin and Salsa + A Slow Cooker Roundup and GIVEAWAY</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 490,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lentil Mango Salad",
        "descricao": "Lentil Mango Salad is a main course that serves 4. One serving contains 253 calories, 12g of protein, and 6g of fat. For $1.59 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Head to the store and pick up cilantro, white wine vinegar, onion, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 94%, which is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lentil-burger-with-mango-salsa-509088\">LENTIL BURGER with Mango Salsa</a>, <a href=\"https://spoonacular.com/recipes/plumcot-orange-lentil-salad-fave-five-friday-lovely-lentil-dishes-529696\">Plumcot, Orange & Lentil Salad… & Fave Five Friday: Lovely Lentil Dishes</a>, and <a href=\"https://spoonacular.com/recipes/simple-coconut-quinoa-and-lentil-curry-with-lime-mango-705061\">Simple Coconut Quinoan and Lentil Curry with Lime Mango</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Gujarati Dry Mung Bean Curry",
        "descricao": "Gujarati Dry Mung Bean Curry takes about 45 minutes from beginning to end. This main course has 376 calories, 20g of protein, and 5g of fat per serving. This recipe serves 4 and costs $1.64 per serving. A mixture of baking powder, cumin seeds, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 3 fans. This recipe is typical of Indian cuisine. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is outstanding. <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1353775\">Gujarati Dry Mung Bean Curry</a>, <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1520647\">Gujarati Dry Mung Bean Curry</a>, and <a href=\"https://spoonacular.com/recipes/uncle-bills-mung-bean-curry-1283881\">Uncle Bill's Mung Bean Curry</a> are very similar to this recipe.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Moosewood Lentil Soup",
        "descricao": "Moosewood Lentil Soup might be a good recipe to expand your main course recipe box. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs 74 cents per serving. One portion of this dish contains roughly 26g of protein, 4g of fat, and a total of 396 calories. A mixture of pepper, lentils, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people found this recipe to be flavorful and satisfying. It is perfect for Autumn. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/moosewood-lentil-soup-1319699\">Moosewood Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/moosewood-mushroom-barley-soup-143909\">Moosewood Mushroom Barley Soup!</a>, and <a href=\"https://spoonacular.com/recipes/hungarian-mushroom-soup-from-the-moosewood-cookbook-143242\">Hungarian Mushroom Soup, from the Moosewood Cookbook</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Crispy Panko and Herb Crusted Salmon",
        "descricao": "Crispy Panko and Herb Crusted Salmon takes around 45 minutes from beginning to end. For $4.16 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. This recipe serves 6. One serving contains 390 calories, 33g of protein, and 22g of fat. This recipe from Foodista has 4 fans. If you have lemon zest, extra virgin olive oil, bell pepper, and a few other ingredients on hand, you can make it. It works well as a main course. It is a good option if you're following a dairy free and pescatarian diet. With a spoonacular score of 93%, this dish is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/dijon-and-herb-panko-crusted-halibut-497157\">Dijon and Herb Panko-Crusted Halibut</a>, <a href=\"https://spoonacular.com/recipes/mustard-herb-panko-crusted-chicken-breasts-497256\">Mustard-Herb Panko Crusted Chicken Breasts</a>, and <a href=\"https://spoonacular.com/recipes/panko-herb-crusted-rack-of-lamb-with-vegetables-628109\">Panko Herb Crusted Rack of Lamb with Vegetables</a>.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cilantro Lime Halibut",
        "descricao": "Cilantro Lime Halibut might be a good recipe to expand your main course recipe box. This recipe serves 2. One portion of this dish contains roughly 44g of protein, 22g of fat, and a total of 422 calories. For $8.81 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe from Foodista requires chicken stock, juice of lime, green onions, and salt and pepper. 19 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. Overall, this recipe earns an outstanding spoonacular score of 95%. Similar recipes are <a href=\"https://spoonacular.com/recipes/cilantro-ginger-halibut-1281969\">Cilantro-Ginger Halibut</a>, <a href=\"https://spoonacular.com/recipes/cilantro-ginger-halibut-86400\">Cilantro-Ginger Halibut</a>, and <a href=\"https://spoonacular.com/recipes/halibut-with-citrus-and-cilantro-3296\">Halibut With Citrus And Cilantro</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spinach and Gorgonzola Stuffed Flank Steak",
        "descricao": "Spinach and Gorgonzola Stuffed Flank Steak might be just the main course you are searching for. For $4.27 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 47g of protein, 28g of fat, and a total of 523 calories. This recipe serves 4. 9 people found this recipe to be tasty and satisfying. It is perfect for valentin day. If you have gorgonzola, olive oil, shallot, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/bruce-aidells-spinach-and-gorgonzola-stuffed-flank-steak-202812\">Bruce Aidells' Spinach and Gorgonzola-Stuffed Flank Steak</a>, <a href=\"https://spoonacular.com/recipes/spinach-stuffed-flank-steak-19875\">Spinach-stuffed Flank Steak</a>, and <a href=\"https://spoonacular.com/recipes/spinach-and-carrot-stuffed-flank-steak-156209\">Spinach and Carrot Stuffed Flank Steak</a>.",
        "preco_unitario": 62,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Slow Cooker Chicken Taco Soup",
        "descricao": "Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Slow Cooker Chicken Taco Soup at home. One portion of this dish contains about 24g of protein, 4g of fat, and a total of 312 calories. This gluten free and dairy free recipe serves 6 and costs $1.41 per serving. 2182 people have tried and liked this recipe. It works well as a main course. If you have black beans, chili beans, canned tomatoes, and a few other ingredients on hand, you can make it. It is perfect for Autumn. From preparation to the plate, this recipe takes around 8 hours and 5 minutes. It is brought to you by Pink When. Overall, this recipe earns an awesome spoonacular score of 95%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1399115\">Slow Cooker Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1228993\">Slow Cooker Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1369307\">Slow Cooker Chicken Taco Soup</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 485,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Shrimp and Avocado Salad",
        "descricao": "Need a gluten free, dairy free, and pescatarian main course? Shrimp and Avocado Salad could be an awesome recipe to try. This recipe serves 4 and costs $11.57 per serving. One portion of this dish contains about 34g of protein, 37g of fat, and a total of 639 calories. From preparation to the plate, this recipe takes about 45 minutes. This recipe is liked by 8 foodies and cooks. This recipe from Foodista requires the shrimp, salt and pepper, garlic cloves, and the dressing. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-584558\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1236119\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, and <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1219445\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Salmon Quinoa Risotto",
        "descricao": "Salmon Quinoa Risotto might be just the main course you are searching for. One serving contains 437 calories, 25g of protein, and 20g of fat. This recipe serves 4. For $3.83 per serving, this recipe covers 43% of your daily requirements of vitamins and minerals. Head to the store and pick up quinoa, poached salmon, olive oil, and a few other things to make it today. It is a good option if you're following a gluten free, dairy free, and pescatarian diet. It is a rather expensive recipe for fans of Mediterranean food. 3 people found this recipe to be yummy and satisfying. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Overall, this recipe earns an outstanding spoonacular score of 94%. Similar recipes include <a href=\"https://spoonacular.com/recipes/salmon-quinoa-risotto-1360771\">Salmon Quinoa Risotto</a>, <a href=\"https://spoonacular.com/recipes/salmon-quinoa-risotto-1288579\">Salmon Quinoa Risotto</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-risotto-with-salmon-and-kale-15276\">Quinoa Risotto With Salmon And Kale</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad",
        "descricao": "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad is a gluten free and dairy free main course. This recipe serves 6 and costs $3.06 per serving. One serving contains 364 calories, 31g of protein, and 15g of fat. If you have scallions, pepper, kosher salt, and a few other ingredients on hand, you can make it. This recipe from Foodista has 3 fans. Not a lot of people really liked this Chinese dish. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 94%, this dish is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-1364955\">Gluten Free Dairy Free Sugar Free Chinese Chicken Salad</a>, <a href=\"https://spoonacular.com/recipes/thousand-island-dressing-gluten-free-corn-free-dairy-free-soy-free-nut-free-gum-free-and-refined-sugar-free-512186\">Thousand Island Dressing (Gluten-Free, Corn-Free, Dairy-Free, Soy-Free, Nut-Free, Gum-Free and Refined Sugar-Free)</a>, and <a href=\"https://spoonacular.com/recipes/skinny-double-chocolate-muffins-vegan-gluten-free-dairy-free-egg-free-and-refined-sugar-free-1149614\">Skinny Double Chocolate Muffins-Vegan, Gluten Free, Dairy Free, Egg Free and Refined Sugar Free</a>.",
        "preco_unitario": 25,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Easy Instant Pot Beef Tips and Rice",
        "descricao": "Easy Instant Pot Beef Tips and Rice takes around 30 minutes from beginning to end. Watching your figure? This gluten free and dairy free recipe has 371 calories, 53g of protein, and 11g of fat per serving. This recipe serves 4 and costs $2.2 per serving. 25 people have made this recipe and would make it again. Head to the store and pick up dale's seasoning sauce, onion, olive oil, and a few other things to make it today. It works well as a main course. It is brought to you by Pink When. Overall, this recipe earns a super spoonacular score of 93%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-beef-tips-1143238\">Instant Pot Beef Tips</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-beef-tips-1536157\">Instant Pot Beef Tips</a>, and <a href=\"https://spoonacular.com/recipes/instant-pot-red-wine-beef-tips-974803\">Instant Pot Red Wine Beef Tips</a>.",
        "preco_unitario": 55,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Venison Stew",
        "descricao": "Venison Stew is a dairy free main course. This recipe serves 7. One serving contains 316 calories, 32g of protein, and 7g of fat. For $2.02 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for Autumn. 3 people found this recipe to be tasty and satisfying. Head to the store and pick up venison stew meat, baby carrots, bell pepper, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is tremendous. Similar recipes include <a href=\"https://spoonacular.com/recipes/venison-bourguignon-venison-stew-147886\">Venison Bourguignon (Venison Stew)</a>, <a href=\"https://spoonacular.com/recipes/venison-stew-629599\">Venison Stew</a>, and <a href=\"https://spoonacular.com/recipes/venison-stew-404173\">Venison Stew</a>.",
        "preco_unitario": 32,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony \"Caviar\" Dressing",
        "descricao": "Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony \"Caviar\" Dressing might be a good recipe to expand your main course recipe box. One portion of this dish contains approximately 27g of protein, 29g of fat, and a total of 440 calories. This recipe serves 4 and costs $4.28 per serving. A mixture of white wine, baby beets, watercress, and a handful of other ingredients are all it takes to make this recipe so delicious. Not a lot of people made this recipe, and 4 would say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. With a spoonacular score of 95%, this dish is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/wild-rice-baby-beetroot-beef-kofta-salad-ft-love-beets-baby-beetroot-494268\">Wild Rice, Baby Beetroot & Beef Kofta Salad (ft. Love Beets Baby Beetroot)</a>, <a href=\"https://spoonacular.com/recipes/poached-salmon-and-watercress-salad-with-dill-yogurt-dressing-14170\">Poached Salmon and Watercress Salad with Dill-Yogurt Dressing</a>, and <a href=\"https://spoonacular.com/recipes/beetroot-red-apple-and-watercress-salad-9732\">Beetroot, Red Apple And Watercress Salad</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Ground Turkey Stuffed Peppers",
        "descricao": "Ground Turkey Stuffed Peppers might be just the main course you are searching for. Watching your figure? This gluten free recipe has 463 calories, 34g of protein, and 17g of fat per serving. This recipe serves 4 and costs $3.0 per serving. 112 people were glad they tried this recipe. A mixture of bell peppers, garlic, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 94%, which is spectacular. Try <a href=\"https://spoonacular.com/recipes/ground-turkey-stuffed-peppers-1311407\">Ground Turkey Stuffed Peppers</a>, <a href=\"https://spoonacular.com/recipes/ground-turkey-stuffed-peppers-1227903\">Ground Turkey Stuffed Peppers</a>, and <a href=\"https://spoonacular.com/recipes/ground-turkey-stuffed-peppers-1353987\">Ground Turkey Stuffed Peppers</a> for similar recipes.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Brown Butter Twice Baked Sweet Potatoes",
        "descricao": "The recipe Brown Butter Twice Baked Sweet Potatoes can be made in about 1 hour and 35 minutes. Watching your figure? This gluten free and primal recipe has 677 calories, 19g of protein, and 44g of fat per serving. This recipe serves 4 and costs $3.56 per serving. 8242 people have tried and liked this recipe. This recipe from Pink When requires goat's cheese, sweet potatoes, bacon, and butter. It works well as a main course. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is super. Similar recipes include <a href=\"https://spoonacular.com/recipes/twice-baked-sweet-potatoes-with-brown-sugar-pecans-489041\">Twice Baked Sweet Potatoes {with Brown Sugar & Pecans}</a>, <a href=\"https://spoonacular.com/recipes/maple-brown-butter-mashed-sweet-potatoes-828414\">Maple Brown Butter Mashed Sweet Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/maple-brown-butter-roasted-sweet-potatoes-1571611\">Maple Brown Butter Roasted Sweet Potatoes</a>.",
        "preco_unitario": 59,
        "tempo_preparo": 95,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Rice and Peas with Coconut Curry Mackerel",
        "descricao": "Rice and Peas with Coconut Curry Mackerel could be just the gluten free and dairy free recipe you've been looking for. For $2.44 per serving, you get a main course that serves 4. One serving contains 625 calories, 31g of protein, and 34g of fat. This recipe from Afrolems has 26 fans. From preparation to the plate, this recipe takes around 45 minutes. If you have coconut milk, corn starch, garlic, and a few other ingredients on hand, you can make it. A couple people really liked this Indian dish. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/rice-and-peas-with-coconut-curry-mackerel-1585999\">Rice and Peas with Coconut Curry Mackerel</a>, <a href=\"https://spoonacular.com/recipes/coconut-chicken-curry-with-snow-peas-and-rice-1213727\">Coconut Chicken Curry with Snow Peas and Rice</a>, and <a href=\"https://spoonacular.com/recipes/black-eyed-peas-curry-with-coconut-lobia-curry-600742\">Black Eyed Peas Curry (With Coconut) (Lobia Curry)</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "4 Ingredient Chicken Pot Pie",
        "descricao": "4 Ingredient Chicken Pot Pie might be a good recipe to expand your main course recipe box. This recipe serves 6 and costs $4.41 per serving. One serving contains 802 calories, 79g of protein, and 30g of fat. Head to the store and pick up pie crust, campbell's chicken gravy, cans swanson premium chicken breast in water, and a few other things to make it today. It is a good option if you're following a dairy free diet. 24 people have tried and liked this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/instant-pot-5-ingredient-chicken-tacos-885703\">Instant Pot 5-Ingredient Chicken Tacos</a>, <a href=\"https://spoonacular.com/recipes/5-ingredient-crock-pot-mexican-shredded-chicken-1724689\">5-Ingredient Crock Pot Mexican Shredded Chicken</a>, and <a href=\"https://spoonacular.com/recipes/4-ingredient-mini-chicken-pot-pies-simple-meals-616029\">4-Ingredient Mini Chicken Pot Pies | Simple Meals</a> for similar recipes.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Penne Arrabiata",
        "descricao": "If you have about 45 minutes to spend in the kitchen, Penne Arrabiata might be an outstanding dairy free, lacto ovo vegetarian, and vegan recipe to try. One serving contains 466 calories, 15g of protein, and 9g of fat. For $1.05 per serving, you get a main course that serves 4. A mixture of tomato, peppers, pkt penne, and a handful of other ingredients are all it takes to make this recipe so scrumptious. 2 people found this recipe to be tasty and satisfying. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 94%, which is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/penne-arrabiata-1364589\">Penne Arrabiata</a>, <a href=\"https://spoonacular.com/recipes/penne-arrabiata-1511023\">Penne Arrabiata</a>, and <a href=\"https://spoonacular.com/recipes/penne-arrabiata-1223947\">Penne Arrabiata</a>.",
        "preco_unitario": 35,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Delicious Creamy Lentils and Chestnuts Soup",
        "descricao": "Delicious Creamy Lentils and Chestnuts Soup takes approximately 30 minutes from beginning to end. This recipe serves 4. For 80 cents per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 452 calories, 20g of protein, and 15g of fat per serving. Only a few people made this recipe, and 1 would say it hit the spot. If you have olive oil, roasted chestnuts, salt and pepper, and a few other ingredients on hand, you can make it. It works well as a very budget friendly main course for Autumn. It is brought to you by Foodista. Overall, this recipe earns an outstanding spoonacular score of 94%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/creamy-spinach-dip-with-water-chestnuts-1115011\">Creamy Spinach Dip with Water Chestnuts</a>, <a href=\"https://spoonacular.com/recipes/creamy-vegan-mushroom-tartlets-with-chestnuts-1061297\">Creamy Vegan Mushroom Tartlets with Chestnuts</a>, and <a href=\"https://spoonacular.com/recipes/pumpkin-soup-with-cranberry-compote-and-roasted-chestnuts-24116\">Pumpkin Soup With Cranberry Compote And Roasted Chestnuts</a>.",
        "preco_unitario": 63,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chimichurri Skirt Steak with Grilled Asparagus",
        "descricao": "If you want to add more gluten free, dairy free, paleolithic, and primal recipes to your collection, Chimichurri Skirt Steak with Grilled Asparagus might be a recipe you should try. For $4.9 per serving, you get a main course that serves 4. One portion of this dish contains around 27g of protein, 30g of fat, and a total of 409 calories. This recipe is liked by 11 foodies and cooks. Head to the store and pick up pepper, chili pepper flakes, to 5 garlic cloves, and a few other things to make it today. From preparation to the plate, this recipe takes around 45 minutes. A couple people really liked this Latin American dish. The Fourth Of July will be even more special with this recipe. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is great. <a href=\"https://spoonacular.com/recipes/chimichurri-skirt-steak-with-grilled-asparagus-1356875\">Chimichurri Skirt Steak with Grilled Asparagus</a>, <a href=\"https://spoonacular.com/recipes/chimichurri-skirt-steak-with-grilled-asparagus-1345089\">Chimichurri Skirt Steak with Grilled Asparagus</a>, and <a href=\"https://spoonacular.com/recipes/chimichurri-skirt-steak-with-grilled-asparagus-1352361\">Chimichurri Skirt Steak with Grilled Asparagus</a> are very similar to this recipe.",
        "preco_unitario": 66,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Peppery Absorption-Cooked Red-Wine Capellini",
        "descricao": "Peppery Absorption-Cooked Red-Wine Capellini is a dairy free recipe with 4 servings. One serving contains 681 calories, 21g of protein, and 13g of fat. For $3.94 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. 4 people were impressed by this recipe. It works well as a pretty expensive main course. It is brought to you by Foodista. If you have cayenne pepper, flat parsley leaves, half alarge onion, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/slow-cooked-lamb-shanks-in-red-wine-1244493\">Slow Cooked Lamb Shanks in Red Wine</a>, <a href=\"https://spoonacular.com/recipes/slow-cooked-lamb-shanks-in-red-wine-97369\">Slow Cooked Lamb Shanks in Red Wine</a>, and <a href=\"https://spoonacular.com/recipes/peposo-slow-cooked-peppery-veal-stew-57652\">Peposo - Slow Cooked, Peppery Veal Stew</a>.",
        "preco_unitario": 64,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Easy Tabouleh",
        "descricao": "If you want to add more dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Easy Tabouleh might be a recipe you should try. This main course has 717 calories, 14g of protein, and 44g of fat per serving. This recipe serves 1 and costs $4.64 per serving. From preparation to the plate, this recipe takes around 45 minutes. 2 people were impressed by this recipe. It is a pretty expensive recipe for fans of middl eastern food. This recipe from Foodista requires bulgur, olive oil, flat leaf parsley, and salt. Taking all factors into account, this recipe earns a spoonacular score of 93%, which is spectacular. <a href=\"https://spoonacular.com/recipes/easy-tabouleh-1254441\">Easy Tabouleh</a>, <a href=\"https://spoonacular.com/recipes/tabouleh-1277007\">Tabouleh</a>, and <a href=\"https://spoonacular.com/recipes/tabouleh-1215825\">Tabouleh</a> are very similar to this recipe.",
        "preco_unitario": 33,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Winter Fattoush Salad",
        "descricao": "If you want to add more middl eastern recipes to your repertoire, Winter Fattoush Salad might be a recipe you should try. This main course has 345 calories, 17g of protein, and 9g of fat per serving. This lacto ovo vegetarian recipe serves 6 and costs $1.23 per serving. 1 person found this recipe to be scrumptious and satisfying. This recipe from Foodista requires ground sumac, feta cheese, lacinato kale leaves, and garlic. It will be a hit at your Winter event. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 93%, this dish is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/winter-fattoush-salad-627160\">Winter Fattoush Salad</a>, <a href=\"https://spoonacular.com/recipes/fattoush-salad-527955\">Fattoush Salad</a>, and <a href=\"https://spoonacular.com/recipes/fattoush-salad-670110\">Fattoush Salad</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cauliflower Chickpea Stew",
        "descricao": "The recipe Cauliflower Chickpea Stew can be made in roughly 45 minutes. One portion of this dish contains about 14g of protein, 8g of fat, and a total of 455 calories. For $1.4 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe serves 4. It can be enjoyed any time, but it is especially good for Autumn. 2 people have tried and liked this recipe. If you have chili, onion, tumeric, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. It works well as a main course. With a spoonacular score of 92%, this dish is amazing. Try <a href=\"https://spoonacular.com/recipes/cauliflower-chickpea-stew-1364601\">Cauliflower Chickpea Stew</a>, <a href=\"https://spoonacular.com/recipes/spicy-cauliflower-and-chickpea-stew-30449\">Spicy Cauliflower And Chickpea Stew</a>, and <a href=\"https://spoonacular.com/recipes/curried-cauliflower-and-chickpea-stew-30518\">Curried Cauliflower And Chickpea Stew</a> for similar recipes.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "How to Make the Perfect Sweet Potato Sloppy Joes",
        "descricao": "The recipe How to Make the Perfect Sweet Potato Sloppy Joes is ready in roughly 40 minutes and is definitely a super gluten free, dairy free, paleolithic, and primal option for lovers of American food. This recipe serves 4. This main course has 679 calories, 49g of protein, and 18g of fat per serving. For $4.82 per serving, this recipe covers 46% of your daily requirements of vitamins and minerals. This recipe from Pink When has 11 fans. Head to the store and pick up salt and pepper, garlic, ground turkey, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/how-to-make-the-perfect-sweet-potato-sloppy-joes-1363971\">How to Make the Perfect Sweet Potato Sloppy Joes</a>, <a href=\"https://spoonacular.com/recipes/just-perfect-sloppy-joes-82826\">Just Perfect Sloppy Joes</a>, and <a href=\"https://spoonacular.com/recipes/how-to-make-classic-sloppy-joes-471307\">How to Make Classic Sloppy Joes</a>.",
        "preco_unitario": 68,
        "tempo_preparo": 40,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chicken Suya",
        "descricao": "The recipe Chicken Suya can be made in roughly 45 minutes. This recipe serves 1 and costs $1.67 per serving. One serving contains 564 calories, 44g of protein, and 35g of fat. This recipe from Afrolems requires suya spice, chicken, chilli powder, and seasoning cubes. It works well as a main course. 56 people have made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, whole 30, and ketogenic diet. Overall, this recipe earns a solid spoonacular score of 79%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/suya-nigerian-chicken-skewers-113497\">Suya (Nigerian Chicken Skewers)</a>, <a href=\"https://spoonacular.com/recipes/suya-swordfish-6571\">Suya Swordfish</a>, and <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1224321\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>.",
        "preco_unitario": 32,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Pasta With Tuna",
        "descricao": "Pasta With Tunan is a pescatarian main course. This recipe serves 4. For $1.68 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. One serving contains 423 calories, 24g of protein, and 10g of fat. 2 people have made this recipe and would make it again. This recipe from Foodista requires flour, parsley, non-fat milk, and parmesan cheese. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is amazing. <a href=\"https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303\">Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, <a href=\"https://spoonacular.com/recipes/tuna-pasta-565100\">Tuna Pasta</a>, and <a href=\"https://spoonacular.com/recipes/tuna-pasta-89136\">Tuna Pasta</a> are very similar to this recipe.",
        "preco_unitario": 35,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Crab Stacks",
        "descricao": "Crab Stacks is a gluten free, dairy free, and pescatarian main course. This recipe serves 3 and costs $6.46 per serving. One portion of this dish contains about 56g of protein, 26g of fat, and a total of 730 calories. 2 people have tried and liked this recipe. It is brought to you by Foodista. Head to the store and pick up roma tomato, quinoa, orange juice, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/crab-stacks-1396277\">Crab Stacks</a>, <a href=\"https://spoonacular.com/recipes/crab-savoury-baked-crab-with-bread-crumbs-and-cheese-202821\">Crab Savoury (Baked Crab with Bread Crumbs and Cheese)</a>, and <a href=\"https://spoonacular.com/recipes/crab-rangoons-crab-puffs-with-sweet-and-sour-sauce-196339\">Crab Rangoons (Crab Puffs) With Sweet and Sour Sauce</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash Tofu Salad With Toasted Hazelnuts",
        "descricao": "Butternut Squash Tofu Salad With Toasted Hazelnuts takes roughly 45 minutes from beginning to end. For $1.55 per serving, you get a main course that serves 4. One serving contains 261 calories, 13g of protein, and 11g of fat. 1 person has made this recipe and would make it again. Head to the store and pick up onions, lemon juice, bell pepper, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Taking all factors into account, this recipe earns a spoonacular score of 93%, which is amazing. <a href=\"https://spoonacular.com/recipes/butternut-squash-noodles-with-toasted-hazelnuts-and-crispy-sage-618126\">Butternut Squash Noodles with Toasted Hazelnuts and Crispy Sage</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-salad-with-hazelnuts-9085\">Butternut Squash Salad with Hazelnuts</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-salad-with-pomegranates-and-toasted-pumpkin-seeds-24823\">Butternut Squash Salad With Pomegranates And Toasted Pumpkin Seeds</a> are very similar to this recipe.",
        "preco_unitario": 20,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Turkey and Rice Stuffed Acorn Squash",
        "descricao": "Turkey and Rice Stuffed Acorn Squash is a main course that serves 6. One portion of this dish contains approximately 29g of protein, 10g of fat, and a total of 411 calories. For $2.95 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. A mixture of olive oil, bread crumbs, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. 35 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a dairy free diet. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 93%, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/turkey-and-rice-stuffed-acorn-squash-1212335\">Turkey and Rice Stuffed Acorn Squash</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-noodle-turkey-bolognese-stuffed-acorn-squash-with-melted-gruyere-two-ways-1253607\">Butternut Squash Noodle Turkey Bolognese Stuffed Acorn Squash with Melted Gruyere: Two Ways</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-noodle-turkey-bolognese-stuffed-acorn-squash-with-melted-gruyere-two-ways-563828\">Butternut Squash Noodle Turkey Bolognese Stuffed Acorn Squash with Melted Gruyere: Two Ways</a>.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Stuffed Artichoke Main Dish",
        "descricao": "Stuffed Artichoke Main Dish is a gluten free recipe with 2 servings. One portion of this dish contains approximately 56g of protein, 9g of fat, and a total of 500 calories. For $3.58 per serving, this recipe covers 41% of your daily requirements of vitamins and minerals. This recipe from Foodista requires mozzarella cheese, chicken breasts, garlic, and parmesan. 18 people have tried and liked this recipe. A few people really liked this main course. From preparation to the plate, this recipe takes approximately 1 hour. With a spoonacular score of 95%, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/main-dish-minestrone-167120\">Main-Dish Minestrone</a>, <a href=\"https://spoonacular.com/recipes/main-dish-shrimp-salad-421296\">Main-Dish Shrimp Salad</a>, and <a href=\"https://spoonacular.com/recipes/tuna-noodle-main-dish-410596\">Tuna Noodle Main Dish</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 60,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Instant Pot Chicken Taco Soup",
        "descricao": "Need a gluten free and dairy free main course? Instant Pot Chicken Taco Soup could be an excellent recipe to try. One portion of this dish contains approximately 25g of protein, 8g of fat, and a total of 346 calories. This recipe serves 4 and costs $2.72 per serving. Head to the store and pick up chili powder, black beans, green onion, and a few other things to make it today. It is brought to you by Pink When. 3 people were impressed by this recipe. It will be a hit at your Autumn event. Only a few people really liked this Mexican dish. From preparation to the plate, this recipe takes approximately 25 minutes. With a spoonacular score of 92%, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-975070\">Instant Pot Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1351299\">Instant Pot Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1032489\">Instant Pot Chicken Taco Soup</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 25,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spinach, Tomato & Onion Couscous",
        "descricao": "You can never have too many main course recipes, so give Spinach, Tomato & Onion Couscous a try. One serving contains 565 calories, 18g of protein, and 24g of fat. This recipe serves 3. For $3.61 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. 8 people were impressed by this recipe. It is a good option if you're following a lacto ovo vegetarian diet. Head to the store and pick up spinach, olive oil, onion, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 91%. This score is spectacular. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/roasted-garlic-couscous-with-tomatoes-dill-onion-and-spinach-497176\">Roasted Garlic Couscous with Tomatoes, Dill, Onion, and Spinach</a>, <a href=\"https://spoonacular.com/recipes/feta-and-green-onion-couscous-cakes-over-tomato-olive-salad-133311\">Fetan and Green Onion Couscous Cakes over Tomato-Olive Salad</a>, and <a href=\"https://spoonacular.com/recipes/lamb-chops-with-spinach-tomato-couscous-494031\">Lamb Chops with Spinach Tomato Couscous</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Curried Chickpeas and Vegetables",
        "descricao": "Curried Chickpeas and Vegetables takes about 45 minutes from beginning to end. This recipe makes 2 servings with 448 calories, 15g of protein, and 11g of fat each. For $2.05 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. A mixture of veggies, potatoes, onion, and a handful of other ingredients are all it takes to make this recipe so tasty. 1 person has tried and liked this recipe. It is brought to you by Foodista. It works well as a main course. It is a good option if you're following a gluten free and dairy free diet. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/curried-vegetables-and-chickpeas-31356\">Curried Vegetables And Chickpeas</a>, <a href=\"https://spoonacular.com/recipes/curried-chickpeas-with-spinach-951559\">Curried Chickpeas with Spinach</a>, and <a href=\"https://spoonacular.com/recipes/curried-chickpeas-with-spinach-1587847\">Curried Chickpeas with Spinach</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Homemade Broccoli Cheddar Soup",
        "descricao": "Homemade Broccoli Cheddar Soup could be just the gluten free recipe you've been looking for. One serving contains 498 calories, 22g of protein, and 24g of fat. For $3.25 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe from Foodista requires almond milk, pepper, juice of lemon, and bay leaf. It will be a hit at your Autumn event. 17 people have tried and liked this recipe. It works best as a main course, and is done in roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/cheddar-broccoli-potato-soup-with-homemade-herb-croutons-835630\">Cheddar Broccoli Potato Soup with Homemade Herb Croutons</a>, <a href=\"https://spoonacular.com/recipes/broccoli-cheddar-soup-484964\">Broccoli Cheddar Soup</a>, and <a href=\"https://spoonacular.com/recipes/cheddar-broccoli-soup-1315375\">Cheddar Broccoli Soup</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Italian Tuna Pasta",
        "descricao": "Italian Tuna Pastan is a Mediterranean main course. Watching your figure? This dairy free and pescatarian recipe has 464 calories, 38g of protein, and 3g of fat per serving. For $2.09 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 3. 1 person found this recipe to be yummy and satisfying. From preparation to the plate, this recipe takes around 20 minutes. It is brought to you by Foodista. A mixture of chillies, pasta shells, juice of lemon, and a handful of other ingredients are all it takes to make this recipe so tasty. Taking all factors into account, this recipe earns a spoonacular score of 93%, which is excellent. Try <a href=\"https://spoonacular.com/recipes/italian-tuna-pasta-salad-413394\">Italian Tuna Pasta Salad</a>, <a href=\"https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303\">Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, and <a href=\"https://spoonacular.com/recipes/raw-tomato-sauce-for-pasta-the-italian-pasta-alla-crudaiola-1530081\">Raw tomato sauce for pasta, the Italian pastan alla crudaiola</a> for similar recipes.",
        "preco_unitario": 38,
        "tempo_preparo": 20,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Soy Ginger Glazed Halibut with Ginger Peach Relish",
        "descricao": "Soy Ginger Glazed Halibut with Ginger Peach Relish requires about 45 minutes from start to finish. Watching your figure? This gluten free, dairy free, and pescatarian recipe has 382 calories, 49g of protein, and 10g of fat per serving. For $9.02 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. This recipe serves 2. If you have olive oil, ginger, halibut fillets, and a few other ingredients on hand, you can make it. It works well as a main course. 58 people have tried and liked this recipe. It is brought to you by Foodista. Overall, this recipe earns an excellent spoonacular score of 93%. <a href=\"https://spoonacular.com/recipes/halibut-with-soy-ginger-dressing-3309\">Halibut with Soy-Ginger Dressing</a>, <a href=\"https://spoonacular.com/recipes/halibut-with-pineapple-soy-ginger-sauce-a-le-creuset-giveaway-606037\">Halibut with Pineapple Soy Ginger Sauce + a Le Creuset Giveaway</a>, and <a href=\"https://spoonacular.com/recipes/ginger-soy-glazed-salmon-482419\">Ginger Soy Glazed Salmon</a> are very similar to this recipe.",
        "preco_unitario": 20,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Baked Ratatouille",
        "descricao": "Baked Ratatouille takes approximately 45 minutes from beginning to end. This recipe makes 1 servings with 1029 calories, 32g of protein, and 70g of fat each. For $8.61 per serving, this recipe covers 63% of your daily requirements of vitamins and minerals. It works well as a main course. This recipe is typical of Mediterranean cuisine. If you have eggplant, bell peppers, olive oil, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, lacto ovo vegetarian, and primal diet. It is brought to you by Foodista. 2 people were glad they tried this recipe. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/baked-ratatouille-432644\">Baked Ratatouille</a>, <a href=\"https://spoonacular.com/recipes/baked-ratatouille-106358\">Baked Ratatouille</a>, and <a href=\"https://spoonacular.com/recipes/baked-ratatouille-1379565\">Baked Ratatouille</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Baked Rigatoni",
        "descricao": "Need a lacto ovo vegetarian main course? Baked Rigatoni could be a spectacular recipe to try. One serving contains 481 calories, 25g of protein, and 10g of fat. This recipe serves 6. For $1.86 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. 3 people have made this recipe and would make it again. A mixture of broccoli flowerets, basil, vegetable burger crumbles, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a spectacular spoonacular score of 93%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/rigatoni-al-forno-baked-rigatoni-with-roasted-asparagus-and-on-115058\">Rigatoni Al Forno (Baked Rigatoni) with Roasted Asparagus and On</a>, <a href=\"https://spoonacular.com/recipes/baked-rigatoni-76933\">Baked Rigatoni</a>, and <a href=\"https://spoonacular.com/recipes/baked-rigatoni-408338\">Baked Rigatoni</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "North by Northwest Couscous Salad",
        "descricao": "The recipe North by Northwest Couscous Salad can be made in roughly 30 minutes. One portion of this dish contains about 17g of protein, 32g of fat, and a total of 636 calories. For $2.29 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. This recipe serves 4. A mixture of lemon zest, kosher salt, garbanzo beans, and a handful of other ingredients are all it takes to make this recipe so yummy. 1 person found this recipe to be flavorful and satisfying. It works well as a reasonably priced main course. It is brought to you by Foodista. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is awesome. Similar recipes are <a href=\"https://spoonacular.com/recipes/north-african-couscous-and-pomegranate-salad-22565\">North African Couscous And Pomegranate Salad</a>, <a href=\"https://spoonacular.com/recipes/north-african-chicken-and-couscous-232861\">North African Chicken and Couscous</a>, and <a href=\"https://spoonacular.com/recipes/traditional-north-african-couscous-the-real-way-98130\">Traditional North African Couscous (The Real Way!)</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Basil Infused Balsamic Oven Baked Chicken",
        "descricao": "Need a gluten free and primal main course? Basil Infused Balsamic Oven Baked Chicken could be an outstanding recipe to try. One serving contains 544 calories, 56g of protein, and 30g of fat. This recipe serves 1 and costs $3.14 per serving. 115 people found this recipe to be scrumptious and satisfying. Head to the store and pick up balsamic vinegar, chicken breast, m zarella cheese, and a few other things to make it today. It is brought to you by Pink When. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns an excellent spoonacular score of 93%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/balsamic-citrus-infused-chicken-84033\">Balsamic Citrus Infused Chicken</a>, <a href=\"https://spoonacular.com/recipes/oven-baked-pork-chops-with-raspberry-balsamic-sauce-1106985\">Oven Baked Pork Chops with Raspberry Balsamic Sauce</a>, and <a href=\"https://spoonacular.com/recipes/whole-chicken-baked-in-a-thyme-infused-salt-crust-254970\">Whole Chicken Baked in a Thyme Infused Salt Crust</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Farro salad with parsley pesto",
        "descricao": "Farro salad with parsley pesto might be just the main course you are searching for. One portion of this dish contains around 12g of protein, 20g of fat, and a total of 412 calories. This recipe serves 2. For $2.8 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe from Foodista requires balsamic vinegar, pepper, sunflower seeds, and flat leaf parsley. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is spectacular. <a href=\"https://spoonacular.com/recipes/parsley-farro-salad-708040\">Parsley-Farro Salad</a>, <a href=\"https://spoonacular.com/recipes/pecan-pesto-farro-salad-1138364\">Pecan Pesto Farro Salad</a>, and <a href=\"https://spoonacular.com/recipes/farro-fresh-mozzarella-salad-with-arugula-walnut-pesto-8786\">Farro & Fresh Mozzarella Salad With Arugula Walnut Pesto</a> are very similar to this recipe.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lentil Rice Soup",
        "descricao": "You can never have too many main course recipes, so give Lentil Rice Soup a try. This recipe makes 10 servings with 204 calories, 13g of protein, and 1g of fat each. For 41 cents per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. It will be a hit at your Autumn event. Head to the store and pick up lentils, pepper, vegetable stock, and a few other things to make it today. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Overall, this recipe earns an outstanding spoonacular score of 90%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/rice-and-lentil-soup-in-a-jar-456429\">Rice and Lentil Soup in a Jar</a>, <a href=\"https://spoonacular.com/recipes/lentil-and-brown-rice-soup-33896\">Lentil And Brown Rice Soup</a>, and <a href=\"https://spoonacular.com/recipes/brown-rice-lentil-and-spinach-soup-19780\">Brown Rice, Lentil, And Spinach Soup</a>.",
        "preco_unitario": 36,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "One Pot Veggie Quinoa",
        "descricao": "One Pot Veggie Quinoa takes around 45 minutes from beginning to end. Watching your figure? This gluten free and lacto ovo vegetarian recipe has 439 calories, 18g of protein, and 19g of fat per serving. This recipe serves 4. For $2.43 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. It is brought to you by Foodista. If you have peppers, garlic, water, and a few other ingredients on hand, you can make it. It works well as a main course. With a spoonacular score of 93%, this dish is outstanding. Similar recipes are <a href=\"https://spoonacular.com/recipes/one-pot-veggie-quinoa-1285235\">One Pot Veggie Quinoa</a>, <a href=\"https://spoonacular.com/recipes/one-pot-veggie-quinoa-1245897\">One Pot Veggie Quinoa</a>, and <a href=\"https://spoonacular.com/recipes/veggie-wraps-with-quinoa-1214725\">Veggie Wraps with Quinoa</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Slow Cooker Lamb Curry",
        "descricao": "The recipe Slow Cooker Lamb Curry could satisfy your Indian craving in about 45 minutes. This recipe serves 8. For $3.6 per serving, this recipe covers 40% of your daily requirements of vitamins and minerals. One serving contains 567 calories, 67g of protein, and 24g of fat. 19 people were impressed by this recipe. Head to the store and pick up fennel powder, oregano, garam masala, and a few other things to make it today. It is a good option if you're following a gluten free diet. It works well as a pretty expensive main course. It is brought to you by Foodista. With a spoonacular score of 92%, this dish is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/slow-cooker-lamb-curry-1583131\">Slow cooker lamb curry</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-lamb-stew-1146747\">Slow Cooker Lamb Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-lamb-shanks-484177\">Slow Cooker Lamb Shanks</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Vegetable Salad",
        "descricao": "Need a gluten free and dairy free main course? Quinoa Vegetable Salad could be an outstanding recipe to try. For $3.42 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 15g of protein, 19g of fat, and a total of 494 calories. This recipe serves 2. 1 person has tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 30 minutes. Head to the store and pick up peppers, carrot, olive tapenade, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is awesome. Similar recipes are <a href=\"https://spoonacular.com/recipes/quinoa-vegetable-salad-1506545\">Quinoa Vegetable Salad</a>, <a href=\"https://spoonacular.com/recipes/quinoa-vegetable-salad-1301049\">Quinoa Vegetable Salad</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-vegetable-salad-401286\">Quinoa Vegetable Salad</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Armenian Stew",
        "descricao": "Armenian Stew might be just the main course you are searching for. One serving contains 328 calories, 16g of protein, and 3g of fat. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs 82 cents per serving. Autumn will be even more special with this recipe. A mixture of lentils, water, overnight in water, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person were impressed by this recipe. It is brought to you by Foodista. With a spoonacular score of 67%, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/khashlama-armenian-lamb-stew-1182003\">Khashlama (Armenian Lamb Stew)</a>, <a href=\"https://spoonacular.com/recipes/armenian-okra-428053\">Armenian Okra</a>, and <a href=\"https://spoonacular.com/recipes/armenian-cucumbers-22364\">Armenian Cucumbers</a>.",
        "preco_unitario": 33,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Colorful Tomato and Spinach Seafood Pasta",
        "descricao": "Colorful Tomato and Spinach Seafood Pasta requires about 20 minutes from start to finish. This recipe serves 2 and costs $3.96 per serving. One portion of this dish contains approximately 34g of protein, 10g of fat, and a total of 470 calories. A mixture of parmesan cheese, garlic, white wine, and a handful of other ingredients are all it takes to make this recipe so delicious. 1 person were glad they tried this recipe. Not a lot of people really liked this main course. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is great. <a href=\"https://spoonacular.com/recipes/creamy-spinach-and-peas-seafood-pasta-981597\">Creamy Spinach and Peas Seafood Pasta</a>, <a href=\"https://spoonacular.com/recipes/seafood-pasta-with-sherry-tomato-cream-sauce-319936\">Seafood Pasta with Sherry Tomato Cream Sauce</a>, and <a href=\"https://spoonacular.com/recipes/cherry-tomato-fra-diavolo-sauce-seafood-and-pasta-310176\">Cherry Tomato Fra Diavolo Sauce, Seafood and Pasta</a> are very similar to this recipe.",
        "preco_unitario": 61,
        "tempo_preparo": 20,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spice-Rubbed Lemon Barbecue Salmon",
        "descricao": "Spice-Rubbed Lemon Barbecue Salmon is a Barbecue main course. This recipe serves 2. One serving contains 337 calories, 36g of protein, and 12g of fat. For $4.55 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. Father's Day will be even more special with this recipe. Head to the store and pick up honey, sea salt, lemon, and a few other things to make it today. This recipe from Foodista has 1 fans. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free, dairy free, and pescatarian diet. With a spoonacular score of 92%, this dish is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/spice-rubbed-pork-tenderloin-with-mustard-barbecue-sauce-17505\">Spice-Rubbed Pork Tenderloin with Mustard Barbecue Sauce</a>, <a href=\"https://spoonacular.com/recipes/spice-rubbed-salmon-4992\">Spice-rubbed Salmon</a>, and <a href=\"https://spoonacular.com/recipes/spice-rubbed-salmon-4497\">Spice Rubbed Salmon</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mung Bean Sprout and Quinoa Salad",
        "descricao": "Mung Bean Sprout and Quinoa Salad is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 6 servings. For $1.49 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. One portion of this dish contains about 17g of protein, 11g of fat, and a total of 356 calories. 1 person found this recipe to be yummy and satisfying. Head to the store and pick up of oregano, cilantro, tomatoes, and a few other things to make it today. It works well as an affordable main course. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns an awesome spoonacular score of 92%. Try <a href=\"https://spoonacular.com/recipes/mung-bean-sprout-salad-34410\">Mung Bean Sprout Salad</a>, <a href=\"https://spoonacular.com/recipes/korean-mung-bean-sprout-salad-565117\">Korean Mung Bean Sprout Salad</a>, and <a href=\"https://spoonacular.com/recipes/mung-beans-beets-and-quinoa-salad-551232\">Mung beans, Beets and Quinoa Salad</a> for similar recipes.",
        "preco_unitario": 53,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Falafel Burgers",
        "descricao": "Need a dairy free, lacto ovo vegetarian, and vegan main course? Falafel Burgers could be an excellent recipe to try. This recipe makes 4 servings with 710 calories, 23g of protein, and 35g of fat each. For $1.87 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. Head to the store and pick up garbanzo beans, onion, vegetable oil, and a few other things to make it today. 70 people have tried and liked this recipe. This recipe is typical of American cuisine. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 94%, which is super. Try <a href=\"https://spoonacular.com/recipes/falafel-burgers-1600153\">Falafel burgers</a>, <a href=\"https://spoonacular.com/recipes/falafel-burgers-1353403\">Falafel Burgers</a>, and <a href=\"https://spoonacular.com/recipes/falafel-burgers-308498\">Falafel Burgers</a> for similar recipes.",
        "preco_unitario": 35,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Thai-Style Mussels",
        "descricao": "If you want to add more gluten free, dairy free, paleolithic, and primal recipes to your recipe box, Thai-Style Mussels might be a recipe you should try. This recipe serves 3. One serving contains 208 calories, 21g of protein, and 9g of fat. For $1.54 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. If you have chilies, water, olive oil, and a few other ingredients on hand, you can make it. Only a few people really liked this hor d'oeuvre. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. This recipe is typical of Asian cuisine. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/thai-style-mussels-with-lemongrass-493369\">Thai-Style Mussels with Lemongrass</a>, <a href=\"https://spoonacular.com/recipes/thai-style-steamed-mussels-with-coconut-milk-basil-76575\">Thai-style Steamed Mussels With Coconut Milk & Basil</a>, and <a href=\"https://spoonacular.com/recipes/mussels-with-thai-seasonings-696546\">Mussels with Thai Seasonings</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Feta Encrusted Salmon",
        "descricao": "Fetan Encrusted Salmon takes about 25 minutes from beginning to end. For $5.06 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. One serving contains 388 calories, 44g of protein, and 15g of fat. This recipe serves 4. This recipe from Foodista requires dill, salmon fillets, sea salt, and olive oil. 1 person found this recipe to be yummy and satisfying. It works well as a main course. It is a good option if you're following a pescatarian diet. With a spoonacular score of 92%, this dish is excellent. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/almond-encrusted-salmon-85679\">Almond Encrusted Salmon</a>, <a href=\"https://spoonacular.com/recipes/thyme-encrusted-salmon-with-blackberry-gastrique-584401\">Thyme Encrusted Salmon with Blackberry Gastrique</a>, and <a href=\"https://spoonacular.com/recipes/sweet-and-spicy-dijon-encrusted-salmon-539190\">Sweet and Spicy Dijon Encrusted Salmon</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 25,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Rustic Red Wine Spaghetti",
        "descricao": "Rustic Red Wine Spaghetti might be a good recipe to expand your main course recipe box. For $3.38 per serving, this recipe covers 47% of your daily requirements of vitamins and minerals. One serving contains 865 calories, 37g of protein, and 40g of fat. This recipe serves 2. A mixture of salt and pepper, garlic, walnuts, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by spoonacular user <a href=\"/profile/coffeebean\">coffeebean</a>. From preparation to the plate, this recipe takes approximately 40 minutes. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/rustic-blueberry-cake-clafoutis-658913\">Rustic Blueberry Cake Clafoutis</a>, <a href=\"https://spoonacular.com/recipes/rustic-brie-toasts-with-wild-mushroom-cranberry-and-shallot-658914\">Rustic Brie Toasts with Wild Mushroom, Cranberry and Shallot</a>, and <a href=\"https://spoonacular.com/recipes/rustic-grilled-peaches-pizza-658920\">Rustic Grilled Peaches Pizza</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 40,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Red Quinoa and Roasted Cauliflower Salad",
        "descricao": "Red Quinoan and Roasted Cauliflower Salad could be just the gluten free and lacto ovo vegetarian recipe you've been looking for. This main course has 444 calories, 13g of protein, and 26g of fat per serving. For $2.26 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. This recipe serves 4. Head to the store and pick up apricots, parsley, walnuts, and a few other things to make it today. 2 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-and-quinoa-salad-1065461\">Roasted Cauliflower and Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/curry-roasted-cauliflower-quinoa-salad-616580\">CURRY ROASTED CAULIFLOWER & QUINOA SALAD</a>, and <a href=\"https://spoonacular.com/recipes/curry-roasted-cauliflower-quinoa-salad-1190947\">CURRY ROASTED CAULIFLOWER & QUINOA SALAD</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Easy Slow Cooker Chicken Tortilla Soup",
        "descricao": "Easy Slow Cooker Chicken Tortilla Soup takes approximately 6 hours and 10 minutes from beginning to end. One portion of this dish contains approximately 32g of protein, 4g of fat, and a total of 283 calories. This recipe serves 8 and costs $1.84 per serving. 1429 people were impressed by this recipe. It will be a hit at your Autumn event. A mixture of chicken breast, kernel corn, cilantro, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a reasonably priced main course. It is brought to you by Pink When. It is a good option if you're following a gluten free and dairy free diet. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/easy-slow-cooker-chicken-tortilla-soup-577486\">Easy Slow Cooker Chicken Tortilla Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-tortilla-soup-1571571\">Slow Cooker Chicken Tortilla Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-tortilla-soup-578807\">Slow Cooker Chicken Tortilla Soup</a> for similar recipes.",
        "preco_unitario": 58,
        "tempo_preparo": 370,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cracked Wheat Salad with Dates & Tahini Yogurt",
        "descricao": "If you have roughly 45 minutes to spend in the kitchen, Cracked Wheat Salad with Dates & Tahini Yogurt might be an excellent lacto ovo vegetarian recipe to try. One serving contains 890 calories, 32g of protein, and 48g of fat. For $3.21 per serving, this recipe covers 40% of your daily requirements of vitamins and minerals. This recipe serves 2. 1 person were glad they tried this recipe. It works well as a main course. This recipe from Foodista requires lentils, tahini, dates, and zucchini. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/sea-scallops-with-cracked-wheat-salad-roasted-red-pepper-tahini-vinaigrette-and-grilled-lemons-346792\">Sea Scallops with Cracked Wheat Salad, Roasted Red Pepper Tahini Vinaigrette and Grilled Lemons</a>, <a href=\"https://spoonacular.com/recipes/lamb-beet-and-cracked-wheat-meatballs-with-cucumber-yogurt-sauce-91819\">Lamb, Beet, and Cracked Wheat Meatballs with Cucumber Yogurt Sauce</a>, and <a href=\"https://spoonacular.com/recipes/crispy-salmon-with-tahini-yogurt-sauce-freekeh-zucchini-and-dates-1002911\">Crispy Salmon with Tahini Yogurt Sauce, Freekeh, Zucchini and Dates</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Pesto & Yogurt Pasta",
        "descricao": "Pesto & Yogurt Pasta requires around 45 minutes from start to finish. For $1.45 per serving, you get a main course that serves 4. One serving contains 373 calories, 12g of protein, and 15g of fat. This recipe from Foodista requires farfalle, parmesan cheese, garlic, and nuts. This recipe is liked by 9 foodies and cooks. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/pasta-with-yogurt-pesto-1090907\">Pasta With Yogurt Pesto</a>, <a href=\"https://spoonacular.com/recipes/pasta-with-yogurt-pesto-138803\">Pasta with Yogurt Pesto</a>, and <a href=\"https://spoonacular.com/recipes/yogurt-pesto-pasta-salad-170338\">Yogurt Pesto Pasta Salad</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Sockeye Salmon on Kiwi & Lemon Puree",
        "descricao": "If you want to add more gluten free, dairy free, and pescatarian recipes to your collection, Sockeye Salmon on Kiwi & Lemon Puree might be a recipe you should try. One serving contains 433 calories, 46g of protein, and 22g of fat. This recipe serves 4. For $5.62 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in about 45 minutes. If you have lemon zest, scallion, lemonade, and a few other ingredients on hand, you can make it. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is amazing. Similar recipes are <a href=\"https://spoonacular.com/recipes/salmon-on-kiwi-lemon-puree-659092\">Salmon on Kiwi & Lemon Puree</a>, <a href=\"https://spoonacular.com/recipes/lemon-herb-baked-sockeye-salmon-recipe-1186775\">Lemon Herb Baked Sockeye Salmon Recipe</a>, and <a href=\"https://spoonacular.com/recipes/lemon-garlic-baked-sockeye-salmon-with-asparagus-1461895\">Lemon Garlic Baked Sockeye Salmon with Asparagus</a>.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Salad With Avocado, Asparagus and Sun Dried Tomatoes",
        "descricao": "Quinoa Salad With Avocado, Asparagus and Sun Dried Tomatoes takes around 45 minutes from beginning to end. For $4.3 per serving, you get a main course that serves 2. Watching your figure? This gluten free and dairy free recipe has 718 calories, 20g of protein, and 35g of fat per serving. Head to the store and pick up herb seasoning, avocado, honey, and a few other things to make it today. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is excellent. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-avocado-asparagus-and-sun-dried-tomatoes-1636203\">Quinoa Salad With Avocado, Asparagus and Sun Dried Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/pasta-salad-with-asparagus-corn-and-sun-dried-tomatoes-749165\">Pasta Salad With Asparagus, Corn and Sun-Dried Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/lemon-quinoa-salad-with-pistachios-sun-dried-tomatoes-1238829\">Lemon Quinoa Salad with Pistachios & Sun-Dried Tomatoes</a>.",
        "preco_unitario": 29,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Sweet-N-Smoky Salmon With Ginger Mahogany Rice",
        "descricao": "The recipe Sweet-N-Smoky Salmon With Ginger Mahogany Rice can be made in around 45 minutes. Watching your figure? This gluten free, dairy free, fodmap friendly, and pescatarian recipe has 732 calories, 41g of protein, and 19g of fat per serving. For $4.78 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. This recipe serves 4. 52 people have made this recipe and would make it again. It works well as a main course. This recipe from Foodista requires brown sugar, chicken stock, mahogany rice, and liquid smoke. With a spoonacular score of 93%, this dish is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/sweet-n-smoky-salmon-with-ginger-mahogany-rice-4800\">Sweet-n-smoky Salmon With Ginger Mahogany Rice</a>, <a href=\"https://spoonacular.com/recipes/mahogany-broiled-chicken-with-smoky-lime-sweet-potatoes-and-cilantro-chimichurri-373517\">Mahogany Broiled Chicken with Smoky Lime Sweet Potatoes and Cilantro Chimichurri</a>, and <a href=\"https://spoonacular.com/recipes/sweet-smoky-salmon-kabobs-88296\">Sweet & Smoky Salmon Kabobs</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Baked Fried Chicken With Cauliflower Mash",
        "descricao": "If you want to add more Southern recipes to your recipe box, Baked Fried Chicken With Cauliflower Mash might be a recipe you should try. This recipe makes 6 servings with 662 calories, 66g of protein, and 29g of fat each. For $3.96 per serving, this recipe covers 42% of your daily requirements of vitamins and minerals. It works well as a main course. 19 people found this recipe to be delicious and satisfying. If you have garlic cloves, dijon mustard, chicken, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a great spoonacular score of 92%. <a href=\"https://spoonacular.com/recipes/sticky-honey-sriracha-cauliflower-wings-baked-or-fried-1325605\">Sticky Honey Sriracha Cauliflower \"wings\" (Baked or Fried)</a>, <a href=\"https://spoonacular.com/recipes/sticky-honey-sriracha-cauliflower-wings-baked-or-fried-1349941\">Sticky Honey Sriracha Cauliflower \"wings\" (Baked or Fried)</a>, and <a href=\"https://spoonacular.com/recipes/sticky-honey-sriracha-cauliflower-wings-baked-or-fried-841792\">Sticky Honey Sriracha Cauliflower \"wings\" (Baked or Fried)</a> are very similar to this recipe.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Salmon Confit with Lemongrass Sauce",
        "descricao": "Salmon Confit with Lemongrass Sauce is a main course that serves 2. Watching your figure? This gluten free, pescatarian, and ketogenic recipe has 865 calories, 46g of protein, and 68g of fat per serving. For $8.86 per serving, this recipe covers 55% of your daily requirements of vitamins and minerals. 4 people were impressed by this recipe. This recipe from Foodista requires garlic, lemon juice, liquid chicken stock, and salt and pepper. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 90%, which is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/salmon-confit-with-lemongrass-sauce-1243401\">Salmon Confit with Lemongrass Sauce</a>, <a href=\"https://spoonacular.com/recipes/salmon-confit-with-lemongrass-sauce-1404277\">Salmon Confit with Lemongrass Sauce</a>, and <a href=\"https://spoonacular.com/recipes/poached-salmon-with-artichoke-confit-1248849\">Poached Salmon with Artichoke Confit</a>.",
        "preco_unitario": 55,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Juicy & Tender ~ Pork Loin Roast",
        "descricao": "You can never have too many main course recipes, so give Juicy & Tender ~ Pork Loin Roast a try. For $4.9 per serving, this recipe covers 40% of your daily requirements of vitamins and minerals. One portion of this dish contains about 77g of protein, 28g of fat, and a total of 585 calories. This recipe serves 4. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. 1 person has made this recipe and would make it again. If you have bay leaves, olive oil, parsley, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 92%, this dish is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/juicy-tender-pork-loin-roast-1614067\">Juicy & Tender ~ Pork Loin Roast</a>, <a href=\"https://spoonacular.com/recipes/juicy-tender-pork-loin-roast-1622011\">Juicy & Tender ~ Pork Loin Roast</a>, and <a href=\"https://spoonacular.com/recipes/juicy-tender-pork-loin-roast-1530385\">Juicy & Tender ~ Pork Loin Roast</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mussels With Tomatoes and Fennel",
        "descricao": "Mussels With Tomatoes and Fennel is a gluten free, dairy free, and pescatarian recipe with 2 servings. For $6.64 per serving, this recipe covers 57% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 38g of protein, 28g of fat, and a total of 685 calories. 1 person were glad they tried this recipe. A mixture of fennel seeds, onion, sugar, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a hor d'oeuvre. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 89%. This score is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/mussels-with-leeks-fennel-and-tomatoes-39295\">Mussels with Leeks, Fennel, and Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/mussels-with-fennel-garlic-and-tomatoes-76515\">Mussels With Fennel, Garlic, And Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/steamed-mussels-with-fennel-tomatoes-ouzo-and-cream-462322\">Steamed Mussels with Fennel, Tomatoes, Ouzo, and Cream</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spanish style salmon fillets",
        "descricao": "If you want to add more European recipes to your recipe box, Spanish style salmon fillets might be a recipe you should try. This recipe serves 2. One serving contains 945 calories, 53g of protein, and 60g of fat. For $7.8 per serving, this recipe covers 54% of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. This recipe from Foodista requires ground pepper, olives, salmon fillets, and coarse sea salt. It works well as an expensive main course. From preparation to the plate, this recipe takes around 30 minutes. It is a good option if you're following a gluten free, dairy free, whole 30, and pescatarian diet. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/tasty-salmon-fillets-asian-style-87364\">Tasty Salmon Fillets Asian Style</a>, <a href=\"https://spoonacular.com/recipes/crock-pot-salmon-fillets-and-asian-style-vegetables-1219451\">Crock Pot Salmon Fillets and Asian Style Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/crock-pot-salmon-fillets-and-asian-style-vegetables-524925\">Crock Pot Salmon Fillets and Asian Style Vegetables</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 30,
        "categoria": "main course",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Rigatoni With Sweet Sausages In Creamy Tomato Sauce",
        "descricao": "Rigatoni With Sweet Sausages In Creamy Tomato Sauce takes approximately 45 minutes from beginning to end. This recipe serves 4. This main course has 922 calories, 34g of protein, and 40g of fat per serving. For $1.92 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. 82 people were glad they tried this recipe. A mixture of garlic cloves, onion, butter, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular score of 91%, this dish is great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/rigatoni-in-creamy-tomato-sauce-207166\">Rigatoni in Creamy Tomato Sauce</a>, <a href=\"https://spoonacular.com/recipes/one-pan-rigatoni-with-creamy-red-wine-tomato-sauce-821935\">One Pan Rigatoni with Creamy Red Wine Tomato Sauce</a>, and <a href=\"https://spoonacular.com/recipes/creamy-pesto-rigatoni-with-chunky-tomato-vinaigrette-198535\">Creamy Pesto Rigatoni with Chunky Tomato Vinaigrette</a>.",
        "preco_unitario": 21,
        "tempo_preparo": 45,
        "categoria": "main course",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Green Monster Ice Pops",
        "descricao": "Need a gluten free and dairy free dessert? Green Monster Ice Pops could be an amazing recipe to try. This recipe serves 6. One portion of this dish contains approximately 2g of protein, 6g of fat, and a total of 109 calories. For 76 cents per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. It will be a hit at your Halloween event. Head to the store and pick up honey, banana, baby spinach, and a few other things to make it today. This recipe is liked by 19 foodies and cooks. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 3 hours. With a spoonacular score of 85%, this dish is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/go-green-ice-pops-83217\">Go Green Ice Pops</a>, <a href=\"https://spoonacular.com/recipes/green-ice-pops-1235291\">Green Ice Pops</a>, and <a href=\"https://spoonacular.com/recipes/green-ice-pops-544620\">Green Ice Pops</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 180,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxHcmVlbiUyME1vbnN0ZXIlMjBJY2UlMjBQb3BzfGVufDB8fHx8MTc0MzAxMjU0MXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Caramel Peanut Fudge Cake",
        "descricao": "Caramel Peanut Fudge Cake might be just the dessert you are searching for. One portion of this dish contains approximately 16g of protein, 35g of fat, and a total of 459 calories. This recipe serves 10. For $1.24 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about 45 minutes. 84 people were glad they tried this recipe. If you have almonds, sugar, cream, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. Taking all factors into account, this recipe earns a spoonacular score of 74%, which is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/slow-cooker-caramel-peanut-butter-hot-fudge-cake-1331813\">Slow Cooker Caramel Peanut Butter Hot Fudge Cake</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-caramel-peanut-butter-hot-fudge-cake-951248\">Slow Cooker Caramel Peanut Butter Hot Fudge Cake</a>, and <a href=\"https://spoonacular.com/recipes/caramel-peanut-butter-fudge-573829\">Caramel Peanut Butter Fudge</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1625932948487-10d58571c487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDYXJhbWVsJTIwUGVhbnV0JTIwRnVkZ2UlMjBDYWtlfGVufDB8fHx8MTc0MzAxMjU0MXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Cacao chia pudding with avocado mousse",
        "descricao": "Cacao chia pudding with avocado mousse requires approximately 15 minutes from start to finish. One portion of this dish contains approximately 19g of protein, 31g of fat, and a total of 441 calories. For $2.65 per serving, you get a dessert that serves 1. Head to the store and pick up almond milk, coconut milk, water, and a few other things to make it today. This recipe is liked by 1 foodies and cooks. It is a good option if you're following a gluten free and dairy free diet. It is brought to you by Foodista. Overall, this recipe earns a solid spoonacular score of 74%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/cacao-chia-pudding-with-avocado-mousse-1238993\">Cacao chia pudding with avocado mousse</a>, <a href=\"https://spoonacular.com/recipes/avocado-cacao-mousse-21458\">Avocado Cacao Mousse</a>, and <a href=\"https://spoonacular.com/recipes/how-to-make-chia-pudding-and-a-strawberry-banana-chia-pudding-parfait-902573\">How to Make Chia Pudding – and a Strawberry Banana Chia Pudding Parfait</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 15,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1720305284322-07b6f099395c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDYWNhbyUyMGNoaWElMjBwdWRkaW5nJTIwd2l0aCUyMGF2b2NhZG8lMjBtb3Vzc2V8ZW58MHx8fHwxNzQzMDEyNTQyfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Chocolate Pudding - Rave Diet",
        "descricao": "Need a gluten free, dairy free, lacto ovo vegetarian, and vegan dessert? Chocolate Pudding - Rave Diet could be an outstanding recipe to try. One serving contains 383 calories, 6g of protein, and 19g of fat. For $1.93 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. This recipe serves 3. 3 people were impressed by this recipe. It is brought to you by Foodista. If you have vanilla, maple syrup, cocoa powder, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 59%, which is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/rave-review-potato-salad-447434\">Rave-Review Potato Salad</a>, <a href=\"https://spoonacular.com/recipes/rave-review-potato-salad-459367\">Rave-Review Potato Salad</a>, and <a href=\"https://spoonacular.com/recipes/the-best-diet-chocolate-cake-or-muffins-104538\">The Best Diet Chocolate Cake,or Muffins</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDaG9jb2xhdGUlMjBQdWRkaW5nJTIwLSUyMFJhdmUlMjBEaWV0fGVufDB8fHx8MTc0MzAxMjU0Mnww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Fresh Cherry Scones",
        "descricao": "The recipe Fresh Cherry Scones can be made in about 45 minutes. This gluten free and lacto ovo vegetarian recipe serves 8 and costs 91 cents per serving. This breakfast has 336 calories, 9g of protein, and 10g of fat per serving. If you have applesauce, oat flour, walnuts, and a few other ingredients on hand, you can make it. 1 person found this recipe to be yummy and satisfying. It is brought to you by Foodista. It is a very budget friendly recipe for fans of European food. All things considered, we decided this recipe deserves a spoonacular score of 66%. This score is good. Try <a href=\"https://spoonacular.com/recipes/fresh-cherry-scones-482288\">Fresh Cherry Scones</a>, <a href=\"https://spoonacular.com/recipes/10-pound-cherry-challenge-white-chocolate-cherry-scones-542507\">10 Pound Cherry Challenge: White Chocolate Cherry Scones</a>, and <a href=\"https://spoonacular.com/recipes/bittersweet-chocolate-cherry-sorbet-with-fresh-cherry-compote-53232\">Bittersweet Chocolate-Cherry Sorbet with Fresh Cherry Compote</a> for similar recipes.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1606757870492-9fc7cf1e736d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxGcmVzaCUyMENoZXJyeSUyMFNjb25lc3xlbnwwfHx8fDE3NDMwMTI1NDJ8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Raw Vegan Chocolate and Raspberry Cake",
        "descricao": "Raw Vegan Chocolate and Raspberry Cake is a dairy free recipe with 12 servings. This dessert has 565 calories, 10g of protein, and 33g of fat per serving. For $1.96 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. 76 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. If you have crust, sea salt, cocoa / carob powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 73%. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/no-bake-chocolate-fudge-fridge-cake-raw-vegan-paleo-512260\">No-Bake Chocolate Fudge Fridge Cake (Raw, Vegan, Paleo)</a>, <a href=\"https://spoonacular.com/recipes/raw-vegan-raspberry-cheesecake-1265163\">Raw Vegan Raspberry Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/raw-vegan-raspberry-cheesecake-1238787\">Raw Vegan Raspberry Cheesecake</a> for similar recipes.",
        "preco_unitario": 58,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxSYXclMjBWZWdhbiUyMENob2NvbGF0ZSUyMGFuZCUyMFJhc3BiZXJyeSUyMENha2V8ZW58MHx8fHwxNzQzMDE0MjU4fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Applesauce Carrot Cake Muffins",
        "descricao": "Applesauce Carrot Cake Muffins is a dairy free and lacto ovo vegetarian breakfast. This recipe makes 24 servings with 273 calories, 8g of protein, and 4g of fat each. For 53 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. A mixture of ground ginger, eggs, vanillan extract, and a handful of other ingredients are all it takes to make this recipe so flavorful. It can be enjoyed any time, but it is especially good for Easter. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 39%, this dish is rather bad. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/healthy-applesauce-carrot-muffins-aka-carrot-cake-muffins-1220053\">Healthy Applesauce Carrot Muffins {a.k.a. Carrot Cake Muffins}</a>, <a href=\"https://spoonacular.com/recipes/healthy-applesauce-carrot-muffins-aka-carrot-cake-muffins-569339\">Healthy Applesauce Carrot Muffins {a.k.a. Carrot Cake Muffins}</a>, and <a href=\"https://spoonacular.com/recipes/healthy-applesauce-carrot-muffins-aka-carrot-cake-muffins-1220791\">Healthy Applesauce Carrot Muffins {a.k.a. Carrot Cake Muffins}</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxBcHBsZXNhdWNlJTIwQ2Fycm90JTIwQ2FrZSUyME11ZmZpbnN8ZW58MHx8fHwxNzQzMDE0MjU4fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Wholemeal Cake",
        "descricao": "Wholemeal Cake takes around 45 minutes from beginning to end. For $1.72 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. This recipe serves 4. Watching your figure? This dairy free and lacto ovo vegetarian recipe has 362 calories, 9g of protein, and 14g of fat per serving. It works well as a rather cheap dessert. A couple people made this recipe, and 10 would say it hit the spot. A mixture of egg whites, sugar, flour, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 49%. This score is good. Try <a href=\"https://spoonacular.com/recipes/seeded-wholemeal-loaf-1094894\">Seeded wholemeal loaf</a>, <a href=\"https://spoonacular.com/recipes/wholemeal-steam-bun-665306\">Wholemeal Steam Bun</a>, and <a href=\"https://spoonacular.com/recipes/cinnamon-coffee-wholemeal-muffins-494087\">Cinnamon & Coffee Wholemeal Muffins</a> for similar recipes.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxXaG9sZW1lYWwlMjBDYWtlfGVufDB8fHx8MTc0MzAxNDI1OHww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Strawberry Cheesecake Chocolate Crepes",
        "descricao": "Need a lacto ovo vegetarian breakfast? Strawberry Cheesecake Chocolate Crepes could be an excellent recipe to try. This recipe serves 4. One portion of this dish contains about 16g of protein, 38g of fat, and a total of 618 calories. For $1.68 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. This recipe from Pink When has 1928 fans. Head to the store and pick up granulated sugar, strawberries, water, and a few other things to make it today. Several people really liked this Mediterranean dish. It can be enjoyed any time, but it is especially good for Mother's Day. From preparation to the plate, this recipe takes approximately 40 minutes. Taking all factors into account, this recipe earns a spoonacular score of 68%, which is good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/strawberry-cheesecake-chocolate-crepes-1648509\">Strawberry Cheesecake Chocolate Crepes</a>, <a href=\"https://spoonacular.com/recipes/strawberry-cheesecake-chocolate-crepes-1433459\">Strawberry Cheesecake Chocolate Crepes</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-cheesecake-crepes-1104545\">Strawberry Cheesecake Crepes</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 40,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTdHJhd2JlcnJ5JTIwQ2hlZXNlY2FrZSUyMENob2NvbGF0ZSUyMENyZXBlc3xlbnwwfHx8fDE3NDMwMTQyNTh8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Fig and Walnut Pudding",
        "descricao": "If you have roughly 45 minutes to spend in the kitchen, Fig and Walnut Pudding might be a great gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe to try. This recipe makes 2 servings with 541 calories, 7g of protein, and 35g of fat each. For $4.74 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of mission figs, himalayan salt, avocado, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a dessert. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 64%. This score is solid. Try <a href=\"https://spoonacular.com/recipes/fig-walnut-cookes-57122\">Fig Walnut Cookes</a>, <a href=\"https://spoonacular.com/recipes/fig-and-walnut-cookies-342833\">Fig and Walnut Cookies</a>, and <a href=\"https://spoonacular.com/recipes/fig-and-walnut-torte-57162\">Fig And Walnut Torte</a> for similar recipes.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1542116021-0ff087fb0a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxGaWclMjBhbmQlMjBXYWxudXQlMjBQdWRkaW5nfGVufDB8fHx8MTc0MzAxNDI1OXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Blackberry Peach Pie",
        "descricao": "If you have about 45 minutes to spend in the kitchen, Blackberry Peach Pie might be an amazing dairy free recipe to try. One serving contains 280 calories, 5g of protein, and 3g of fat. For $1.99 per serving, you get a dessert that serves 10. 1 person were impressed by this recipe. If you have ground cinnamon, blackberries, gratings of nutmeg, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. With a spoonacular score of 44%, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/peach-blackberry-pie-313002\">Peach-Blackberry Pie</a>, <a href=\"https://spoonacular.com/recipes/peach-blackberry-pie-585417\">Peach Blackberry Pie</a>, and <a href=\"https://spoonacular.com/recipes/peach-blackberry-pie-351944\">Peach-Blackberry Pie</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1723962999466-c7a2fe6ec42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxCbGFja2JlcnJ5JTIwUGVhY2glMjBQaWV8ZW58MHx8fHwxNzQzMDE0MjU5fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Creamy Chocolate Pudding With Coconut Whipped Cream",
        "descricao": "If you want to add more gluten free, dairy free, and fodmap friendly recipes to your collection, Creamy Chocolate Pudding With Coconut Whipped Cream might be a recipe you should try. One serving contains 844 calories, 25g of protein, and 69g of fat. This recipe serves 2. For $3.14 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. 5 people have made this recipe and would make it again. A mixture of coconut milk, chocolate chips, chocolate shavings, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Only a few people really liked this dessert. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a good spoonacular score of 65%. Try <a href=\"https://spoonacular.com/recipes/chocolate-pudding-with-espresso-whipped-cream-54998\">Chocolate Pudding with Espresso Whipped Cream</a>, <a href=\"https://spoonacular.com/recipes/chocolate-pudding-with-espresso-whipped-cream-629056\">Chocolate Pudding with Espresso Whipped Cream</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-stout-pudding-with-beer-whipped-cream-483811\">Chocolate Stout Pudding with Beer Whipped Cream</a> for similar recipes.",
        "preco_unitario": 21,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1483125796430-526962b9830b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDcmVhbXklMjBDaG9jb2xhdGUlMjBQdWRkaW5nJTIwV2l0aCUyMENvY29udXQlMjBXaGlwcGVkJTIwQ3JlYW18ZW58MHx8fHwxNzQzMDE0MjU5fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Autumn Pumpkin Cake",
        "descricao": "Need a gluten free, dairy free, lacto ovo vegetarian, and vegan dessert? Autumn Pumpkin Cake could be a great recipe to try. For 33 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This recipe makes 12 servings with 131 calories, 2g of protein, and 4g of fat each. A mixture of raisins, agave syrup, coconut milk, and a handful of other ingredients are all it takes to make this recipe so tasty. 4 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 63%. This score is solid. Try <a href=\"https://spoonacular.com/recipes/autumn-pumpkin-chiffon-cake-633102\">Autumn Pumpkin Chiffon Cake</a>, <a href=\"https://spoonacular.com/recipes/autumn-spice-cake-mix-cookies-with-pumpkin-buttercream-517852\">Autumn Spice Cake Mix Cookies with Pumpkin Buttercream</a>, and <a href=\"https://spoonacular.com/recipes/autumn-pumpkin-cupcakes-930036\">Autumn Pumpkin Cupcakes</a> for similar recipes.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1606987482048-c6826204b417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxBdXR1bW4lMjBQdW1wa2luJTIwQ2FrZXxlbnwwfHx8fDE3NDMwMTQyNjB8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Coffee Chia Pudding",
        "descricao": "Coffee Chia Pudding might be just the dessert you are searching for. One serving contains 270 calories, 8g of protein, and 16g of fat. This gluten free, dairy free, and fodmap friendly recipe serves 2 and costs $1.27 per serving. 1 person were glad they tried this recipe. This recipe from Foodista requires coffee, almond milk, vanillan extract, and chia seeds. From preparation to the plate, this recipe takes approximately 4 hours and 10 minutes. Overall, this recipe earns a good spoonacular score of 62%. <a href=\"https://spoonacular.com/recipes/coffee-and-chocolate-chia-seed-pudding-553412\">Coffee and chocolate chia seed pudding</a>, <a href=\"https://spoonacular.com/recipes/overnight-chocolate-coffee-chia-breakfast-pudding-1240595\">Overnight Chocolate Coffee Chia Breakfast Pudding</a>, and <a href=\"https://spoonacular.com/recipes/overnight-chocolate-coffee-chia-breakfast-pudding-1309615\">Overnight Chocolate Coffee Chia Breakfast Pudding</a> are very similar to this recipe.",
        "preco_unitario": 39,
        "tempo_preparo": 250,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1675527411849-a390155fdc70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDb2ZmZWUlMjBDaGlhJTIwUHVkZGluZ3xlbnwwfHx8fDE3NDMwMTQyNjB8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Easy Strawberry Shortcake for One",
        "descricao": "Easy Strawberry Shortcake for One is a lacto ovo vegetarian dessert. This recipe makes 1 servings with 141 calories, 2g of protein, and 3g of fat each. For $1.4 per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. It will be a hit at your Mother's Day event. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 10 minutes. If you have cool whip, lemon juice, table sugar, and a few other ingredients on hand, you can make it. With a spoonacular score of 62%, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/easy-strawberry-shortcake-426778\">Easy Strawberry Shortcake</a>, <a href=\"https://spoonacular.com/recipes/easy-strawberry-shortcake-57964\">Easy Strawberry Shortcake</a>, and <a href=\"https://spoonacular.com/recipes/easy-strawberry-shortcake-765056\">Easy Strawberry Shortcake</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 10,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1590194360975-c250dde6520d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxFYXN5JTIwU3RyYXdiZXJyeSUyMFNob3J0Y2FrZSUyMGZvciUyME9uZXxlbnwwfHx8fDE3NDMwMTQyNjB8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Strawberry Lime Basil Sherbet",
        "descricao": "Need a gluten free and lacto ovo vegetarian dessert? Strawberry Lime Basil Sherbet could be a great recipe to try. One serving contains 190 calories, 5g of protein, and 4g of fat. For $1.78 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. This recipe serves 6. 1 person were impressed by this recipe. It can be enjoyed any time, but it is especially good for Mother's Day. A mixture of sugar, lime zest, lime juice, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 62%. This score is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/strawberry-lemon-and-basil-sherbet-673905\">Strawberry, Lemon and Basil Sherbet</a>, <a href=\"https://spoonacular.com/recipes/roasted-strawberry-basil-sherbet-1019874\">Roasted Strawberry Basil Sherbet</a>, and <a href=\"https://spoonacular.com/recipes/lime-sherbet-496581\">Lime Sherbet</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1590194360975-c250dde6520d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTdHJhd2JlcnJ5JTIwTGltZSUyMEJhc2lsJTIwU2hlcmJldHxlbnwwfHx8fDE3NDMwMTQyNjB8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Classic Carrot Cake With Cream Cheese Frosting",
        "descricao": "Classic Carrot Cake With Cream Cheese Frosting is a lacto ovo vegetarian dessert. This recipe serves 8 and costs $2.14 per serving. One portion of this dish contains approximately 13g of protein, 66g of fat, and a total of 901 calories. This recipe from Foodista requires baking powder, baking soda, vegetable oil, and vanillan extract. It will be a hit at your Easter event. 111 person have tried and liked this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 63%, this dish is solid. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/classic-carrot-cake-with-cream-cheese-frosting-61463\">Classic Carrot Cake With Cream Cheese Frosting</a>, <a href=\"https://spoonacular.com/recipes/classic-carrot-cake-with-fluffy-cream-cheese-frosting-61433\">Classic Carrot Cake with Fluffy Cream Cheese Frosting</a>, and <a href=\"https://spoonacular.com/recipes/orange-carrot-cake-with-classic-cream-cheese-frosting-61421\">Orange-Carrot Cake with Classic Cream Cheese Frosting</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1533910534207-90f31029a78e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQ2Fycm90JTIwQ2FrZSUyMFdpdGglMjBDcmVhbSUyMENoZWVzZSUyMEZyb3N0aW5nfGVufDB8fHx8MTc0MzAxNDI2MXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Muesli Cookies",
        "descricao": "Muesli Cookies is a dairy free and lacto ovo vegetarian dessert. This recipe serves 8. For $1.61 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. One serving contains 414 calories, 7g of protein, and 12g of fat. This recipe from Foodista has 1 fans. Head to the store and pick up flour, carrot, walnut oil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 30 minutes. Overall, this recipe earns a good spoonacular score of 60%. <a href=\"https://spoonacular.com/recipes/muesli-breakfast-cookies-724160\">Muesli Breakfast Cookies</a>, <a href=\"https://spoonacular.com/recipes/muesli-breakfast-cookies-1763103\">Muesli Breakfast Cookies</a>, and <a href=\"https://spoonacular.com/recipes/muesli-chocolate-chip-cookies-596202\">Muesli Chocolate Chip Cookies</a> are very similar to this recipe.",
        "preco_unitario": 34,
        "tempo_preparo": 30,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Sholeh Zard: Saffron Infused Rice Pudding",
        "descricao": "The recipe Sholeh Zard: Saffron Infused Rice Pudding can be made in about 45 minutes. This recipe serves 12 and costs $1.77 per serving. Watching your figure? This gluten free and lacto ovo vegetarian recipe has 528 calories, 14g of protein, and 35g of fat per serving. This recipe from Foodista requires almonds, sugar, pistachios, and slivered almonds. Only a few people made this recipe, and 1 would say it hit the spot. It works well as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 59%. This score is solid. Try <a href=\"https://spoonacular.com/recipes/saffron-infused-rice-pudding-with-sweetened-whole-wheat-pancakes-658975\">SAFFRON INFUSED RICE PUDDING WITH SWEETENED WHOLE WHEAT PANCAKES</a>, <a href=\"https://spoonacular.com/recipes/ginger-infused-japanese-rice-pudding-274034\">Ginger-Infused Japanese Rice Pudding</a>, and <a href=\"https://spoonacular.com/recipes/cardamon-infused-black-rice-pudding-with-coconut-milk-637095\">Cardamon Infused Black Rice Pudding with Coconut Milk</a> for similar recipes.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Dreamy Chai Rice Pudding",
        "descricao": "Dreamy Chai Rice Pudding might be a good recipe to expand your dessert recipe box. One serving contains 376 calories, 11g of protein, and 8g of fat. This gluten free and lacto ovo vegetarian recipe serves 4 and costs $4.89 per serving. 11 person have made this recipe and would make it again. This recipe from Foodista requires brown sugar, vanillan essence, cardomon pods, and star anise. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 57%, which is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/chai-rice-pudding-250814\">Chai Rice Pudding</a>, <a href=\"https://spoonacular.com/recipes/chai-rice-pudding-760284\">Chai Rice Pudding</a>, and <a href=\"https://spoonacular.com/recipes/vanilla-and-chai-rice-pudding-546678\">Vanillan and Chai rice pudding</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Baked Caramel Custard",
        "descricao": "The recipe Baked Caramel Custard can be made in roughly 45 minutes. This recipe serves 6. One serving contains 251 calories, 12g of protein, and 1g of fat. For 76 cents per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. A couple people made this recipe, and 46 would say it hit the spot. It is brought to you by Foodista. If you have vanilla, port wine, evaporated skim milk, and a few other ingredients on hand, you can make it. It works well as a dessert. It is a good option if you're following a gluten free diet. Taking all factors into account, this recipe earns a spoonacular score of 59%, which is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/mexican-flan-baked-caramel-custard-1237235\">Mexican Flan (Baked caramel Custard)</a>, <a href=\"https://spoonacular.com/recipes/mexican-flan-baked-caramel-custard-141402\">Mexican Flan (Baked caramel Custard)</a>, and <a href=\"https://spoonacular.com/recipes/caramel-custard-pots-with-salted-caramel-sauce-497733\">Caramel Custard Pots with Salted Caramel Sauce</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Raw Vegan Blueberry Chocolate Crust \"Cheesecake",
        "descricao": "Raw Vegan Blueberry Chocolate Crust \"Cheesecake could be just the gluten free and dairy free recipe you've been looking for. This recipe makes 6 servings with 557 calories, 9g of protein, and 36g of fat each. For $2.93 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. 2 people have made this recipe and would make it again. It works best as a dessert, and is done in roughly 45 minutes. Head to the store and pick up macadamia nuts, walnuts, vanillan extract, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 57%, which is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/raw-vegan-blueberry-chocolate-crust-cheesecake-1265165\">Raw Vegan Blueberry Chocolate Crust \"Cheesecake</a>, <a href=\"https://spoonacular.com/recipes/raw-vegan-blueberry-chocolate-crust-cheesecake-1318615\">Raw Vegan Blueberry Chocolate Crust \"Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/raw-blueberry-cheesecake-with-crumb-topping-551785\">Raw blueberry cheesecake with crumb topping</a>.",
        "preco_unitario": 67,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Pear and Apple Crumble",
        "descricao": "If you want to add more dairy free, lacto ovo vegetarian, and vegan recipes to your repertoire, Pear and Apple Crumble might be a recipe you should try. For $1.14 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. One serving contains 296 calories, 7g of protein, and 14g of fat. This recipe serves 8. It is brought to you by Foodista. If you have granny smith apples, bosc pears, nutmeg, and a few other ingredients on hand, you can make it. 1 person were glad they tried this recipe. It works best as a dessert, and is done in about 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 58%, which is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/pear-and-apple-crumble-1622301\">Pear and Apple Crumble</a>, <a href=\"https://spoonacular.com/recipes/apple-pear-walnut-crumble-215109\">Apple, pear & walnut crumble</a>, and <a href=\"https://spoonacular.com/recipes/pear-apple-crumble-pie-750910\">Pear-Apple Crumble Pie</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Beetroot & Oats Halwa Pudding",
        "descricao": "Beetroot & Oats Halwa Pudding might be a good recipe to expand your dessert recipe box. Watching your figure? This gluten free and lacto ovo vegetarian recipe has 551 calories, 11g of protein, and 29g of fat per serving. For $1.79 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. This recipe serves 3. 1 person were impressed by this recipe. If you have cardamom powder, clarified butter/ghee, old fashioned oats, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 48%. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/beetroot-halwa-how-to-make-beetroot-halwa-halwa-s-486812\">beetroot halwa , how to make beetroot halwa | halwa s</a>, <a href=\"https://spoonacular.com/recipes/kaddu-ka-halwa-or-pumpkin-halwa-fasting-halwa-488130\">kaddu ka halwan or pumpkin halwa | fasting halwa</a>, and <a href=\"https://spoonacular.com/recipes/gajar-halwa-carrot-pudding-for-diwali-41098\">Gajar Halwa (carrot Pudding) For Diwali</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mint Chocolate Chia Pudding",
        "descricao": "Mint Chocolate Chia Pudding is a gluten free, dairy free, and fodmap friendly dessert. This recipe makes 1 servings with 288 calories, 8g of protein, and 15g of fat each. For $2.02 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. This recipe from Foodista has 1 fans. If you have peppermint extract, maple syrup, cocoa powder, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 57%. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/mint-chocolate-chia-pudding-1325331\">Mint Chocolate Chia Pudding</a>, <a href=\"https://spoonacular.com/recipes/mint-chocolate-chia-pudding-1405705\">Mint Chocolate Chia Pudding</a>, and <a href=\"https://spoonacular.com/recipes/mint-chocolate-chip-chia-pudding-539214\">Mint Chocolate Chip Chia Pudding</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Rosemary Rum Raisin Soda Bread with Pecans",
        "descricao": "Rosemary Rum Raisin Soda Bread with Pecans is a lacto ovo vegetarian recipe with 16 servings. This breakfast has 173 calories, 5g of protein, and 4g of fat per serving. For 44 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. Only a few people really liked this European dish. A mixture of anise seeds, rum, flour, and a handful of other ingredients are all it takes to make this recipe so flavorful. 4 people were impressed by this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 53%, which is solid. <a href=\"https://spoonacular.com/recipes/irish-soda-bread-pudding-with-raisin-jam-81000\">Irish Soda Bread Pudding With Raisin Jam</a>, <a href=\"https://spoonacular.com/recipes/rum-raisin-bread-480407\">Rum Raisin Bread</a>, and <a href=\"https://spoonacular.com/recipes/rum-raisin-cinnamon-bread-611878\">Rum Raisin Cinnamon Bread</a> are very similar to this recipe.",
        "preco_unitario": 62,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Flourless Lentil Chocolate Brownies",
        "descricao": "Flourless Lentil Chocolate Brownies might be just the dessert you are searching for. Watching your figure? This gluten free and dairy free recipe has 312 calories, 14g of protein, and 9g of fat per serving. This recipe serves 16 and costs 81 cents per serving. This recipe is typical of American cuisine. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes roughly 45 minutes. If you have eggs, rice vinegar, cocoa powder, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a solid spoonacular score of 53%. Try <a href=\"https://spoonacular.com/recipes/flourless-lentil-chocolate-brownies-719910\">Flourless Lentil Chocolate Brownies</a>, <a href=\"https://spoonacular.com/recipes/flourless-lentil-chocolate-brownies-1234237\">Flourless Lentil Chocolate Brownies</a>, and <a href=\"https://spoonacular.com/recipes/flourless-lentil-chocolate-brownies-1234255\">Flourless Lentil Chocolate Brownies</a> for similar recipes.",
        "preco_unitario": 55,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Strawberry Shortcake Cobbler",
        "descricao": "Strawberry Shortcake Cobbler might be just the Southern recipe you are searching for. This recipe serves 6 and costs $2.46 per serving. This dessert has 358 calories, 11g of protein, and 7g of fat per serving. It is perfect for Mother's Day. From preparation to the plate, this recipe takes about 45 minutes. This recipe from Foodista requires non fat greek yogurt, strawberries, butter, and milk. 1 person has tried and liked this recipe. It is a good option if you're following a lacto ovo vegetarian diet. With a spoonacular score of 57%, this dish is good. Similar recipes are <a href=\"https://spoonacular.com/recipes/strawberry-shortcake-cobbler-1635857\">Strawberry Shortcake Cobbler</a>, <a href=\"https://spoonacular.com/recipes/miss-shortcake-donuts-strawberry-shortcake-1100250\">MISS SHORTCAKE DONUTS (STRAWBERRY SHORTCAKE)</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-shortcake-w-mini-strawberry-poptarts-716417\">Strawberry Shortcake w. Mini Strawberry PopTarts</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mango Avocado Ice Cream",
        "descricao": "Mango Avocado Ice Cream might be a good recipe to expand your dessert recipe box. This recipe serves 8. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 139 calories, 2g of protein, and 8g of fat per serving. For 73 cents per serving, this recipe covers 7% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 8 would say it hit the spot. If you have flesh of avocados, flesh of ataulfo mango, juice of lime, and a few other ingredients on hand, you can make it. It will be a hit at your Summer event. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 57%, which is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/mango-chili-ice-cream-best-lick-2008-ice-cream-contest-entr-58729\">Mango Chili Ice Cream Best Lick! 2008 Ice Cream Contest Entr</a>, <a href=\"https://spoonacular.com/recipes/mango-ice-cream-homemade-mango-ice-cream-600491\">Mango Ice cream | homemade mango ice cream</a>, and <a href=\"https://spoonacular.com/recipes/mango-ice-cream-how-to-make-mango-ice-cream-487284\">mango ice cream , how to make mango ice cream</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Blueberry Streusel Cake With Lemon Icing",
        "descricao": "Need a dairy free dessert? Blueberry Streusel Cake With Lemon Icing could be an excellent recipe to try. For 32 cents per serving, this recipe covers 7% of your daily requirements of vitamins and minerals. One serving contains 126 calories, 3g of protein, and 1g of fat. This recipe serves 12. This recipe from Foodista requires baking powder, powdered sugar, nondairy milk, and pastry flour. 1 person has tried and liked this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 31%, this dish is not so super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/blueberry-streusel-muffins-with-lemon-cream-cheese-icing-low-carb-and-gluten-free-982575\">Blueberry Streusel Muffins with Lemon Cream Cheese Icing (Low Carb and Gluten Free)</a>, <a href=\"https://spoonacular.com/recipes/lemon-blueberry-bundt-cake-with-lemon-cream-cheese-icing-763791\">Lemon Blueberry Bundt Cake with Lemon Cream Cheese Icing</a>, and <a href=\"https://spoonacular.com/recipes/lemon-blueberry-cake-loaf-with-buttermilk-icing-576949\">Lemon Blueberry Cake Loaf with Buttermilk Icing</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Carrot Banana Bread",
        "descricao": "The recipe Carrot Banana Bread can be made in roughly 1 hour and 15 minutes. This recipe serves 10 and costs 48 cents per serving. This breakfast has 262 calories, 8g of protein, and 5g of fat per serving. This recipe is liked by 5 foodies and cooks. Head to the store and pick up flour, oatmeal, golden raisins, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a lacto ovo vegetarian diet. Taking all factors into account, this recipe earns a spoonacular score of 52%, which is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/carrot-banana-bread-41285\">Carrot Banana Bread</a>, <a href=\"https://spoonacular.com/recipes/carrot-banana-bread-119288\">Carrot Banana Bread</a>, and <a href=\"https://spoonacular.com/recipes/banana-carrot-bread-609844\">Banana Carrot Bread</a>.",
        "preco_unitario": 39,
        "tempo_preparo": 75,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegan Pumpkin Bundt Cake",
        "descricao": "Vegan Pumpkin Bundt Cake is a dairy free, lacto ovo vegetarian, and vegan dessert. For $1.01 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. This recipe makes 18 servings with 245 calories, 5g of protein, and 8g of fat each. This recipe from Foodista requires canolan oil, soymilk, golden raisins, and barley flour. 4 people have made this recipe and would make it again. From preparation to the plate, this recipe takes roughly 1 hour and 45 minutes. With a spoonacular score of 47%, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/pumpkin-bundt-cake-with-pumpkin-glaze-535952\">Pumpkin Bundt Cake with Pumpkin Glaze</a>, <a href=\"https://spoonacular.com/recipes/pumpkin-bundt-cake-400766\">Pumpkin Bundt Cake</a>, and <a href=\"https://spoonacular.com/recipes/pumpkin-bundt-cake-1544849\">Pumpkin Bundt Cake</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 105,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Caramel Almond Mug Cake",
        "descricao": "Caramel Almond Mug Cake is a gluten free and lacto ovo vegetarian recipe with 1 servings. This dessert has 514 calories, 16g of protein, and 24g of fat per serving. For $1.65 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes about 3 minutes. Head to the store and pick up almonds, cinnamon, salt, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 60%, which is pretty good. <a href=\"https://spoonacular.com/recipes/banana-caramel-mug-cake-620894\">Banana Caramel Mug Cake</a>, <a href=\"https://spoonacular.com/recipes/chocolate-caramel-mug-cake-228287\">Chocolate Caramel Mug Cake</a>, and <a href=\"https://spoonacular.com/recipes/caramel-fleur-de-sel-mug-cake-187712\">Caramel-Fleur de Sel Mug Cake</a> are very similar to this recipe.",
        "preco_unitario": 43,
        "tempo_preparo": 3,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Peanut Butter Cookie Bars",
        "descricao": "You can never have too many dessert recipes, so give Peanut Butter Cookie Bars a try. One portion of this dish contains roughly 17g of protein, 56g of fat, and a total of 846 calories. This recipe serves 6. For 83 cents per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. A mixture of baking soda, rolled oats, granulated sugar, and a handful of other ingredients are all it takes to make this recipe so tasty. 2 people have made this recipe and would make it again. All things considered, we decided this recipe deserves a spoonacular score of 48%. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/peanut-butter-cookie-bars-with-reeses-peanut-butter-eggs-547546\">Peanut butter cookie bars with Reese’s peanut butter eggs</a>, <a href=\"https://spoonacular.com/recipes/peanut-brittle-cookie-bars-with-peanut-butter-icing-492275\">Peanut Brittle Cookie Bars with Peanut Butter Icing</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-cookie-bars-538547\">Peanut Butter Cookie Bars</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Tropical Carrot Cake",
        "descricao": "The recipe Tropical Carrot Cake can be made in roughly 45 minutes. One portion of this dish contains roughly 7g of protein, 4g of fat, and a total of 386 calories. This dairy free and lacto ovo vegetarian recipe serves 9 and costs 79 cents per serving. Only a few people really liked this dessert. A mixture of cinnamon, vanilla paste), applesauce, and a handful of other ingredients are all it takes to make this recipe so delicious. 1 person has made this recipe and would make it again. It will be a hit at your Easter event. It is brought to you by Foodista. With a spoonacular score of 59%, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/tropical-carrot-cake-533556\">Tropical Carrot Cake</a>, <a href=\"https://spoonacular.com/recipes/tropical-carrot-cake-575636\">Tropical Carrot Cake</a>, and <a href=\"https://spoonacular.com/recipes/tropical-carrot-cake-416154\">Tropical Carrot Cake</a> for similar recipes.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "6 Mouthwatering Parfait You Need in Your Life Right Now",
        "descricao": "6 Mouthwatering Parfait You Need in Your Life Right Now is a lacto ovo vegetarian dessert. One portion of this dish contains about 14g of protein, 24g of fat, and a total of 527 calories. This recipe serves 1 and costs $1.74 per serving. Head to the store and pick up peaches, honey, basil torn into pieces, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by spoonacular user <a href=\"/profile/maplewoodroad\">maplewoodroad</a>. <a href=\"https://spoonacular.com/recipes/fruit-and-yogurt-parfait-recipe-grapes-and-granola-parfait-47352\">Fruit And Yogurt Parfait Recipe (grapes And Granola Parfait)</a>, <a href=\"https://spoonacular.com/recipes/mouthwatering-mice-752683\">Mouthwatering Mice</a>, and <a href=\"https://spoonacular.com/recipes/mouthwatering-grilled-saltimbocca-1697709\">Mouthwatering Grilled Saltimbocca</a> are very similar to this recipe.",
        "preco_unitario": 25,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Jules' Banana Bread",
        "descricao": "Jules' Banana Bread is a dairy free and lacto ovo vegetarian breakfast. One serving contains 559 calories, 13g of protein, and 31g of fat. This recipe serves 4 and costs $1.23 per serving. 1 person were impressed by this recipe. This recipe from Foodista requires cinnamon, baking soda, sugar, and eggs. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 56%, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/jules-banana-bread-1638367\">Jules' Banana Bread</a>, <a href=\"https://spoonacular.com/recipes/fries-for-jules-345802\">Fries for Jules</a>, and <a href=\"https://spoonacular.com/recipes/jules-crusty-french-gluten-free-baguettes-562299\">Jules’ Crusty French Gluten Free Baguettes</a>.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Eton Mess Dessert",
        "descricao": "Eton Mess Dessert might be a good recipe to expand your dessert recipe box. This gluten free and lacto ovo vegetarian recipe serves 6 and costs $2.19 per serving. One portion of this dish contains about 5g of protein, 4g of fat, and a total of 231 calories. It is brought to you by Foodista. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes approximately 3 hours. A mixture of strawberries, juice of lemon, egg whites, and a handful of other ingredients are all it takes to make this recipe so flavorful. Taking all factors into account, this recipe earns a spoonacular score of 52%, which is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/eton-mess-374026\">Eton Mess</a>, <a href=\"https://spoonacular.com/recipes/eton-mess-1092016\">Eton mess</a>, and <a href=\"https://spoonacular.com/recipes/eton-mess-824480\">Eton Mess</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 180,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Strawberry Mango Crumble",
        "descricao": "Strawberry Mango Crumble might be just the dessert you are searching for. This lacto ovo vegetarian recipe serves 6 and costs $2.03 per serving. One serving contains 329 calories, 5g of protein, and 13g of fat. 1 person found this recipe to be flavorful and satisfying. It can be enjoyed any time, but it is especially good for Mother's Day. If you have baking powder, mangos, cornstarch, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 48%. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/mango-and-rhubarb-crumble-59111\">Mango And Rhubarb Crumble</a>, <a href=\"https://spoonacular.com/recipes/mango-and-pineapple-crumble-759482\">Mango and Pineapple Crumble</a>, and <a href=\"https://spoonacular.com/recipes/mango-nectarine-and-raspberry-crumble-126047\">Mango, Nectarine and Raspberry Crumble</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roasted Strawberry Pie Parfait",
        "descricao": "The recipe Roasted Strawberry Pie Parfait can be made in about 45 minutes. One serving contains 369 calories, 12g of protein, and 15g of fat. For $2.83 per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. This recipe serves 4. If you have strawberries, olive oil, ground cinnamon, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It can be enjoyed any time, but it is especially good for Mother's Day. 1 person found this recipe to be yummy and satisfying. Only a few people really liked this dessert. All things considered, we decided this recipe deserves a spoonacular score of 49%. This score is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/strawberry-mousse-parfait-pie-472132\">Strawberry Mousse Parfait Pie</a>, <a href=\"https://spoonacular.com/recipes/chocolate-covered-cherry-pudding-pie-fait-pie-or-parfait-70759\">Chocolate Covered Cherry Pudding Pie-fait Pie Or Parfait</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-parfait-603483\">Strawberry Parfait</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Gluten Free Butternut Squash Pistachio Bars",
        "descricao": "If you have approximately 45 minutes to spend in the kitchen, Gluten Free Butternut Squash Pistachio Bars might be a tremendous gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe to try. This recipe makes 12 servings with 221 calories, 9g of protein, and 16g of fat each. For 87 cents per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. Only a few people really liked this dessert. 1 person found this recipe to be flavorful and satisfying. It is brought to you by Foodista. Head to the store and pick up water, eggs, honey, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 47%, which is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/gluten-free-butternut-squash-pie-574667\">Gluten Free Butternut Squash Pie</a>, <a href=\"https://spoonacular.com/recipes/gluten-free-butternut-squash-soup-179707\">Gluten-Free Butternut Squash Soup</a>, and <a href=\"https://spoonacular.com/recipes/gluten-free-butternut-squash-apple-soup-563155\">Gluten Free Butternut Squash Apple Soup</a>.",
        "preco_unitario": 63,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Persimmons Tofu Parfait",
        "descricao": "Persimmons Tofu Parfait is a gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe with 4 servings. For $1.59 per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 3g of protein, 10g of fat, and a total of 338 calories. This recipe is liked by 1 foodies and cooks. It works best as a dessert, and is done in roughly 45 minutes. Head to the store and pick up cocoa powder, dates, vanillan extract, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 34%. This score is not so great. Similar recipes are <a href=\"https://spoonacular.com/recipes/fruit-and-yogurt-parfait-recipe-grapes-and-granola-parfait-47352\">Fruit And Yogurt Parfait Recipe (grapes And Granola Parfait)</a>, <a href=\"https://spoonacular.com/recipes/persimmons-butter-618040\">Persimmons Butter</a>, and <a href=\"https://spoonacular.com/recipes/roasted-pork-with-persimmons-618037\">Roasted Pork with Persimmons</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "The Ultimate Frozen Coconut ‘Ice Cream’ with Hard Shell Chocolate Sauce",
        "descricao": "The Ultimate Frozen Coconut ‘Ice Cream’ with Hard Shell Chocolate Sauce is a dessert that serves 3. For $1.18 per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 5g of protein, 43g of fat, and a total of 512 calories. Only a few people made this recipe, and 2 would say it hit the spot. It can be enjoyed any time, but it is especially good for Summer. Head to the store and pick up coconut, chocolate chips, bananas, and a few other things to make it today. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and fodmap friendly diet. Overall, this recipe earns a good spoonacular score of 46%. Similar recipes are <a href=\"https://spoonacular.com/recipes/the-ultimate-frozen-coconut-ice-cream-with-hard-shell-chocolate-sauce-1404511\">The Ultimate Frozen Coconut ‘Ice Cream’ with Hard Shell Chocolate Sauce</a>, <a href=\"https://spoonacular.com/recipes/hard-shell-ice-cream-sauce-415052\">Hard-Shell Ice Cream Sauce</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-ice-cream-with-a-hard-chocolate-shell-207506\">Peanut Butter Ice Cream with a Hard Chocolate Shell</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Healthy Chocolate Fudge Bread",
        "descricao": "The recipe Healthy Chocolate Fudge Bread can be made in approximately 1 hour and 15 minutes. This recipe serves 8 and costs 98 cents per serving. Watching your figure? This gluten free recipe has 279 calories, 6g of protein, and 13g of fat per serving. This recipe is liked by 1 foodies and cooks. If you have yogurt, honey, cacao powder, and a few other ingredients on hand, you can make it. It works well as a dessert. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 33%. This score is not so great. Try <a href=\"https://spoonacular.com/recipes/healthy-chocolate-fudge-cups-1175623\">Healthy Chocolate Fudge Cups</a>, <a href=\"https://spoonacular.com/recipes/healthy-homemade-triple-chocolate-fudge-523194\">Healthy Homemade Triple Chocolate Fudge</a>, and <a href=\"https://spoonacular.com/recipes/healthy-chocolate-fudge-zucchini-brownies-666606\">Healthy Chocolate Fudge Zucchini Brownies</a> for similar recipes.",
        "preco_unitario": 49,
        "tempo_preparo": 75,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Banana Split Parfait",
        "descricao": "The recipe Banana Split Parfait can be made in roughly 45 minutes. This gluten free recipe serves 3 and costs $26.82 per serving. This dessert has 824 calories, 21g of protein, and 55g of fat per serving. Not a lot of people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. A mixture of peanuts, caramel syrup, yogurt, and a handful of other ingredients are all it takes to make this recipe so delicious. Overall, this recipe earns a solid spoonacular score of 47%. Try <a href=\"https://spoonacular.com/recipes/healthy-banana-split-banana-bread-619930\">Healthy Banana Split Banana Bread</a>, <a href=\"https://spoonacular.com/recipes/banana-parfait-49238\">Banana Parfait</a>, and <a href=\"https://spoonacular.com/recipes/banana-chocolate-parfait-49373\">Banana Chocolate Parfait</a> for similar recipes.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Peanut Butter Filled Chocolate Cupcakes with Chocolate Ganache Frosting",
        "descricao": "Peanut Butter Filled Chocolate Cupcakes with Chocolate Ganache Frosting might be a good recipe to expand your dessert recipe box. One serving contains 662 calories, 17g of protein, and 45g of fat. This recipe serves 18. For $1.28 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. This recipe is typical of American cuisine. 1 person has made this recipe and would make it again. If you have vanillan extract, coffee, kosher salt, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns a solid spoonacular score of 48%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/peanut-butter-filled-chocolate-cupcakes-with-chocolate-ganache-frosting-1223729\">Peanut Butter Filled Chocolate Cupcakes with Chocolate Ganache Frosting</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-cupcakes-with-bittersweet-chocolate-ganache-frosting-598554\">Peanut Butter Cupcakes with Bittersweet Chocolate Ganache Frosting</a>, and <a href=\"https://spoonacular.com/recipes/ganache-filled-chocolate-cupcakes-with-seven-minute-meringe-frosting-189918\">Ganache-Filled Chocolate Cupcakes with Seven-Minute Meringe Frosting</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vanilla Cream Cakes, Easy and Fluffy Holiday Cakes",
        "descricao": "The recipe Vanilla Cream Cakes, Easy and Fluffy Holiday Cakes can be made in around 45 minutes. For $1.17 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 15g of protein, 36g of fat, and a total of 517 calories. This recipe serves 15. It works well as a dessert. Head to the store and pick up g heavy whipping cream, eggs, 6 liter milk, and a few other things to make it today. 10 people have made this recipe and would make it again. It is brought to you by Foodista. With a spoonacular score of 34%, this dish is not so awesome. Try <a href=\"https://spoonacular.com/recipes/individual-vanilla-cakes-with-strawberries-cream-588594\">Individual vanilla cakes with strawberries & cream</a>, <a href=\"https://spoonacular.com/recipes/chocolate-souffl-cakes-with-vanilla-thyme-ice-cream-67261\">Chocolate Soufflé Cakes with Vanilla-Thyme Ice Cream</a>, and <a href=\"https://spoonacular.com/recipes/kentucky-derby-mini-chocolate-pecan-cakes-with-vanilla-bourbon-smash-ice-cream-549868\">Kentucky Derby Mini Chocolate-Pecan Cakes with Vanilla Bourbon Smash Ice Cream</a> for similar recipes.",
        "preco_unitario": 20,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Oatmeal, Apricot, Walnut Soda Bread",
        "descricao": "Oatmeal, Apricot, Walnut Soda Bread takes about 45 minutes from beginning to end. One serving contains 357 calories, 10g of protein, and 11g of fat. This recipe serves 8 and costs 70 cents per serving. This recipe from Foodista has 1 fans. It works well as an European breakfast. A mixture of cream of tartar, brown sugar, butter, and a handful of other ingredients are all it takes to make this recipe so yummy. Overall, this recipe earns a not so amazing spoonacular score of 40%. Similar recipes are <a href=\"https://spoonacular.com/recipes/irish-walnut-oatmeal-soda-bread-577359\">Irish Walnut Oatmeal Soda Bread</a>, <a href=\"https://spoonacular.com/recipes/oatmeal-soda-bread-245251\">Oatmeal Soda Bread</a>, and <a href=\"https://spoonacular.com/recipes/apricot-walnut-oatmeal-muffins-no-flour-sbd-phase-2-3-124791\">Apricot Walnut Oatmeal Muffins (No Flour!) SBD Phase 2&3</a>.",
        "preco_unitario": 55,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chinese Steamed Flan",
        "descricao": "Chinese Steamed Flan is a dessert that serves 6. Watching your figure? This gluten free and lacto ovo vegetarian recipe has 252 calories, 8g of protein, and 6g of fat per serving. For $1.67 per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 9 would say it hit the spot. It is a rather inexpensive recipe for fans of Chinese food. It is brought to you by Foodista. Head to the store and pick up strawberries, granulated sugar, milk, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a solid spoonacular score of 47%. Similar recipes include <a href=\"https://spoonacular.com/recipes/how-to-cook-leche-flan-steamed-crme-caramel-478107\">How to cook: Leche flan (steamed crème caramel)</a>, <a href=\"https://spoonacular.com/recipes/chinese-steamed-fish-40745\">Chinese Steamed Fish</a>, and <a href=\"https://spoonacular.com/recipes/ma-lai-go-chinese-steamed-cake-1075533\">Ma Lai Go Chinese Steamed Cake</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Napoleon - A Creamy Puff Pastry Cake",
        "descricao": "Napoleon - A Creamy Puff Pastry Cake takes about 45 minutes from beginning to end. This recipe serves 9. Watching your figure? This lacto ovo vegetarian recipe has 551 calories, 13g of protein, and 28g of fat per serving. For 92 cents per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. It is brought to you by Foodista. Not a lot of people really liked this dessert. A mixture of sugar, flour, x10'' puff pastry, and a handful of other ingredients are all it takes to make this recipe so tasty. Overall, this recipe earns a rather bad spoonacular score of 36%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/napoleon-a-creamy-puff-pastry-cake-1611097\">Napoleon - A Creamy Puff Pastry Cake</a>, <a href=\"https://spoonacular.com/recipes/creamy-chicken-puff-pastry-puffs-1551337\">Creamy Chicken Puff Pastry Puffs</a>, and <a href=\"https://spoonacular.com/recipes/puff-pastry-salmon-with-creamy-pesto-1497\">Puff Pastry Salmon with Creamy Pesto</a>.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Buckwheat Crepes",
        "descricao": "Buckwheat Crepes is a Mediterranean breakfast. For 92 cents per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. One portion of this dish contains around 13g of protein, 14g of fat, and a total of 374 calories. This recipe serves 1. It is a good option if you're following a gluten free, dairy free, and lacto ovo vegetarian diet. It is brought to you by Foodista. 1 person found this recipe to be tasty and satisfying. Head to the store and pick up honey, cinnamon, salt, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 44%. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/buckwheat-crepes-1352017\">Buckwheat Crepes</a>, <a href=\"https://spoonacular.com/recipes/buckwheat-crpes-610589\">Buckwheat crêpes</a>, and <a href=\"https://spoonacular.com/recipes/buckwheat-crepes-409586\">Buckwheat Crepes</a>.",
        "preco_unitario": 36,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chia Seed Pudding",
        "descricao": "Chia Seed Pudding takes roughly 45 minutes from beginning to end. Watching your figure? This gluten free and dairy free recipe has 143 calories, 4g of protein, and 6g of fat per serving. This recipe serves 3. For $1.56 per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. A mixture of agave syrup, garnish: raspberries, chia seeds, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a dessert. A couple people made this recipe, and 21 would say it hit the spot. It is brought to you by Foodista. Overall, this recipe earns a pretty good spoonacular score of 45%. Similar recipes are <a href=\"https://spoonacular.com/recipes/chia-seed-pudding-1263815\">Chia Seed Pudding</a>, <a href=\"https://spoonacular.com/recipes/chia-seed-pudding-578261\">Chia Seed Pudding</a>, and <a href=\"https://spoonacular.com/recipes/chia-seed-pudding-837448\">Chia Seed Pudding</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "SPICY AND SAVORY PUMPKIN PIE",
        "descricao": "The recipe SPICY AND SAVORY PUMPKIN PIE can be made in roughly 45 minutes. This dessert has 259 calories, 7g of protein, and 17g of fat per serving. This recipe serves 8. For $1.02 per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 1 person were impressed by this recipe. It is perfect for Thanksgiving. If you have agave nectar, cayenne pepper, pumpkin puree, and a few other ingredients on hand, you can make it. With a spoonacular score of 42%, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/savory-pumpkin-pie-476745\">Savory Pumpkin Pie</a>, <a href=\"https://spoonacular.com/recipes/savory-pumpkin-walnut-pie-618092\">Savory Pumpkin-Walnut Pie</a>, and <a href=\"https://spoonacular.com/recipes/savory-pumpkin-pie-soup-with-cinnamon-marshmallows-pepita-streusel-and-whipped-crme-frache-213395\">Savory Pumpkin Pie Soup with Cinnamon Marshmallows, Pepita Streusel, and Whipped Crème Fraîche</a> for similar recipes.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Healthy Chocolate Mousse",
        "descricao": "Healthy Chocolate Mousse could be just the gluten free and lacto ovo vegetarian recipe you've been looking for. For $1.09 per serving, you get a dessert that serves 6. One serving contains 407 calories, 7g of protein, and 39g of fat. This recipe is liked by 1 foodies and cooks. valentin day will be even more special with this recipe. If you have chocolate squares, egg yolks, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. With a spoonacular score of 19%, this dish is not so outstanding. Try <a href=\"https://spoonacular.com/recipes/healthy-chocolate-mousse-1563265\">Healthy Chocolate Mousse</a>, <a href=\"https://spoonacular.com/recipes/healthy-chocolate-mousse-1107547\">Healthy Chocolate Mousse</a>, and <a href=\"https://spoonacular.com/recipes/healthy-chocolate-mousse-smoothie-480129\">healthy chocolate mousse smoothie</a> for similar recipes.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lemon Pudding",
        "descricao": "The recipe Lemon Pudding can be made in around 45 minutes. For $1.28 per serving, you get a dessert that serves 6. One serving contains 504 calories, 10g of protein, and 31g of fat. A mixture of whipped topping, milk, pkts lemon pudding, and a handful of other ingredients are all it takes to make this recipe so scrumptious. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 44%, which is good. Try <a href=\"https://spoonacular.com/recipes/triple-lemon-baby-cakes-with-lemon-pudding-cream-497678\">Triple Lemon Baby Cakes with Lemon Pudding Cream</a>, <a href=\"https://spoonacular.com/recipes/tangy-lemon-pudding-with-lemon-meringue-ice-cream-1249947\">Tangy lemon pudding with lemon meringue ice cream</a>, and <a href=\"https://spoonacular.com/recipes/tangy-lemon-pudding-with-lemon-meringue-ice-cream-211473\">Tangy lemon pudding with lemon meringue ice cream</a> for similar recipes.",
        "preco_unitario": 33,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegan Peanut Butter Ice Cream",
        "descricao": "Vegan Peanut Butter Ice Cream might be a good recipe to expand your dessert repertoire. This recipe serves 1 and costs 68 cents per serving. One portion of this dish contains roughly 7g of protein, 27g of fat, and a total of 438 calories. It is brought to you by Foodista. 1 person were glad they tried this recipe. If you have banana, coconut oil, peanut butter, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, dairy free, and fodmap friendly diet. It will be a hit at your Summer event. From preparation to the plate, this recipe takes around 15 minutes. With a spoonacular score of 43%, this dish is good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegan-chocolate-peanut-butter-ice-cream-1027074\">Vegan Chocolate Peanut Butter Ice Cream</a>, <a href=\"https://spoonacular.com/recipes/vegan-salted-caramel-and-peanut-butter-ice-cream-553275\">Vegan salted caramel and peanut butter ice cream</a>, and <a href=\"https://spoonacular.com/recipes/vegan-chocolate-peanut-butter-ice-cream-no-machine-required-602766\">Vegan Chocolate Peanut Butter Ice Cream {No Machine Required}</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 15,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Ginger Snap Pumpkin Icebox Cake",
        "descricao": "Ginger Snap Pumpkin Icebox Cake takes roughly 45 minutes from beginning to end. This recipe serves 8 and costs $1.49 per serving. This dessert has 702 calories, 7g of protein, and 46g of fat per serving. A mixture of heavy cream, pumpkin puree, confectioners' sugar, and a handful of other ingredients are all it takes to make this recipe so flavorful. 1 person has made this recipe and would make it again. It is brought to you by Foodista. With a spoonacular score of 43%, this dish is solid. <a href=\"https://spoonacular.com/recipes/ginger-snap-pumpkin-pie-with-ginger-cream-952320\">Ginger Snap Pumpkin Pie with Ginger Cream</a>, <a href=\"https://spoonacular.com/recipes/ginger-snap-pumpkin-pie-with-ginger-cream-1332305\">Ginger Snap Pumpkin Pie with Ginger Cream</a>, and <a href=\"https://spoonacular.com/recipes/ginger-snap-and-pumpkin-ice-cream-sandwiches-644642\">Ginger Snap and Pumpkin Ice Cream Sandwiches</a> are very similar to this recipe.",
        "preco_unitario": 51,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Ice Cream Biscuits",
        "descricao": "The recipe Ice Cream Biscuits can be made in around 45 minutes. This lacto ovo vegetarian recipe serves 20 and costs $1.79 per serving. One portion of this dish contains approximately 7g of protein, 34g of fat, and a total of 445 calories. It is brought to you by Foodista. Not a lot of people really liked this dessert. 1 person has tried and liked this recipe. It is perfect for Summer. A mixture of butter, milk, vanilla, and a handful of other ingredients are all it takes to make this recipe so yummy. With a spoonacular score of 43%, this dish is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/ice-cream-biscuits-1556329\">Ice Cream Biscuits</a>, <a href=\"https://spoonacular.com/recipes/tea-biscuits-ice-cream-1086558\">Tea & biscuits ice cream</a>, and <a href=\"https://spoonacular.com/recipes/coconut-milk-strawberry-ice-cream-over-honey-orange-biscuits-with-happyfoodholly-627076\">Coconut Milk Strawberry Ice Cream over Honey Orange Biscuits & with @HappyFoodHolly</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Individual Tiramisu Parfaits",
        "descricao": "Individual Tiramisu Parfaits is a Mediterranean dessert. One portion of this dish contains approximately 11g of protein, 36g of fat, and a total of 569 calories. This recipe serves 4 and costs $2.45 per serving. From preparation to the plate, this recipe takes roughly 45 minutes. A mixture of vanilla, cocoa powder, rum extract, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 32%, which is rather bad. Try <a href=\"https://spoonacular.com/recipes/individual-tiramisu-67976\">Individual Tiramisu</a>, <a href=\"https://spoonacular.com/recipes/individual-tiramisu-67910\">Individual Tiramisu</a>, and <a href=\"https://spoonacular.com/recipes/individual-tiramisu-trifles-67982\">Individual Tiramisu Trifles</a> for similar recipes.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Crepes Suzette",
        "descricao": "Forget going out to eat or ordering takeout every time you crave Mediterranean food. Try making Crepes Suzette at home. This recipe serves 4 and costs 88 cents per serving. Watching your figure? This lacto ovo vegetarian recipe has 619 calories, 11g of protein, and 40g of fat per serving. It works best as a breakfast, and is done in about 45 minutes. Head to the store and pick up sugar, milk, sugar, and a few other things to make it today. 45 people found this recipe to be flavorful and satisfying. It is brought to you by Foodista. Overall, this recipe earns a solid spoonacular score of 46%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/crepes-suzette-598585\">Crepes Suzette</a>, <a href=\"https://spoonacular.com/recipes/crepes-suzette-393747\">Crepes Suzette</a>, and <a href=\"https://spoonacular.com/recipes/crpes-suzette-247617\">Crêpes Suzette</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Peanut Butter Swirl Banana Bread",
        "descricao": "Need a gluten free and lacto ovo vegetarian breakfast? Peanut Butter Swirl Banana Bread could be a spectacular recipe to try. This recipe makes 8 servings with 227 calories, 7g of protein, and 6g of fat each. For 50 cents per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. Head to the store and pick up eggs, sea salt, baking soda, and a few other things to make it today. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person were glad they tried this recipe. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 36%. This score is rather bad. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/peanut-butter-chocolate-swirl-banana-bread-muffins-524727\">Peanut Butter Chocolate Swirl Banana Bread Muffins</a>, <a href=\"https://spoonacular.com/recipes/chocolate-banana-peanut-butter-swirl-brownies-796086\">Chocolate Banana Peanut Butter Swirl Brownies</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-swirl-bread-490355\">Peanut Butter and Jelly Swirl Bread</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Almond Pistachio Cookied With Saffron Icing",
        "descricao": "Almond Pistachio Cookied With Saffron Icing might be a good recipe to expand your dessert recipe box. One serving contains 125 calories, 2g of protein, and 7g of fat. This recipe serves 15 and costs 20 cents per serving. This recipe is liked by 1 foodies and cooks. Head to the store and pick up pistachio, bicarbonate of soda, muscovado sugar / castor sugar, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by Foodista. It is a good option if you're following a lacto ovo vegetarian diet. Overall, this recipe earns a solid spoonacular score of 40%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/pistachio-pound-cake-with-vanilla-almond-icing-66178\">Pistachio Pound Cake With Vanillan Almond Icing</a>, <a href=\"https://spoonacular.com/recipes/braised-chicken-and-rice-with-orange-saffron-almond-and-pistachio-syrup-188649\">Braised Chicken and Rice with Orange, Saffron, Almond, and Pistachio Syrup</a>, and <a href=\"https://spoonacular.com/recipes/saffron-pistachio-lace-cookies-622193\">Saffron Pistachio Lace Cookies</a>.",
        "preco_unitario": 63,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "No-Bake Chocolate Peanut Butter Pie",
        "descricao": "Need a gluten free dessert? No-Bake Chocolate Peanut Butter Pie could be a great recipe to try. This recipe serves 8 and costs $1.2 per serving. One portion of this dish contains around 14g of protein, 42g of fat, and a total of 623 calories. 30 people were impressed by this recipe. This recipe from Foodista requires powdered sugar, non-dairy whipped topping, chocolate chips, and roasted peanuts. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 44%, this dish is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/no-bake-peanut-butter-chocolate-pie-488907\">No-Bake Peanut Butter Chocolate Pie</a>, <a href=\"https://spoonacular.com/recipes/the-best-no-bake-chocolate-peanut-butter-pie-999102\">The BEST No Bake Chocolate Peanut Butter Pie</a>, and <a href=\"https://spoonacular.com/recipes/no-bake-chocolate-and-peanut-butter-pie-553175\">No bake chocolate and peanut butter pie</a>.",
        "preco_unitario": 55,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "A Classic Strawberry Shortcake",
        "descricao": "You can never have too many dessert recipes, so give A Classic Strawberry Shortcake a try. This recipe serves 4 and costs $1.4 per serving. One serving contains 514 calories, 7g of protein, and 24g of fat. Mother's Day will be even more special with this recipe. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. A mixture of all purpose flour, vanillan extract, margarine, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 42%, which is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/classic-strawberry-shortcake-350408\">Classic Strawberry Shortcake</a>, <a href=\"https://spoonacular.com/recipes/classic-strawberry-shortcake-298182\">Classic Strawberry Shortcake</a>, and <a href=\"https://spoonacular.com/recipes/classic-strawberry-shortcake-58132\">Classic Strawberry Shortcake</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mango Cranberry Sherbet",
        "descricao": "Mango Cranberry Sherbet could be just the gluten free, lacto ovo vegetarian, and primal recipe you've been looking for. This recipe makes 4 servings with 271 calories, 6g of protein, and 7g of fat each. For $1.44 per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. If you have mango, arrowroot, honey, and a few other ingredients on hand, you can make it. It works best as a dessert, and is done in approximately 45 minutes. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. With a spoonacular score of 41%, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/mango-coconut-sherbet-54303\">Mango-Coconut Sherbet</a>, <a href=\"https://spoonacular.com/recipes/mango-coconut-sherbet-583821\">Mango-Coconut Sherbet</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-sherbet-414520\">Cranberry Sherbet</a> for similar recipes.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Rice Pudding",
        "descricao": "Rice Pudding might be just the dessert you are searching for. One portion of this dish contains approximately 12g of protein, 10g of fat, and a total of 404 calories. For 61 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. This recipe serves 4. 2 people were glad they tried this recipe. It is brought to you by Foodista. If you have butter, cinnamon, egg, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 39%. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/left-over-rice-make-rice-pudding-1308821\">Left over rice? Make Rice pudding</a>, <a href=\"https://spoonacular.com/recipes/left-over-rice-make-rice-pudding-532769\">Left over rice? Make Rice pudding</a>, and <a href=\"https://spoonacular.com/recipes/rice-kheer-rice-pudding-600368\">Rice Kheer (Rice Pudding)</a> for similar recipes.",
        "preco_unitario": 32,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Xocai Oatmeal Dark Chocolate No-Bake Cookies",
        "descricao": "Xocai Oatmeal Dark Chocolate No-Bake Cookies takes around 45 minutes from beginning to end. This gluten free recipe serves 24 and costs 64 cents per serving. One serving contains 265 calories, 6g of protein, and 16g of fat. 2 people have made this recipe and would make it again. It works well as an Asian dessert. This recipe from Foodista requires vanilla, sugar substitute, oats, and peanut butter. With a spoonacular score of 44%, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/xocai-irish-cream-with-xocai-healthy-dark-chocolate-nuggets-665480\">Xocai Irish Cream with Xocai Healthy Dark Chocolate Nuggets</a>, <a href=\"https://spoonacular.com/recipes/xocai-healthy-dark-chocolate-brownies-665476\">Xocai Healthy Dark Chocolate Brownies</a>, and <a href=\"https://spoonacular.com/recipes/video-how-to-make-a-dark-chocolate-berry-oatmeal-bake-952978\">VIDEO: How to Make a Dark Chocolate Berry Oatmeal Bake</a> for similar recipes.",
        "preco_unitario": 64,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "5 Minute Xocai Chocolate Mug Cake",
        "descricao": "If you want to add more lacto ovo vegetarian recipes to your collection, 5 Minute Xocai Chocolate Mug Cake might be a recipe you should try. For $1.32 per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. One portion of this dish contains about 10g of protein, 15g of fat, and a total of 362 calories. This recipe serves 2. From preparation to the plate, this recipe takes around 45 minutes. 25 people have made this recipe and would make it again. A mixture of chocolate, eggs, honey, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a budget friendly dessert. It is brought to you by Foodista. Overall, this recipe earns a solid spoonacular score of 41%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/one-minute-chocolate-cake-in-a-mug-1241135\">One Minute Chocolate Cake in a Mug</a>, <a href=\"https://spoonacular.com/recipes/two-minute-chocolate-mug-cake-591534\">Two Minute Chocolate Mug Cake</a>, and <a href=\"https://spoonacular.com/recipes/one-minute-chocolate-cake-in-a-mug-619750\">One Minute Chocolate Cake in a Mug</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Favorite Moist Chocolate Cake",
        "descricao": "Favorite Moist Chocolate Cake might be just the dessert you are searching for. This recipe serves 12 and costs $1.02 per serving. One portion of this dish contains roughly 7g of protein, 25g of fat, and a total of 403 calories. This recipe is liked by 147 foodies and cooks. From preparation to the plate, this recipe takes roughly 45 minutes. Head to the store and pick up oil, heavy cream, bittersweet chocolate, and a few other things to make it today. It is brought to you by Foodista. With a spoonacular score of 44%, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/favorite-moist-chocolate-cake-1520147\">Favorite Moist Chocolate Cake</a>, <a href=\"https://spoonacular.com/recipes/favorite-moist-chocolate-cake-1355675\">Favorite Moist Chocolate Cake</a>, and <a href=\"https://spoonacular.com/recipes/moist-chocolate-cake-373086\">Moist Chocolate Cake</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Irish Soda Bread By Mommie Cooks",
        "descricao": "Irish Soda Bread By Mommie Cooks is an European breakfast. This recipe serves 8. For 41 cents per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. Watching your figure? This lacto ovo vegetarian recipe has 381 calories, 10g of protein, and 8g of fat per serving. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. Head to the store and pick up butter, honey, baking soda, and a few other things to make it today. st. patrick day will be even more special with this recipe. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns a good spoonacular score of 41%. Similar recipes include <a href=\"https://spoonacular.com/recipes/navajo-fry-bread-by-mommie-cooks-652980\">Navajo Fry Bread By Mommie Cooks</a>, <a href=\"https://spoonacular.com/recipes/salsa-verde-by-mommie-cooks-659174\">Salsa Verde By Mommie Cooks</a>, and <a href=\"https://spoonacular.com/recipes/chicken-fajitas-by-mommie-cooks-638085\">Chicken Fajitas By Mommie Cooks</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "No-Bake Cookies with Coconut Oil",
        "descricao": "No-Bake Cookies with Coconut Oil requires approximately 45 minutes from start to finish. One serving contains 179 calories, 3g of protein, and 13g of fat. This recipe serves 10 and costs 47 cents per serving. 1 person were glad they tried this recipe. Head to the store and pick up almond milk, all-natural nut butter, coconut, and a few other things to make it today. It works well as a dessert. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, and fodmap friendly diet. All things considered, we decided this recipe deserves a spoonacular score of 41%. This score is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/healthy-no-bake-cookies-with-coconut-oil-coconut-and-turmeric-1002802\">Healthy No Bake Cookies with Coconut Oil, Coconut and Turmeric</a>, <a href=\"https://spoonacular.com/recipes/dark-chocolate-raspberry-coconut-oatmeal-cookies-made-with-coconut-oil-809865\">Dark Chocolate Raspberry Coconut Oatmeal Cookies (made with coconut oil!)</a>, and <a href=\"https://spoonacular.com/recipes/coconut-oil-oatmeal-cookies-1111001\">Coconut Oil Oatmeal Cookies</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cheesecake Ice-Cream With Mango Syrup",
        "descricao": "If you have about 45 minutes to spend in the kitchen, Cheesecake Ice-Cream With Mango Syrup might be a spectacular gluten free and lacto ovo vegetarian recipe to try. For $1.27 per serving, you get a dessert that serves 10. One serving contains 304 calories, 8g of protein, and 11g of fat. 18 people were impressed by this recipe. Head to the store and pick up condensed milk, milk, water, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 42%, which is good. Try <a href=\"https://spoonacular.com/recipes/mango-chili-ice-cream-best-lick-2008-ice-cream-contest-entr-58729\">Mango Chili Ice Cream Best Lick! 2008 Ice Cream Contest Entr</a>, <a href=\"https://spoonacular.com/recipes/patriotic-ice-cream-sandwiches-with-red-velvet-shortbread-stars-cheesecake-ice-cream-497575\">Patriotic Ice Cream Sandwiches, with Red Velvet Shortbread Stars & Cheesecake Ice Cream</a>, and <a href=\"https://spoonacular.com/recipes/cherry-cheesecake-ice-cream-best-lick-2008-ice-cream-contes-70731\">Cherry Cheesecake Ice Cream Best Lick! 2008 Ice Cream Contes</a> for similar recipes.",
        "preco_unitario": 57,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Rice Krispie Treats with Maple Syrup and Brown Sugar",
        "descricao": "Rice Krispie Treats with Maple Syrup and Brown Sugar requires roughly 45 minutes from start to finish. This recipe serves 16 and costs 59 cents per serving. One portion of this dish contains approximately 2g of protein, 8g of fat, and a total of 247 calories. Head to the store and pick up brown sugar, butter, vanilla, and a few other things to make it today. This recipe is liked by 1 foodies and cooks. It works well as a dessert. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 11%. This score is rather bad. Similar recipes include <a href=\"https://spoonacular.com/recipes/maple-bacon-rice-krispie-treats-626309\">Maple Bacon Rice Krispie Treats</a>, <a href=\"https://spoonacular.com/recipes/maple-bacon-rice-krispie-treats-629787\">Maple Bacon Rice Krispie Treats</a>, and <a href=\"https://spoonacular.com/recipes/brown-butter-rice-krispie-treats-591897\">Brown Butter Rice Krispie Treats</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Berry Fruit Crumble",
        "descricao": "If you have about 45 minutes to spend in the kitchen, Berry Fruit Crumble might be an excellent gluten free, dairy free, and fodmap friendly recipe to try. This recipe makes 6 servings with 159 calories, 2g of protein, and 9g of fat each. For $1.51 per serving, this recipe covers 4% of your daily requirements of vitamins and minerals. If you have berries, margarine, old fashion oatmeal, and a few other ingredients on hand, you can make it. It works well as a dessert. A few people made this recipe, and 18 would say it hit the spot. It is brought to you by Foodista. With a spoonacular score of 39%, this dish is rather bad. Similar recipes are <a href=\"https://spoonacular.com/recipes/fig-crumble-dessert-fruit-crumble-recipe-57430\">Fig Crumble Dessert (fruit Crumble Recipe)</a>, <a href=\"https://spoonacular.com/recipes/berry-crumble-375560\">Berry Crumble</a>, and <a href=\"https://spoonacular.com/recipes/mixed-berry-crumble-50819\">Mixed Berry Crumble</a>.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Whoopie Pies (Pumpkin)",
        "descricao": "Whoopie Pies (Pumpkin) takes about 45 minutes from beginning to end. For 63 cents per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 5g of protein, 5g of fat, and a total of 294 calories. This recipe serves 13. It works well as a very reasonably priced dessert. It is brought to you by Foodista. It is a good option if you're following a dairy free and lacto ovo vegetarian diet. If you have brown sugar, canolan oil, ground ginger, and a few other ingredients on hand, you can make it. 1 person has tried and liked this recipe. Taking all factors into account, this recipe earns a spoonacular score of 38%, which is rather bad. Similar recipes are <a href=\"https://spoonacular.com/recipes/pumpkin-whoopie-pies-68215\">Pumpkin Whoopie Pies</a>, <a href=\"https://spoonacular.com/recipes/pumpkin-whoopie-pies-68213\">Pumpkin Whoopie Pies</a>, and <a href=\"https://spoonacular.com/recipes/pumpkin-whoopie-pies-1246717\">Pumpkin Whoopie Pies</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Peanut Butter Brownie Cheesecake",
        "descricao": "Peanut Butter Brownie Cheesecake is an American recipe that serves 10. For $1.35 per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. This dessert has 595 calories, 15g of protein, and 56g of fat per serving. Only a few people made this recipe, and 1 would say it hit the spot. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. Head to the store and pick up baking powder, erythritol, salt, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 50 minutes. All things considered, we decided this recipe deserves a spoonacular score of 0%. This score is very bad (but still fixable). Try <a href=\"https://spoonacular.com/recipes/peanut-butter-brownie-cheesecake-519236\">Peanut Butter & Brownie Cheesecake</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-brownie-cheesecake-1230431\">Peanut Butter Brownie Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-brownie-cheesecake-160169\">Peanut Butter Brownie Cheesecake</a> for similar recipes.",
        "preco_unitario": 52,
        "tempo_preparo": 50,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fruit and Yogurt Parfait Breakfast Tart",
        "descricao": "Fruit and Yogurt Parfait Breakfast Tart requires roughly 1 hour from start to finish. This recipe serves 8 and costs 90 cents per serving. One portion of this dish contains around 8g of protein, 12g of fat, and a total of 306 calories. 1 person has tried and liked this recipe. Only a few people really liked this dessert. This recipe from Foodista requires oats, almonds, pomegranate seeds, and strawberries. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. Taking all factors into account, this recipe earns a spoonacular score of 51%, which is good. Try <a href=\"https://spoonacular.com/recipes/fruit-and-yogurt-breakfast-parfait-586146\">Fruit and Yogurt Breakfast Parfait</a>, <a href=\"https://spoonacular.com/recipes/fruit-and-yogurt-breakfast-parfait-964277\">Fruit and Yogurt Breakfast Parfait</a>, and <a href=\"https://spoonacular.com/recipes/breakfast-yogurt-parfait-with-fresh-fruit-and-granola-128826\">Breakfast Yogurt Parfait With Fresh Fruit and Granola</a> for similar recipes.",
        "preco_unitario": 59,
        "tempo_preparo": 60,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Tapioca Pudding with Pineapple and Coconut",
        "descricao": "Tapioca Pudding with Pineapple and Coconut might be a good recipe to expand your dessert recipe box. For $2.38 per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 5g of protein, 15g of fat, and a total of 281 calories. This recipe serves 4. Not a lot of people made this recipe, and 2 would say it hit the spot. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. Head to the store and pick up 8 fl oz. coconut milk, salt, vanilla pod, and a few other things to make it today. From preparation to the plate, this recipe takes about 1 hour. It is brought to you by Foodista. Overall, this recipe earns a not so amazing spoonacular score of 40%. Try <a href=\"https://spoonacular.com/recipes/tapioca-pudding-with-pineapple-and-coconut-1620475\">Tapioca Pudding with Pineapple and Coconut</a>, <a href=\"https://spoonacular.com/recipes/pineapple-coconut-tapioca-237700\">Pineapple-Coconut Tapioca</a>, and <a href=\"https://spoonacular.com/recipes/coconut-tapioca-pudding-53836\">Coconut Tapioca Pudding</a> for similar recipes.",
        "preco_unitario": 62,
        "tempo_preparo": 60,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Banana Chocolate Pudding Cake",
        "descricao": "Banana Chocolate Pudding Cake might be just the dessert you are searching for. For 82 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. This recipe serves 6. One serving contains 359 calories, 15g of protein, and 4g of fat. This recipe from Foodista requires baking powder, bananas, vanilla, and eggs. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a solid spoonacular score of 41%. <a href=\"https://spoonacular.com/recipes/banana-pudding-cake-735378\">Banana Pudding Cake</a>, <a href=\"https://spoonacular.com/recipes/banana-pudding-cake-634171\">Banana Pudding Cake</a>, and <a href=\"https://spoonacular.com/recipes/banana-pudding-cake-1025391\">Banana Pudding Cake</a> are very similar to this recipe.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Blackberry Clafoutis",
        "descricao": "Blackberry Clafoutis might be a good recipe to expand your dessert repertoire. This recipe serves 2. One portion of this dish contains roughly 14g of protein, 15g of fat, and a total of 459 calories. For $1.47 per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. 4 people have tried and liked this recipe. A mixture of blackberries, vanillan extract, milk, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. It is a good option if you're following a lacto ovo vegetarian diet. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 40%, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/blackberry-clafoutis-50585\">Blackberry Clafoutis</a>, <a href=\"https://spoonacular.com/recipes/blue-velvet-blackberry-curd-and-blackberry-lemon-cream-cheese-cupcakes-313616\">Blue Velvet, Blackberry Curd, and Blackberry Lemon Cream Cheese Cupcakes</a>, and <a href=\"https://spoonacular.com/recipes/blackberry-beet-salad-with-blackberry-balsamic-dressing-721132\">Blackberry Beet Salad with Blackberry Balsamic Dressing</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Strawberries and Cream Cake",
        "descricao": "Strawberries and Cream Cake is a lacto ovo vegetarian dessert. This recipe serves 8 and costs $1.4 per serving. One serving contains 312 calories, 6g of protein, and 14g of fat. 1 person found this recipe to be delicious and satisfying. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. If you have heavy cream, butter, milk, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe earns a spoonacular score of 41%, which is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/strawberries-and-cream-coffee-cake-with-vanilla-cream-cheese-glaze-519922\">Strawberries and Cream Coffee Cake with Vanilla Cream Cheese Glaze</a>, <a href=\"https://spoonacular.com/recipes/strawberries-and-cream-coffee-cake-with-vanilla-cream-cheese-glaze-248340\">Strawberries and Cream Coffee Cake with Vanilla Cream Cheese Glaze</a>, and <a href=\"https://spoonacular.com/recipes/strawberries-and-cream-ice-cream-cake-giveaway-566229\">Strawberries and Cream Ice Cream Cake + Giveaway</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Julia Child's Plum Clafouti",
        "descricao": "Need a lacto ovo vegetarian dessert? Julia Child's Plum Clafouti could be an amazing recipe to try. One serving contains 295 calories, 12g of protein, and 10g of fat. This recipe serves 6. For $1.4 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. If you have eggs, plums, salt, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 39%, which is not so amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/julia-childs-ratatouille-1202455\">Julia Child's Ratatouille</a>, <a href=\"https://spoonacular.com/recipes/julia-childs-ratatouille-648641\">Julia Child's Ratatouille</a>, and <a href=\"https://spoonacular.com/recipes/julia-childs-vichyssoise-648643\">Julia Child's Vichyssoise</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Bittersweet Chocolate Gelato",
        "descricao": "Bittersweet Chocolate Gelato is a dessert that serves 4. For $1.67 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. One portion of this dish contains about 11g of protein, 33g of fat, and a total of 527 calories. This recipe is liked by 1 foodies and cooks. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. A mixture of sea salt, vanillan extract, heavy cream, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 38%. This score is not so excellent. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/which-gelato-flavour-are-you-coconut-and-walnut-gelato-674098\">Which gelato flavour are you? Coconut and walnut gelato</a>, <a href=\"https://spoonacular.com/recipes/chocolate-pound-cake-with-strawberry-ice-cream-and-bittersweet-chocolate-sauce-62517\">Chocolate Pound Cake with Strawberry Ice Cream and Bittersweet Chocolate Sauce</a>, and <a href=\"https://spoonacular.com/recipes/rich-chocolate-bundt-cake-with-bittersweet-chocolate-glaze-603939\">Rich Chocolate Bundt Cake with Bittersweet Chocolate Glaze</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Aunt Ivy’s Raw Macadamia and Goji Berry Cookies",
        "descricao": "Need a gluten free, dairy free, lacto ovo vegetarian, and vegan dessert? Aunt Ivy’s Raw Macadamian and Goji Berry Cookies could be an amazing recipe to try. This recipe serves 4 and costs $1.76 per serving. One serving contains 359 calories, 3g of protein, and 33g of fat. Head to the store and pick up macadamia nuts, goji berries, agave to sweeten, and a few other things to make it today. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. With a spoonacular score of 36%, this dish is not so great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/paleo-indulgences-raw-macadamia-thumbprint-cookies-473593\">Paleo Indulgences – Raw Macadamia Thumbprint Cookies</a>, <a href=\"https://spoonacular.com/recipes/goji-berry-chickpea-salad-558550\">Goji Berry Chickpea Salad</a>, and <a href=\"https://spoonacular.com/recipes/goji-berry-rice-pudding-1356547\">Goji Berry Rice Pudding</a>.",
        "preco_unitario": 67,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lean Dessert Brownie",
        "descricao": "Lean Dessert Brownie is an American recipe that serves 8. Watching your figure? This gluten free, lacto ovo vegetarian, and fodmap friendly recipe has 464 calories, 8g of protein, and 34g of fat per serving. For $1.79 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. It works best as a dessert, and is done in about 45 minutes. This recipe is liked by 1 foodies and cooks. This recipe from Foodista requires sea-salt, cayenne pepper, splenda, and ground flaxseeds. All things considered, we decided this recipe deserves a spoonacular score of 39%. This score is not so amazing. <a href=\"https://spoonacular.com/recipes/brownie-dessert-pizza-609229\">Brownie Dessert Pizza</a>, <a href=\"https://spoonacular.com/recipes/fudgy-brownie-dessert-378271\">Fudgy Brownie Dessert</a>, and <a href=\"https://spoonacular.com/recipes/layered-brownie-dessert-412297\">Layered Brownie Dessert</a> are very similar to this recipe.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chocolate Soup",
        "descricao": "Chocolate Soup might be a good recipe to expand your dessert collection. One serving contains 843 calories, 9g of protein, and 73g of fat. For $1.79 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. This recipe serves 6. It is brought to you by Foodista. It can be enjoyed any time, but it is especially good for Autumn. 1 person were glad they tried this recipe. If you have heavy whipping cream, bittersweet chocolate, confectioner's sugar, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free diet. All things considered, we decided this recipe deserves a spoonacular score of 36%. This score is not so spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/chocolate-soup-210542\">Chocolate soup</a>, <a href=\"https://spoonacular.com/recipes/chocolate-soup-for-two-639202\">Chocolate Soup For Two</a>, and <a href=\"https://spoonacular.com/recipes/mint-chocolate-dessert-soup-717335\">Mint Chocolate Dessert Soup</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "German White Chocolate Cake",
        "descricao": "The recipe German White Chocolate Cake can be made in about 45 minutes. For $1.86 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. One portion of this dish contains about 14g of protein, 46g of fat, and a total of 584 calories. This recipe serves 6. Head to the store and pick up coconut, vanillan extract, chocolate, and a few other things to make it today. 1 person were impressed by this recipe. It works well as an European dessert. It is brought to you by Foodista. Overall, this recipe earns a rather bad spoonacular score of 38%. Similar recipes include <a href=\"https://spoonacular.com/recipes/white-german-chocolate-cake-1060223\">White German Chocolate Cake</a>, <a href=\"https://spoonacular.com/recipes/german-chocolate-cake-877225\">German Chocolate Cake</a>, and <a href=\"https://spoonacular.com/recipes/german-chocolate-cake-60888\">German Chocolate Cake</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Peanut Butter Cup Trifle",
        "descricao": "If you want to add more European recipes to your collection, Peanut Butter Cup Trifle might be a recipe you should try. For $1.89 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. This recipe serves 4. One serving contains 809 calories, 16g of protein, and 51g of fat. 1 person has tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. A mixture of whipped topping, whipping cream, creamy peanut butter, and a handful of other ingredients are all it takes to make this recipe so delicious. It works well as a rather inexpensive dessert. Taking all factors into account, this recipe earns a spoonacular score of 31%, which is not so awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/peanut-butter-cup-trifle-449738\">Peanut Butter Cup Trifle</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-brownies-with-peanut-butter-cup-frosting-490035\">Peanut Butter Brownies with Peanut Butter Cup Frosting</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-cup-cookies-with-peanut-butter-buttercream-611813\">Peanut Butter Cup Cookies with Peanut Butter Buttercream</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chocolate-Walnut Bread Pudding",
        "descricao": "Chocolate-Walnut Bread Pudding takes approximately 45 minutes from beginning to end. One portion of this dish contains approximately 12g of protein, 39g of fat, and a total of 636 calories. This recipe serves 8. For $2.18 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. This recipe from Foodista requires kosher salt, bittersweet chocolate, walnuts, and egg yolks. Only a few people really liked this dessert. All things considered, we decided this recipe deserves a spoonacular score of 37%. This score is rather bad. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/apple-walnut-bread-pudding-274295\">Apple Walnut Bread Pudding</a>, <a href=\"https://spoonacular.com/recipes/apple-and-walnut-whole-wheat-bread-pudding-48376\">Apple and Walnut Whole-Wheat Bread Pudding</a>, and <a href=\"https://spoonacular.com/recipes/pear-walnut-bread-pudding-for-612864\">Pear Walnut Bread Pudding for</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Charlotte Tiramisu Cake With A Hint Of Baileys - Heaven In Mouth",
        "descricao": "Charlotte Tiramisu Cake With A Hint Of Baileys - Heaven In Mouth is a Mediterranean recipe that serves 8. This dessert has 587 calories, 12g of protein, and 31g of fat per serving. For $2.66 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. This recipe is liked by 1 foodies and cooks. If you have cocoa powder, gevalia coffee irish cream flavor, coffee powder, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 21%, which is rather bad. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/tiramisu-charlotte-149474\">Tiramisu Charlotte</a>, <a href=\"https://spoonacular.com/recipes/chocolate-tiramis-charlotte-66488\">Chocolate Tiramisù Charlotte</a>, and <a href=\"https://spoonacular.com/recipes/baileys-irish-cream-tiramisu-67890\">Baileys Irish Cream Tiramisu</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Acorn Squash Biscuits with Sage & Gruyere",
        "descricao": "Acorn Squash Biscuits with Sage & Gruyere requires roughly 45 minutes from start to finish. This recipe makes 14 servings with 285 calories, 7g of protein, and 15g of fat each. For 82 cents per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. 2 people found this recipe to be tasty and satisfying. This recipe from Foodista requires flour, optional sage leaves, brown sugar, and salt. Not a lot of people really liked this dessert. Overall, this recipe earns a rather bad spoonacular score of 33%. Similar recipes include <a href=\"https://spoonacular.com/recipes/butternut-squash-noodle-turkey-bolognese-stuffed-acorn-squash-with-melted-gruyere-two-ways-563828\">Butternut Squash Noodle Turkey Bolognese Stuffed Acorn Squash with Melted Gruyere: Two Ways</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-noodle-turkey-bolognese-stuffed-acorn-squash-with-melted-gruyere-two-ways-1253607\">Butternut Squash Noodle Turkey Bolognese Stuffed Acorn Squash with Melted Gruyere: Two Ways</a>, and <a href=\"https://spoonacular.com/recipes/gluten-free-sage-gruyere-sausage-buttermilk-biscuits-gravy-616818\">gluten free sage, gruyere + sausage buttermilk biscuits + gravy</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Peach Mango Turnovers",
        "descricao": "Peach Mango Turnovers is a dairy free and lacto ovo vegetarian recipe with 8 servings. For $1.24 per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 6g of protein, 24g of fat, and a total of 468 calories. If you have ground ginger, peach syrup, granulated sugar, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 50 minutes. It is brought to you by spoonacular user <a href=\"/profile/maplewoodroad\">maplewoodroad</a>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/easy-peach-turnovers-135844\">Easy Peach Turnovers</a>, <a href=\"https://spoonacular.com/recipes/cherry-peach-turnovers-608348\">Cherry Peach Turnovers</a>, and <a href=\"https://spoonacular.com/recipes/fresh-peach-turnovers-135840\">Fresh Peach Turnovers</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 50,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Banana Almond Cake",
        "descricao": "Bananan Almond Cake might be just the dessert you are searching for. This recipe serves 12. One portion of this dish contains about 6g of protein, 7g of fat, and a total of 235 calories. For 34 cents per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. 1 person found this recipe to be yummy and satisfying. From preparation to the plate, this recipe takes about 45 minutes. Head to the store and pick up flour, brown sugar, buttermilk, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 37%, which is rather bad. Try <a href=\"https://spoonacular.com/recipes/banana-almond-cake-49459\">Bananan Almond Cake</a>, <a href=\"https://spoonacular.com/recipes/banana-almond-snack-cake-49431\">Bananan Almond Snack Cake</a>, and <a href=\"https://spoonacular.com/recipes/almond-fudge-banana-cake-125661\">Almond Fudge Banana Cake</a> for similar recipes.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cake with lemon, rosewater and pistachios",
        "descricao": "Cake with lemon, rosewater and pistachios might be just the dessert you are searching for. This lacto ovo vegetarian recipe serves 12 and costs 68 cents per serving. One portion of this dish contains about 6g of protein, 18g of fat, and a total of 325 calories. 30 people found this recipe to be flavorful and satisfying. A mixture of natural yoghurt, baking powder, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a pretty good spoonacular score of 41%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lemon-ginger-cake-with-pistachios-188808\">Lemon-Ginger Cake with Pistachios</a>, <a href=\"https://spoonacular.com/recipes/yellow-lemon-cake-with-candied-lemons-and-pistachios-60493\">Yellow Lemon Cake With Candied Lemons And Pistachios</a>, and <a href=\"https://spoonacular.com/recipes/rosewater-raspberry-sponge-cake-1084668\">Rosewater & raspberry sponge cake</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Coconut Banana Nut Bread",
        "descricao": "Coconut Banana Nut Bread takes approximately 45 minutes from beginning to end. This breakfast has 289 calories, 5g of protein, and 15g of fat per serving. This lacto ovo vegetarian recipe serves 12 and costs 43 cents per serving. Not a lot of people made this recipe, and 1 would say it hit the spot. This recipe from Foodista requires kelapo coconut oil, almonds, baking soda, and nuts. With a spoonacular score of 38%, this dish is rather bad. Similar recipes are <a href=\"https://spoonacular.com/recipes/banana-nut-bread-571957\">Banana Nut Bread</a>, <a href=\"https://spoonacular.com/recipes/the-very-best-banana-nut-bread-1423035\">The Very Best Banana Nut Bread</a>, and <a href=\"https://spoonacular.com/recipes/banana-nut-bread-165202\">Banana Nut Bread</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegan Spiced Cranberry Swirl Ice Cream",
        "descricao": "Vegan Spiced Cranberry Swirl Ice Cream might be just the dessert you are searching for. For 43 cents per serving, this recipe covers 5% of your daily requirements of vitamins and minerals. One serving contains 139 calories, 1g of protein, and 0g of fat. This recipe serves 8. This recipe from Foodista requires ground nutmeg, ground cloves, sugar, and ground cinnamon. Summer will be even more special with this recipe. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes roughly 2 hours and 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Taking all factors into account, this recipe earns a spoonacular score of 38%, which is not so tremendous. Try <a href=\"https://spoonacular.com/recipes/fudge-swirl-ice-cream-no-ice-cream-maker-needed-1472123\">Fudge Swirl Ice Cream (no ice cream maker needed!)</a>, <a href=\"https://spoonacular.com/recipes/carrot-cake-ice-cream-with-cream-cheese-frosting-swirl-721082\">Carrot Cake Ice Cream with Cream Cheese Frosting Swirl</a>, and <a href=\"https://spoonacular.com/recipes/scooped-cream-cheese-and-guava-swirl-ice-cream-207956\">Scooped: Cream Cheese and Guava Swirl Ice Cream</a> for similar recipes.",
        "preco_unitario": 58,
        "tempo_preparo": 165,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Delicious Triple Chocolate Bundt Cake",
        "descricao": "Delicious Triple Chocolate Bundt Cake might be a good recipe to expand your dessert recipe box. This recipe makes 6 servings with 582 calories, 5g of protein, and 30g of fat each. For 79 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This recipe is liked by 1473 foodies and cooks. From preparation to the plate, this recipe takes about 55 minutes. It is brought to you by Pink When. If you have devil's food cake mix, cream, milk chocolate chips, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 26%. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/triple-chocolate-bundt-cake-494013\">Triple Chocolate Bundt Cake</a>, <a href=\"https://spoonacular.com/recipes/triple-chocolate-bundt-cake-618310\">Triple chocolate bundt cake</a>, and <a href=\"https://spoonacular.com/recipes/triple-chocolate-bundt-cake-1543381\">Triple Chocolate Bundt Cake</a> for similar recipes.",
        "preco_unitario": 57,
        "tempo_preparo": 55,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Drop Sugar Cookies",
        "descricao": "Drop Sugar Cookies could be just the dairy free recipe you've been looking for. For 49 cents per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. This dessert has 511 calories, 9g of protein, and 28g of fat per serving. This recipe serves 4. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of shortening, salt, flour, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by Foodista. It is perfect for Christmas. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 37%, which is not so outstanding. <a href=\"https://spoonacular.com/recipes/drop-sugar-cookies-139671\">Drop Sugar Cookies</a>, <a href=\"https://spoonacular.com/recipes/drop-sugar-cookies-144155\">Drop Sugar Cookies</a>, and <a href=\"https://spoonacular.com/recipes/drop-sugar-cookies-1157040\">Drop Sugar Cookies</a> are very similar to this recipe.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Easy Turtle Pumpkin Pie",
        "descricao": "Need a gluten free dessert? Easy Turtle Pumpkin Pie could be an awesome recipe to try. This recipe makes 4 servings with 761 calories, 6g of protein, and 54g of fat each. For $1.95 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. Thanksgiving will be even more special with this recipe. A few people made this recipe, and 41 would say it hit the spot. Head to the store and pick up chocolate sandwich cookies, caramel sauce, pecans, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a rather bad spoonacular score of 36%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/turtle-pumpkin-pie-104632\">Turtle Pumpkin Pie</a>, <a href=\"https://spoonacular.com/recipes/turtle-pumpkin-pie-1203393\">Turtle Pumpkin Pie</a>, and <a href=\"https://spoonacular.com/recipes/turtle-pumpkin-pie-273128\">Turtle Pumpkin Pie</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chocolate Nutella Walnut Cake",
        "descricao": "Need a lacto ovo vegetarian dessert? Chocolate Nutella Walnut Cake could be a great recipe to try. This recipe serves 8. For $1.03 per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 7g of protein, 32g of fat, and a total of 447 calories. If you have eggs, salt, nutella, and a few other ingredients on hand, you can make it. This recipe from Foodista has 30 fans. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 37%, which is not so excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/nutella-flourless-chocolate-cake-60735\">Nutella Flourless Chocolate Cake</a>, <a href=\"https://spoonacular.com/recipes/chocolate-nutella-crepe-cake-60553\">Chocolate Nutella Crepe Cake</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-nutella-banana-cake-617079\">Chocolate Nutella Banana Cake</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "dessert",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Asparagus and Pea Soup: Real Convenience Food",
        "descricao": "Asparagus and Pea Soup: Real Convenience Food requires approximately 20 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 217 calories, 11g of protein, and 8g of fat per serving. This recipe serves 2. For $1.78 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
        "preco_unitario": 65,
        "tempo_preparo": 20,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxBc3BhcmFndXMlMjBhbmQlMjBQZWElMjBTb3VwJTNBJTIwUmVhbCUyMENvbnZlbmllbmNlJTIwRm9vZHxlbnwwfHx8fDE3NDMwMTI1NDN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        "descricao": "The recipe Cauliflower, Brown Rice, and Vegetable Fried Rice is ready in around 30 minutes and is definitely a great gluten free, dairy free, lacto ovo vegetarian, and vegan option for lovers of Chinese food. This recipe makes 8 servings with 248 calories, 7g of protein, and 13g of fat each. For $1.19 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. It works well as a hor d'oeuvre. 3689 people have made this recipe and would make it again. It is brought to you by fullbellysisters.blogspot.com. Head to the store and pick up broccoli, t grapeseed oil, sesame seeds, and a few other things to make it today. With a spoonacular score of 100%, this dish is amazing. <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1403527\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a> are very similar to this recipe.",
        "preco_unitario": 69,
        "tempo_preparo": 30,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1608533240306-9bf2a56958c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDYXVsaWZsb3dlciUyQyUyMEJyb3duJTIwUmljZSUyQyUyMGFuZCUyMFZlZ2V0YWJsZSUyMEZyaWVkJTIwUmljZXxlbnwwfHx8fDE3NDMwMTI1NDN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Easy To Make Spring Rolls",
        "descricao": "If you want to add more gluten free, dairy free, and pescatarian recipes to your collection, Easy To Make Spring Rolls might be a recipe you should try. For $3.78 per serving, you get a hor d'oeuvre that serves 4. One serving contains 162 calories, 13g of protein, and 2g of fat. 22 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about 45 minutes. It can be enjoyed any time, but it is especially good for Spring. This recipe from Foodista requires mint leaves, garlic, chili pepper, and rice vinegar. This recipe is typical of Vietnamese cuisine. Overall, this recipe earns a tremendous spoonacular score of 88%. <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1262689\">Easy To Make Spring Rolls</a>, <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1218889\">Easy To Make Spring Rolls</a>, and <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1531113\">Easy To Make Spring Rolls</a> are very similar to this recipe.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1503919483171-9ffc1debc390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxFYXN5JTIwVG8lMjBNYWtlJTIwU3ByaW5nJTIwUm9sbHN8ZW58MHx8fHwxNzQzMDEyNTQzfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Corn Avocado Salsa",
        "descricao": "Corn Avocado Salsa might be just the hor d'oeuvre you are searching for. For $1.31 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 5g of protein, 16g of fat, and a total of 237 calories. This recipe serves 2. 44 people have made this recipe and would make it again. This recipe from Foodista requires avocado, balsamic vinegar, cumin, and garlic. A few people really liked this Mexican dish. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 25 minutes. With a spoonacular score of 97%, this dish is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/avocado-corn-salsa-1329607\">Avocado Corn Salsa</a>, <a href=\"https://spoonacular.com/recipes/avocado-corn-salsa-173978\">Avocado-Corn Salsa</a>, and <a href=\"https://spoonacular.com/recipes/avocado-corn-salsa-1305913\">Avocado-Corn Salsa</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 25,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDb3JuJTIwQXZvY2FkbyUyMFNhbHNhfGVufDB8fHx8MTc0MzAxMjU0NHww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
        "descricao": "The recipe Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant could satisfy your Indian craving in around 45 minutes. This recipe serves 6 and costs 94 cents per serving. This hor d'oeuvre has 129 calories, 7g of protein, and 2g of fat per serving. It is brought to you by foodandspice.blogspot.com. If you have black-eyed peas, olive oil, globe, and a few other ingredients on hand, you can make it. This recipe is liked by 32 foodies and cooks. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/roasted-eggplant-and-swiss-chard-lasagna-1070265\">Roasted Eggplant and Swiss Chard Lasagna</a>, <a href=\"https://spoonacular.com/recipes/pumpkin-black-eyed-pea-and-coconut-curry-1065869\">Pumpkin, Black-Eyed Pea, and Coconut Curry</a>, and <a href=\"https://spoonacular.com/recipes/spicy-black-eyed-pea-relish-31042\">Spicy Black-eyed Pea Relish</a> for similar recipes.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTcGljeSUyMEJsYWNrLUV5ZWQlMjBQZWElMjBDdXJyeSUyMHdpdGglMjBTd2lzcyUyMENoYXJkJTIwYW5kJTIwUm9hc3RlZCUyMEVnZ3BsYW50fGVufDB8fHx8MTc0MzAxMjU0NHww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Strawberry-Mango Quinoa Salad",
        "descricao": "Need a gluten free and lacto ovo vegetarian hor d'oeuvre? Strawberry-Mango Quinoa Salad could be an awesome recipe to try. This recipe serves 4. One serving contains 354 calories, 8g of protein, and 17g of fat. For $1.87 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. 41 person were impressed by this recipe. This recipe from Foodista requires cucumber, cream, mango, and strawberries. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1578467\">Strawberry-Mango Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1588251\">Strawberry-Mango Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-mango-chopped-spinach-quinoa-salad-with-sesame-lime-vinaigrette-1469287\">Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTdHJhd2JlcnJ5LU1hbmdvJTIwUXVpbm9hJTIwU2FsYWR8ZW58MHx8fHwxNzQzMDEyNTQ0fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Spicy Indian-Style Hummus",
        "descricao": "You can never have too many middl eastern recipes, so give Spicy Indian-Style Hummus a try. For 44 cents per serving, you get a hor d'oeuvre that serves 12. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 134 calories, 5g of protein, and 6g of fat per serving. This recipe from foodandspice.blogspot.com has 161 fans. From preparation to the plate, this recipe takes about 45 minutes. Head to the store and pick up turmeric, chilies, sea salt, and a few other things to make it today. With a spoonacular score of 96%, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/indian-style-spicy-couscous-647863\">Indian Style Spicy Couscous</a>, <a href=\"https://spoonacular.com/recipes/red-onion-indian-spiced-hummus-217684\">Red onion & Indian-spiced hummus</a>, and <a href=\"https://spoonacular.com/recipes/indian-style-coleslaw-603940\">Indian-Style Coleslaw</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegetable Dip",
        "descricao": "Vegetable Dip might be just the hor d'oeuvre you are searching for. This recipe serves 3. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 210 calories, 16g of protein, and 4g of fat per serving. For $1.84 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. It will be a hit at your The Super Bowl event. If you have vegetables, onion, lowfat yogurt, and a few other ingredients on hand, you can make it. Overall, this recipe earns a spectacular spoonacular score of 96%. <a href=\"https://spoonacular.com/recipes/vegetable-dip-407029\">Vegetable Dip</a>, <a href=\"https://spoonacular.com/recipes/italian-vegetable-dip-268772\">Italian Vegetable Dip</a>, and <a href=\"https://spoonacular.com/recipes/roasted-vegetable-dip-444123\">Roasted Vegetable Dip</a> are very similar to this recipe.",
        "preco_unitario": 33,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Curried Butternut Squash and Apple Soup",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Curried Butternut Squash and Apple Soup might be a recipe you should try. For $1.41 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. This recipe serves 1. One serving contains 134 calories, 7g of protein, and 3g of fat. A mixture of a squirt sriracha, butternut squash, apple, and a handful of other ingredients are all it takes to make this recipe so yummy. It is perfect for Autumn. It works well as a hor d'oeuvre. This recipe from Foodista has 9 fans. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns an awesome spoonacular score of 89%. Similar recipes include <a href=\"https://spoonacular.com/recipes/curried-apple-butternut-squash-soup-620121\">Curried Apple + Butternut Squash Soup</a>, <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-and-apple-soup-836936\">Curried Butternut Squash and Apple Soup</a>, and <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-apple-soup-crock-pot-94742\">Curried Butternut Squash & Apple Soup - Crock Pot</a>.",
        "preco_unitario": 59,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Amaranth and Roast Veggie Salad",
        "descricao": "Amaranth and Roast Veggie Salad could be just the gluten free, dairy free, lacto ovo vegetarian, and vegan recipe you've been looking for. This recipe serves 2 and costs $2.47 per serving. This hor d'oeuvre has 361 calories, 9g of protein, and 18g of fat per serving. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe from Foodista requires amaranth, punnet baby tomatoes, bell pepper, and pumpkin. 5 people have tried and liked this recipe. Overall, this recipe earns an outstanding spoonacular score of 95%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/mums-roast-veggie-salad-12573\">Mum’s Roast Veggie Salad</a>, <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1235383\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>, and <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1238997\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>.",
        "preco_unitario": 51,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxBbWFyYW50aCUyMGFuZCUyMFJvYXN0JTIwVmVnZ2llJTIwU2FsYWR8ZW58MHx8fHwxNzQzMDEyNTQ1fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
        "descricao": "If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your repertoire, Carrot and Cabbage Salad With Coriander+cumin Dry Rub might be a recipe you should try. This recipe serves 1. One portion of this dish contains about 6g of protein, 10g of fat, and a total of 222 calories. For $1.4 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. 4 people have made this recipe and would make it again. Head to the store and pick up sunflower seeds, cumin seed powder, juice of lime, and a few other things to make it today. It works well as an affordable hor d'oeuvre. From preparation to the plate, this recipe takes roughly 25 minutes. It is brought to you by Foodista. Overall, this recipe earns a super spoonacular score of 96%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1230725\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1350633\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1253443\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>.",
        "preco_unitario": 23,
        "tempo_preparo": 25,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDYXJyb3QlMjBhbmQlMjBDYWJiYWdlJTIwU2FsYWQlMjBXaXRoJTIwQ29yaWFuZGVyJTJCY3VtaW4lMjBEcnklMjBSdWJ8ZW58MHx8fHwxNzQzMDEyNTQ1fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Alouette® Stuffed Mushroom Caps",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Alouette® Stuffed Mushroom Caps a try. Watching your figure? This dairy free, lacto ovo vegetarian, and vegan recipe has 30 calories, 2g of protein, and 0g of fat per serving. This recipe serves 8. For $1.5 per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about 45 minutes. A couple people made this recipe, and 11 would say it hit the spot. Head to the store and pick up seasoned bread crumbs, mushroom caps, alouette spinach & artichoke spread, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is great. Try <a href=\"https://spoonacular.com/recipes/stuffed-mushroom-caps-118382\">Stuffed Mushroom Caps</a>, <a href=\"https://spoonacular.com/recipes/stuffed-mushroom-caps-558817\">Stuffed Mushroom Caps</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-white-mushroom-caps-313457\">Stuffed White Mushroom Caps</a> for similar recipes.",
        "preco_unitario": 51,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
        "descricao": "Chilled Cucumber Avocado Soup with Yogurt and Kefir is a gluten free, lacto ovo vegetarian, and primal hor d'oeuvre. This recipe serves 3 and costs $2.1 per serving. One portion of this dish contains approximately 9g of protein, 7g of fat, and a total of 189 calories. 171 person were impressed by this recipe. A mixture of avocado, kefir, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. Autumn will be even more special with this recipe. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an outstanding spoonacular score of 97%. <a href=\"https://spoonacular.com/recipes/chilled-cucumber-avocado-and-yogurt-soup-21553\">Chilled Cucumber, Avocado, and Yogurt Soup</a>, <a href=\"https://spoonacular.com/recipes/chilled-cucumber-yogurt-soup-499125\">Chilled Cucumber-Yogurt Soup</a>, and <a href=\"https://spoonacular.com/recipes/chilled-cucumber-mint-yogurt-soup-608062\">Chilled Cucumber Mint Yogurt Soup</a> are very similar to this recipe.",
        "preco_unitario": 21,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash Soup (In Half An Hour!)",
        "descricao": "Butternut Squash Soup (In Half An Hour!) requires about 30 minutes from start to finish. For $1.25 per serving, you get a hor d'oeuvre that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 252 calories, 9g of protein, and 6g of fat per serving. It will be a hit at your Autumn event. 5 people have made this recipe and would make it again. It is brought to you by Foodista. Head to the store and pick up salt and pepper, black-eyed peas, collard greens, and a few other things to make it today. With a spoonacular score of 95%, this dish is great. Try <a href=\"https://spoonacular.com/recipes/half-hour-chili-1336421\">Half-Hour Chili</a>, <a href=\"https://spoonacular.com/recipes/half-hour-chili-1268407\">Half-Hour Chili</a>, and <a href=\"https://spoonacular.com/recipes/half-hour-chili-695480\">Half-Hour Chili</a> for similar recipes.",
        "preco_unitario": 60,
        "tempo_preparo": 30,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Basil Tagliatelle with Roasted Red Bell Pepper Salad",
        "descricao": "Basil Tagliatelle with Roasted Red Bell Pepper Salad might be a good recipe to expand your hor d'oeuvre repertoire. This recipe serves 4 and costs $4.07 per serving. One serving contains 200 calories, 5g of protein, and 12g of fat. A mixture of extra virgin olive oil, horseradish, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so tasty. 4 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. Overall, this recipe earns an outstanding spoonacular score of 93%. Similar recipes are <a href=\"https://spoonacular.com/recipes/roasted-red-bell-pepper-and-basil-sauce-22150\">Roasted Red Bell Pepper and Basil Sauce</a>, <a href=\"https://spoonacular.com/recipes/roasted-red-bell-pepper-and-fennel-salad-21985\">Roasted Red Bell Pepper And Fennel Salad</a>, and <a href=\"https://spoonacular.com/recipes/roasted-sweet-potato-salad-with-red-bell-pepper-22026\">Roasted Sweet Potato Salad With Red Bell Pepper</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegetarian Mushroom Shepherd's Pie",
        "descricao": "The recipe Vegetarian Mushroom Shepherd's Pie is ready in around 45 minutes and is definitely an awesome gluten free and dairy free option for lovers of European food. For $1.16 per serving, you get a hor d'oeuvre that serves 12. One serving contains 113 calories, 5g of protein, and 5g of fat. 11 person were glad they tried this recipe. This recipe from Foodista requires ground pepper, thyme, unrefined sunflower oil, and paprika. All things considered, we decided this recipe deserves a spoonacular score of 83%. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-1404517\">Vegetarian Mushroom Shepherd's Pie</a>, <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-1374865\">Vegetarian Mushroom Shepherd's Pie</a>, and <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-with-vegan-version-122196\">Vegetarian Mushroom Shepherd's Pie - With Vegan Version</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Garlic Lemon Chili Broccoli",
        "descricao": "If you want to add more American recipes to your collection, Garlic Lemon Chili Broccoli might be a recipe you should try. One serving contains 453 calories, 10g of protein, and 38g of fat. For $1.56 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe serves 2. The Super Bowl will be even more special with this recipe. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes roughly 30 minutes. It is brought to you by foodwishes.blogspot.com. It works well as a budget friendly hor d'oeuvre. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. Taking all factors into account, this recipe earns a spoonacular score of 0%, which is improvable. Try <a href=\"https://spoonacular.com/recipes/roasted-broccoli-with-lemon-chili-garlic-oil-parmesan-576960\">Roasted Broccoli with Lemon, Chili-Garlic Oil & Parmesan</a>, <a href=\"https://spoonacular.com/recipes/oven-roasted-broccoli-with-lemon-chili-garlic-oil-and-parmesan-29395\">Oven Roasted Broccoli With Lemon, Chili-garlic Oil And Parmesan</a>, and <a href=\"https://spoonacular.com/recipes/chili-garlic-roasted-broccoli-109600\">Chili-Garlic Roasted Broccoli</a> for similar recipes.",
        "preco_unitario": 47,
        "tempo_preparo": 30,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Radish & Snap Pea Quinoa Salad",
        "descricao": "Radish & Snap Pea Quinoa Salad is a gluten free and lacto ovo vegetarian hor d'oeuvre. For $1.68 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. One serving contains 262 calories, 11g of protein, and 7g of fat. This recipe serves 4. If you have juice of lemon, flat leaf parsley, snap peas, and a few other ingredients on hand, you can make it. 2 people have tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/sugar-snap-pea-and-radish-salad-18285\">Sugar Snap Pean And Radish Salad</a>, <a href=\"https://spoonacular.com/recipes/radish-and-sugar-snap-pea-salad-18551\">Radish And Sugar Snap Pea Salad</a>, and <a href=\"https://spoonacular.com/recipes/snap-pea-salad-with-radish-lime-36681\">Snap Pea Salad With Radish & Lime</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Baby Bok Choy Stir Fry",
        "descricao": "Baby Bok Choy Stir Fry is a hor d'oeuvre that serves 2. One portion of this dish contains about 6g of protein, 9g of fat, and a total of 139 calories. For $1.09 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. This recipe is liked by 3 foodies and cooks. This recipe from Foodista requires salt, almonds, garlic, and pepper flakes. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 94%, which is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/baby-bok-choy-stir-fry-1345633\">Baby Bok Choy Stir Fry</a>, <a href=\"https://spoonacular.com/recipes/baby-bok-choy-stir-fry-531245\">Baby Bok Choy Stir Fry</a>, and <a href=\"https://spoonacular.com/recipes/beef-stir-fry-with-baby-bok-choy-1584553\">Beef Stir-Fry with Baby Bok Choy</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Baked Penne",
        "descricao": "Baked Penne might be just the hor d'oeuvre you are searching for. Watching your figure? This dairy free, lacto ovo vegetarian, and vegan recipe has 241 calories, 11g of protein, and 1g of fat per serving. This recipe serves 8. For 73 cents per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. If you have water, nutritional yeast, kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is excellent. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/baked-penne-1215509\">Baked Penne</a>, <a href=\"https://spoonacular.com/recipes/baked-penne-270650\">Baked Penne</a>, and <a href=\"https://spoonacular.com/recipes/baked-penne-138984\">Baked Penne</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spicy lentil and black rice soup with kale, spinach and leek",
        "descricao": "Spicy lentil and black rice soup with kale, spinach and leek is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 12 servings. One portion of this dish contains about 11g of protein, 1g of fat, and a total of 202 calories. For 84 cents per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Head to the store and pick up onion, carrot, leek, and a few other things to make it today. Not a lot of people made this recipe, and 1 would say it hit the spot. Autumn will be even more special with this recipe. It works well as a very affordable hor d'oeuvre. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Overall, this recipe earns an awesome spoonacular score of 94%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/spicy-sausage-lentil-kale-soup-566142\">Spicy Sausage Lentil & Kale Soup</a>, <a href=\"https://spoonacular.com/recipes/spicy-sausage-lentil-kale-soup-1337093\">Spicy Sausage Lentil & Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/spicy-chorizo-red-lentil-soup-with-kale-519546\">Spicy Chorizo Red Lentil Soup with Kale</a>.",
        "preco_unitario": 30,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa, Tomato, Green Onion Side Salad",
        "descricao": "Quinoa, Tomato, Green Onion Side Salad might be a good recipe to expand your hor d'oeuvre recipe box. For $1.39 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. One portion of this dish contains about 11g of protein, 18g of fat, and a total of 396 calories. This recipe serves 2. This recipe from Foodista has 2 fans. Head to the store and pick up green onions, water, salt and pepper, and a few other things to make it today. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/cucumber-tomato-and-green-onion-salad-376668\">Cucumber Tomato and Green Onion Salad</a>, <a href=\"https://spoonacular.com/recipes/feta-and-green-onion-couscous-cakes-over-tomato-olive-salad-133311\">Fetan and Green Onion Couscous Cakes over Tomato-Olive Salad</a>, and <a href=\"https://spoonacular.com/recipes/onion-tomato-gotsu-or-thakkali-kosthu-side-dish-for-idli-dosa-564811\">Onion Tomato Gotsu or Thakkali Kosthu | Side Dish For Idli Dosa</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Skinny Veggie Fried Rice",
        "descricao": "If you have approximately 45 minutes to spend in the kitchen, Skinny Veggie Fried Rice might be a spectacular gluten free, dairy free, lacto ovo vegetarian, and vegan recipe to try. This recipe serves 2 and costs $1.26 per serving. One portion of this dish contains about 5g of protein, 9g of fat, and a total of 157 calories. It works well as a Chinese hor d'oeuvre. This recipe is liked by 8 foodies and cooks. A mixture of sesame oil, bell pepper, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. With a spoonacular score of 92%, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/skinny-veggie-fried-rice-1315153\">Skinny Veggie Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/skinny-veggie-fried-rice-1326473\">Skinny Veggie Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/skinny-chicken-fried-rice-1273519\">Skinny Chicken Fried Rice</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegan Colcannon Soup",
        "descricao": "Vegan Colcannon Soup is an European recipe that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipe has 203 calories, 7g of protein, and 5g of fat per serving. For $1.48 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. 1 person were impressed by this recipe. It works well as a rather cheap hor d'oeuvre. This recipe from Foodista requires pepper, juice of lemon, garlic, and russet potatoes. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a great spoonacular score of 82%. Try <a href=\"https://spoonacular.com/recipes/vegan-colcannon-soup-1183083\">Vegan Colcannon Soup</a>, <a href=\"https://spoonacular.com/recipes/vegan-colcannon-92687\">Vegan Colcannon</a>, and <a href=\"https://spoonacular.com/recipes/colcannon-bites-with-collard-greens-vegan-866599\">Colcannon Bites With Collard Greens (Vegan)</a> for similar recipes.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Seasonal Autumn Stew",
        "descricao": "Seasonal Autumn Stew requires approximately 45 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 232 calories, 7g of protein, and 5g of fat per serving. This recipe serves 4. For $1.73 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. Not a lot of people really liked this hor d'oeuvre. 1 person has tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. A mixture of cinnamon, garlic, kale, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 93%, which is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/autumn-stew-438199\">Autumn Stew</a>, <a href=\"https://spoonacular.com/recipes/autumn-harvest-stew-120446\">Autumn Harvest Stew</a>, and <a href=\"https://spoonacular.com/recipes/autumn-chicken-stew-1322771\">Autumn Chicken Stew</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Minted Pea & Spinach Soup",
        "descricao": "Minted Pea & Spinach Soup takes about 45 minutes from beginning to end. This gluten free and lacto ovo vegetarian recipe serves 6 and costs 97 cents per serving. One serving contains 184 calories, 7g of protein, and 5g of fat. This recipe is liked by 3 foodies and cooks. It will be a hit at your Autumn event. It works well as a very reasonably priced hor d'oeuvre. Head to the store and pick up chicken stock, water, salt & pepper, and a few other things to make it today. It is brought to you by Foodista. Overall, this recipe earns an excellent spoonacular score of 93%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/minted-pea-spinach-soup-1393981\">Minted Pea & Spinach Soup</a>, <a href=\"https://spoonacular.com/recipes/minted-pea-spinach-soup-1365331\">Minted Pea & Spinach Soup</a>, and <a href=\"https://spoonacular.com/recipes/fresh-spinach-soup-with-minted-pea-cilantro-478482\">Fresh Spinach Soup with Minted Pea & Cilantro</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Carolina Caviar - Black Bean Salsa",
        "descricao": "Carolina Caviar - Black Bean Salsa requires about 45 minutes from start to finish. This hor d'oeuvre has 433 calories, 15g of protein, and 17g of fat per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs $2.29 per serving. 1 person were glad they tried this recipe. Only a few people really liked this Mexican dish. Head to the store and pick up orange bell pepper, avocados, juice of lime, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 90%, which is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/black-bean-salsa-oklahoma-caviar-550058\">Black Bean Salsa -Oklahoma Caviar</a>, <a href=\"https://spoonacular.com/recipes/plantains-with-caviar-and-black-bean-puree-255894\">Plantains with Caviar and Black Bean Puree</a>, and <a href=\"https://spoonacular.com/recipes/black-bean-black-eyed-pea-salsa-100694\">Black Bean & Black-Eyed Pea Salsa</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Yellow Squash Noodles with Tomato Basil Sauce",
        "descricao": "The recipe Yellow Squash Noodles with Tomato Basil Sauce can be made in roughly 45 minutes. This hor d'oeuvre has 220 calories, 7g of protein, and 13g of fat per serving. This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe serves 3 and costs $2.8 per serving. A mixture of fennel bulb, dill, olive oil, and a handful of other ingredients are all it takes to make this recipe so scrumptious. This recipe from Foodista has 1 fans. Overall, this recipe earns a tremendous spoonacular score of 90%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/yellow-squash-noodles-with-tomato-basil-sauce-1425981\">Yellow Squash Noodles with Tomato Basil Sauce</a>, <a href=\"https://spoonacular.com/recipes/yellow-squash-noodles-with-tomato-basil-sauce-1410337\">Yellow Squash Noodles with Tomato Basil Sauce</a>, and <a href=\"https://spoonacular.com/recipes/lightened-up-alfredo-sauce-with-zucchini-yellow-squash-noodles-607548\">Lightened Up Alfredo Sauce with Zucchini & Yellow Squash Noodles</a>.",
        "preco_unitario": 65,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Tabouli Salad",
        "descricao": "Quinoa Tabouli Salad is a hor d'oeuvre that serves 4. One serving contains 244 calories, 8g of protein, and 8g of fat. For $3.18 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. If you have garlic, kosher salt, flat-leaf parsley, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 1 hour and 15 minutes. Overall, this recipe earns a tremendous spoonacular score of 88%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/quinoa-and-vegetable-tabouli-salad-103076\">Quinoan and Vegetable Tabouli Salad</a>, <a href=\"https://spoonacular.com/recipes/quinoa-tabouli-586810\">Quinoa Tabouli</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-tabouli-22428\">Quinoa Tabouli</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 75,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Creamy, Healthy Asparagus Soup with Avocado and Fennel",
        "descricao": "Creamy, Healthy Asparagus Soup with Avocado and Fennel is a gluten free and primal hor d'oeuvre. For $3.44 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. This recipe serves 4. One portion of this dish contains around 9g of protein, 15g of fat, and a total of 238 calories. It will be a hit at your Autumn event. 1 person were glad they tried this recipe. If you have olive oil, greek yogurt, lemon thyme leaves, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is awesome. <a href=\"https://spoonacular.com/recipes/creamy-asparagus-soup-with-fennel-115078\">Creamy Asparagus Soup With Fennel</a>, <a href=\"https://spoonacular.com/recipes/creamy-roasted-fennel-and-carrot-soup-with-black-garlic-fennel-oil-474600\">Creamy Roasted Fennel and Carrot Soup with Black Garlic Fennel Oil</a>, and <a href=\"https://spoonacular.com/recipes/creamy-avocado-pasta-with-chicken-and-asparagus-1516179\">Creamy Avocado “Pasta” with Chicken and Asparagus</a> are very similar to this recipe.",
        "preco_unitario": 24,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Egyptain Cauliflower Side Salad",
        "descricao": "Egyptain Cauliflower Side Salad could be just the gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe you've been looking for. This recipe makes 2 servings with 183 calories, 4g of protein, and 15g of fat each. For $1.51 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. This recipe is liked by 3 foodies and cooks. It works well as a hor d'oeuvre. A mixture of cauliflower, cumin, parsley, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 25 minutes. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/roasted-broccoli-and-cauliflower-simple-for-the-side-581739\">Roasted Broccoli and Cauliflower: Simple for the Side</a>, <a href=\"https://spoonacular.com/recipes/sauteed-beef-with-broccoli-and-shiitake-mushrooms-and-a-side-of-my-new-fave-cauliflower-rice-551311\">Sauteed Beef with Broccoli and Shiitake Mushrooms (and a side of my new fave: cauliflower rice)</a>, and <a href=\"https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696\">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>.",
        "preco_unitario": 51,
        "tempo_preparo": 25,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chipotle Black Bean Soup with Avocado Cream",
        "descricao": "If you have around 45 minutes to spend in the kitchen, Chipotle Black Bean Soup with Avocado Cream might be a great gluten free and lacto ovo vegetarian recipe to try. One serving contains 284 calories, 12g of protein, and 9g of fat. For $1.35 per serving, you get a hor d'oeuvre that serves 8. A couple people made this recipe, and 37 would say it hit the spot. Autumn will be even more special with this recipe. If you have chipotle peppers in adobo sauce, cilantro leaves, carrots, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 91%. This score is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/citrus-scented-black-bean-soup-with-chipotle-cream-697694\">Citrus-Scented Black Bean Soup with Chipotle Cream</a>, <a href=\"https://spoonacular.com/recipes/black-bean-soup-with-sweet-plantain-and-avocado-cumin-cream-226746\">Black Bean Soup with Sweet Plantain and Avocado-Cumin Cream</a>, and <a href=\"https://spoonacular.com/recipes/chipotle-black-bean-tomato-corn-avocado-salad-791835\">Chipotle Black Bean Tomato Corn Avocado Salad</a>.",
        "preco_unitario": 63,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Thai-Style Mussels",
        "descricao": "If you want to add more gluten free, dairy free, paleolithic, and primal recipes to your recipe box, Thai-Style Mussels might be a recipe you should try. This recipe serves 3. One serving contains 208 calories, 21g of protein, and 9g of fat. For $1.54 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. If you have chilies, water, olive oil, and a few other ingredients on hand, you can make it. Only a few people really liked this hor d'oeuvre. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. This recipe is typical of Asian cuisine. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/thai-style-mussels-with-lemongrass-493369\">Thai-Style Mussels with Lemongrass</a>, <a href=\"https://spoonacular.com/recipes/thai-style-steamed-mussels-with-coconut-milk-basil-76575\">Thai-style Steamed Mussels With Coconut Milk & Basil</a>, and <a href=\"https://spoonacular.com/recipes/mussels-with-thai-seasonings-696546\">Mussels with Thai Seasonings</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Miso Soup With Thin Noodles",
        "descricao": "Miso Soup With Thin Noodles could be just the dairy free, lacto ovo vegetarian, and vegan recipe you've been looking for. One portion of this dish contains around 5g of protein, 2g of fat, and a total of 114 calories. For $1.01 per serving, you get a hor d'oeuvre that serves 8. It can be enjoyed any time, but it is especially good for Autumn. It is brought to you by Foodista. It is a reasonably priced recipe for fans of Japanese food. 1 person found this recipe to be flavorful and satisfying. A mixture of thai kitchen rice noodles, spinach, baby carrots, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 89%. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/a-quick-and-easy-soup-miso-soup-with-soba-noodles-or-mung-bean-31003\">A Quick And Easy Soup {miso Soup With Soba Noodles Or Mung Bean</a>, <a href=\"https://spoonacular.com/recipes/soba-noodles-with-miso-broth-37466\">Soba Noodles with Miso Broth</a>, and <a href=\"https://spoonacular.com/recipes/ginger-miso-noodles-with-eggplant-446340\">ginger miso noodles with eggplant</a> for similar recipes.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Okra Tomato Salad",
        "descricao": "Okra Tomato Salad might be a good recipe to expand your hor d'oeuvre recipe box. For $1.66 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 101 calories, 4g of protein, and 1g of fat per serving. This recipe serves 1. This recipe from Foodista requires two-inch long okra pods, tomato, balsamic vinegar, and basil. 1 person found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 92%, this dish is super. <a href=\"https://spoonacular.com/recipes/okra-tomato-salad-1233397\">Okra Tomato Salad</a>, <a href=\"https://spoonacular.com/recipes/grilled-sausage-okra-and-tomato-salad-175730\">Grilled Sausage Okran and Tomato Salad</a>, and <a href=\"https://spoonacular.com/recipes/fried-green-tomato-salad-with-roasted-corn-okra-and-tomatoes-34696\">Fried Green Tomato Salad With Roasted Corn, Okran And Tomatoes</a> are very similar to this recipe.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Veggie-Quinoa Stuffed Chilis",
        "descricao": "Veggie-Quinoa Stuffed Chilis might be a good recipe to expand your hor d'oeuvre recipe box. One serving contains 260 calories, 8g of protein, and 8g of fat. This gluten free and lacto ovo vegetarian recipe serves 6 and costs $2.42 per serving. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. A mixture of poblano peppers- roasted, sauce: we used roas ed tomato, olive oil, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 89%, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/spicy-corn-skillet-with-garlic-and-chilis-1654895\">Spicy Corn Skillet with Garlic and Chilis</a>, <a href=\"https://spoonacular.com/recipes/chicken-corn-chowder-with-green-chilis-and-bacon-132473\">Chicken Corn Chowder With Green Chilis and Bacon</a>, and <a href=\"https://spoonacular.com/recipes/smoky-grilled-quesadilla-with-anaheim-chilis-and-chicken-253679\">Smoky Grilled Quesadilla with Anaheim Chilis and Chicken</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mushroom Hummus Crostini",
        "descricao": "Mushroom Hummus Crostini is a Mediterranean hor d'oeuvre. One serving contains 450 calories, 21g of protein, and 10g of fat. This recipe serves 4 and costs $2.41 per serving. Head to the store and pick up water, mushrooms, harissa, and a few other things to make it today. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes around 30 minutes. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 91%, which is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/hummus-and-cucumber-crostini-22985\">Hummus And Cucumber Crostini</a>, <a href=\"https://spoonacular.com/recipes/seared-tuna-with-hummus-on-crostini-386082\">Seared Tuna with Hummus on Crostini</a>, and <a href=\"https://spoonacular.com/recipes/beet-hummus-and-caramelized-onion-crostini-703941\">Beet Hummus and Caramelized Onion Crostini</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 30,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Summer Kale, Orange & Pomegranate Salad with Moscato Dressing",
        "descricao": "Need a gluten free, dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre? Summer Kale, Orange & Pomegranate Salad with Moscato Dressing could be a super recipe to try. This recipe serves 4 and costs $1.52 per serving. One serving contains 165 calories, 4g of protein, and 10g of fat. 1 person were impressed by this recipe. The Fourth Of July will be even more special with this recipe. This recipe from Foodista requires bell pepper, cabbage, extra virgin olive oil, and sunflower seeds. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/persimmon-kale-salad-with-pomegranate-dressing-845521\">Persimmon Kale Salad with Pomegranate Dressing</a>, <a href=\"https://spoonacular.com/recipes/kale-pomegranate-mandarin-orange-salad-1061343\">Kale, Pomegranate & Mandarin Orange Salad</a>, and <a href=\"https://spoonacular.com/recipes/kale-salad-with-pomegranate-orange-and-pine-nuts-493516\">Kale Salad with Pomegranate, Orange and Pine Nuts</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mussels With Tomatoes and Fennel",
        "descricao": "Mussels With Tomatoes and Fennel is a gluten free, dairy free, and pescatarian recipe with 2 servings. For $6.64 per serving, this recipe covers 57% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 38g of protein, 28g of fat, and a total of 685 calories. 1 person were glad they tried this recipe. A mixture of fennel seeds, onion, sugar, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a hor d'oeuvre. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 89%. This score is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/mussels-with-leeks-fennel-and-tomatoes-39295\">Mussels with Leeks, Fennel, and Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/mussels-with-fennel-garlic-and-tomatoes-76515\">Mussels With Fennel, Garlic, And Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/steamed-mussels-with-fennel-tomatoes-ouzo-and-cream-462322\">Steamed Mussels with Fennel, Tomatoes, Ouzo, and Cream</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roma Tomato Bruschetta",
        "descricao": "Need a dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre? Roma Tomato Bruschetta could be an outstanding recipe to try. One serving contains 446 calories, 13g of protein, and 17g of fat. This recipe serves 4 and costs $1.89 per serving. If you have basil, extra virgin olive oil, bread, and a few other ingredients on hand, you can make it. 5 people have made this recipe and would make it again. It is an affordable recipe for fans of Mediterranean food. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns a tremendous spoonacular score of 91%. Try <a href=\"https://spoonacular.com/recipes/roma-tomato-rings-stuffed-with-cream-cheese-107091\">Roma Tomato Rings Stuffed With Cream Cheese</a>, <a href=\"https://spoonacular.com/recipes/tomato-bruschetta-367864\">Tomato Bruschetta</a>, and <a href=\"https://spoonacular.com/recipes/tomato-bruschetta-543381\">Tomato Bruschetta</a> for similar recipes.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Venison Sliders",
        "descricao": "Venison Sliders might be just the hor d'oeuvre you are searching for. One portion of this dish contains approximately 58g of protein, 10g of fat, and a total of 551 calories. This recipe serves 6 and costs $9.37 per serving. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. If you have onion, bread, veni-son round roast, and a few other ingredients on hand, you can make it. It is a good option if you're following a dairy free diet. Taking all factors into account, this recipe earns a spoonacular score of 91%, which is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/new-zealand-venison-sliders-with-tomato-chile-jam-363577\">New Zealand Venison Sliders with Tomato Chile Jam</a>, <a href=\"https://spoonacular.com/recipes/venison-bourguignon-venison-stew-147886\">Venison Bourguignon (Venison Stew)</a>, and <a href=\"https://spoonacular.com/recipes/turkey-sliders-rachel-sandwich-sliders-1417963\">Turkey Sliders - Rachel Sandwich Sliders</a>.",
        "preco_unitario": 35,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Whole Wheat Spaghetti with Basil Avocado Pesto",
        "descricao": "Whole Wheat Spaghetti with Basil Avocado Pesto might be a good recipe to expand your hor d'oeuvre repertoire. This recipe makes 4 servings with 286 calories, 11g of protein, and 8g of fat each. For 89 cents per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. 1 person found this recipe to be tasty and satisfying. Head to the store and pick up basil, cashew nuts, garlic, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 20 minutes. With a spoonacular score of 91%, this dish is tremendous. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/how-to-make-lightened-up-pesto-a-for-creamy-avocado-basil-pesto-809778\">How to Make Lightened-Up Pesto: A for Creamy Avocado Basil Pesto</a>, <a href=\"https://spoonacular.com/recipes/pistachio-pesto-chicken-with-whole-wheat-spaghetti-525639\">Pistachio Pesto Chicken with Whole Wheat Spaghetti</a>, and <a href=\"https://spoonacular.com/recipes/lemon-basil-whole-wheat-spaghetti-with-spring-veggies-587281\">Lemon Basil Whole Wheat Spaghetti with Spring Veggies</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 20,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roast Cauliflower Salad with Green Beans and Cherry Tomatoes",
        "descricao": "Need a gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d'oeuvre? Roast Cauliflower Salad with Green Beans and Cherry Tomatoes could be an excellent recipe to try. One portion of this dish contains roughly 6g of protein, 11g of fat, and a total of 189 calories. This recipe serves 6 and costs $2.07 per serving. 1 person has made this recipe and would make it again. This recipe from Foodista requires almonds, bell pepper, cherry tomatoes, and salt. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns an excellent spoonacular score of 90%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/farro-salad-with-green-beans-corn-and-cherry-tomatoes-911348\">Farro Salad with Green Beans, Corn, and Cherry Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/green-beans-with-cherry-tomatoes-445026\">Green Beans with Cherry Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/sauteed-green-beans-cherry-tomatoes-33024\">Sauteed Green Beans & Cherry Tomatoes</a>.",
        "preco_unitario": 30,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Tomato, Cucumber & Onion Salad with Feta Cheese: Real Convenience Food",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Tomato, Cucumber & Onion Salad with Feta Cheese: Real Convenience Food a try. For $5.26 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 252 calories, 8g of protein, and 16g of fat per serving. This recipe serves 1. This recipe from fullbellysisters.blogspot.com has 265 fans. If you have balsamic vinegar, onion, feta cheese, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 91%, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Ginger Lentils With Carrots and Fresh Herbs",
        "descricao": "Ginger Lentils With Carrots and Fresh Herbs requires around 45 minutes from start to finish. One portion of this dish contains around 9g of protein, 3g of fat, and a total of 162 calories. This gluten free, dairy free, and lacto ovo vegetarian recipe serves 6 and costs 48 cents per serving. This recipe from Foodista has 3 fans. If you have ginger, honey, mint leaves, and a few other ingredients on hand, you can make it. Only a few people really liked this hor d'oeuvre. Overall, this recipe earns a solid spoonacular score of 69%. Try <a href=\"https://spoonacular.com/recipes/ginger-lentils-with-carrots-and-fresh-herbs-1406201\">Ginger Lentils With Carrots and Fresh Herbs</a>, <a href=\"https://spoonacular.com/recipes/black-lentils-with-fresh-herbs-564195\">Black Lentils With Fresh Herbs</a>, and <a href=\"https://spoonacular.com/recipes/black-lentils-with-fresh-herbs-1193643\">Black Lentils With Fresh Herbs</a> for similar recipes.",
        "preco_unitario": 63,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spinach N Walnut Stuffed Mushrooms",
        "descricao": "The recipe Spinach N Walnut Stuffed Mushrooms can be made in about 45 minutes. This gluten free and primal recipe serves 4 and costs $1.09 per serving. One serving contains 150 calories, 6g of protein, and 12g of fat. 1 person were glad they tried this recipe. Head to the store and pick up olive oil, cheese, basil leaves, and a few other things to make it today. Only a few people really liked this hor d'oeuvre. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 88%. This score is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/walnut-stuffed-mushrooms-758701\">Walnut-Stuffed Mushrooms</a>, <a href=\"https://spoonacular.com/recipes/tofu-and-walnut-stuffed-mushrooms-113063\">Tofu and Walnut Stuffed Mushrooms</a>, and <a href=\"https://spoonacular.com/recipes/bacon-walnut-blue-cheese-stuffed-mushrooms-798320\">Bacon Walnut Blue Cheese Stuffed Mushrooms</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cavatelli With Red and Green Chard",
        "descricao": "Need a dairy free hor d'oeuvre? Cavatelli With Red and Green Chard could be a spectacular recipe to try. This recipe makes 6 servings with 314 calories, 10g of protein, and 8g of fat each. For $1.26 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 1 person found this recipe to be tasty and satisfying. If you have kosher salt and pepper, olive oil, garlic, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 87%, this dish is spectacular. Try <a href=\"https://spoonacular.com/recipes/cavatelli-with-beets-and-swiss-chard-9529\">Cavatelli With Beets And Swiss Chard</a>, <a href=\"https://spoonacular.com/recipes/cavatelli-with-chicken-in-a-creamy-roasted-red-pepper-sauce-631538\">Cavatelli with Chicken in a Creamy Roasted Red Pepper Sauce</a>, and <a href=\"https://spoonacular.com/recipes/red-chard-pasta-with-red-fresno-chilies-585381\">Red Chard Pasta with Red Fresno Chilies</a> for similar recipes.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mango Salsa",
        "descricao": "Mango Salsan is a Mexican hor d'oeuvre. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 1 and costs $4.29 per serving. One serving contains 298 calories, 5g of protein, and 2g of fat. If you have cherry tomatoes, bell pepper, lime juice, and a few other ingredients on hand, you can make it. This recipe is liked by 14 foodies and cooks. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Afrolems. With a spoonacular score of 91%, this dish is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/grilled-mango-chicken-with-strawberry-mango-salsa-733371\">Grilled Mango Chicken with Strawberry Mango Salsa</a>, <a href=\"https://spoonacular.com/recipes/grilled-mango-chicken-with-strawberry-mango-salsa-1119805\">Grilled Mango Chicken with Strawberry Mango Salsa</a>, and <a href=\"https://spoonacular.com/recipes/sunny-hot-salsa-pineapple-mango-kiwi-salsa-148792\">Sunny & Hot! Salsa (Pineapple Mango Kiwi Salsa)</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Carrot and Coriander Soup",
        "descricao": "Carrot and Coriander Soup might be a good recipe to expand your hor d'oeuvre repertoire. One serving contains 354 calories, 5g of protein, and 15g of fat. This recipe serves 1 and costs $1.32 per serving. This recipe from Foodista requires carrots-peeled, onion-chopped, water, and pepper. 3 people were impressed by this recipe. It is perfect for Autumn. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 92%, this dish is outstanding. <a href=\"https://spoonacular.com/recipes/carrot-and-coriander-soup-1198221\">Carrot and coriander soup</a>, <a href=\"https://spoonacular.com/recipes/carrot-and-coriander-soup-630764\">Carrot and coriander soup</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-coriander-soup-1088974\">Carrot and coriander soup</a> are very similar to this recipe.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Watermelon, Zucchini, Carrot Salad",
        "descricao": "Watermelon, Zucchini, Carrot Salad might be a good recipe to expand your hor d'oeuvre recipe box. This recipe makes 3 servings with 70 calories, 2g of protein, and 1g of fat each. For 45 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. This recipe from Foodista has 1 fans. A mixture of carrots, zucchini, cabbage, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes about 45 minutes. It is perfect for Summer. With a spoonacular score of 90%, this dish is excellent. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/zucchini-and-carrot-salad-485293\">Zucchini and Carrot Salad</a>, <a href=\"https://spoonacular.com/recipes/shaved-carrot-and-zucchini-salad-278764\">Shaved Carrot and Zucchini Salad</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-zucchini-linguini-salad-602568\">Carrot and Zucchini Linguini Salad</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Colorful Red Quinoa Not So Tabbouleh Salad",
        "descricao": "Colorful Red Quinoa Not So Tabbouleh Salad requires around 45 minutes from start to finish. For $1.4 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 283 calories, 8g of protein, and 14g of fat per serving. This recipe serves 4. 2 people have tried and liked this recipe. This recipe is typical of middl eastern cuisine. This recipe from Foodista requires red wine vinegar, water, salt, and cayenne pepper. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. With a spoonacular score of 87%, this dish is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/colorful-red-quinoa-not-so-tabbouleh-salad-1212333\">Colorful Red Quinoa Not So Tabbouleh Salad</a>, <a href=\"https://spoonacular.com/recipes/colorful-quinoa-salad-272775\">Colorful Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/colorful-quinoa-salad-1273033\">Colorful Quinoa Salad</a>.",
        "preco_unitario": 62,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spring Salad with Walnut Vinaigrette",
        "descricao": "Spring Salad with Walnut Vinaigrette is a gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe with 2 servings. One serving contains 604 calories, 9g of protein, and 47g of fat. For $3.67 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. Not a lot of people really liked this hor d'oeuvre. It will be a hit at your Spring event. From preparation to the plate, this recipe takes roughly 45 minutes. A mixture of spring greens, mandarin, strawberries, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by Foodista. With a spoonacular score of 89%, this dish is amazing. <a href=\"https://spoonacular.com/recipes/spring-salad-with-walnut-vinaigrette-814235\">Spring Salad with Walnut Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/spring-cobb-salad-with-raspberry-basil-vinaigrette-mason-jar-salad-1345035\">Spring Cobb Salad with Raspberry Basil Vinaigrette + Mason Jar Salad</a>, and <a href=\"https://spoonacular.com/recipes/spring-cobb-salad-with-raspberry-basil-vinaigrette-mason-jar-salad-1244579\">Spring Cobb Salad with Raspberry Basil Vinaigrette + Mason Jar Salad</a> are very similar to this recipe.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Avocado and Orange Salad With Orange-Ginger Dressing",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Avocado and Orange Salad With Orange-Ginger Dressing a try. For $2.22 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. One serving contains 501 calories, 6g of protein, and 40g of fat. This recipe serves 4. This recipe from Foodista requires agave syrup, oranges, green onions, and ginger paste. 4 people were impressed by this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Overall, this recipe earns a tremendous spoonacular score of 88%. Similar recipes include <a href=\"https://spoonacular.com/recipes/avocado-and-orange-salad-with-orange-ginger-dressing-1295061\">Avocado and Orange Salad With Orange-Ginger Dressing</a>, <a href=\"https://spoonacular.com/recipes/brussel-sprouts-salad-with-orange-ginger-dressing-496200\">Brussel Sprouts Salad with Orange Ginger Dressing</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-mango-salad-with-ginger-orange-dressing-21105\">Chicken and Mango Salad with Ginger-Orange Dressing</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Splendid Texas Caviar",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Splendid Texas Caviar might be a recipe you should try. This recipe serves 3 and costs 57 cents per serving. One serving contains 180 calories, 11g of protein, and 1g of fat. Only a few people really liked this hor d'oeuvre. It is brought to you by Foodista. This recipe is liked by 1 foodies and cooks. Head to the store and pick up eyed peas, cilantro, juice of lime, and a few other things to make it today. From preparation to the plate, this recipe takes about 5 hours. Overall, this recipe earns an outstanding spoonacular score of 90%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/splendid-texas-caviar-1581605\">Splendid Texas Caviar</a>, <a href=\"https://spoonacular.com/recipes/chili-lime-texas-caviar-cowboy-caviar-913007\">Chili Lime Texas Caviar (Cowboy Caviar)</a>, and <a href=\"https://spoonacular.com/recipes/easy-texas-caviar-cowboy-caviar-1438805\">Easy Texas Caviar (Cowboy Caviar)</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 300,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fruit and Spinach Salad with \"Xocai Activ\" Vinaigrette",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Fruit and Spinach Salad with \"Xocai Activ\" Vinaigrette a try. This recipe serves 8 and costs 99 cents per serving. One portion of this dish contains around 3g of protein, 8g of fat, and a total of 109 calories. From preparation to the plate, this recipe takes roughly 45 minutes. 1 person has made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. It is brought to you by Foodista. If you have balsamic vinegar, pepper ), green onions, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 88%. This score is amazing. Similar recipes are <a href=\"https://spoonacular.com/recipes/fruit-and-spinach-salad-with-strawberry-vinaigrette-1239343\">Fruit and Spinach Salad with Strawberry Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/fruit-and-spinach-salad-with-strawberry-vinaigrette-583510\">Fruit and Spinach Salad with Strawberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/tropical-spinach-salad-with-warm-fruit-vinaigrette-19323\">Tropical Spinach Salad with Warm Fruit Vinaigrette</a>.",
        "preco_unitario": 24,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Warm Quinoa Spinach and Shiitake Salad",
        "descricao": "Warm Quinoa Spinach and Shiitake Salad might be just the hor d'oeuvre you are searching for. For $3.11 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. This recipe serves 6. One serving contains 226 calories, 6g of protein, and 16g of fat. 2 people were glad they tried this recipe. It is a good option if you're following a gluten free, lacto ovo vegetarian, and primal diet. From preparation to the plate, this recipe takes approximately 45 minutes. A mixture of salt, pepper, chicken broth, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular score of 92%, this dish is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/warm-quinoa-spinach-and-shiitake-salad-1403523\">Warm Quinoa Spinach and Shiitake Salad</a>, <a href=\"https://spoonacular.com/recipes/serious-salads-warm-quinoa-pilaf-salad-with-shiitake-mushrooms-carrots-pecans-202641\">Serious Salads: Warm Quinoa Pilaf Salad with Shiitake Mushrooms, Carrots & Pecans</a>, and <a href=\"https://spoonacular.com/recipes/warm-lentil-salad-with-spinach-quinoa-684160\">Warm Lentil Salad with Spinach & Quinoa</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Stuffed Mushrooms",
        "descricao": "Quinoa Stuffed Mushrooms is a hor d'oeuvre that serves 2. For $4.64 per serving, this recipe covers 46% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 577 calories, 22g of protein, and 21g of fat per serving. This recipe from Foodista requires quinoa, tomato, garlic powder, and onion. 1 person found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 89%, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/quinoa-stuffed-mushrooms-560679\">Quinoa Stuffed Mushrooms</a>, <a href=\"https://spoonacular.com/recipes/quinoa-stuffed-portobella-mushrooms-with-burrata-475948\">Quinoa Stuffed Portobella Mushrooms with Burrata</a>, and <a href=\"https://spoonacular.com/recipes/pizza-quinoa-stuffed-portabella-mushrooms-495213\">Pizza Quinoa Stuffed Portabella Mushrooms</a> for similar recipes.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chavrie Stuffed Grape Leaves",
        "descricao": "Chavrie Stuffed Grape Leaves is a hor d'oeuvre that serves 12. One portion of this dish contains around 3g of protein, 3g of fat, and a total of 82 calories. For 66 cents per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. 1 person found this recipe to be delicious and satisfying. A mixture of dill, olive oil, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 89%, which is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/stuffed-grape-leaves-577988\">Stuffed Grape Leaves</a>, <a href=\"https://spoonacular.com/recipes/stuffed-grape-leaves-1145316\">Stuffed Grape Leaves</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-grape-leaves-1534657\">Stuffed Grape Leaves</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Asian Green Pea Soup",
        "descricao": "Asian Green Pea Soup might be a good recipe to expand your hor d'oeuvre recipe box. This recipe serves 2. For $1.01 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 273 calories, 10g of protein, and 16g of fat per serving. It will be a hit at your Autumn event. 1 person were impressed by this recipe. This recipe is typical of Asian cuisine. A mixture of peas, ginger - remove skin and, drops of virgin olive oil, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 90%, this dish is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/split-pea-green-pea-smoked-ham-soup-221988\">Split pea & green pea smoked ham soup</a>, <a href=\"https://spoonacular.com/recipes/green-pea-soup-with-tarragon-and-pea-sprouts-101122\">Green Pea Soup with Tarragon and Pea Sprouts</a>, and <a href=\"https://spoonacular.com/recipes/green-pea-soup-with-tarragon-and-pea-sprouts-18311\">Green Pea Soup With Tarragon And Pea Sprouts</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Curry Mussels",
        "descricao": "Curry Mussels is a gluten free, primal, and pescatarian hor d'oeuvre. One portion of this dish contains around 64g of protein, 33g of fat, and a total of 743 calories. For $5.72 per serving, this recipe covers 51% of your daily requirements of vitamins and minerals. This recipe serves 2. This recipe from Foodista has 1 fans. If you have crème fraiche, cayenne pepper, parsley, and a few other ingredients on hand, you can make it. It is an expensive recipe for fans of Indian food. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 89%, this dish is amazing. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/coconut-curry-mussels-247054\">Coconut Curry Mussels</a>, <a href=\"https://spoonacular.com/recipes/coconut-curry-mussels-568548\">Coconut Curry Mussels</a>, and <a href=\"https://spoonacular.com/recipes/coconut-curry-mussels-54272\">Coconut Curry Mussels</a>.",
        "preco_unitario": 33,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spinach and potato soup",
        "descricao": "If you want to add more gluten free and lacto ovo vegetarian recipes to your repertoire, Spinach and potato soup might be a recipe you should try. One serving contains 266 calories, 10g of protein, and 10g of fat. This recipe serves 2 and costs $2.06 per serving. It works best as a hor d'oeuvre, and is done in approximately 45 minutes. Autumn will be even more special with this recipe. Not a lot of people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. If you have water, pepper flakes, spinach leaves, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/spinach-potato-soup-392892\">Spinach Potato Soup</a>, <a href=\"https://spoonacular.com/recipes/potato-spinach-soup-94696\">Potato Spinach Soup</a>, and <a href=\"https://spoonacular.com/recipes/curried-spinach-potato-soup-760696\">Curried Spinach-Potato Soup</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Black Bean and Peppers Taco Filling",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Black Bean and Peppers Taco Filling a try. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 8 and costs 55 cents per serving. One serving contains 118 calories, 5g of protein, and 3g of fat. A mixture of bell pepper, black beans, chili powder, and a handful of other ingredients are all it takes to make this recipe so scrumptious. 10 people have tried and liked this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. It is a very reasonably priced recipe for fans of Mexican food. It is brought to you by Foodista. Overall, this recipe earns an awesome spoonacular score of 88%. <a href=\"https://spoonacular.com/recipes/black-bean-taco-filling-1424571\">black bean taco filling</a>, <a href=\"https://spoonacular.com/recipes/kale-turkey-and-black-bean-taco-filling-plus-5-ways-to-use-it-1276641\">Kale, Turkey and Black Bean Taco Filling -Plus 5 Ways to Use It</a>, and <a href=\"https://spoonacular.com/recipes/kale-turkey-and-black-bean-taco-filling-plus-5-ways-to-use-it-506463\">Kale, Turkey and Black Bean Taco Filling -Plus 5 Ways to Use It</a> are very similar to this recipe.",
        "preco_unitario": 55,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Knock-Your-Socks-Off Guacamole",
        "descricao": "The recipe Knock-Your-Socks-Off Guacamole can be made in approximately 15 minutes. One serving contains 463 calories, 5g of protein, and 44g of fat. For $2.0 per serving, you get a hor d'oeuvre that serves 2. It is a rather cheap recipe for fans of Mexican food. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. A mixture of salt & pepper, onion, habanero pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by spoonacular user <a href=\"/profile/maplewoodroad\">maplewoodroad</a>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-eggplant-parmesan-that-will-knock-your-socks-off-572923\">Easy Eggplant Parmesan that Will Knock Your Socks Off</a>, <a href=\"https://spoonacular.com/recipes/knock-your-socks-off-stuffed-potatoes-with-broccoli-and-mushrooms-648985\">Knock Your Socks Off Stuffed Potatoes With Broccoli and Mushrooms</a>, and <a href=\"https://spoonacular.com/recipes/knock-your-socks-off-slow-cooker-chicken-and-sausage-1198533\">Knock Your Socks Off Slow Cooker Chicken and Sausage</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 15,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "African Bean Soup",
        "descricao": "Forget going out to eat or ordering takeout every time you crave African food. Try making African Bean Soup at home. For 43 cents per serving, you get a hor d'oeuvre that serves 4. One serving contains 189 calories, 10g of protein, and 5g of fat. 1 person were glad they tried this recipe. It will be a hit at your Autumn event. It is brought to you by Foodista. A mixture of water, carrots, peanut butter, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/african-pumpkin-and-bean-soup-1236381\">African Pumpkin and Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/african-pumpkin-and-bean-soup-1282455\">African Pumpkin and Bean Soup</a>, and <a href=\"https://spoonacular.com/recipes/african-pumpkin-and-bean-soup-1319249\">African Pumpkin and Bean Soup</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Smokey Rainbow Chili",
        "descricao": "Smokey Rainbow Chili is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 8 servings. One serving contains 218 calories, 9g of protein, and 5g of fat. For $1.07 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 7 would say it hit the spot. From preparation to the plate, this recipe takes around 45 minutes. This recipe from Foodista requires olive oil, stewed tomatoes, ground pepper, and chili powder. It works well as a budget friendly hor d'oeuvre. It will be a hit at your The Super Bowl event. This recipe is typical of American cuisine. With a spoonacular score of 85%, this dish is great. <a href=\"https://spoonacular.com/recipes/7th-annual-chili-contest-entry-smokey-chipotle-chili-with-ranch-sour-cream-weekly-menu-832601\">7th Annual Chili Contest: Entry – Smokey Chipotle Chili with Ranch Sour Cream + Weekly Menu</a>, <a href=\"https://spoonacular.com/recipes/smokey-chili-roasted-broccoli-109681\">Smokey Chili Roasted Broccoli</a>, and <a href=\"https://spoonacular.com/recipes/smokey-slow-cooker-chili-108120\">Smokey Slow Cooker Chili</a> are very similar to this recipe.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Sweet Pepper and Heirloom Tomato Gazpacho",
        "descricao": "Need a gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d'oeuvre? Sweet Pepper and Heirloom Tomato Gazpacho could be an awesome recipe to try. This recipe serves 4 and costs $1.87 per serving. One portion of this dish contains around 2g of protein, 14g of fat, and a total of 169 calories. Only a few people made this recipe, and 1 would say it hit the spot. It is perfect for Summer. This recipe from Foodista requires peppers, garlic, cucumber, and salt and pepper. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a great spoonacular score of 90%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/heirloom-tomato-gazpacho-23401\">Heirloom Tomato Gazpacho</a>, <a href=\"https://spoonacular.com/recipes/heirloom-tomato-gazpacho-with-lobster-232021\">Heirloom Tomato Gazpacho with Lobster</a>, and <a href=\"https://spoonacular.com/recipes/lazy-heirloom-tomato-gazpacho-254812\">Lazy Heirloom Tomato Gazpacho</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Skye Gyngell's Anchovy and Walnut Sauce",
        "descricao": "Skye Gyngell's Anchovy and Walnut Sauce might be just the hor d'oeuvre you are searching for. This recipe serves 4 and costs 83 cents per serving. One serving contains 58 calories, 2g of protein, and 5g of fat. 1 person has tried and liked this recipe. If you have anchovies, garlic, flat-leaf parsley, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns an excellent spoonacular score of 83%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/pasta-with-walnut-anchovy-sauce-1108338\">Pasta with Walnut Anchovy Sauce</a>, <a href=\"https://spoonacular.com/recipes/pasta-with-anchovy-walnut-sauce-238\">Pasta With Anchovy-walnut Sauce</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-anchovy-walnut-sauce-189\">Pasta with Anchovy-Walnut Sauce</a>.",
        "preco_unitario": 59,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spring Vegetables Soup",
        "descricao": "Spring Vegetables Soup is a gluten free, dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre. This recipe makes 5 servings with 210 calories, 5g of protein, and 6g of fat each. For 51 cents per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. Spring will be even more special with this recipe. Head to the store and pick up carrots, salt and pepper, potatoes, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 40 minutes. Overall, this recipe earns a tremendous spoonacular score of 87%. Similar recipes are <a href=\"https://spoonacular.com/recipes/hot-and-sour-soup-with-spring-vegetables-1298269\">Hot and Sour Soup with Spring Vegetables</a>, <a href=\"https://spoonacular.com/recipes/hot-and-sour-soup-with-spring-vegetables-879711\">Hot and Sour Soup with Spring Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-dumpling-soup-with-spring-vegetables-1436971\">Chicken and Dumpling Soup with Spring Vegetables</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 40,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Creamy Ratatouille Over Penne",
        "descricao": "If you have around 45 minutes to spend in the kitchen, Creamy Ratatouille Over Penne might be an excellent lacto ovo vegetarian recipe to try. This hor d'oeuvre has 308 calories, 9g of protein, and 12g of fat per serving. This recipe serves 2 and costs $1.46 per serving. 1 person found this recipe to be scrumptious and satisfying. Only a few people really liked this Mediterranean dish. This recipe from Foodista requires salt, penne, onion, and ground tomatoes. Overall, this recipe earns an amazing spoonacular score of 88%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/ratatouille-with-penne-190307\">Ratatouille with Penne</a>, <a href=\"https://spoonacular.com/recipes/ratatouille-soup-with-pork-and-penne-104024\">Ratatouille Soup With Pork and Penne</a>, and <a href=\"https://spoonacular.com/recipes/creamy-salmon-with-chunky-ratatouille-219762\">Creamy salmon with chunky ratatouille</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Watermelon, Feta And Mint Salad",
        "descricao": "Watermelon, Fetan And Mint Salad could be just the gluten free, lacto ovo vegetarian, and primal recipe you've been looking for. This recipe serves 6 and costs $1.92 per serving. This hor d'oeuvre has 250 calories, 8g of protein, and 18g of fat per serving. Not a lot of people made this recipe, and 8 would say it hit the spot. If you have olive oil, cucumber, curly leaf lettuce, and a few other ingredients on hand, you can make it. Summer will be even more special with this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 86%, this dish is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/watermelon-salad-with-feta-and-mint-27687\">Watermelon Salad with Fetan and Mint</a>, <a href=\"https://spoonacular.com/recipes/watermelon-feta-and-mint-salad-665012\">Watermelon Fetan and Mint Salad</a>, and <a href=\"https://spoonacular.com/recipes/watermelon-feta-mint-salad-893735\">Watermelon Feta Mint Salad</a>.",
        "preco_unitario": 51,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Japanese Sushi",
        "descricao": "If you want to add more gluten free, dairy free, and pescatarian recipes to your recipe box, Japanese Sushi might be a recipe you should try. This recipe makes 1 servings with 571 calories, 70g of protein, and 13g of fat each. For $6.21 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. A mixture of japanese sticky rice, salmon caviar, wasabi, and a handful of other ingredients are all it takes to make this recipe so flavorful. 1 person has tried and liked this recipe. It works well as a pricey hor d'oeuvre. From preparation to the plate, this recipe takes approximately 45 minutes. This recipe is typical of Japanese cuisine. With a spoonacular score of 85%, this dish is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/chirashi-sushi-cake-and-temari-sushi-540672\">Chirashi Sushi Cake and Temari Sushi</a>, <a href=\"https://spoonacular.com/recipes/deconstructed-sushi-chirashi-sushi-509386\">Deconstructed Sushi (Chirashi Sushi)</a>, and <a href=\"https://spoonacular.com/recipes/sushi-pizza-87760\">Sushi Pizza</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fresh Green Bean and Tomato Salad with Creamy Garlic Dressing",
        "descricao": "If you have about 45 minutes to spend in the kitchen, Fresh Green Bean and Tomato Salad with Creamy Garlic Dressing might be a spectacular gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe to try. This recipe makes 4 servings with 196 calories, 6g of protein, and 12g of fat each. For $2.0 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. 8 people were impressed by this recipe. A mixture of red wine vinegar, salt, spicy brown mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It works well as a budget friendly hor d'oeuvre. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 83%, which is excellent. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/fresh-green-bean-salad-with-balsamic-dressing-568578\">Fresh Green Bean Salad with Balsamic Dressing</a>, <a href=\"https://spoonacular.com/recipes/fresh-green-bean-salad-with-asian-dressing-474770\">Fresh Green Bean Salad with Asian Dressing</a>, and <a href=\"https://spoonacular.com/recipes/fresh-green-bean-and-tomato-salad-98334\">Fresh Green Bean and Tomato Salad</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash and Tahini Soup",
        "descricao": "Butternut Squash and Tahini Soup takes approximately 45 minutes from beginning to end. For $1.65 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. One portion of this dish contains around 11g of protein, 6g of fat, and a total of 296 calories. This recipe serves 6. This recipe from Foodista requires olive oil, tahiti paste, stock, and lentils. Not a lot of people really liked this hor d'oeuvre. It is perfect for Autumn. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is liked by 1 foodies and cooks. Overall, this recipe earns an amazing spoonacular score of 87%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/butternut-squash-and-tahini-soup-1217807\">Butternut Squash and Tahini Soup</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-and-tahini-spread-619321\">Butternut Squash and Tahini Spread</a>, and <a href=\"https://spoonacular.com/recipes/roasted-butternut-squash-with-pomegranate-and-tahini-707575\">Roasted Butternut Squash with Pomegranate and Tahini</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Monastery soup",
        "descricao": "Monastery soup is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 4 servings. One serving contains 293 calories, 7g of protein, and 8g of fat. For $1.57 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. 7 people were glad they tried this recipe. It works best as a hor d'oeuvre, and is done in approximately 45 minutes. It will be a hit at your Autumn event. This recipe from Foodista requires parsley, carrots, broad beans, and vegetable stock. With a spoonacular score of 89%, this dish is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/monastery-soup-1412001\">Monastery soup</a>, <a href=\"https://spoonacular.com/recipes/a-quick-and-easy-soup-miso-soup-with-soba-noodles-or-mung-bean-31003\">A Quick And Easy Soup {miso Soup With Soba Noodles Or Mung Bean</a>, and <a href=\"https://spoonacular.com/recipes/pea-soup-with-lettuce-and-mint-aka-clean-out-the-fridge-soup-569347\">Pea soup with lettuce and mint (aka: clean out the fridge soup!)</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Veg Hakka Noodles",
        "descricao": "Veg Hakka Noodles takes approximately 30 minutes from beginning to end. This dairy free recipe serves 2 and costs 89 cents per serving. One portion of this dish contains around 8g of protein, 15g of fat, and a total of 341 calories. This recipe is liked by 1 foodies and cooks. A mixture of tomato sauce, chilli sauce, cabbage, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a very reasonably priced hor d'oeuvre. It is brought to you by thecuisine.blogspot.com. Overall, this recipe earns an improvable spoonacular score of 0%. Similar recipes include <a href=\"https://spoonacular.com/recipes/veg-hakka-noodles-how-to-make-vegetable-hakka-noodles-1233409\">veg hakka noodles , how to make vegetable hakka noodles</a>, <a href=\"https://spoonacular.com/recipes/veg-noodles-how-to-make-veg-noodles-easy-veg-noodles-1214927\">veg noodles , how to make veg noodles | easy veg noodles</a>, and <a href=\"https://spoonacular.com/recipes/veg-noodles-how-to-make-veg-noodles-easy-veg-noodles-486837\">veg noodles , how to make veg noodles | easy veg noodles</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 30,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash and Black Bean Chili with Bulgar",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Butternut Squash and Black Bean Chili with Bulgar a try. This recipe serves 6 and costs $1.26 per serving. One serving contains 231 calories, 9g of protein, and 3g of fat. This recipe from Foodista requires onion, bulgur, butternut squash, and olive oil. It is a budget friendly recipe for fans of American food. 1 person were glad they tried this recipe. It is perfect for The Super Bowl. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 85%. This score is great. Try <a href=\"https://spoonacular.com/recipes/butternut-squash-black-bean-chili-682082\">Butternut Squash Black Bean Chili</a>, <a href=\"https://spoonacular.com/recipes/black-bean-chili-with-butternut-squash-1207473\">Black Bean Chili with Butternut Squash</a>, and <a href=\"https://spoonacular.com/recipes/black-bean-chili-with-butternut-squash-105911\">Black Bean Chili with Butternut Squash</a> for similar recipes.",
        "preco_unitario": 69,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spring Salad with Radishes and Beets",
        "descricao": "Spring Salad with Radishes and Beets might be just the hor d'oeuvre you are searching for. For $3.79 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 368 calories, 8g of protein, and 28g of fat per serving. This recipe serves 1. 1 person has made this recipe and would make it again. It will be a hit at your Spring event. It is brought to you by Foodista. If you have baby spinach, roasted golden beets, breakfast radishes, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 82%, which is excellent. Try <a href=\"https://spoonacular.com/recipes/spring-salad-with-radishes-and-pumpkin-seeds-14356\">Spring Salad With Radishes And Pumpkin Seeds</a>, <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-spring-radishes-and-greens-44389\">Quinoa Salad With Spring Radishes And Greens</a>, and <a href=\"https://spoonacular.com/recipes/spring-freekeh-salad-with-asparagus-peas-radishes-516264\">spring freekeh salad with asparagus, peas + radishes</a> for similar recipes.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Tabbouleh Salad",
        "descricao": "Quinoa Tabbouleh Salad requires about 45 minutes from start to finish. For 52 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 136 calories, 4g of protein, and 7g of fat per serving. This recipe serves 8. Head to the store and pick up tomato, freshly cracked pepper, mint, and a few other things to make it today. 4 people have made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is typical of middl eastern cuisine. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 82%. This score is excellent. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/quinoa-tabbouleh-salad-1333155\">Quinoa Tabbouleh Salad</a>, <a href=\"https://spoonacular.com/recipes/quinoa-tabbouleh-salad-1370997\">Quinoa Tabbouleh Salad</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-tabbouleh-salad-1238883\">Quinoa Tabbouleh Salad</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Orange Cashew Salad",
        "descricao": "Orange Cashew Salad could be just the gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe you've been looking for. For 66 cents per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 143 calories, 4g of protein, and 8g of fat per serving. This recipe serves 3. It is brought to you by Foodista. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of cumin, salt & pepper, cashew nuts, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns a super spoonacular score of 88%. Similar recipes are <a href=\"https://spoonacular.com/recipes/asian-salad-with-cashew-dressing-and-cashew-butter-cookies-478025\">Asian Salad with Cashew Dressing and Cashew Butter Cookies</a>, <a href=\"https://spoonacular.com/recipes/orange-cashew-chicken-437131\">Orange Cashew Chicken</a>, and <a href=\"https://spoonacular.com/recipes/cashew-orange-biscotti-141929\">Cashew Orange Biscotti</a>.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mediterranean Herb Dip",
        "descricao": "Need a gluten free hor d'oeuvre? Mediterranean Herb Dip could be an awesome recipe to try. This recipe makes 4 servings with 445 calories, 17g of protein, and 28g of fat each. For $6.01 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. 11 person found this recipe to be scrumptious and satisfying. If you have tabasco hot sauce, bar of cream cheese, garlic cloves, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. The Super Bowl will be even more special with this recipe. It is brought to you by Foodista. With a spoonacular score of 89%, this dish is tremendous. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/mediterranean-herb-rub-46951\">Mediterranean Herb Rub</a>, <a href=\"https://spoonacular.com/recipes/herb-roasted-mediterranean-vegetables-278200\">Herb-Roasted Mediterranean Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/mediterranean-herb-baked-chicken-111651\">Mediterranean Herb Baked Chicken</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Pesto Zucchini Pasta (Whole 30 Approved)",
        "descricao": "If you have about 35 minutes to spend in the kitchen, Pesto Zucchini Pasta (Whole 30 Approved) might be a super gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe to try. For $2.38 per serving, you get a hor d'oeuvre that serves 4. One portion of this dish contains about 5g of protein, 16g of fat, and a total of 189 calories. 1 person has made this recipe and would make it again. Head to the store and pick up salt, tomato, pine nuts, and a few other things to make it today. It is brought to you by Foodista. Overall, this recipe earns an outstanding spoonacular score of 82%. Similar recipes include <a href=\"https://spoonacular.com/recipes/zucchini-pasta-with-pesto-sauce-485717\">Zucchini “Pasta” with Pesto Sauce</a>, <a href=\"https://spoonacular.com/recipes/air-fryer-potatoes-with-homemade-pesto-vegan-and-whole-30-approved-1604987\">Air Fryer Potatoes with Homemade Pesto – Vegan and Whole 30 Approved</a>, and <a href=\"https://spoonacular.com/recipes/basil-pesto-pasta-with-zucchini-and-mint-25480\">Basil Pesto Pasta with Zucchini and Mint</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 35,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cod and Potato Oreganata",
        "descricao": "Cod and Potato Oreganata could be just the dairy free and pescatarian recipe you've been looking for. One portion of this dish contains about 12g of protein, 13g of fat, and a total of 463 calories. This recipe serves 4. For $1.08 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. It works well as a hor d'oeuvre. It is brought to you by Foodista. If you have water, yukon gold potatoes, seasoned breadcrumbs, and a few other ingredients on hand, you can make it. Only a few people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes approximately 30 minutes. With a spoonacular score of 86%, this dish is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/roasted-tomato-and-anchovy-oreganata-pasta-597353\">Roasted Tomato and Anchovy Oreganata Pasta</a>, <a href=\"https://spoonacular.com/recipes/broiled-tilapia-oreganata-6809\">Broiled Tilapian Oreganata</a>, and <a href=\"https://spoonacular.com/recipes/pork-chops-oreganata-146187\">Pork Chops Oreganata</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 30,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Sweet Potato, Kale & White Bean Soup",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Sweet Potato, Kale & White Bean Soup might be a recipe you should try. This recipe serves 4. One portion of this dish contains roughly 10g of protein, 4g of fat, and a total of 261 calories. For $1.81 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. 2 people were impressed by this recipe. It works well as a reasonably priced hor d'oeuvre. Autumn will be even more special with this recipe. A mixture of white wine, cannellini beans, onion, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a spectacular spoonacular score of 87%. <a href=\"https://spoonacular.com/recipes/sweet-potato-kale-white-bean-soup-1367305\">Sweet Potato, Kale & White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/kale-white-bean-and-sweet-potato-soup-15319\">Kale, White Bean, And Sweet Potato Soup</a>, and <a href=\"https://spoonacular.com/recipes/spiralized-sweet-potato-white-bean-and-kale-bake-837354\">Spiralized Sweet Potato, White Bean and Kale Bake</a> are very similar to this recipe.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fresh Tomato Risotto with Grilled Green Vegetables",
        "descricao": "Need a gluten free, dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre? Fresh Tomato Risotto with Grilled Green Vegetables could be an amazing recipe to try. This recipe serves 4 and costs $2.3 per serving. One serving contains 296 calories, 9g of protein, and 1g of fat. It is a rather cheap recipe for fans of Mediterranean food. From preparation to the plate, this recipe takes around 1 hour. It is perfect for The Fourth Of July. This recipe is liked by 1 foodies and cooks. This recipe from Foodista requires onion, broccoli, peas, and zucchini. All things considered, we decided this recipe deserves a spoonacular score of 85%. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/fresh-tomato-zucchini-and-lemon-risotto-27982\">Fresh Tomato Zucchini And Lemon Risotto</a>, <a href=\"https://spoonacular.com/recipes/dinner-tonight-roasted-tomato-risotto-with-fresh-mozzarella-200230\">Dinner Tonight: Roasted Tomato Risotto with Fresh Mozzarella</a>, and <a href=\"https://spoonacular.com/recipes/fresh-pea-risotto-with-spicy-grilled-shrimp-1272647\">Fresh Pea Risotto with Spicy Grilled Shrimp</a> for similar recipes.",
        "preco_unitario": 20,
        "tempo_preparo": 60,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Raw Kale Salad",
        "descricao": "Raw Kale Salad is a hor d'oeuvre that serves 6. One portion of this dish contains about 3g of protein, 10g of fat, and a total of 140 calories. For $1.09 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person has made this recipe and would make it again. A mixture of escallion, maple syrup, bell pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 78%, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/raw-kale-salad-15496\">Raw Kale Salad</a>, <a href=\"https://spoonacular.com/recipes/raw-kale-salad-1236167\">Raw Kale Salad</a>, and <a href=\"https://spoonacular.com/recipes/raw-kale-salad-473051\">Raw Kale Salad</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Massaged Kale Salad with Pine Nuts & Dried Cranberries",
        "descricao": "Massaged Kale Salad with Pine Nuts & Dried Cranberries could be just the gluten free and primal recipe you've been looking for. One serving contains 365 calories, 5g of protein, and 34g of fat. For $1.69 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This recipe serves 6. It is perfect for Christmas. This recipe from Foodista requires pepper flakes, parmesan cheese, garlic, and kosher salt. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes roughly 15 minutes. It works well as a hor d'oeuvre. With a spoonacular score of 87%, this dish is excellent. <a href=\"https://spoonacular.com/recipes/massaged-kale-salad-with-pistachios-dried-cherries-and-avocado-1266711\">Massaged Kale Salad with Pistachios, Dried Cherries, and Avocado</a>, <a href=\"https://spoonacular.com/recipes/massaged-kale-salad-with-pistachios-dried-cherries-and-avocado-556844\">Massaged Kale Salad with Pistachios, Dried Cherries, and Avocado</a>, and <a href=\"https://spoonacular.com/recipes/massaged-kale-salad-with-pistachios-dried-cherries-and-avocado-1214005\">Massaged Kale Salad with Pistachios, Dried Cherries, and Avocado</a> are very similar to this recipe.",
        "preco_unitario": 24,
        "tempo_preparo": 15,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mexican Quinoa Bowl",
        "descricao": "Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Mexican Quinoa Bowl at home. One serving contains 221 calories, 10g of protein, and 7g of fat. This recipe serves 6 and costs 79 cents per serving. A mixture of cilantro, juice of lime, tomato sauce, and a handful of other ingredients are all it takes to make this recipe so delicious. 1 person has tried and liked this recipe. It is brought to you by Pick Fresh Foods. It works well as a very affordable hor d'oeuvre. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, dairy free, and lacto ovo vegetarian diet. With a spoonacular score of 81%, this dish is great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/mexican-quinoa-bowl-1654309\">Mexican Quinoa Bowl</a>, <a href=\"https://spoonacular.com/recipes/mexican-quinoa-bowl-1648233\">Mexican Quinoa Bowl</a>, and <a href=\"https://spoonacular.com/recipes/mexican-quinoa-bowl-1661743\">Mexican Quinoa Bowl</a>.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Barley salad with vegetables",
        "descricao": "The recipe Barley salad with vegetables can be made in around 45 minutes. For $3.4 per serving, you get a hor d'oeuvre that serves 1. One serving contains 347 calories, 9g of protein, and 16g of fat. Head to the store and pick up salt, courgette, extra virgin olive oil, and a few other things to make it today. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 85%, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/boribap-rice-and-barley-with-vegetables-207197\">Boribap (Rice and Barley with Vegetables)</a>, <a href=\"https://spoonacular.com/recipes/toasted-barley-with-mixed-vegetables-170044\">Toasted Barley with Mixed Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/on-summer-salads-and-barley-with-vegetables-795102\">On summer salads and barley with vegetables</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Middle Eastern Chopped Salad",
        "descricao": "Middle Eastern Chopped Salad could be just the gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe you've been looking for. One serving contains 180 calories, 3g of protein, and 17g of fat. For $1.68 per serving, you get a hor d'oeuvre that serves 8. 5 people have made this recipe and would make it again. Head to the store and pick up chili flake, parsley, kosher salt and coarsely ground pepper, and a few other things to make it today. Not a lot of people really liked this middl eastern dish. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/middle-eastern-chopped-salad-1345095\">Middle Eastern Chopped Salad</a>, <a href=\"https://spoonacular.com/recipes/middle-eastern-chopped-salad-1313443\">Middle Eastern Chopped Salad</a>, and <a href=\"https://spoonacular.com/recipes/middle-eastern-chopped-salad-1280851\">Middle Eastern Chopped Salad</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "The Perfect Butter Beans Stew",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, The Perfect Butter Beans Stew might be a recipe you should try. This hor d'oeuvre has 143 calories, 8g of protein, and 3g of fat per serving. For 43 cents per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. This recipe serves 6. This recipe from Foodista has 3 fans. It will be a hit at your Autumn event. If you have lima beans *soaked overnight, tarragon, tarragon, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/the-perfect-butter-beans-stew-1373539\">The Perfect Butter Beans Stew</a>, <a href=\"https://spoonacular.com/recipes/perfect-black-beans-310859\">Perfect Black Beans</a>, and <a href=\"https://spoonacular.com/recipes/perfect-refried-beans-1232339\">Perfect Refried Beans</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Raspberry Arugula Side Salad",
        "descricao": "Raspberry Arugula Side Salad is a hor d'oeuvre that serves 2. For $1.83 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 3g of protein, 12g of fat, and a total of 142 calories. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes approximately 10 minutes. Head to the store and pick up olives, raspberries, cucumber, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 84%, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/mushroom-and-cheddar-fritatta-and-arugula-side-salad-299790\">Mushroom and Cheddar Fritattan and Arugula Side Salad</a>, <a href=\"https://spoonacular.com/recipes/arugula-salad-with-raspberry-vinaigrette-1152023\">Arugula Salad with Raspberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/raspberry-arugula-polenta-salad-934683\">Raspberry Arugula Polenta Salad</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 10,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lemon Vegetable Soup",
        "descricao": "Lemon Vegetable Soup is a hor d'oeuvre that serves 4. One serving contains 203 calories, 10g of protein, and 1g of fat. For $1.43 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. Head to the store and pick up lemon, carrots, oregano, and a few other things to make it today. It is brought to you by Foodista. It will be a hit at your Autumn event. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person were impressed by this recipe. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Overall, this recipe earns an excellent spoonacular score of 86%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lemon-chicken-quinoa-vegetable-soup-629447\">Lemon Chicken Quinoa Vegetable Soup</a>, <a href=\"https://spoonacular.com/recipes/green-vegetable-soup-with-lemon-basil-pesto-348610\">Green Vegetable Soup with Lemon-Basil Pesto</a>, and <a href=\"https://spoonacular.com/recipes/spiced-moroccan-vegetable-soup-with-chickpeas-cilantro-and-lemon-harira-993992\">Spiced Moroccan Vegetable Soup with Chickpeas, Cilantro, and Lemon (Harira)</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cashew-Chili Portabello",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Cashew-Chili Portabello might be a recipe you should try. This recipe makes 4 servings with 461 calories, 12g of protein, and 24g of fat each. For $2.13 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. This recipe is typical of American cuisine. It works well as a hor d'oeuvre. This recipe from Foodista has 1 fans. Head to the store and pick up bell pepper, extra virgin olive oil, portabello mushrooms, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 85%, this dish is spectacular. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/cashew-chicken-chili-581817\">Cashew Chicken Chili</a>, <a href=\"https://spoonacular.com/recipes/vegetarian-chili-with-cilantro-lime-cashew-sour-cream-573766\">Vegetarian Chili with Cilantro-Lime Cashew Sour Cream</a>, and <a href=\"https://spoonacular.com/recipes/meat-lite-black-bean-and-cashew-chicken-chili-208799\">Meat Lite: Black Bean and Cashew Chicken Chili</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Falafels With Tahini Sauce",
        "descricao": "If you have about 45 minutes to spend in the kitchen, Falafels With Tahini Sauce might be a super dairy free, lacto ovo vegetarian, and vegan recipe to try. This recipe makes 4 servings with 360 calories, 11g of protein, and 24g of fat each. For $1.28 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. 2 people were glad they tried this recipe. This recipe from Foodista requires tahini sauce, pepper flakes, garlic, and flour. Only a few people really liked this hor d'oeuvre. Overall, this recipe earns an excellent spoonacular score of 86%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/falafels-and-tahini-sauce-80833\">Falafels And Tahini Sauce</a>, <a href=\"https://spoonacular.com/recipes/quinoa-falafels-with-tahini-sauce-23306\">Quinoa Falafels With Tahini Sauce</a>, and <a href=\"https://spoonacular.com/recipes/tahini-sauce-279696\">Tahini Sauce</a>.",
        "preco_unitario": 46,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Salsa Verde By Mommie Cooks",
        "descricao": "If you want to add more Mexican recipes to your recipe box, Salsa Verde By Mommie Cooks might be a recipe you should try. For $2.28 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. This recipe makes 6 servings with 147 calories, 4g of protein, and 4g of fat each. 2 people found this recipe to be tasty and satisfying. Head to the store and pick up coriander, garlic cloves, onion, and a few other things to make it today. It works best as a hor d'oeuvre, and is done in around 45 minutes. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. Overall, this recipe earns a good spoonacular score of 80%. Similar recipes include <a href=\"https://spoonacular.com/recipes/chicken-fajitas-by-mommie-cooks-638085\">Chicken Fajitas By Mommie Cooks</a>, <a href=\"https://spoonacular.com/recipes/vegetarian-tamales-mommie-cooks-664720\">Vegetarian Tamales - Mommie Cooks</a>, and <a href=\"https://spoonacular.com/recipes/turkey-goulash-by-mommie-cooks-664031\">Turkey Goulash By Mommie Cooks</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Crockpot \"Refried\" Beans",
        "descricao": "The recipe Crockpot \"Refried\" Beans can be made in around 45 minutes. This recipe serves 16. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 89 calories, 5g of protein, and 0g of fat per serving. For 19 cents per serving, this recipe covers 6% of your daily requirements of vitamins and minerals. Many people really liked this hor d'oeuvre. This recipe from penniesandpancakes.blogspot.com has 13090 fans. If you have pepper, cumin, pinto beans, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe earns a spoonacular score of 84%, which is spectacular. Try <a href=\"https://spoonacular.com/recipes/crockpot-refried-beans-519722\">Crockpot Refried Beans</a>, <a href=\"https://spoonacular.com/recipes/crockpot-refried-beans-1364615\">Crockpot \"Refried\" Beans</a>, and <a href=\"https://spoonacular.com/recipes/crockpot-refried-beans-640895\">Crockpot Refried Beans</a> for similar recipes.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Colorful and Crunchy Pomegranate and Spinach Side Salad",
        "descricao": "Colorful and Crunchy Pomegranate and Spinach Side Salad is a gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d'oeuvre. This recipe serves 4 and costs $1.04 per serving. One portion of this dish contains about 3g of protein, 7g of fat, and a total of 116 calories. A mixture of almonds, baby spinach, pomegranate seeds, and a handful of other ingredients are all it takes to make this recipe so flavorful. 1 person has made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 15 minutes. With a spoonacular score of 83%, this dish is spectacular. <a href=\"https://spoonacular.com/recipes/colorful-crunchy-apple-and-chicken-salad-with-fresh-mint-and-basil-639956\">Colorful, Crunchy Apple and Chicken Salad With Fresh Mint and Basil</a>, <a href=\"https://spoonacular.com/recipes/crunchy-fresh-green-bean-colorful-tomato-and-feta-salad-529944\">Crunchy Fresh Green Bean, Colorful Tomato and Feta Salad</a>, and <a href=\"https://spoonacular.com/recipes/colorful-crunchy-apple-and-chicken-salad-with-fresh-mint-and-basil-530132\">Colorful, Crunchy Apple and Chicken Salad with Fresh Mint and Basil</a> are very similar to this recipe.",
        "preco_unitario": 25,
        "tempo_preparo": 15,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chile Underground's Texas Caviar",
        "descricao": "Chile Underground's Texas Caviar might be just the hor d'oeuvre you are searching for. For $1.4 per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. One portion of this dish contains around 9g of protein, 8g of fat, and a total of 225 calories. This recipe serves 8. 4 people were glad they tried this recipe. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe from Foodista requires super-sweet grape tomatoes, olive oil, bell pepper, and oregano. From preparation to the plate, this recipe takes roughly 3 hours. Overall, this recipe earns a spectacular spoonacular score of 80%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chili-lime-texas-caviar-cowboy-caviar-913007\">Chili Lime Texas Caviar (Cowboy Caviar)</a>, <a href=\"https://spoonacular.com/recipes/easy-texas-caviar-cowboy-caviar-1438805\">Easy Texas Caviar (Cowboy Caviar)</a>, and <a href=\"https://spoonacular.com/recipes/cowboy-caviar-texas-caviar-1495381\">Cowboy Caviar (Texas Caviar)</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 180,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chunky Tomato Gazpacho",
        "descricao": "Chunky Tomato Gazpacho is a hor d'oeuvre that serves 6. For $2.09 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. One serving contains 340 calories, 7g of protein, and 22g of fat. This recipe is liked by 1 foodies and cooks. It is perfect for Summer. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. Head to the store and pick up avocado, garlic, sherry wine vinegar, and a few other things to make it today. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 83%. This score is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chunky-tomato-fruit-gazpacho-27774\">Chunky Tomato-Fruit Gazpacho</a>, <a href=\"https://spoonacular.com/recipes/chunky-gazpacho-205208\">Chunky Gazpacho</a>, and <a href=\"https://spoonacular.com/recipes/chunky-gazpacho-with-sauted-shrimp-199269\">Chunky Gazpacho with Sautéed Shrimp</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roasted Butternut Squash and Sage Dip",
        "descricao": "Roasted Butternut Squash and Sage Dip is a hor d'oeuvre that serves 2. One serving contains 465 calories, 9g of protein, and 35g of fat. For $2.73 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. 3 people have tried and liked this recipe. This recipe from Foodista requires two butternut squash, olive oil, ground pepper, and garlic powder. The Super Bowl will be even more special with this recipe. It is a good option if you're following a gluten free, primal, and pescatarian diet. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 80%, which is pretty good. Try <a href=\"https://spoonacular.com/recipes/roasted-butternut-squash-with-sage-1239315\">Roasted Butternut Squash with Sage</a>, <a href=\"https://spoonacular.com/recipes/roasted-butternut-squash-and-sage-gnocchi-535328\">Roasted Butternut Squash and Sage Gnocchi</a>, and <a href=\"https://spoonacular.com/recipes/roasted-butternut-squash-with-pecans-and-sage-707573\">Roasted Butternut Squash with Pecans and Sage</a> for similar recipes.",
        "preco_unitario": 57,
        "tempo_preparo": 45,
        "categoria": "appetizer",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Strawberry-Mango Quinoa Salad",
        "descricao": "Need a gluten free and lacto ovo vegetarian hor d'oeuvre? Strawberry-Mango Quinoa Salad could be an awesome recipe to try. This recipe serves 4. One serving contains 354 calories, 8g of protein, and 17g of fat. For $1.87 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. 41 person were impressed by this recipe. This recipe from Foodista requires cucumber, cream, mango, and strawberries. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1578467\">Strawberry-Mango Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1588251\">Strawberry-Mango Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-mango-chopped-spinach-quinoa-salad-with-sesame-lime-vinaigrette-1469287\">Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTdHJhd2JlcnJ5LU1hbmdvJTIwUXVpbm9hJTIwU2FsYWR8ZW58MHx8fHwxNzQzMDEyNTQ0fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
        "descricao": "Spicy Salad with Kidney Beans, Cheddar, and Nuts might be just the main course you are searching for. One serving contains 719 calories, 27g of protein, and 49g of fat. This recipe serves 1 and costs $4.58 per serving. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. Head to the store and pick up almonds, greens, sundried tomatoes, and a few other things to make it today. From preparation to the plate, this recipe takes about 10 minutes. It is brought to you by spoonacular user <a href=\"/profile/coffeebean\">coffeebean</a>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/curried-red-kidney-beans-with-paneer-paneer-rajma-593415\">Curried Red Kidney Beans with Paneer (Paneer Rajma)</a>, <a href=\"https://spoonacular.com/recipes/steak-and-kidney-pie-with-port-and-pickled-walnuts-661494\">Steak and Kidney Pie With Port and Pickled Walnuts</a>, and <a href=\"https://spoonacular.com/recipes/lamb-and-kidney-hot-pot-157834\">LAMB AND KIDNEY HOT- POT</a>.",
        "preco_unitario": 68,
        "tempo_preparo": 10,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTcGljeSUyMFNhbGFkJTIwd2l0aCUyMEtpZG5leSUyMEJlYW5zJTJDJTIwQ2hlZGRhciUyQyUyMGFuZCUyME51dHN8ZW58MHx8fHwxNzQzMDEyNTQ1fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Spinach Salad with Strawberry Vinaigrette",
        "descricao": "Need a gluten free and primal main course? Spinach Salad with Strawberry Vinaigrette could be a great recipe to try. This recipe makes 1 servings with 322 calories, 22g of protein, and 13g of fat each. For $3.39 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. A mixture of water, balsamic vinegar, ground pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It will be a hit at your Mother's Day event. 15 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-583232\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-1231959\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/spinach-strawberry-salad-with-strawberry-vinaigrette-1296303\">Spinach Strawberry Salad with Strawberry Vinaigrette</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTcGluYWNoJTIwU2FsYWQlMjB3aXRoJTIwU3RyYXdiZXJyeSUyMFZpbmFpZ3JldHRlfGVufDB8fHx8MTc0MzAxMjU0NXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Amaranth and Roast Veggie Salad",
        "descricao": "Amaranth and Roast Veggie Salad could be just the gluten free, dairy free, lacto ovo vegetarian, and vegan recipe you've been looking for. This recipe serves 2 and costs $2.47 per serving. This hor d'oeuvre has 361 calories, 9g of protein, and 18g of fat per serving. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe from Foodista requires amaranth, punnet baby tomatoes, bell pepper, and pumpkin. 5 people have tried and liked this recipe. Overall, this recipe earns an outstanding spoonacular score of 95%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/mums-roast-veggie-salad-12573\">Mum’s Roast Veggie Salad</a>, <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1235383\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>, and <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1238997\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>.",
        "preco_unitario": 51,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxBbWFyYW50aCUyMGFuZCUyMFJvYXN0JTIwVmVnZ2llJTIwU2FsYWR8ZW58MHx8fHwxNzQzMDEyNTQ1fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
        "descricao": "If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your repertoire, Carrot and Cabbage Salad With Coriander+cumin Dry Rub might be a recipe you should try. This recipe serves 1. One portion of this dish contains about 6g of protein, 10g of fat, and a total of 222 calories. For $1.4 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. 4 people have made this recipe and would make it again. Head to the store and pick up sunflower seeds, cumin seed powder, juice of lime, and a few other things to make it today. It works well as an affordable hor d'oeuvre. From preparation to the plate, this recipe takes roughly 25 minutes. It is brought to you by Foodista. Overall, this recipe earns a super spoonacular score of 96%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1230725\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1350633\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1253443\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>.",
        "preco_unitario": 23,
        "tempo_preparo": 25,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDYXJyb3QlMjBhbmQlMjBDYWJiYWdlJTIwU2FsYWQlMjBXaXRoJTIwQ29yaWFuZGVyJTJCY3VtaW4lMjBEcnklMjBSdWJ8ZW58MHx8fHwxNzQzMDEyNTQ1fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Lentil Mango Salad",
        "descricao": "Lentil Mango Salad is a main course that serves 4. One serving contains 253 calories, 12g of protein, and 6g of fat. For $1.59 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Head to the store and pick up cilantro, white wine vinegar, onion, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 94%, which is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lentil-burger-with-mango-salsa-509088\">LENTIL BURGER with Mango Salsa</a>, <a href=\"https://spoonacular.com/recipes/plumcot-orange-lentil-salad-fave-five-friday-lovely-lentil-dishes-529696\">Plumcot, Orange & Lentil Salad… & Fave Five Friday: Lovely Lentil Dishes</a>, and <a href=\"https://spoonacular.com/recipes/simple-coconut-quinoa-and-lentil-curry-with-lime-mango-705061\">Simple Coconut Quinoan and Lentil Curry with Lime Mango</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Shrimp and Avocado Salad",
        "descricao": "Need a gluten free, dairy free, and pescatarian main course? Shrimp and Avocado Salad could be an awesome recipe to try. This recipe serves 4 and costs $11.57 per serving. One portion of this dish contains about 34g of protein, 37g of fat, and a total of 639 calories. From preparation to the plate, this recipe takes about 45 minutes. This recipe is liked by 8 foodies and cooks. This recipe from Foodista requires the shrimp, salt and pepper, garlic cloves, and the dressing. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-584558\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1236119\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, and <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1219445\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad",
        "descricao": "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad is a gluten free and dairy free main course. This recipe serves 6 and costs $3.06 per serving. One serving contains 364 calories, 31g of protein, and 15g of fat. If you have scallions, pepper, kosher salt, and a few other ingredients on hand, you can make it. This recipe from Foodista has 3 fans. Not a lot of people really liked this Chinese dish. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 94%, this dish is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-1364955\">Gluten Free Dairy Free Sugar Free Chinese Chicken Salad</a>, <a href=\"https://spoonacular.com/recipes/thousand-island-dressing-gluten-free-corn-free-dairy-free-soy-free-nut-free-gum-free-and-refined-sugar-free-512186\">Thousand Island Dressing (Gluten-Free, Corn-Free, Dairy-Free, Soy-Free, Nut-Free, Gum-Free and Refined Sugar-Free)</a>, and <a href=\"https://spoonacular.com/recipes/skinny-double-chocolate-muffins-vegan-gluten-free-dairy-free-egg-free-and-refined-sugar-free-1149614\">Skinny Double Chocolate Muffins-Vegan, Gluten Free, Dairy Free, Egg Free and Refined Sugar Free</a>.",
        "preco_unitario": 25,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Radish & Snap Pea Quinoa Salad",
        "descricao": "Radish & Snap Pea Quinoa Salad is a gluten free and lacto ovo vegetarian hor d'oeuvre. For $1.68 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. One serving contains 262 calories, 11g of protein, and 7g of fat. This recipe serves 4. If you have juice of lemon, flat leaf parsley, snap peas, and a few other ingredients on hand, you can make it. 2 people have tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/sugar-snap-pea-and-radish-salad-18285\">Sugar Snap Pean And Radish Salad</a>, <a href=\"https://spoonacular.com/recipes/radish-and-sugar-snap-pea-salad-18551\">Radish And Sugar Snap Pea Salad</a>, and <a href=\"https://spoonacular.com/recipes/snap-pea-salad-with-radish-lime-36681\">Snap Pea Salad With Radish & Lime</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony \"Caviar\" Dressing",
        "descricao": "Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony \"Caviar\" Dressing might be a good recipe to expand your main course recipe box. One portion of this dish contains approximately 27g of protein, 29g of fat, and a total of 440 calories. This recipe serves 4 and costs $4.28 per serving. A mixture of white wine, baby beets, watercress, and a handful of other ingredients are all it takes to make this recipe so delicious. Not a lot of people made this recipe, and 4 would say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. With a spoonacular score of 95%, this dish is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/wild-rice-baby-beetroot-beef-kofta-salad-ft-love-beets-baby-beetroot-494268\">Wild Rice, Baby Beetroot & Beef Kofta Salad (ft. Love Beets Baby Beetroot)</a>, <a href=\"https://spoonacular.com/recipes/poached-salmon-and-watercress-salad-with-dill-yogurt-dressing-14170\">Poached Salmon and Watercress Salad with Dill-Yogurt Dressing</a>, and <a href=\"https://spoonacular.com/recipes/beetroot-red-apple-and-watercress-salad-9732\">Beetroot, Red Apple And Watercress Salad</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa, Tomato, Green Onion Side Salad",
        "descricao": "Quinoa, Tomato, Green Onion Side Salad might be a good recipe to expand your hor d'oeuvre recipe box. For $1.39 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. One portion of this dish contains about 11g of protein, 18g of fat, and a total of 396 calories. This recipe serves 2. This recipe from Foodista has 2 fans. Head to the store and pick up green onions, water, salt and pepper, and a few other things to make it today. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/cucumber-tomato-and-green-onion-salad-376668\">Cucumber Tomato and Green Onion Salad</a>, <a href=\"https://spoonacular.com/recipes/feta-and-green-onion-couscous-cakes-over-tomato-olive-salad-133311\">Fetan and Green Onion Couscous Cakes over Tomato-Olive Salad</a>, and <a href=\"https://spoonacular.com/recipes/onion-tomato-gotsu-or-thakkali-kosthu-side-dish-for-idli-dosa-564811\">Onion Tomato Gotsu or Thakkali Kosthu | Side Dish For Idli Dosa</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Winter Fattoush Salad",
        "descricao": "If you want to add more middl eastern recipes to your repertoire, Winter Fattoush Salad might be a recipe you should try. This main course has 345 calories, 17g of protein, and 9g of fat per serving. This lacto ovo vegetarian recipe serves 6 and costs $1.23 per serving. 1 person found this recipe to be scrumptious and satisfying. This recipe from Foodista requires ground sumac, feta cheese, lacinato kale leaves, and garlic. It will be a hit at your Winter event. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 93%, this dish is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/winter-fattoush-salad-627160\">Winter Fattoush Salad</a>, <a href=\"https://spoonacular.com/recipes/fattoush-salad-527955\">Fattoush Salad</a>, and <a href=\"https://spoonacular.com/recipes/fattoush-salad-670110\">Fattoush Salad</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash Tofu Salad With Toasted Hazelnuts",
        "descricao": "Butternut Squash Tofu Salad With Toasted Hazelnuts takes roughly 45 minutes from beginning to end. For $1.55 per serving, you get a main course that serves 4. One serving contains 261 calories, 13g of protein, and 11g of fat. 1 person has made this recipe and would make it again. Head to the store and pick up onions, lemon juice, bell pepper, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Taking all factors into account, this recipe earns a spoonacular score of 93%, which is amazing. <a href=\"https://spoonacular.com/recipes/butternut-squash-noodles-with-toasted-hazelnuts-and-crispy-sage-618126\">Butternut Squash Noodles with Toasted Hazelnuts and Crispy Sage</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-salad-with-hazelnuts-9085\">Butternut Squash Salad with Hazelnuts</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-salad-with-pomegranates-and-toasted-pumpkin-seeds-24823\">Butternut Squash Salad With Pomegranates And Toasted Pumpkin Seeds</a> are very similar to this recipe.",
        "preco_unitario": 20,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "North by Northwest Couscous Salad",
        "descricao": "The recipe North by Northwest Couscous Salad can be made in roughly 30 minutes. One portion of this dish contains about 17g of protein, 32g of fat, and a total of 636 calories. For $2.29 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. This recipe serves 4. A mixture of lemon zest, kosher salt, garbanzo beans, and a handful of other ingredients are all it takes to make this recipe so yummy. 1 person found this recipe to be flavorful and satisfying. It works well as a reasonably priced main course. It is brought to you by Foodista. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is awesome. Similar recipes are <a href=\"https://spoonacular.com/recipes/north-african-couscous-and-pomegranate-salad-22565\">North African Couscous And Pomegranate Salad</a>, <a href=\"https://spoonacular.com/recipes/north-african-chicken-and-couscous-232861\">North African Chicken and Couscous</a>, and <a href=\"https://spoonacular.com/recipes/traditional-north-african-couscous-the-real-way-98130\">Traditional North African Couscous (The Real Way!)</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Farro salad with parsley pesto",
        "descricao": "Farro salad with parsley pesto might be just the main course you are searching for. One portion of this dish contains around 12g of protein, 20g of fat, and a total of 412 calories. This recipe serves 2. For $2.8 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe from Foodista requires balsamic vinegar, pepper, sunflower seeds, and flat leaf parsley. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is spectacular. <a href=\"https://spoonacular.com/recipes/parsley-farro-salad-708040\">Parsley-Farro Salad</a>, <a href=\"https://spoonacular.com/recipes/pecan-pesto-farro-salad-1138364\">Pecan Pesto Farro Salad</a>, and <a href=\"https://spoonacular.com/recipes/farro-fresh-mozzarella-salad-with-arugula-walnut-pesto-8786\">Farro & Fresh Mozzarella Salad With Arugula Walnut Pesto</a> are very similar to this recipe.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Tabouli Salad",
        "descricao": "Quinoa Tabouli Salad is a hor d'oeuvre that serves 4. One serving contains 244 calories, 8g of protein, and 8g of fat. For $3.18 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. If you have garlic, kosher salt, flat-leaf parsley, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 1 hour and 15 minutes. Overall, this recipe earns a tremendous spoonacular score of 88%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/quinoa-and-vegetable-tabouli-salad-103076\">Quinoan and Vegetable Tabouli Salad</a>, <a href=\"https://spoonacular.com/recipes/quinoa-tabouli-586810\">Quinoa Tabouli</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-tabouli-22428\">Quinoa Tabouli</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 75,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Vegetable Salad",
        "descricao": "Need a gluten free and dairy free main course? Quinoa Vegetable Salad could be an outstanding recipe to try. For $3.42 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 15g of protein, 19g of fat, and a total of 494 calories. This recipe serves 2. 1 person has tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 30 minutes. Head to the store and pick up peppers, carrot, olive tapenade, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is awesome. Similar recipes are <a href=\"https://spoonacular.com/recipes/quinoa-vegetable-salad-1506545\">Quinoa Vegetable Salad</a>, <a href=\"https://spoonacular.com/recipes/quinoa-vegetable-salad-1301049\">Quinoa Vegetable Salad</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-vegetable-salad-401286\">Quinoa Vegetable Salad</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Egyptain Cauliflower Side Salad",
        "descricao": "Egyptain Cauliflower Side Salad could be just the gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe you've been looking for. This recipe makes 2 servings with 183 calories, 4g of protein, and 15g of fat each. For $1.51 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. This recipe is liked by 3 foodies and cooks. It works well as a hor d'oeuvre. A mixture of cauliflower, cumin, parsley, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 25 minutes. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/roasted-broccoli-and-cauliflower-simple-for-the-side-581739\">Roasted Broccoli and Cauliflower: Simple for the Side</a>, <a href=\"https://spoonacular.com/recipes/sauteed-beef-with-broccoli-and-shiitake-mushrooms-and-a-side-of-my-new-fave-cauliflower-rice-551311\">Sauteed Beef with Broccoli and Shiitake Mushrooms (and a side of my new fave: cauliflower rice)</a>, and <a href=\"https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696\">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>.",
        "preco_unitario": 51,
        "tempo_preparo": 25,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mung Bean Sprout and Quinoa Salad",
        "descricao": "Mung Bean Sprout and Quinoa Salad is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 6 servings. For $1.49 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. One portion of this dish contains about 17g of protein, 11g of fat, and a total of 356 calories. 1 person found this recipe to be yummy and satisfying. Head to the store and pick up of oregano, cilantro, tomatoes, and a few other things to make it today. It works well as an affordable main course. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns an awesome spoonacular score of 92%. Try <a href=\"https://spoonacular.com/recipes/mung-bean-sprout-salad-34410\">Mung Bean Sprout Salad</a>, <a href=\"https://spoonacular.com/recipes/korean-mung-bean-sprout-salad-565117\">Korean Mung Bean Sprout Salad</a>, and <a href=\"https://spoonacular.com/recipes/mung-beans-beets-and-quinoa-salad-551232\">Mung beans, Beets and Quinoa Salad</a> for similar recipes.",
        "preco_unitario": 53,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Red Quinoa and Roasted Cauliflower Salad",
        "descricao": "Red Quinoan and Roasted Cauliflower Salad could be just the gluten free and lacto ovo vegetarian recipe you've been looking for. This main course has 444 calories, 13g of protein, and 26g of fat per serving. For $2.26 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. This recipe serves 4. Head to the store and pick up apricots, parsley, walnuts, and a few other things to make it today. 2 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-and-quinoa-salad-1065461\">Roasted Cauliflower and Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/curry-roasted-cauliflower-quinoa-salad-616580\">CURRY ROASTED CAULIFLOWER & QUINOA SALAD</a>, and <a href=\"https://spoonacular.com/recipes/curry-roasted-cauliflower-quinoa-salad-1190947\">CURRY ROASTED CAULIFLOWER & QUINOA SALAD</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cracked Wheat Salad with Dates & Tahini Yogurt",
        "descricao": "If you have roughly 45 minutes to spend in the kitchen, Cracked Wheat Salad with Dates & Tahini Yogurt might be an excellent lacto ovo vegetarian recipe to try. One serving contains 890 calories, 32g of protein, and 48g of fat. For $3.21 per serving, this recipe covers 40% of your daily requirements of vitamins and minerals. This recipe serves 2. 1 person were glad they tried this recipe. It works well as a main course. This recipe from Foodista requires lentils, tahini, dates, and zucchini. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/sea-scallops-with-cracked-wheat-salad-roasted-red-pepper-tahini-vinaigrette-and-grilled-lemons-346792\">Sea Scallops with Cracked Wheat Salad, Roasted Red Pepper Tahini Vinaigrette and Grilled Lemons</a>, <a href=\"https://spoonacular.com/recipes/lamb-beet-and-cracked-wheat-meatballs-with-cucumber-yogurt-sauce-91819\">Lamb, Beet, and Cracked Wheat Meatballs with Cucumber Yogurt Sauce</a>, and <a href=\"https://spoonacular.com/recipes/crispy-salmon-with-tahini-yogurt-sauce-freekeh-zucchini-and-dates-1002911\">Crispy Salmon with Tahini Yogurt Sauce, Freekeh, Zucchini and Dates</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Okra Tomato Salad",
        "descricao": "Okra Tomato Salad might be a good recipe to expand your hor d'oeuvre recipe box. For $1.66 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 101 calories, 4g of protein, and 1g of fat per serving. This recipe serves 1. This recipe from Foodista requires two-inch long okra pods, tomato, balsamic vinegar, and basil. 1 person found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 92%, this dish is super. <a href=\"https://spoonacular.com/recipes/okra-tomato-salad-1233397\">Okra Tomato Salad</a>, <a href=\"https://spoonacular.com/recipes/grilled-sausage-okra-and-tomato-salad-175730\">Grilled Sausage Okran and Tomato Salad</a>, and <a href=\"https://spoonacular.com/recipes/fried-green-tomato-salad-with-roasted-corn-okra-and-tomatoes-34696\">Fried Green Tomato Salad With Roasted Corn, Okran And Tomatoes</a> are very similar to this recipe.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Salad With Avocado, Asparagus and Sun Dried Tomatoes",
        "descricao": "Quinoa Salad With Avocado, Asparagus and Sun Dried Tomatoes takes around 45 minutes from beginning to end. For $4.3 per serving, you get a main course that serves 2. Watching your figure? This gluten free and dairy free recipe has 718 calories, 20g of protein, and 35g of fat per serving. Head to the store and pick up herb seasoning, avocado, honey, and a few other things to make it today. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is excellent. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-avocado-asparagus-and-sun-dried-tomatoes-1636203\">Quinoa Salad With Avocado, Asparagus and Sun Dried Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/pasta-salad-with-asparagus-corn-and-sun-dried-tomatoes-749165\">Pasta Salad With Asparagus, Corn and Sun-Dried Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/lemon-quinoa-salad-with-pistachios-sun-dried-tomatoes-1238829\">Lemon Quinoa Salad with Pistachios & Sun-Dried Tomatoes</a>.",
        "preco_unitario": 29,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Summer Kale, Orange & Pomegranate Salad with Moscato Dressing",
        "descricao": "Need a gluten free, dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre? Summer Kale, Orange & Pomegranate Salad with Moscato Dressing could be a super recipe to try. This recipe serves 4 and costs $1.52 per serving. One serving contains 165 calories, 4g of protein, and 10g of fat. 1 person were impressed by this recipe. The Fourth Of July will be even more special with this recipe. This recipe from Foodista requires bell pepper, cabbage, extra virgin olive oil, and sunflower seeds. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/persimmon-kale-salad-with-pomegranate-dressing-845521\">Persimmon Kale Salad with Pomegranate Dressing</a>, <a href=\"https://spoonacular.com/recipes/kale-pomegranate-mandarin-orange-salad-1061343\">Kale, Pomegranate & Mandarin Orange Salad</a>, and <a href=\"https://spoonacular.com/recipes/kale-salad-with-pomegranate-orange-and-pine-nuts-493516\">Kale Salad with Pomegranate, Orange and Pine Nuts</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "fennel, Peppers, Lettuce Salad",
        "descricao": "If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your repertoire, fennel, Peppers, Lettuce Salad might be a recipe you should try. This recipe makes 1 servings with 566 calories, 24g of protein, and 24g of fat each. For $9.0 per serving, this recipe covers 60% of your daily requirements of vitamins and minerals. Head to the store and pick up olive oil, rosemary, pickled cucumber, and a few other things to make it today. This recipe from Foodista has 1 fans. It works well as an expensive main course. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 92%, this dish is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lettuce-and-fennel-salad-with-citrus-vinaigrette-16745\">Lettuce and Fennel Salad with Citrus Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/lettuce-apple-and-cucumber-salad-with-fennel-and-walnuts-649967\">Lettuce, Apple, and Cucumber Salad with Fennel and Walnuts</a>, and <a href=\"https://spoonacular.com/recipes/beet-salad-with-peppers-and-lettuce-634792\">Beet Salad With Peppers and Lettuce</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roast Cauliflower Salad with Green Beans and Cherry Tomatoes",
        "descricao": "Need a gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d'oeuvre? Roast Cauliflower Salad with Green Beans and Cherry Tomatoes could be an excellent recipe to try. One portion of this dish contains roughly 6g of protein, 11g of fat, and a total of 189 calories. This recipe serves 6 and costs $2.07 per serving. 1 person has made this recipe and would make it again. This recipe from Foodista requires almonds, bell pepper, cherry tomatoes, and salt. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns an excellent spoonacular score of 90%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/farro-salad-with-green-beans-corn-and-cherry-tomatoes-911348\">Farro Salad with Green Beans, Corn, and Cherry Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/green-beans-with-cherry-tomatoes-445026\">Green Beans with Cherry Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/sauteed-green-beans-cherry-tomatoes-33024\">Sauteed Green Beans & Cherry Tomatoes</a>.",
        "preco_unitario": 30,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Tomato, Cucumber & Onion Salad with Feta Cheese: Real Convenience Food",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Tomato, Cucumber & Onion Salad with Feta Cheese: Real Convenience Food a try. For $5.26 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 252 calories, 8g of protein, and 16g of fat per serving. This recipe serves 1. This recipe from fullbellysisters.blogspot.com has 265 fans. If you have balsamic vinegar, onion, feta cheese, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 91%, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Salad with Barberries & Nuts",
        "descricao": "Quinoa Salad with Barberries & Nuts is a gluten free, dairy free, lacto ovo vegetarian, and vegan main course. This recipe makes 4 servings with 459 calories, 14g of protein, and 19g of fat each. For $2.09 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 9 would say it hit the spot. Head to the store and pick up slivered almonds, olive oil, slivered pistachios, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 30 minutes. It is brought to you by Foodista. With a spoonacular score of 92%, this dish is tremendous. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-barberries-nuts-1394637\">Quinoa Salad with Barberries & Nuts</a>, <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-barberries-nuts-1395243\">Quinoa Salad with Barberries & Nuts</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-barberries-nuts-1376471\">Quinoa Salad with Barberries & Nuts</a>.",
        "preco_unitario": 55,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Watermelon, Zucchini, Carrot Salad",
        "descricao": "Watermelon, Zucchini, Carrot Salad might be a good recipe to expand your hor d'oeuvre recipe box. This recipe makes 3 servings with 70 calories, 2g of protein, and 1g of fat each. For 45 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. This recipe from Foodista has 1 fans. A mixture of carrots, zucchini, cabbage, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes about 45 minutes. It is perfect for Summer. With a spoonacular score of 90%, this dish is excellent. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/zucchini-and-carrot-salad-485293\">Zucchini and Carrot Salad</a>, <a href=\"https://spoonacular.com/recipes/shaved-carrot-and-zucchini-salad-278764\">Shaved Carrot and Zucchini Salad</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-zucchini-linguini-salad-602568\">Carrot and Zucchini Linguini Salad</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Colorful Red Quinoa Not So Tabbouleh Salad",
        "descricao": "Colorful Red Quinoa Not So Tabbouleh Salad requires around 45 minutes from start to finish. For $1.4 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 283 calories, 8g of protein, and 14g of fat per serving. This recipe serves 4. 2 people have tried and liked this recipe. This recipe is typical of middl eastern cuisine. This recipe from Foodista requires red wine vinegar, water, salt, and cayenne pepper. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. With a spoonacular score of 87%, this dish is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/colorful-red-quinoa-not-so-tabbouleh-salad-1212333\">Colorful Red Quinoa Not So Tabbouleh Salad</a>, <a href=\"https://spoonacular.com/recipes/colorful-quinoa-salad-272775\">Colorful Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/colorful-quinoa-salad-1273033\">Colorful Quinoa Salad</a>.",
        "preco_unitario": 62,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spring Salad with Walnut Vinaigrette",
        "descricao": "Spring Salad with Walnut Vinaigrette is a gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe with 2 servings. One serving contains 604 calories, 9g of protein, and 47g of fat. For $3.67 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. Not a lot of people really liked this hor d'oeuvre. It will be a hit at your Spring event. From preparation to the plate, this recipe takes roughly 45 minutes. A mixture of spring greens, mandarin, strawberries, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by Foodista. With a spoonacular score of 89%, this dish is amazing. <a href=\"https://spoonacular.com/recipes/spring-salad-with-walnut-vinaigrette-814235\">Spring Salad with Walnut Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/spring-cobb-salad-with-raspberry-basil-vinaigrette-mason-jar-salad-1345035\">Spring Cobb Salad with Raspberry Basil Vinaigrette + Mason Jar Salad</a>, and <a href=\"https://spoonacular.com/recipes/spring-cobb-salad-with-raspberry-basil-vinaigrette-mason-jar-salad-1244579\">Spring Cobb Salad with Raspberry Basil Vinaigrette + Mason Jar Salad</a> are very similar to this recipe.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Avocado and Orange Salad With Orange-Ginger Dressing",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Avocado and Orange Salad With Orange-Ginger Dressing a try. For $2.22 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. One serving contains 501 calories, 6g of protein, and 40g of fat. This recipe serves 4. This recipe from Foodista requires agave syrup, oranges, green onions, and ginger paste. 4 people were impressed by this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Overall, this recipe earns a tremendous spoonacular score of 88%. Similar recipes include <a href=\"https://spoonacular.com/recipes/avocado-and-orange-salad-with-orange-ginger-dressing-1295061\">Avocado and Orange Salad With Orange-Ginger Dressing</a>, <a href=\"https://spoonacular.com/recipes/brussel-sprouts-salad-with-orange-ginger-dressing-496200\">Brussel Sprouts Salad with Orange Ginger Dressing</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-mango-salad-with-ginger-orange-dressing-21105\">Chicken and Mango Salad with Ginger-Orange Dressing</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Steak Salad with Chimichurri Sauce",
        "descricao": "The recipe Steak Salad with Chimichurri Sauce could satisfy your Latin American craving in around 30 minutes. This main course has 475 calories, 29g of protein, and 34g of fat per serving. This recipe serves 4. For $5.38 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. Head to the store and pick up pepper, extra virgin olive oil, spring mix, and a few other things to make it today. valentin day will be even more special with this recipe. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. With a spoonacular score of 90%, this dish is awesome. Try <a href=\"https://spoonacular.com/recipes/steak-with-chimichurri-sauce-carne-con-chimichurri-226192\">Steak with Chimichurri Sauce (Carne con Chimichurri)</a>, <a href=\"https://spoonacular.com/recipes/steak-with-chimichurri-sauce-carne-con-chimichurri-1294491\">Steak with Chimichurri Sauce (Carne con Chimichurri)</a>, and <a href=\"https://spoonacular.com/recipes/bistec-argentino-al-chimichurri-steak-with-chimichurri-sauce-144447\">Bistec Argentino al Chimichurri (Steak with Chimichurri Sauce)</a> for similar recipes.",
        "preco_unitario": 54,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Red Quinoa, Kale, Blood Orange and Pom Salad With Meyer Lemon Vinaigrette",
        "descricao": "Red Quinoa, Kale, Blood Orange and Pom Salad With Meyer Lemon Vinaigrette might be just the main course you are searching for. One portion of this dish contains approximately 13g of protein, 22g of fat, and a total of 464 calories. This recipe serves 4 and costs $1.39 per serving. If you have olive oil, juice of lemon, olive oil, and a few other ingredients on hand, you can make it. 1 person found this recipe to be flavorful and satisfying. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free, dairy free, and lacto ovo vegetarian diet. With a spoonacular score of 90%, this dish is awesome. Similar recipes are <a href=\"https://spoonacular.com/recipes/kale-salad-with-blood-orange-and-meyer-lemon-15255\">Kale Salad With Blood Orange And Meyer Lemon</a>, <a href=\"https://spoonacular.com/recipes/chopped-kale-salad-with-meyer-lemon-vinaigrette-with-an-easy-meyer-lemon-substitute-628490\">Chopped Kale Salad with Meyer Lemon Vinaigrette (with an easy Meyer lemon substitute)</a>, and <a href=\"https://spoonacular.com/recipes/chopped-kale-salad-with-meyer-lemon-vinaigrette-with-an-easy-meyer-lemon-substitute-1340333\">Chopped Kale Salad with Meyer Lemon Vinaigrette (with an easy Meyer lemon substitute)</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fruit and Spinach Salad with \"Xocai Activ\" Vinaigrette",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Fruit and Spinach Salad with \"Xocai Activ\" Vinaigrette a try. This recipe serves 8 and costs 99 cents per serving. One portion of this dish contains around 3g of protein, 8g of fat, and a total of 109 calories. From preparation to the plate, this recipe takes roughly 45 minutes. 1 person has made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. It is brought to you by Foodista. If you have balsamic vinegar, pepper ), green onions, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 88%. This score is amazing. Similar recipes are <a href=\"https://spoonacular.com/recipes/fruit-and-spinach-salad-with-strawberry-vinaigrette-1239343\">Fruit and Spinach Salad with Strawberry Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/fruit-and-spinach-salad-with-strawberry-vinaigrette-583510\">Fruit and Spinach Salad with Strawberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/tropical-spinach-salad-with-warm-fruit-vinaigrette-19323\">Tropical Spinach Salad with Warm Fruit Vinaigrette</a>.",
        "preco_unitario": 24,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Warm Quinoa Spinach and Shiitake Salad",
        "descricao": "Warm Quinoa Spinach and Shiitake Salad might be just the hor d'oeuvre you are searching for. For $3.11 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. This recipe serves 6. One serving contains 226 calories, 6g of protein, and 16g of fat. 2 people were glad they tried this recipe. It is a good option if you're following a gluten free, lacto ovo vegetarian, and primal diet. From preparation to the plate, this recipe takes approximately 45 minutes. A mixture of salt, pepper, chicken broth, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular score of 92%, this dish is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/warm-quinoa-spinach-and-shiitake-salad-1403523\">Warm Quinoa Spinach and Shiitake Salad</a>, <a href=\"https://spoonacular.com/recipes/serious-salads-warm-quinoa-pilaf-salad-with-shiitake-mushrooms-carrots-pecans-202641\">Serious Salads: Warm Quinoa Pilaf Salad with Shiitake Mushrooms, Carrots & Pecans</a>, and <a href=\"https://spoonacular.com/recipes/warm-lentil-salad-with-spinach-quinoa-684160\">Warm Lentil Salad with Spinach & Quinoa</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lentil Salad with Rye Berries and Sun-Dried Tomatoes",
        "descricao": "Need a vegan side dish? Lentil Salad with Rye Berries and Sun-Dried Tomatoes could be a great recipe to try. This recipe serves 4. For $2.2 per serving, this recipe covers 32% of your daily requirements of vitamins and minerals. One serving contains 498 calories, 24g of protein, and 14g of fat. 1 person has made this recipe and would make it again. Head to the store and pick up sun-dried tomatoes, mustard powder, vegetable stock, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by foodandspice.blogspot.com. All things considered, we decided this recipe deserves a spoonacular score of 89%. This score is tremendous. Similar recipes include <a href=\"https://spoonacular.com/recipes/spinach-quiche-with-sun-dried-tomatoes-923350\">Spinach Quiche with Sun-Dried Tomatoes</a>, <a href=\"https://spoonacular.com/recipes/lentil-salad-with-sun-dried-tomatoes-and-feta-12766\">Lentil Salad With Sun-dried Tomatoes And Feta</a>, and <a href=\"https://spoonacular.com/recipes/artichoke-and-sun-dried-tomato-pasta-926592\">Artichoke and Sun Dried Tomato Pasta</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Colorful Wild Rice Salad",
        "descricao": "Colorful Wild Rice Salad takes around 30 minutes from beginning to end. One serving contains 385 calories, 13g of protein, and 11g of fat. For $1.64 per serving, you get a main course that serves 3. This recipe from Foodista has 1 fans. If you have rice, onion, roasted cashew nuts, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Overall, this recipe earns an outstanding spoonacular score of 88%. Similar recipes include <a href=\"https://spoonacular.com/recipes/chicken-and-wild-rice-salad-a-hearty-savory-dinner-salad-513990\">Chicken and Wild Rice Salad: A Hearty, Savory Dinner Salad</a>, <a href=\"https://spoonacular.com/recipes/chicken-and-wild-rice-salad-a-hearty-savory-dinner-salad-1253011\">Chicken and Wild Rice Salad: A Hearty, Savory Dinner Salad</a>, and <a href=\"https://spoonacular.com/recipes/wild-rice-salad-246382\">Wild Rice Salad</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Grilled Romaine Salad with Bacon and Blue Cheese",
        "descricao": "If you want to add more gluten free and primal recipes to your recipe box, Grilled Romaine Salad with Bacon and Blue Cheese might be a recipe you should try. For $5.6 per serving, this recipe covers 50% of your daily requirements of vitamins and minerals. This main course has 948 calories, 34g of protein, and 72g of fat per serving. This recipe serves 2. This recipe from Foodista has 3 fans. From preparation to the plate, this recipe takes roughly 45 minutes. It is perfect for The Fourth Of July. A mixture of onion, kosher salt, cheese, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe deserves a spoonacular score of 88%. This score is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/romaine-salad-with-blue-cheese-bacon-and-radishes-16764\">Romaine Salad With Blue Cheese, Bacon And Radishes</a>, <a href=\"https://spoonacular.com/recipes/grilled-romaine-and-blue-cheese-salad-486294\">Grilled Romaine and Blue Cheese Salad</a>, and <a href=\"https://spoonacular.com/recipes/grilled-romaine-salad-with-blue-cheese-325485\">Grilled Romaine Salad with Blue Cheese</a>.",
        "preco_unitario": 68,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chinese Chicken Salad With Chipotle Dressing",
        "descricao": "The recipe Chinese Chicken Salad With Chipotle Dressing is ready in roughly 45 minutes and is definitely a tremendous gluten free and dairy free option for lovers of Chinese food. For $3.9 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. This main course has 780 calories, 51g of protein, and 46g of fat per serving. This recipe serves 4. 7 people were impressed by this recipe. Head to the store and pick up romaine lettuce, carrots, mint leaves, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/chinese-chicken-salad-with-sesame-dressing-1226459\">Chinese Chicken Salad with Sesame Dressing</a>, <a href=\"https://spoonacular.com/recipes/chinese-chicken-salad-with-sesame-dressing-510753\">Chinese Chicken Salad with Sesame Dressing</a>, and <a href=\"https://spoonacular.com/recipes/doms-chinese-chicken-salad-dressing-143924\">Dom's Chinese Chicken Salad Dressing</a>.",
        "preco_unitario": 64,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fall Farro Salad with Pomegranate, Walnut & Truffles",
        "descricao": "The recipe Fall Farro Salad with Pomegranate, Walnut & Truffles can be made in roughly 1 hour and 15 minutes. For $3.3 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. This main course has 722 calories, 25g of protein, and 47g of fat per serving. This recipe serves 4. It can be enjoyed any time, but it is especially good for Autumn. 3 people were impressed by this recipe. It is brought to you by Foodista. If you have pomegranate, radicchio thinly, truffle mushroom, and a few other ingredients on hand, you can make it. Overall, this recipe earns a tremendous spoonacular score of 86%. Similar recipes are <a href=\"https://spoonacular.com/recipes/fall-farro-salad-30260\">Fall Farro Salad</a>, <a href=\"https://spoonacular.com/recipes/fall-farro-salad-with-butternut-squash-1314479\">Fall Farro Salad with Butternut Squash</a>, and <a href=\"https://spoonacular.com/recipes/fall-farro-salad-with-butternut-squash-823903\">Fall Farro Salad with Butternut Squash</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 75,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Warm Duck Salad With Roasted Beetroot",
        "descricao": "The recipe Warm Duck Salad With Roasted Beetroot can be made in around 45 minutes. This gluten free and primal recipe serves 4 and costs $5.81 per serving. This main course has 520 calories, 40g of protein, and 26g of fat per serving. Only a few people made this recipe, and 5 would say it hit the spot. Head to the store and pick up duck breast meat - skin left on, balsamic vinegar, arugula greens, and a few other things to make it today. It is brought to you by Foodista. Overall, this recipe earns a super spoonacular score of 88%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/warm-duck-salad-with-roasted-beetroot-1213825\">Warm Duck Salad With Roasted Beetroot</a>, <a href=\"https://spoonacular.com/recipes/warm-duck-breast-salad-with-spinach-kalamata-olives-roasted-p-74876\">Warm Duck Breast Salad With Spinach, Kalamatan Olives, Roasted P</a>, and <a href=\"https://spoonacular.com/recipes/shukhi-warm-beetroot-mushroom-salad-1086867\">Shukhi – warm beetroot & mushroom salad</a>.",
        "preco_unitario": 57,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Watermelon, Feta And Mint Salad",
        "descricao": "Watermelon, Fetan And Mint Salad could be just the gluten free, lacto ovo vegetarian, and primal recipe you've been looking for. This recipe serves 6 and costs $1.92 per serving. This hor d'oeuvre has 250 calories, 8g of protein, and 18g of fat per serving. Not a lot of people made this recipe, and 8 would say it hit the spot. If you have olive oil, cucumber, curly leaf lettuce, and a few other ingredients on hand, you can make it. Summer will be even more special with this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 86%, this dish is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/watermelon-salad-with-feta-and-mint-27687\">Watermelon Salad with Fetan and Mint</a>, <a href=\"https://spoonacular.com/recipes/watermelon-feta-and-mint-salad-665012\">Watermelon Fetan and Mint Salad</a>, and <a href=\"https://spoonacular.com/recipes/watermelon-feta-mint-salad-893735\">Watermelon Feta Mint Salad</a>.",
        "preco_unitario": 51,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fresh Green Bean and Tomato Salad with Creamy Garlic Dressing",
        "descricao": "If you have about 45 minutes to spend in the kitchen, Fresh Green Bean and Tomato Salad with Creamy Garlic Dressing might be a spectacular gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe to try. This recipe makes 4 servings with 196 calories, 6g of protein, and 12g of fat each. For $2.0 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. 8 people were impressed by this recipe. A mixture of red wine vinegar, salt, spicy brown mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It works well as a budget friendly hor d'oeuvre. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 83%, which is excellent. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/fresh-green-bean-salad-with-balsamic-dressing-568578\">Fresh Green Bean Salad with Balsamic Dressing</a>, <a href=\"https://spoonacular.com/recipes/fresh-green-bean-salad-with-asian-dressing-474770\">Fresh Green Bean Salad with Asian Dressing</a>, and <a href=\"https://spoonacular.com/recipes/fresh-green-bean-and-tomato-salad-98334\">Fresh Green Bean and Tomato Salad</a>.",
        "preco_unitario": 31,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spicy Lump Crab and Avocado Salad",
        "descricao": "Spicy Lump Crab and Avocado Salad might be just the main course you are searching for. This recipe makes 4 servings with 503 calories, 25g of protein, and 38g of fat each. For $6.05 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. This recipe from Foodista requires scallions, lump crabmeat, parsley, and worcestershire sauce. 3 people were glad they tried this recipe. From preparation to the plate, this recipe takes about 30 minutes. It is a good option if you're following a gluten free, dairy free, whole 30, and pescatarian diet. Overall, this recipe earns a great spoonacular score of 86%. Similar recipes include <a href=\"https://spoonacular.com/recipes/spicy-lump-crab-and-avocado-salad-1213627\">Spicy Lump Crab and Avocado Salad</a>, <a href=\"https://spoonacular.com/recipes/avocado-and-lump-crab-salad-992752\">Avocado and Lump Crab Salad</a>, and <a href=\"https://spoonacular.com/recipes/spicy-garlic-lump-crab-butternut-squash-pasta-with-feta-parsley-564036\">Spicy Garlic Lump Crab Butternut Squash Pasta with Feta & Parsley</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spring Salad with Radishes and Beets",
        "descricao": "Spring Salad with Radishes and Beets might be just the hor d'oeuvre you are searching for. For $3.79 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 368 calories, 8g of protein, and 28g of fat per serving. This recipe serves 1. 1 person has made this recipe and would make it again. It will be a hit at your Spring event. It is brought to you by Foodista. If you have baby spinach, roasted golden beets, breakfast radishes, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 82%, which is excellent. Try <a href=\"https://spoonacular.com/recipes/spring-salad-with-radishes-and-pumpkin-seeds-14356\">Spring Salad With Radishes And Pumpkin Seeds</a>, <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-spring-radishes-and-greens-44389\">Quinoa Salad With Spring Radishes And Greens</a>, and <a href=\"https://spoonacular.com/recipes/spring-freekeh-salad-with-asparagus-peas-radishes-516264\">spring freekeh salad with asparagus, peas + radishes</a> for similar recipes.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quinoa Tabbouleh Salad",
        "descricao": "Quinoa Tabbouleh Salad requires about 45 minutes from start to finish. For 52 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 136 calories, 4g of protein, and 7g of fat per serving. This recipe serves 8. Head to the store and pick up tomato, freshly cracked pepper, mint, and a few other things to make it today. 4 people have made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is typical of middl eastern cuisine. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 82%. This score is excellent. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/quinoa-tabbouleh-salad-1333155\">Quinoa Tabbouleh Salad</a>, <a href=\"https://spoonacular.com/recipes/quinoa-tabbouleh-salad-1370997\">Quinoa Tabbouleh Salad</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-tabbouleh-salad-1238883\">Quinoa Tabbouleh Salad</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Orange Cashew Salad",
        "descricao": "Orange Cashew Salad could be just the gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe you've been looking for. For 66 cents per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 143 calories, 4g of protein, and 8g of fat per serving. This recipe serves 3. It is brought to you by Foodista. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of cumin, salt & pepper, cashew nuts, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns a super spoonacular score of 88%. Similar recipes are <a href=\"https://spoonacular.com/recipes/asian-salad-with-cashew-dressing-and-cashew-butter-cookies-478025\">Asian Salad with Cashew Dressing and Cashew Butter Cookies</a>, <a href=\"https://spoonacular.com/recipes/orange-cashew-chicken-437131\">Orange Cashew Chicken</a>, and <a href=\"https://spoonacular.com/recipes/cashew-orange-biscotti-141929\">Cashew Orange Biscotti</a>.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chinese Chicken Salad With Creamy Soy Dressing",
        "descricao": "Chinese Chicken Salad With Creamy Soy Dressing takes roughly 30 minutes from beginning to end. This recipe makes 2 servings with 316 calories, 50g of protein, and 7g of fat each. For $3.25 per serving, this recipe covers 38% of your daily requirements of vitamins and minerals. If you have chicken breast, snow peas, ginger root, and a few other ingredients on hand, you can make it. This recipe is typical of Chinese cuisine. It is brought to you by Foodista. 1 person has made this recipe and would make it again. It is a good option if you're following a gluten free diet. It works well as a main course. With a spoonacular score of 85%, this dish is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/chinese-chicken-salad-with-soy-ginger-dressing-712588\">Chinese Chicken Salad with Soy Ginger Dressing</a>, <a href=\"https://spoonacular.com/recipes/hearts-of-romaine-salad-with-creamy-soy-dressing-16772\">Hearts of Romaine Salad with Creamy Soy Dressing</a>, and <a href=\"https://spoonacular.com/recipes/marinated-tofu-avocado-and-spinach-salad-with-creamy-toasted-sesame-soy-dressing-905643\">Marinated Tofu, Avocado, and Spinach Salad with Creamy Toasted Sesame & Soy Dressing</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Raw Kale Salad",
        "descricao": "Raw Kale Salad is a hor d'oeuvre that serves 6. One portion of this dish contains about 3g of protein, 10g of fat, and a total of 140 calories. For $1.09 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person has made this recipe and would make it again. A mixture of escallion, maple syrup, bell pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 78%, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/raw-kale-salad-15496\">Raw Kale Salad</a>, <a href=\"https://spoonacular.com/recipes/raw-kale-salad-1236167\">Raw Kale Salad</a>, and <a href=\"https://spoonacular.com/recipes/raw-kale-salad-473051\">Raw Kale Salad</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Massaged Kale Salad with Pine Nuts & Dried Cranberries",
        "descricao": "Massaged Kale Salad with Pine Nuts & Dried Cranberries could be just the gluten free and primal recipe you've been looking for. One serving contains 365 calories, 5g of protein, and 34g of fat. For $1.69 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This recipe serves 6. It is perfect for Christmas. This recipe from Foodista requires pepper flakes, parmesan cheese, garlic, and kosher salt. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes roughly 15 minutes. It works well as a hor d'oeuvre. With a spoonacular score of 87%, this dish is excellent. <a href=\"https://spoonacular.com/recipes/massaged-kale-salad-with-pistachios-dried-cherries-and-avocado-1266711\">Massaged Kale Salad with Pistachios, Dried Cherries, and Avocado</a>, <a href=\"https://spoonacular.com/recipes/massaged-kale-salad-with-pistachios-dried-cherries-and-avocado-556844\">Massaged Kale Salad with Pistachios, Dried Cherries, and Avocado</a>, and <a href=\"https://spoonacular.com/recipes/massaged-kale-salad-with-pistachios-dried-cherries-and-avocado-1214005\">Massaged Kale Salad with Pistachios, Dried Cherries, and Avocado</a> are very similar to this recipe.",
        "preco_unitario": 24,
        "tempo_preparo": 15,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Barley salad with vegetables",
        "descricao": "The recipe Barley salad with vegetables can be made in around 45 minutes. For $3.4 per serving, you get a hor d'oeuvre that serves 1. One serving contains 347 calories, 9g of protein, and 16g of fat. Head to the store and pick up salt, courgette, extra virgin olive oil, and a few other things to make it today. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 85%, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/boribap-rice-and-barley-with-vegetables-207197\">Boribap (Rice and Barley with Vegetables)</a>, <a href=\"https://spoonacular.com/recipes/toasted-barley-with-mixed-vegetables-170044\">Toasted Barley with Mixed Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/on-summer-salads-and-barley-with-vegetables-795102\">On summer salads and barley with vegetables</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Middle Eastern Chopped Salad",
        "descricao": "Middle Eastern Chopped Salad could be just the gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe you've been looking for. One serving contains 180 calories, 3g of protein, and 17g of fat. For $1.68 per serving, you get a hor d'oeuvre that serves 8. 5 people have made this recipe and would make it again. Head to the store and pick up chili flake, parsley, kosher salt and coarsely ground pepper, and a few other things to make it today. Not a lot of people really liked this middl eastern dish. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/middle-eastern-chopped-salad-1345095\">Middle Eastern Chopped Salad</a>, <a href=\"https://spoonacular.com/recipes/middle-eastern-chopped-salad-1313443\">Middle Eastern Chopped Salad</a>, and <a href=\"https://spoonacular.com/recipes/middle-eastern-chopped-salad-1280851\">Middle Eastern Chopped Salad</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Raspberry Arugula Side Salad",
        "descricao": "Raspberry Arugula Side Salad is a hor d'oeuvre that serves 2. For $1.83 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 3g of protein, 12g of fat, and a total of 142 calories. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes approximately 10 minutes. Head to the store and pick up olives, raspberries, cucumber, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 84%, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/mushroom-and-cheddar-fritatta-and-arugula-side-salad-299790\">Mushroom and Cheddar Fritattan and Arugula Side Salad</a>, <a href=\"https://spoonacular.com/recipes/arugula-salad-with-raspberry-vinaigrette-1152023\">Arugula Salad with Raspberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/raspberry-arugula-polenta-salad-934683\">Raspberry Arugula Polenta Salad</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 10,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Bulgur Wheat Salad with Chickpeas, Bell Peppers & Tomatoes",
        "descricao": "Need a dairy free and lacto ovo vegetarian main course? Bulgur Wheat Salad with Chickpeas, Bell Peppers & Tomatoes could be a super recipe to try. One serving contains 544 calories, 22g of protein, and 8g of fat. For $2.29 per serving, this recipe covers 38% of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by Foodista. 1 person were impressed by this recipe. Head to the store and pick up honey, salt and pepper, juice of lime, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 30 minutes. All things considered, we decided this recipe deserves a spoonacular score of 84%. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/bulgur-salad-with-chickpeas-and-red-peppers-31821\">Bulgur Salad With Chickpeas And Red Peppers</a>, <a href=\"https://spoonacular.com/recipes/lentil-salad-with-carrots-yellow-tomatoes-and-bell-peppers-33946\">Lentil Salad With Carrots, Yellow Tomatoes And Bell Peppers</a>, and <a href=\"https://spoonacular.com/recipes/bulgur-with-roasted-red-peppers-chickpeas-and-spinach-31720\">Bulgur With Roasted Red Peppers, Chickpeas, And Spinach</a>.",
        "preco_unitario": 28,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Colorful and Crunchy Pomegranate and Spinach Side Salad",
        "descricao": "Colorful and Crunchy Pomegranate and Spinach Side Salad is a gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d'oeuvre. This recipe serves 4 and costs $1.04 per serving. One portion of this dish contains about 3g of protein, 7g of fat, and a total of 116 calories. A mixture of almonds, baby spinach, pomegranate seeds, and a handful of other ingredients are all it takes to make this recipe so flavorful. 1 person has made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 15 minutes. With a spoonacular score of 83%, this dish is spectacular. <a href=\"https://spoonacular.com/recipes/colorful-crunchy-apple-and-chicken-salad-with-fresh-mint-and-basil-639956\">Colorful, Crunchy Apple and Chicken Salad With Fresh Mint and Basil</a>, <a href=\"https://spoonacular.com/recipes/crunchy-fresh-green-bean-colorful-tomato-and-feta-salad-529944\">Crunchy Fresh Green Bean, Colorful Tomato and Feta Salad</a>, and <a href=\"https://spoonacular.com/recipes/colorful-crunchy-apple-and-chicken-salad-with-fresh-mint-and-basil-530132\">Colorful, Crunchy Apple and Chicken Salad with Fresh Mint and Basil</a> are very similar to this recipe.",
        "preco_unitario": 25,
        "tempo_preparo": 15,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Asian Vegetable Salad",
        "descricao": "Asian Vegetable Salad is an Asian recipe that serves 8. One serving contains 41 calories, 2g of protein, and 1g of fat. For 96 cents per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. It works well as a hor d'oeuvre. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes about 45 minutes. Head to the store and pick up sesame seeds, carrots, pineapple chunks, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 83%. This score is great. <a href=\"https://spoonacular.com/recipes/asian-vegetable-salad-37167\">Asian Vegetable Salad</a>, <a href=\"https://spoonacular.com/recipes/asian-pork-and-vegetable-salad-179354\">Asian Pork and Vegetable Salad</a>, and <a href=\"https://spoonacular.com/recipes/asian-vegetable-pasta-salad-110930\">Asian Vegetable Pasta Salad</a> are very similar to this recipe.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mango Blackberry Side Salad",
        "descricao": "If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your recipe box, Mango Blackberry Side Salad might be a recipe you should try. This recipe serves 2 and costs $1.64 per serving. One portion of this dish contains around 2g of protein, 1g of fat, and a total of 102 calories. This recipe from Foodista requires mint, mango, lime zest, and lime juice. It works well as a hor d'oeuvre. Only a few people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes around 5 minutes. All things considered, we decided this recipe deserves a spoonacular score of 83%. This score is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/green-mango-salad-thai-side-dish-645474\">Green Mango Salad - Thai Side Dish</a>, <a href=\"https://spoonacular.com/recipes/mango-and-blackberry-salad-with-mozzarella-and-frisee-1257193\">Mango and Blackberry Salad with Mozzarellan and Frisee</a>, and <a href=\"https://spoonacular.com/recipes/mango-and-blackberry-salad-with-mozzarella-and-frisee-96778\">Mango and Blackberry Salad with Mozzarellan and Frisee</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 5,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Meyer Lemon Scented Farro and Asparagus Salad",
        "descricao": "If you have roughly 45 minutes to spend in the kitchen, Meyer Lemon Scented Farro and Asparagus Salad might be a great dairy free and lacto ovo vegetarian recipe to try. For $1.79 per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. One serving contains 222 calories, 5g of protein, and 12g of fat. This recipe serves 6. It works well as a hor d'oeuvre. This recipe from Foodista has 2 fans. If you have salt and pepper, meyer lemon vinagirette, lemon zest, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 83%. This score is amazing. <a href=\"https://spoonacular.com/recipes/meyer-lemon-grain-salad-with-asparagus-almonds-and-goat-cheese-38095\">Meyer Lemon Grain Salad With Asparagus, Almonds And Goat Cheese</a>, <a href=\"https://spoonacular.com/recipes/grilled-asparagus-lemon-thyme-farro-salad-1008538\">Grilled Asparagus Lemon-Thyme Farro Salad</a>, and <a href=\"https://spoonacular.com/recipes/chopped-kale-salad-with-meyer-lemon-vinaigrette-with-an-easy-meyer-lemon-substitute-628490\">Chopped Kale Salad with Meyer Lemon Vinaigrette (with an easy Meyer lemon substitute)</a> are very similar to this recipe.",
        "preco_unitario": 65,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "feta-stuffed mini pepper salad",
        "descricao": "Feta-stuffed mini pepper salad is a gluten free, lacto ovo vegetarian, and primal recipe with 4 servings. This hor d'oeuvre has 424 calories, 9g of protein, and 37g of fat per serving. For $3.58 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. If you have loose mint leaves, salt, kalamatan olives, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 82%, this dish is tremendous. Similar recipes include <a href=\"https://spoonacular.com/recipes/a-stuffed-picnic-tuna-and-artichoke-stuffed-tomatoes-red-pepper-feta-and-chick-pea-stuffed-zucchini-nut-and-brown-sugar-stuffed-macintosh-apples-300336\">A Stuffed Picnic: Tunan and Artichoke Stuffed Tomatoes, Red Pepper, Fetan and Chick Pea Stuffed Zucchini, Nut and Brown Sugar Stuffed Macintosh Apples</a>, <a href=\"https://spoonacular.com/recipes/feta-stuffed-mini-sweet-peppers-1774935\">Feta Stuffed Mini Sweet Peppers</a>, and <a href=\"https://spoonacular.com/recipes/mini-baked-frittata-with-feta-spinach-roasted-red-pepper-and-dill-497453\">Mini Baked Frittata with Feta, Spinach, Roasted Red Pepper, and Dill</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Great Greek Salad",
        "descricao": "Great Greek Salad might be just the Mediterranean recipe you are searching for. Watching your figure? This gluten free recipe has 290 calories, 13g of protein, and 18g of fat per serving. This recipe serves 4 and costs $3.6 per serving. A few people made this recipe, and 13 would say it hit the spot. From preparation to the plate, this recipe takes about 45 minutes. It works well as a main course. If you have greek seasoning, roma tomatoes, kalamatan olives, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 67%. This score is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/great-greek-salad-23259\">Great Greek Salad</a>, <a href=\"https://spoonacular.com/recipes/crock-pot-great-beef-great-beans-great-dip-longmeadow-farm-102577\">Crock Pot - Great Beef, Great Beans, Great Dip! Longmeadow Farm</a>, and <a href=\"https://spoonacular.com/recipes/the-great-food-blogger-cookie-swap-greek-almond-anise-cookies-555489\">The Great Food Blogger Cookie Swap: Greek Almond-Anise Cookies</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Zucchini Salad With Black Pepper Peanuts",
        "descricao": "Zucchini Salad With Black Pepper Peanuts is a hor d'oeuvre that serves 2. One portion of this dish contains about 4g of protein, 7g of fat, and a total of 157 calories. For $1.55 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. If you have olive oil, zucchini, bell pepper, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. 1 person has tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 83%, this dish is amazing. <a href=\"https://spoonacular.com/recipes/black-rice-salad-with-mango-and-peanuts-494074\">Black Rice Salad with Mango and Peanuts</a>, <a href=\"https://spoonacular.com/recipes/black-rice-salad-with-mango-and-peanuts-185397\">Black Rice Salad with Mango and Peanuts</a>, and <a href=\"https://spoonacular.com/recipes/sesame-noodle-salad-with-red-bell-pepper-and-peanuts-258613\">Sesame Noodle Salad with Red Bell Pepper and Peanuts</a> are very similar to this recipe.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Thai Green Mango Salad",
        "descricao": "Thai Green Mango Salad could be just the gluten free, dairy free, paleolithic, and primal recipe you've been looking for. This recipe makes 6 servings with 133 calories, 4g of protein, and 4g of fat each. For $1.19 per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about 45 minutes. It works well as an affordable hor d'oeuvre. It is brought to you by Foodista. A mixture of fish sauce, tomato, limes, and a handful of other ingredients are all it takes to make this recipe so delicious. 2 people have tried and liked this recipe. This recipe is typical of Asian cuisine. All things considered, we decided this recipe deserves a spoonacular score of 79%. This score is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/thai-green-mango-salad-58650\">Thai Green Mango Salad</a>, <a href=\"https://spoonacular.com/recipes/thai-green-mango-salad-1403659\">Thai Green Mango Salad</a>, and <a href=\"https://spoonacular.com/recipes/thai-green-mango-salad-565061\">Thai Green Mango Salad</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chiquetaille: Cod Fish Salad",
        "descricao": "Chiquetaille: Cod Fish Salad could be just the gluten free, dairy free, paleolithic, and primal recipe you've been looking for. This recipe serves 8. This main course has 247 calories, 37g of protein, and 7g of fat per serving. For $1.94 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. 3 people found this recipe to be yummy and satisfying. This recipe from Foodista requires carrots, vinegar, shallots, and garlic. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 79%, this dish is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/cod-fish-cakes-1296141\">Cod Fish Cakes</a>, <a href=\"https://spoonacular.com/recipes/cod-fish-fritters-2562\">Cod Fish Fritters</a>, and <a href=\"https://spoonacular.com/recipes/cod-fish-tacos-1585445\">Cod Fish Tacos</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mediterranean Orzo Salad",
        "descricao": "Mediterranean Orzo Salad is a hor d'oeuvre that serves 10. One serving contains 399 calories, 11g of protein, and 22g of fat. For $1.97 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. 4 people were impressed by this recipe. It is brought to you by Foodista. If you have red wine vinegar, evoo, lemon zest, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a solid spoonacular score of 80%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/mediterranean-orzo-salad-689937\">Mediterranean Orzo Salad</a>, <a href=\"https://spoonacular.com/recipes/mediterranean-orzo-salad-1298275\">Mediterranean Orzo Salad</a>, and <a href=\"https://spoonacular.com/recipes/mediterranean-orzo-salad-924212\">Mediterranean Orzo Salad</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Beet and Blue Cheese Salad with Citrus Vinaigrette Dressing",
        "descricao": "Beet and Blue Cheese Salad with Citrus Vinaigrette Dressing is a hor d'oeuvre that serves 8. One portion of this dish contains roughly 7g of protein, 14g of fat, and a total of 238 calories. For $2.37 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. It is a good option if you're following a gluten free, lacto ovo vegetarian, and primal diet. 1 person were glad they tried this recipe. It is brought to you by Foodista. If you have pecans, grape tomatoes, apple cider vinegar, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 47%. This score is pretty good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/spinach-and-beet-green-salad-with-blue-cheese-vinaigrette-530088\">Spinach and Beet Green Salad with Blue Cheese Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/blood-orange-beet-and-apple-salad-with-goat-cheese-and-citrus-honey-vinaigrette-718063\">Blood Orange, Beet, and Apple Salad with Goat Cheese and Citrus Honey Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/beet-and-potato-salad-with-blue-cheese-dressing-and-dill-743721\">Beet and Potato Salad with Blue Cheese Dressing and Dill</a>.",
        "preco_unitario": 29,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Italian Tomato and Mozzarella Caprese",
        "descricao": "Forget going out to eat or ordering takeout every time you crave Mediterranean food. Try making Italian Tomato and Mozzarella Caprese at home. For $1.7 per serving, you get a main course that serves 4. One portion of this dish contains around 28g of protein, 14g of fat, and a total of 269 calories. 2 people were impressed by this recipe. A mixture of fluid balsamic vinegar, kosher salt, olive oil, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. It is a good option if you're following a gluten free, lacto ovo vegetarian, and primal diet. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is great. <a href=\"https://spoonacular.com/recipes/italian-tomato-and-mozzarella-caprese-1398881\">Italian Tomato and Mozzarella Caprese</a>, <a href=\"https://spoonacular.com/recipes/tomato-mozzarella-caprese-salad-1462449\">Tomato Mozzarella Caprese Salad</a>, and <a href=\"https://spoonacular.com/recipes/caprese-quesadilla-with-tomato-mozzarella-basil-mayonnaise-584486\">Caprese Quesadilla with Tomato, Mozzarella & Basil Mayonnaise</a> are very similar to this recipe.",
        "preco_unitario": 57,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Celery, Orange and Smoked Mackerel Salad",
        "descricao": "Need a gluten free, dairy free, whole 30, and pescatarian main course? Celery, Orange and Smoked Mackerel Salad could be an excellent recipe to try. One serving contains 460 calories, 36g of protein, and 28g of fat. This recipe serves 1. For $2.75 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. A mixture of orange, quex rapeseed oil, celery, and a handful of other ingredients are all it takes to make this recipe so delicious. Overall, this recipe earns a great spoonacular score of 82%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/celery-orange-and-smoked-mackerel-salad-1578481\">Celery, Orange and Smoked Mackerel Salad</a>, <a href=\"https://spoonacular.com/recipes/smoked-mackerel-orange-couscous-salad-212790\">Smoked mackerel, orange & couscous salad</a>, and <a href=\"https://spoonacular.com/recipes/warm-new-potato-smoked-mackerel-salad-223221\">Warm new potato & smoked mackerel salad</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Healthy & Spicy Fish Taco Salad",
        "descricao": "Healthy & Spicy Fish Taco Salad could be just the gluten free, dairy free, and pescatarian recipe you've been looking for. This main course has 572 calories, 26g of protein, and 39g of fat per serving. For $4.44 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. This recipe serves 4. 1 person found this recipe to be delicious and satisfying. Only a few people really liked this Mexican dish. A mixture of pepper flakes, corn, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 87%. This score is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/healthy-spicy-fish-taco-salad-1632331\">Healthy & Spicy Fish Taco Salad</a>, <a href=\"https://spoonacular.com/recipes/spicy-fish-taco-bowls-601673\">Spicy Fish Taco Bowls</a>, and <a href=\"https://spoonacular.com/recipes/spicy-fish-taco-bowls-1231241\">Spicy Fish Taco Bowls</a>.",
        "preco_unitario": 51,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roasted red peppers and tomatoes salad",
        "descricao": "Roasted red peppers and tomatoes salad is a hor d'oeuvre that serves 2. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 152 calories, 1g of protein, and 14g of fat per serving. For 78 cents per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. 8 people have tried and liked this recipe. It is brought to you by Foodista. Head to the store and pick up capers, coarse salt, onion, and a few other things to make it today. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is great. Try <a href=\"https://spoonacular.com/recipes/chicken-breasts-stuffed-with-asiago-cheese-tomatoes-and-roasted-red-peppers-560255\">Chicken Breasts Stuffed with Asiago Cheese, Tomatoes and Roasted Red Peppers</a>, <a href=\"https://spoonacular.com/recipes/chopped-mexican-salad-with-roasted-peppers-corn-tomatoes-and-95943\">Chopped Mexican Salad With Roasted Peppers, Corn, Tomatoes, And</a>, and <a href=\"https://spoonacular.com/recipes/chickpea-salad-with-roasted-red-peppers-29910\">Chickpea Salad With Roasted Red Peppers</a> for similar recipes.",
        "preco_unitario": 58,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Tuna Avocado Salad",
        "descricao": "Need a gluten free, dairy free, whole 30, and pescatarian main course? Tunan Avocado Salad could be an excellent recipe to try. This recipe makes 2 servings with 320 calories, 18g of protein, and 21g of fat each. For $1.84 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. A mixture of avocado, pepper, tomato, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around 15 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 82%, which is excellent. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/chili-crusted-ahi-tuna-avocado-salad-with-cilantro-garlic-dressing-gf-and-fave-five-friday-healthy-tuna-1227207\">Chili Crusted Ahi Tuna & Avocado Salad with Cilantro Garlic Dressing (GF!) … and Fave Five Friday: Healthy Tuna</a>, <a href=\"https://spoonacular.com/recipes/chili-crusted-ahi-tuna-avocado-salad-with-cilantro-garlic-dressing-gf-and-fave-five-friday-healthy-tuna-1362205\">Chili Crusted Ahi Tuna & Avocado Salad with Cilantro Garlic Dressing (GF!) … and Fave Five Friday: Healthy Tuna</a>, and <a href=\"https://spoonacular.com/recipes/chili-crusted-ahi-tuna-avocado-salad-with-cilantro-garlic-dressing-gf-and-fave-five-friday-healthy-tuna-529639\">Chili Crusted Ahi Tuna & Avocado Salad with Cilantro Garlic Dressing (GF!) … and Fave Five Friday: Healthy Tuna</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 15,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Soba Noodle & Five-Spice Pork Salad",
        "descricao": "Need a dairy free main course? Soba Noodle & Five-Spice Pork Salad could be an awesome recipe to try. This recipe serves 2. One portion of this dish contains approximately 43g of protein, 48g of fat, and a total of 915 calories. For $4.11 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. If you have g pork tenderloin, soya sauce, sugar, and a few other ingredients on hand, you can make it. 1 person were glad they tried this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 77%, which is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/soba-noodle-salad-with-pork-snap-peas-and-radishes-708066\">Soba Noodle Salad with Pork, Snap Peas, and Radishes</a>, <a href=\"https://spoonacular.com/recipes/soba-noodle-salad-495678\">Soba Noodle Salad</a>, and <a href=\"https://spoonacular.com/recipes/soba-noodle-salad-80157\">Soba Noodle Salad</a>.",
        "preco_unitario": 55,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "The Best Of England Salad",
        "descricao": "The Best Of England Salad might be just the main course you are searching for. For $8.07 per serving, this recipe covers 48% of your daily requirements of vitamins and minerals. This recipe makes 1 servings with 916 calories, 32g of protein, and 55g of fat each. 1 person has tried and liked this recipe. It is brought to you by Foodista. It is a good option if you're following a lacto ovo vegetarian diet. From preparation to the plate, this recipe takes approximately 45 minutes. Head to the store and pick up salt and pepper, radishes, oz roasted peppers brine, and a few other things to make it today. Overall, this recipe earns a great spoonacular score of 81%. Try <a href=\"https://spoonacular.com/recipes/the-new-england-express-209464\">The New England Express</a>, <a href=\"https://spoonacular.com/recipes/new-england-style-288965\">New England-Style</a>, and <a href=\"https://spoonacular.com/recipes/new-england-clambake-599031\">New England Clambake</a> for similar recipes.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Crisp Winter Salad with Maple Gorgonzola Dressing",
        "descricao": "Crisp Winter Salad with Maple Gorgonzola Dressing takes about 45 minutes from beginning to end. This main course has 679 calories, 21g of protein, and 56g of fat per serving. This recipe serves 4. For $3.13 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. Head to the store and pick up cream, radishes, olive oil, and a few other things to make it today. Winter will be even more special with this recipe. It is brought to you by Foodista. It is a good option if you're following a gluten free, lacto ovo vegetarian, and primal diet. Overall, this recipe earns a solid spoonacular score of 79%. Similar recipes include <a href=\"https://spoonacular.com/recipes/apple-and-gorgonzola-salad-with-maple-dressing-284988\">Apple-and-Gorgonzola Salad With Maple Dressing</a>, <a href=\"https://spoonacular.com/recipes/pear-walnut-and-gorgonzola-salad-with-maple-dijon-dressing-1525845\">Pear, Walnut and Gorgonzola Salad with Maple Dijon Dressing</a>, and <a href=\"https://spoonacular.com/recipes/winter-fruit-salad-with-citrus-maple-dressing-1694705\">Winter Fruit Salad with Citrus Maple Dressing</a>.",
        "preco_unitario": 69,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Watermelon Leaf Lettuce Salad With Light Feta",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Watermelon Leaf Lettuce Salad With Light Fetan a try. Watching your figure? This gluten free recipe has 248 calories, 5g of protein, and 18g of fat per serving. This recipe serves 3 and costs $2.48 per serving. 1 person were glad they tried this recipe. It will be a hit at your Summer event. A mixture of watermelon, balsamic vinaigrette, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a solid spoonacular score of 74%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/watermelon-leaf-lettuce-salad-with-light-feta-1257223\">Watermelon Leaf Lettuce Salad With Light Feta</a>, <a href=\"https://spoonacular.com/recipes/watermelon-leaf-lettuce-salad-with-light-feta-1245313\">Watermelon Leaf Lettuce Salad With Light Feta</a>, and <a href=\"https://spoonacular.com/recipes/baby-leaf-lettuce-with-olives-and-watermelon-16563\">Baby Leaf Lettuce with Olives and Watermelon</a>.",
        "preco_unitario": 65,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chicken and Spring Mix Salad with Spicy Pineapple Dressing",
        "descricao": "Chicken and Spring Mix Salad with Spicy Pineapple Dressing requires about 25 minutes from start to finish. This recipe serves 2. For $3.39 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has 348 calories, 38g of protein, and 12g of fat per serving. 2 people were glad they tried this recipe. If you have onion, garlic powder, chicken breast halves, and a few other ingredients on hand, you can make it. Spring will be even more special with this recipe. It works well as a main course. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 79%. This score is solid. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/grilled-chicken-salad-with-spicy-pineapple-dressing-539375\">Grilled Chicken Salad with Spicy Pineapple Dressing</a>, <a href=\"https://spoonacular.com/recipes/grilled-chicken-salad-with-spicy-pineapple-dressing-43210\">Grilled Chicken Salad With Spicy Pineapple Dressing</a>, and <a href=\"https://spoonacular.com/recipes/grilled-chicken-and-spinach-salad-with-spicy-pineapple-dressing-19614\">Grilled Chicken and Spinach Salad with Spicy Pineapple Dressing</a>.",
        "preco_unitario": 28,
        "tempo_preparo": 25,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Layered Greek Salad",
        "descricao": "Layered Greek Salad is a gluten free and lacto ovo vegetarian hor d'oeuvre. This recipe serves 10 and costs $1.21 per serving. One serving contains 135 calories, 9g of protein, and 6g of fat. This recipe from Foodista requires peppers, salt, onion, and yogurt. This recipe is typical of Mediterranean cuisine. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns a solid spoonacular score of 78%. <a href=\"https://spoonacular.com/recipes/layered-greek-salad-182470\">Layered Greek Salad</a>, <a href=\"https://spoonacular.com/recipes/greek-salad-layered-dip-289889\">Greek Salad Layered Dip</a>, and <a href=\"https://spoonacular.com/recipes/layered-greek-salad-for-a-crowd-267030\">Layered Greek Salad for a Crowd</a> are very similar to this recipe.",
        "preco_unitario": 39,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Caribbean Cobb Salad with Fire-Roasted Pineapple Vinaigrette",
        "descricao": "Caribbean Cobb Salad with Fire-Roasted Pineapple Vinaigrette might be a good recipe to expand your main course recipe box. This recipe serves 4 and costs $2.43 per serving. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has 307 calories, 19g of protein, and 19g of fat per serving. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe is typical of American cuisine. This recipe from Foodista requires fire-roasted pineapple vinaigrette, bacon, romaine hearts torn into bite-sized pieces, and mango. All things considered, we decided this recipe deserves a spoonacular score of 75%. This score is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/caribbean-cobb-salad-with-fire-roasted-pineapple-vinaigrette-1622023\">Caribbean Cobb Salad with Fire-Roasted Pineapple Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/paleo-cobb-salad-with-roasted-red-pepper-vinaigrette-22088\">Paleo Cobb Salad With Roasted Red Pepper Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/caribbean-cobb-salad-1504041\">Caribbean Cobb Salad</a>.",
        "preco_unitario": 30,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Kumato Salad",
        "descricao": "Kumato Salad is a gluten free, dairy free, and pescatarian recipe with 3 servings. For $2.56 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 6g of protein, 3g of fat, and a total of 167 calories. It is brought to you by Foodista. Not a lot of people made this recipe, and 1 would say it hit the spot. A mixture of sugar, onions, cherry tomato, and a handful of other ingredients are all it takes to make this recipe so flavorful. It works best as a hor d'oeuvre, and is done in roughly 45 minutes. With a spoonacular score of 63%, this dish is good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/my-organic-garden-courgette-fritters-with-home-made-kumato-ketchup-82628\">My Organic Garden Courgette Fritters With Home Made Kumato Ketchup</a>, <a href=\"https://spoonacular.com/recipes/kachumber-salad-or-kuchumber-salad-indian-vegetable-salad-1230365\">kachumber salad or kuchumber salad – indian vegetable salad</a>, and <a href=\"https://spoonacular.com/recipes/kachumber-salad-or-kuchumber-salad-indian-vegetable-salad-1222431\">kachumber salad or kuchumber salad – indian vegetable salad</a>.",
        "preco_unitario": 32,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Double Blueberry Quinoa Salad",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Double Blueberry Quinoa Salad might be a recipe you should try. This main course has 727 calories, 14g of protein, and 34g of fat per serving. For $4.49 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. This recipe serves 3. Head to the store and pick up red wine vinegar, scallions, sea salt, and a few other things to make it today. 1 person found this recipe to be scrumptious and satisfying. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 77%, which is solid. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/double-broccoli-quinoa-salad-1121058\">Double Broccoli Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/blueberry-quinoa-salad-855372\">Blueberry Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/blueberry-quinoa-salad-1117360\">Blueberry Quinoa Salad</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Green Salad With Fresh Orange Juice Dressing",
        "descricao": "Need a gluten free, dairy free, and lacto ovo vegetarian main course? Green Salad With Fresh Orange Juice Dressing could be an amazing recipe to try. This recipe makes 2 servings with 560 calories, 13g of protein, and 35g of fat each. For $2.79 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes about 15 minutes. If you have ground pepper, hardboiled eggs, romaine lettuce, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a solid spoonacular score of 72%. Similar recipes are <a href=\"https://spoonacular.com/recipes/green-salad-with-fresh-orange-juice-dressing-1257367\">Green Salad With Fresh Orange Juice Dressing</a>, <a href=\"https://spoonacular.com/recipes/fresh-berry-green-salad-with-pomegranate-meyer-lemon-salad-dressing-474010\">Fresh Berry Green Salad with Pomegranate Meyer Lemon Salad Dressing</a>, and <a href=\"https://spoonacular.com/recipes/fresh-green-bean-salad-with-balsamic-dressing-568578\">Fresh Green Bean Salad with Balsamic Dressing</a>.",
        "preco_unitario": 64,
        "tempo_preparo": 15,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roast Fennel and Leek Salad with Butterbeans",
        "descricao": "If you have roughly 45 minutes to spend in the kitchen, Roast Fennel and Leek Salad with Butterbeans might be an awesome gluten free and lacto ovo vegetarian recipe to try. This main course has 345 calories, 13g of protein, and 13g of fat per serving. This recipe serves 4 and costs $1.49 per serving. It is brought to you by Foodista. A mixture of salt and pepper, fennel bulbs, olive oil, and a handful of other ingredients are all it takes to make this recipe so delicious. 1 person found this recipe to be tasty and satisfying. With a spoonacular score of 76%, this dish is good. Similar recipes are <a href=\"https://spoonacular.com/recipes/roast-pork-loin-with-fennel-salad-239433\">Roast Pork Loin with Fennel Salad</a>, <a href=\"https://spoonacular.com/recipes/fennel-roast-lemon-tomato-salad-1093479\">Fennel, roast lemon & tomato salad</a>, and <a href=\"https://spoonacular.com/recipes/roast-chicken-with-blood-orange-fennel-salad-751943\">Roast Chicken with Blood Orange-Fennel Salad</a>.",
        "preco_unitario": 64,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Healthy Quinoa Salad",
        "descricao": "Healthy Quinoa Salad is a hor d'oeuvre that serves 4. One serving contains 226 calories, 10g of protein, and 4g of fat. For $1.47 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around around 45 minutes. Head to the store and pick up tomatoes, green onions, cucumber, and a few other things to make it today. 1 person has made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. It is brought to you by Pick Fresh Foods. With a spoonacular score of 0%, this dish is improvable. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/healthy-quinoa-salad-109886\">Healthy Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/healthy-quinoa-salad-1267925\">Healthy Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/healthy-quinoa-salad-1181555\">Healthy Quinoa Salad</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roasted Butternut Squash, Pecan, Bacon, Mix Green & Baby Spinach Salad With Maple Syrup Vinaigrette",
        "descricao": "Roasted Butternut Squash, Pecan, Bacon, Mix Green & Baby Spinach Salad With Maple Syrup Vinaigrette takes about 45 minutes from beginning to end. This recipe makes 4 servings with 460 calories, 9g of protein, and 35g of fat each. For $3.63 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. It works well as a rather pricey hor d'oeuvre. If you have bacon, sea salt, maple syrup, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. It is brought to you by Foodista. With a spoonacular score of 76%, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/thanksgiving-side-dish-maple-bacon-pecan-roasted-butternut-squash-509361\">Thanksgiving Side Dish: Maple Bacon Pecan Roasted Butternut Squash</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-and-bacon-salad-with-maple-rosemary-vinaigrette-677047\">Butternut Squash and Bacon Salad with Maple-Rosemary Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/roasted-butternut-squash-salad-with-sherry-maple-vinaigrette-12913\">Roasted Butternut Squash Salad With Sherry Maple Vinaigrette</a> for similar recipes.",
        "preco_unitario": 69,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Grilled Pineapple Zucchini Side Salad",
        "descricao": "If you have approximately 30 minutes to spend in the kitchen, Grilled Pineapple Zucchini Side Salad might be an excellent gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe to try. This recipe serves 4. One portion of this dish contains roughly 3g of protein, 11g of fat, and a total of 229 calories. For $1.26 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. If you have zucchini, balsamic vinegar, basil, and a few other ingredients on hand, you can make it. This recipe from Foodista has 1 fans. It can be enjoyed any time, but it is especially good for The Fourth Of July. It works well as a hor d'oeuvre. All things considered, we decided this recipe deserves a spoonacular score of 77%. This score is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/roast-beef-with-seared-pineapple-side-salad-719596\">Roast Beef with Seared Pineapple & Side Salad</a>, <a href=\"https://spoonacular.com/recipes/cold-fennel-and-zucchini-noodle-side-salad-639910\">Cold Fennel and Zucchini Noodle Side Salad</a>, and <a href=\"https://spoonacular.com/recipes/grilled-corn-side-salad-645687\">Grilled Corn Side Salad</a>.",
        "preco_unitario": 57,
        "tempo_preparo": 30,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Snow Pea Sesame Noodle Salad",
        "descricao": "Snow Pea Sesame Noodle Salad requires around 45 minutes from start to finish. One serving contains 441 calories, 13g of protein, and 21g of fat. This recipe serves 8 and costs $2.43 per serving. 1 person were glad they tried this recipe. It is a good option if you're following a dairy free and lacto ovo vegetarian diet. It is brought to you by Foodista. A mixture of vegetable oil, smooth peanut butter, scallions, and a handful of other ingredients are all it takes to make this recipe so flavorful. It works well as a rather inexpensive main course. Overall, this recipe earns an excellent spoonacular score of 82%. <a href=\"https://spoonacular.com/recipes/snow-pea-salad-with-sesame-dressing-17551\">Snow Pea Salad with Sesame Dressing</a>, <a href=\"https://spoonacular.com/recipes/sesame-snow-pea-and-shiitake-pasta-salad-37175\">Sesame, Snow Pea, And Shiitake Pasta Salad</a>, and <a href=\"https://spoonacular.com/recipes/snow-pea-and-red-onion-salad-with-sesame-vinaigrette-recipe-18570\">Snow Pean And Red Onion Salad With Sesame Vinaigrette Recipe</a> are very similar to this recipe.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Jicama & Mango Salad",
        "descricao": "Jicama & Mango Salad is a gluten free recipe with 1 servings. One serving contains 618 calories, 6g of protein, and 31g of fat. For $7.95 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. It works best as a hor d'oeuvre, and is done in about 45 minutes. If you have sugar, dressing, onion, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. 1 person has made this recipe and would make it again. All things considered, we decided this recipe deserves a spoonacular score of 70%. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/jicama-and-mango-salad-648593\">Jicaman and Mango Salad</a>, <a href=\"https://spoonacular.com/recipes/mango-and-jicama-salad-707074\">Mango and Jicama Salad</a>, and <a href=\"https://spoonacular.com/recipes/mango-jicama-salad-379165\">Mango Jicama Salad</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Panzanella Salad",
        "descricao": "You can never have too many Mediterranean recipes, so give Panzanella Salad a try. This lacto ovo vegetarian recipe serves 4 and costs $3.1 per serving. One portion of this dish contains about 23g of protein, 20g of fat, and a total of 657 calories. This recipe from Pick Fresh Foods requires basil, seasoning, extra virgin olive oil, and cucumber. This recipe is liked by 1 foodies and cooks. It works well as a main course. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 42%, which is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/panzanella-salad-356957\">Panzanella Salad</a>, <a href=\"https://spoonacular.com/recipes/panzanella-salad-29852\">Panzanella Salad</a>, and <a href=\"https://spoonacular.com/recipes/panzanella-salad-1654679\">Panzanella Salad</a>.",
        "preco_unitario": 36,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Potato and Green Bean Side Salad",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipes to your recipe box, Potato and Green Bean Side Salad might be a recipe you should try. This recipe serves 12. This hor d'oeuvre has 117 calories, 3g of protein, and 5g of fat per serving. For 77 cents per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. This recipe from Foodista requires potatoes, dill, olive oil, and onion. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 71%, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/side-dish-sundays-fresh-green-bean-salad-with-blue-cheese-and-dijon-1125938\">Side Dish Sundays: Fresh Green Bean Salad with Blue Cheese and Dijon</a>, <a href=\"https://spoonacular.com/recipes/green-bean-side-dish-429347\">Green Bean Side Dish</a>, and <a href=\"https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613\">Fashoulakia (Greek Green Bean Side Dish)</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Water-Cado Salad",
        "descricao": "Water-Cado Salad is a hor d'oeuvre that serves 4. One serving contains 252 calories, 3g of protein, and 19g of fat. For $1.26 per serving, this recipe covers 12% of your daily requirements of vitamins and minerals. 4 people have made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. This recipe from Foodista requires olive oil, watermelon, juice of lime, and salt and pepper. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns an outstanding spoonacular score of 80%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/deviled-avocado-spicy-curry-sauce-cado-crunch-salad-1330519\">Deviled Avocado. Spicy Curry Sauce. Cado-Crunch Salad</a>, <a href=\"https://spoonacular.com/recipes/deviled-avocado-spicy-curry-sauce-cado-crunch-salad-1270637\">Deviled Avocado. Spicy Curry Sauce. Cado-Crunch Salad</a>, and <a href=\"https://spoonacular.com/recipes/deviled-avocado-spicy-curry-sauce-cado-crunch-salad-1304917\">Deviled Avocado. Spicy Curry Sauce. Cado-Crunch Salad</a>.",
        "preco_unitario": 36,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Soba Noodle Salad with Avocado and Mango",
        "descricao": "The recipe Soba Noodle Salad with Avocado and Mango can be made in about 45 minutes. This recipe serves 3. One serving contains 452 calories, 13g of protein, and 16g of fat. For $1.99 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. 1 person found this recipe to be flavorful and satisfying. Not a lot of people really liked this main course. It is brought to you by Foodista. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. If you have avocado, soba noodles, agave nectar, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 71%. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/soba-noodle-salad-with-cucumber-and-mango-1639773\">Soba Noodle Salad with Cucumber and Mango</a>, <a href=\"https://spoonacular.com/recipes/mango-and-thai-eggplant-soba-noodle-bowl-586357\">Mango and Thai Eggplant Soba Noodle Bowl</a>, and <a href=\"https://spoonacular.com/recipes/double-thai-noodle-salad-with-smoked-aubergine-mango-avocado-501149\">Double Thai noodle salad with smoked aubergine, mango & avocado</a> for similar recipes.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Salad With Apples, Gorgonzola and Walnuts",
        "descricao": "Salad With Apples, Gorgonzolan and Walnuts might be a good recipe to expand your main course repertoire. Watching your figure? This lacto ovo vegetarian recipe has 557 calories, 16g of protein, and 42g of fat per serving. For $2.79 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe is liked by 1 foodies and cooks. A mixture of walnuts, bell pepper, creamy gorgonzola, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 75%. This score is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/spring-salad-with-gorgonzola-and-walnuts-122928\">Spring Salad With Gorgonzolan and Walnuts</a>, <a href=\"https://spoonacular.com/recipes/endive-salad-with-walnuts-pears-and-gorgonzola-157059\">Endive Salad with Walnuts, Pears, and Gorgonzola</a>, and <a href=\"https://spoonacular.com/recipes/escarole-and-endive-salad-with-gorgonzola-and-walnuts-12833\">Escarole And Endive Salad With Gorgonzolan And Walnuts</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Radicchio & Endive Salad with Pecans, Apple & Mandarin",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Radicchio & Endive Salad with Pecans, Apple & Mandarin a try. One portion of this dish contains about 3g of protein, 13g of fat, and a total of 187 calories. This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe serves 6 and costs $1.85 per serving. 1 person were glad they tried this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. If you have mustard, pecans, radicchio, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 75%. This score is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/radicchio-and-endive-salad-96594\">Radicchio and Endive Salad</a>, <a href=\"https://spoonacular.com/recipes/radicchio-and-endive-salad-96596\">Radicchio and Endive Salad</a>, and <a href=\"https://spoonacular.com/recipes/endive-and-radicchio-salad-13053\">Endive and Radicchio Salad</a>.",
        "preco_unitario": 24,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Fennel and Orange Salad With Toasted Hazelnuts and Cranberries",
        "descricao": "The recipe Fennel and Orange Salad With Toasted Hazelnuts and Cranberries can be made in about 45 minutes. This recipe serves 4 and costs 65 cents per serving. One serving contains 167 calories, 2g of protein, and 12g of fat. A mixture of navel orange, cranberries, white-wine vinegar, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a hor d'oeuvre. 18 people were impressed by this recipe. Christmas will be even more special with this recipe. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. It is brought to you by Foodista. With a spoonacular score of 68%, this dish is pretty good. <a href=\"https://spoonacular.com/recipes/baby-spinach-salad-with-pears-red-onions-cranberries-and-toasted-hazelnuts-201726\">Baby Spinach Salad with Pears, Red Onions, Cranberries and Toasted Hazelnuts</a>, <a href=\"https://spoonacular.com/recipes/blood-orange-salad-with-shaved-fennel-and-hazelnuts-51144\">Blood Orange Salad With Shaved Fennel And Hazelnuts</a>, and <a href=\"https://spoonacular.com/recipes/fennel-orange-salad-with-toasted-pistachios-43207\">Fennel & Orange Salad With Toasted Pistachios</a> are very similar to this recipe.",
        "preco_unitario": 32,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Summer Pesto Noodle Salad",
        "descricao": "Summer Pesto Noodle Salad requires approximately 45 minutes from start to finish. This recipe makes 3 servings with 232 calories, 8g of protein, and 16g of fat each. For $2.41 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. It works well as a budget friendly hor d'oeuvre. Head to the store and pick up basil, garlic, peach, and a few other things to make it today. 1 person found this recipe to be flavorful and satisfying. It is brought to you by Foodista. It is perfect for The Fourth Of July. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. With a spoonacular score of 70%, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/almost-summer-rice-noodle-salad-17774\">Almost-summer Rice Noodle Salad</a>, <a href=\"https://spoonacular.com/recipes/cold-summer-zucchini-noodle-pasta-salad-1005941\">Cold Summer Zucchini Noodle Pasta Salad</a>, and <a href=\"https://spoonacular.com/recipes/pesto-tabbouleh-summer-salad-891501\">Pesto Tabbouleh Summer Salad</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Steak Salad With Roasted Potatoes and Fennel",
        "descricao": "If you have around 45 minutes to spend in the kitchen, Steak Salad With Roasted Potatoes and Fennel might be an amazing gluten free and dairy free recipe to try. One serving contains 814 calories, 39g of protein, and 56g of fat. This recipe serves 4 and costs $5.64 per serving. 1 person has tried and liked this recipe. It will be a hit at your valentin day event. A mixture of dijon mustard, mayo, honey, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. It works well as a main course. Overall, this recipe earns a pretty good spoonacular score of 77%. Similar recipes include <a href=\"https://spoonacular.com/recipes/roasted-potatoes-with-fennel-and-onions-521823\">Roasted Potatoes With Fennel And Onions</a>, <a href=\"https://spoonacular.com/recipes/garlic-roasted-potatoes-and-fennel-46729\">Garlic-Roasted Potatoes and Fennel</a>, and <a href=\"https://spoonacular.com/recipes/roasted-chicken-potatoes-and-fennel-recipe-45703\">Roasted Chicken, Potatoes, And Fennel Recipe</a>.",
        "preco_unitario": 64,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Quick and Easy Caprese Salad",
        "descricao": "Need a gluten free, lacto ovo vegetarian, and primal main course? Quick and Easy Caprese Salad could be an awesome recipe to try. One serving contains 350 calories, 15g of protein, and 27g of fat. For $1.97 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. This recipe serves 4. It is brought to you by Foodista. A mixture of balsamic vinegar, basil leaves, bell pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. 3 people found this recipe to be yummy and satisfying. It is an affordable recipe for fans of Mediterranean food. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a good spoonacular score of 74%. Try <a href=\"https://spoonacular.com/recipes/quick-caprese-salad-551296\">Quick Caprese Salad</a>, <a href=\"https://spoonacular.com/recipes/quick-roasted-tomato-caprese-pasta-salad-673329\">Quick Roasted Tomato Caprese Pasta Salad</a>, and <a href=\"https://spoonacular.com/recipes/easy-caprese-salad-524331\">Easy Caprese Salad</a> for similar recipes.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Green Mango Salad - Thai Side Dish",
        "descricao": "You can never have too many Asian recipes, so give Green Mango Salad - Thai Side Dish a try. One portion of this dish contains approximately 6g of protein, 1g of fat, and a total of 213 calories. This gluten free, dairy free, and pescatarian recipe serves 2 and costs $3.25 per serving. From preparation to the plate, this recipe takes around 15 minutes. If you have chilies, wholes tomatoes, juice of lime, and a few other ingredients on hand, you can make it. Only a few people made this recipe, and 1 would say it hit the spot. It works well as a hor d'oeuvre. It is brought to you by Foodista. With a spoonacular score of 71%, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/side-dish-sundays-fresh-green-bean-salad-with-blue-cheese-and-dijon-1125938\">Side Dish Sundays: Fresh Green Bean Salad with Blue Cheese and Dijon</a>, <a href=\"https://spoonacular.com/recipes/green-bean-side-dish-429347\">Green Bean Side Dish</a>, and <a href=\"https://spoonacular.com/recipes/rice-and-green-pea-side-dish-416016\">Rice and Green Pea Side Dish</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 15,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Watermelon Salad with Feta, Walnut & Nigella Seeds",
        "descricao": "Need a gluten free, lacto ovo vegetarian, and primal hor d'oeuvre? Watermelon Salad with Feta, Walnut & Nigella Seeds could be a great recipe to try. One portion of this dish contains roughly 10g of protein, 21g of fat, and a total of 334 calories. This recipe serves 6. For $1.87 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. 10 people were impressed by this recipe. From preparation to the plate, this recipe takes approximately 25 minutes. If you have mint, watermelon, feta cheese, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It will be a hit at your Summer event. With a spoonacular score of 62%, this dish is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/watermelon-salad-with-feta-walnut-nigella-seeds-1377591\">Watermelon Salad with Feta, Walnut & Nigella Seeds</a>, <a href=\"https://spoonacular.com/recipes/watermelon-salad-with-feta-walnut-nigella-seeds-1376925\">Watermelon Salad with Feta, Walnut & Nigella Seeds</a>, and <a href=\"https://spoonacular.com/recipes/watermelon-salad-with-feta-walnut-nigella-seeds-1376821\">Watermelon Salad with Feta, Walnut & Nigella Seeds</a>.",
        "preco_unitario": 20,
        "tempo_preparo": 25,
        "categoria": "salad",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Citrus and Asparagus Salad",
        "descricao": "If you want to add more gluten free and lacto ovo vegetarian recipes to your recipe box, Citrus and Asparagus Salad might be a recipe you should try. For $2.11 per serving, you get a hor d'oeuvre that serves 4. One portion of this dish contains about 9g of protein, 28g of fat, and a total of 451 calories. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes about 45 minutes. If you have mint, pepitas, feta cheese, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns an outstanding spoonacular score of 84%. Similar recipes include <a href=\"https://spoonacular.com/recipes/citrus-asparagus-salad-414605\">Citrus Asparagus Salad</a>, <a href=\"https://spoonacular.com/recipes/citrus-asparagus-salad-1304537\">Citrus Asparagus Salad</a>, and <a href=\"https://spoonacular.com/recipes/citrus-asparagus-salad-1332779\">Citrus Asparagus Salad</a>.",
        "preco_unitario": 46,
        "tempo_preparo": 45,
        "categoria": "salad",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Red Lentil Soup with Chicken and Turnips",
        "descricao": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 55,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1604079681864-c6fbd7eb109c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxSZWQlMjBMZW50aWwlMjBTb3VwJTIwd2l0aCUyMENoaWNrZW4lMjBhbmQlMjBUdXJuaXBzfGVufDB8fHx8MTc0MzAxMjUzOXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Asparagus and Pea Soup: Real Convenience Food",
        "descricao": "Asparagus and Pea Soup: Real Convenience Food requires approximately 20 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 217 calories, 11g of protein, and 8g of fat per serving. This recipe serves 2. For $1.78 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
        "preco_unitario": 65,
        "tempo_preparo": 20,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxBc3BhcmFndXMlMjBhbmQlMjBQZWElMjBTb3VwJTNBJTIwUmVhbCUyMENvbnZlbmllbmNlJTIwRm9vZHxlbnwwfHx8fDE3NDMwMTI1NDN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Slow Cooker Beef Stew",
        "descricao": "If you want to add more gluten free and dairy free recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains 434 calories, 44g of protein, and 12g of fat. This recipe serves 6. For $2.7 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately 8 hours and 10 minutes. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. Autumn will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 490,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1527195575508-5b138d14a35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxTbG93JTIwQ29va2VyJTIwQmVlZiUyMFN0ZXd8ZW58MHx8fHwxNzQzMDEyNTQwfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Tuscan White Bean Soup with Olive Oil and Rosemary",
        "descricao": "Tuscan White Bean Soup with Olive Oil and Rosemary is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 6 servings. This main course has 242 calories, 16g of protein, and 1g of fat per serving. For 50 cents per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. It will be a hit at your Autumn event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 79%, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
        "preco_unitario": 20,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxUdXNjYW4lMjBXaGl0ZSUyMEJlYW4lMjBTb3VwJTIwd2l0aCUyME9saXZlJTIwT2lsJTIwYW5kJTIwUm9zZW1hcnl8ZW58MHx8fHwxNzQzMDEyNTQ2fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Herbivoracious' White Bean and Kale Soup",
        "descricao": "Herbivoracious' White Bean and Kale Soup might be a good recipe to expand your main course recipe box. One serving contains 332 calories, 17g of protein, and 10g of fat. This recipe serves 6 and costs 78 cents per serving. 10 people were impressed by this recipe. It will be a hit at your Autumn event. Head to the store and pick up juice of lemon, carrot, dinosaur kale, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is tremendous. <a href=\"https://spoonacular.com/recipes/kale-and-white-bean-soup-1214347\">Kale And White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/white-bean-and-kale-soup-15247\">White Bean And Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/white-bean-kale-soup-1571259\">White Bean Kale Soup</a> are very similar to this recipe.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxIZXJiaXZvcmFjaW91cyUyNyUyMFdoaXRlJTIwQmVhbiUyMGFuZCUyMEthbGUlMjBTb3VwfGVufDB8fHx8MTc0MzAxMjU0Nnww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Tomato and lentil soup",
        "descricao": "Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with 340 calories, 18g of protein, and 8g of fat each. For $1.16 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. It is perfect for Autumn. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. With a spoonacular score of 96%, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1711915408847-ae32b80a3fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxUb21hdG8lMjBhbmQlMjBsZW50aWwlMjBzb3VwfGVufDB8fHx8MTc0MzAxNDI1Mnww&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Moroccan chickpea and lentil stew",
        "descricao": "The recipe Moroccan chickpean and lentil stew can be made in roughly 30 minutes. This dairy free, lacto ovo vegetarian, and vegan recipe serves 3 and costs $1.26 per serving. This main course has 466 calories, 20g of protein, and 7g of fat per serving. This recipe is liked by 11 foodies and cooks. It can be enjoyed any time, but it is especially good for Autumn. It is brought to you by Foodista. If you have olive oil, salt and pepper, tomato paste, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/moroccan-chickpea-and-lentil-stew-1376773\">Moroccan chickpean and lentil stew</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-523871\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-1379167\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1591299177061-2151e53fcaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGNoaWNrcGVhJTIwYW5kJTIwbGVudGlsJTIwc3Rld3xlbnwwfHx8fDE3NDMwMTQyNTN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Caldo Verde - Portuguese Kale Soup",
        "descricao": "Caldo Verde - Portuguese Kale Soup takes approximately 45 minutes from beginning to end. One portion of this dish contains around 20g of protein, 10g of fat, and a total of 493 calories. For $2.24 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. 13 people were glad they tried this recipe. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. It is brought to you by Foodista. It works well as a main course. It will be a hit at your Autumn event. Head to the store and pick up onion, carrots, pepper flakes, and a few other things to make it today. With a spoonacular score of 92%, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/portuguese-kale-soup-caldo-verde-499535\">Portuguese Kale Soup (Caldo Verde)</a>, <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-1274837\">Caldo Verde - Portuguese Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-598606\">Caldo Verde | Portuguese Kale Soup</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/photo-1478749485505-2a903a729c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxDYWxkbyUyMFZlcmRlJTIwLSUyMFBvcnR1Z3Vlc2UlMjBLYWxlJTIwU291cHxlbnwwfHx8fDE3NDMwMTQyNTN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Easy Vegetable Beef Soup",
        "descricao": "You can never have too many main course recipes, so give Easy Vegetable Beef Soup a try. This dairy free recipe serves 8 and costs $3.45 per serving. One serving contains 566 calories, 45g of protein, and 19g of fat. 130 people were glad they tried this recipe. It will be a hit at your Autumn event. A mixture of salt, seasoning, on carrots, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Pink When. From preparation to the plate, this recipe takes roughly 2 hours and 30 minutes. Taking all factors into account, this recipe earns a spoonacular score of 97%, which is awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-1050610\">Easy Vegetable Beef Soup</a>, <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-177116\">Easy Vegetable-Beef Soup</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-459390\">Easy Vegetable Beef Soup</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 150,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg5MjZ8MHwxfHNlYXJjaHwxfHxFYXN5JTIwVmVnZXRhYmxlJTIwQmVlZiUyMFNvdXB8ZW58MHx8fHwxNzQzMDE0MjUzfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        "nome": "Curried Butternut Squash and Apple Soup",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Curried Butternut Squash and Apple Soup might be a recipe you should try. For $1.41 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. This recipe serves 1. One serving contains 134 calories, 7g of protein, and 3g of fat. A mixture of a squirt sriracha, butternut squash, apple, and a handful of other ingredients are all it takes to make this recipe so yummy. It is perfect for Autumn. It works well as a hor d'oeuvre. This recipe from Foodista has 9 fans. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns an awesome spoonacular score of 89%. Similar recipes include <a href=\"https://spoonacular.com/recipes/curried-apple-butternut-squash-soup-620121\">Curried Apple + Butternut Squash Soup</a>, <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-and-apple-soup-836936\">Curried Butternut Squash and Apple Soup</a>, and <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-apple-soup-crock-pot-94742\">Curried Butternut Squash & Apple Soup - Crock Pot</a>.",
        "preco_unitario": 59,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Smoky Black Bean Soup With Sweet Potato & Kale",
        "descricao": "You can never have too many main course recipes, so give Smoky Black Bean Soup With Sweet Potato & Kale a try. One serving contains 555 calories, 23g of protein, and 7g of fat. This recipe serves 6. For $2.62 per serving, this recipe covers 41% of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. This recipe from Foodista requires chicken broth, onion, black beans, and salt & pepper. From preparation to the plate, this recipe takes around 10 hours and 30 minutes. It can be enjoyed any time, but it is especially good for Autumn. It is a good option if you're following a gluten free, dairy free, and lacto ovo vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-524599\">Smoky Sweet Potato and Black Bean Tacos</a>, <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-1316245\">Smoky Sweet Potato and Black Bean Tacos</a>, and <a href=\"https://spoonacular.com/recipes/sweet-and-smoky-sriracha-black-bean-soup-557795\">Sweet and Smoky Sriracha Black Bean Soup</a>.",
        "preco_unitario": 66,
        "tempo_preparo": 630,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
        "descricao": "Chilled Cucumber Avocado Soup with Yogurt and Kefir is a gluten free, lacto ovo vegetarian, and primal hor d'oeuvre. This recipe serves 3 and costs $2.1 per serving. One portion of this dish contains approximately 9g of protein, 7g of fat, and a total of 189 calories. 171 person were impressed by this recipe. A mixture of avocado, kefir, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. Autumn will be even more special with this recipe. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an outstanding spoonacular score of 97%. <a href=\"https://spoonacular.com/recipes/chilled-cucumber-avocado-and-yogurt-soup-21553\">Chilled Cucumber, Avocado, and Yogurt Soup</a>, <a href=\"https://spoonacular.com/recipes/chilled-cucumber-yogurt-soup-499125\">Chilled Cucumber-Yogurt Soup</a>, and <a href=\"https://spoonacular.com/recipes/chilled-cucumber-mint-yogurt-soup-608062\">Chilled Cucumber Mint Yogurt Soup</a> are very similar to this recipe.",
        "preco_unitario": 21,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash Soup (In Half An Hour!)",
        "descricao": "Butternut Squash Soup (In Half An Hour!) requires about 30 minutes from start to finish. For $1.25 per serving, you get a hor d'oeuvre that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 252 calories, 9g of protein, and 6g of fat per serving. It will be a hit at your Autumn event. 5 people have made this recipe and would make it again. It is brought to you by Foodista. Head to the store and pick up salt and pepper, black-eyed peas, collard greens, and a few other things to make it today. With a spoonacular score of 95%, this dish is great. Try <a href=\"https://spoonacular.com/recipes/half-hour-chili-1336421\">Half-Hour Chili</a>, <a href=\"https://spoonacular.com/recipes/half-hour-chili-1268407\">Half-Hour Chili</a>, and <a href=\"https://spoonacular.com/recipes/half-hour-chili-695480\">Half-Hour Chili</a> for similar recipes.",
        "preco_unitario": 60,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Moosewood Lentil Soup",
        "descricao": "Moosewood Lentil Soup might be a good recipe to expand your main course recipe box. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs 74 cents per serving. One portion of this dish contains roughly 26g of protein, 4g of fat, and a total of 396 calories. A mixture of pepper, lentils, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people found this recipe to be flavorful and satisfying. It is perfect for Autumn. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/moosewood-lentil-soup-1319699\">Moosewood Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/moosewood-mushroom-barley-soup-143909\">Moosewood Mushroom Barley Soup!</a>, and <a href=\"https://spoonacular.com/recipes/hungarian-mushroom-soup-from-the-moosewood-cookbook-143242\">Hungarian Mushroom Soup, from the Moosewood Cookbook</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Slow Cooker Chicken Taco Soup",
        "descricao": "Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Slow Cooker Chicken Taco Soup at home. One portion of this dish contains about 24g of protein, 4g of fat, and a total of 312 calories. This gluten free and dairy free recipe serves 6 and costs $1.41 per serving. 2182 people have tried and liked this recipe. It works well as a main course. If you have black beans, chili beans, canned tomatoes, and a few other ingredients on hand, you can make it. It is perfect for Autumn. From preparation to the plate, this recipe takes around 8 hours and 5 minutes. It is brought to you by Pink When. Overall, this recipe earns an awesome spoonacular score of 95%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1399115\">Slow Cooker Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1228993\">Slow Cooker Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1369307\">Slow Cooker Chicken Taco Soup</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 485,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Garlic Lemon Chili Broccoli",
        "descricao": "If you want to add more American recipes to your collection, Garlic Lemon Chili Broccoli might be a recipe you should try. One serving contains 453 calories, 10g of protein, and 38g of fat. For $1.56 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe serves 2. The Super Bowl will be even more special with this recipe. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes roughly 30 minutes. It is brought to you by foodwishes.blogspot.com. It works well as a budget friendly hor d'oeuvre. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. Taking all factors into account, this recipe earns a spoonacular score of 0%, which is improvable. Try <a href=\"https://spoonacular.com/recipes/roasted-broccoli-with-lemon-chili-garlic-oil-parmesan-576960\">Roasted Broccoli with Lemon, Chili-Garlic Oil & Parmesan</a>, <a href=\"https://spoonacular.com/recipes/oven-roasted-broccoli-with-lemon-chili-garlic-oil-and-parmesan-29395\">Oven Roasted Broccoli With Lemon, Chili-garlic Oil And Parmesan</a>, and <a href=\"https://spoonacular.com/recipes/chili-garlic-roasted-broccoli-109600\">Chili-Garlic Roasted Broccoli</a> for similar recipes.",
        "preco_unitario": 47,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Venison Stew",
        "descricao": "Venison Stew is a dairy free main course. This recipe serves 7. One serving contains 316 calories, 32g of protein, and 7g of fat. For $2.02 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for Autumn. 3 people found this recipe to be tasty and satisfying. Head to the store and pick up venison stew meat, baby carrots, bell pepper, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is tremendous. Similar recipes include <a href=\"https://spoonacular.com/recipes/venison-bourguignon-venison-stew-147886\">Venison Bourguignon (Venison Stew)</a>, <a href=\"https://spoonacular.com/recipes/venison-stew-629599\">Venison Stew</a>, and <a href=\"https://spoonacular.com/recipes/venison-stew-404173\">Venison Stew</a>.",
        "preco_unitario": 32,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Delicious Creamy Lentils and Chestnuts Soup",
        "descricao": "Delicious Creamy Lentils and Chestnuts Soup takes approximately 30 minutes from beginning to end. This recipe serves 4. For 80 cents per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 452 calories, 20g of protein, and 15g of fat per serving. Only a few people made this recipe, and 1 would say it hit the spot. If you have olive oil, roasted chestnuts, salt and pepper, and a few other ingredients on hand, you can make it. It works well as a very budget friendly main course for Autumn. It is brought to you by Foodista. Overall, this recipe earns an outstanding spoonacular score of 94%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/creamy-spinach-dip-with-water-chestnuts-1115011\">Creamy Spinach Dip with Water Chestnuts</a>, <a href=\"https://spoonacular.com/recipes/creamy-vegan-mushroom-tartlets-with-chestnuts-1061297\">Creamy Vegan Mushroom Tartlets with Chestnuts</a>, and <a href=\"https://spoonacular.com/recipes/pumpkin-soup-with-cranberry-compote-and-roasted-chestnuts-24116\">Pumpkin Soup With Cranberry Compote And Roasted Chestnuts</a>.",
        "preco_unitario": 63,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spicy lentil and black rice soup with kale, spinach and leek",
        "descricao": "Spicy lentil and black rice soup with kale, spinach and leek is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 12 servings. One portion of this dish contains about 11g of protein, 1g of fat, and a total of 202 calories. For 84 cents per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Head to the store and pick up onion, carrot, leek, and a few other things to make it today. Not a lot of people made this recipe, and 1 would say it hit the spot. Autumn will be even more special with this recipe. It works well as a very affordable hor d'oeuvre. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Overall, this recipe earns an awesome spoonacular score of 94%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/spicy-sausage-lentil-kale-soup-566142\">Spicy Sausage Lentil & Kale Soup</a>, <a href=\"https://spoonacular.com/recipes/spicy-sausage-lentil-kale-soup-1337093\">Spicy Sausage Lentil & Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/spicy-chorizo-red-lentil-soup-with-kale-519546\">Spicy Chorizo Red Lentil Soup with Kale</a>.",
        "preco_unitario": 30,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cauliflower Chickpea Stew",
        "descricao": "The recipe Cauliflower Chickpea Stew can be made in roughly 45 minutes. One portion of this dish contains about 14g of protein, 8g of fat, and a total of 455 calories. For $1.4 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe serves 4. It can be enjoyed any time, but it is especially good for Autumn. 2 people have tried and liked this recipe. If you have chili, onion, tumeric, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. It works well as a main course. With a spoonacular score of 92%, this dish is amazing. Try <a href=\"https://spoonacular.com/recipes/cauliflower-chickpea-stew-1364601\">Cauliflower Chickpea Stew</a>, <a href=\"https://spoonacular.com/recipes/spicy-cauliflower-and-chickpea-stew-30449\">Spicy Cauliflower And Chickpea Stew</a>, and <a href=\"https://spoonacular.com/recipes/curried-cauliflower-and-chickpea-stew-30518\">Curried Cauliflower And Chickpea Stew</a> for similar recipes.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegan Colcannon Soup",
        "descricao": "Vegan Colcannon Soup is an European recipe that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipe has 203 calories, 7g of protein, and 5g of fat per serving. For $1.48 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. 1 person were impressed by this recipe. It works well as a rather cheap hor d'oeuvre. This recipe from Foodista requires pepper, juice of lemon, garlic, and russet potatoes. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a great spoonacular score of 82%. Try <a href=\"https://spoonacular.com/recipes/vegan-colcannon-soup-1183083\">Vegan Colcannon Soup</a>, <a href=\"https://spoonacular.com/recipes/vegan-colcannon-92687\">Vegan Colcannon</a>, and <a href=\"https://spoonacular.com/recipes/colcannon-bites-with-collard-greens-vegan-866599\">Colcannon Bites With Collard Greens (Vegan)</a> for similar recipes.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Seasonal Autumn Stew",
        "descricao": "Seasonal Autumn Stew requires approximately 45 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 232 calories, 7g of protein, and 5g of fat per serving. This recipe serves 4. For $1.73 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. Not a lot of people really liked this hor d'oeuvre. 1 person has tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. A mixture of cinnamon, garlic, kale, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 93%, which is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/autumn-stew-438199\">Autumn Stew</a>, <a href=\"https://spoonacular.com/recipes/autumn-harvest-stew-120446\">Autumn Harvest Stew</a>, and <a href=\"https://spoonacular.com/recipes/autumn-chicken-stew-1322771\">Autumn Chicken Stew</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Instant Pot Chicken Taco Soup",
        "descricao": "Need a gluten free and dairy free main course? Instant Pot Chicken Taco Soup could be an excellent recipe to try. One portion of this dish contains approximately 25g of protein, 8g of fat, and a total of 346 calories. This recipe serves 4 and costs $2.72 per serving. Head to the store and pick up chili powder, black beans, green onion, and a few other things to make it today. It is brought to you by Pink When. 3 people were impressed by this recipe. It will be a hit at your Autumn event. Only a few people really liked this Mexican dish. From preparation to the plate, this recipe takes approximately 25 minutes. With a spoonacular score of 92%, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-975070\">Instant Pot Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1351299\">Instant Pot Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1032489\">Instant Pot Chicken Taco Soup</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 25,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Minted Pea & Spinach Soup",
        "descricao": "Minted Pea & Spinach Soup takes about 45 minutes from beginning to end. This gluten free and lacto ovo vegetarian recipe serves 6 and costs 97 cents per serving. One serving contains 184 calories, 7g of protein, and 5g of fat. This recipe is liked by 3 foodies and cooks. It will be a hit at your Autumn event. It works well as a very reasonably priced hor d'oeuvre. Head to the store and pick up chicken stock, water, salt & pepper, and a few other things to make it today. It is brought to you by Foodista. Overall, this recipe earns an excellent spoonacular score of 93%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/minted-pea-spinach-soup-1393981\">Minted Pea & Spinach Soup</a>, <a href=\"https://spoonacular.com/recipes/minted-pea-spinach-soup-1365331\">Minted Pea & Spinach Soup</a>, and <a href=\"https://spoonacular.com/recipes/fresh-spinach-soup-with-minted-pea-cilantro-478482\">Fresh Spinach Soup with Minted Pea & Cilantro</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Homemade Broccoli Cheddar Soup",
        "descricao": "Homemade Broccoli Cheddar Soup could be just the gluten free recipe you've been looking for. One serving contains 498 calories, 22g of protein, and 24g of fat. For $3.25 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe from Foodista requires almond milk, pepper, juice of lemon, and bay leaf. It will be a hit at your Autumn event. 17 people have tried and liked this recipe. It works best as a main course, and is done in roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/cheddar-broccoli-potato-soup-with-homemade-herb-croutons-835630\">Cheddar Broccoli Potato Soup with Homemade Herb Croutons</a>, <a href=\"https://spoonacular.com/recipes/broccoli-cheddar-soup-484964\">Broccoli Cheddar Soup</a>, and <a href=\"https://spoonacular.com/recipes/cheddar-broccoli-soup-1315375\">Cheddar Broccoli Soup</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lentil Rice Soup",
        "descricao": "You can never have too many main course recipes, so give Lentil Rice Soup a try. This recipe makes 10 servings with 204 calories, 13g of protein, and 1g of fat each. For 41 cents per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. It will be a hit at your Autumn event. Head to the store and pick up lentils, pepper, vegetable stock, and a few other things to make it today. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Overall, this recipe earns an outstanding spoonacular score of 90%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/rice-and-lentil-soup-in-a-jar-456429\">Rice and Lentil Soup in a Jar</a>, <a href=\"https://spoonacular.com/recipes/lentil-and-brown-rice-soup-33896\">Lentil And Brown Rice Soup</a>, and <a href=\"https://spoonacular.com/recipes/brown-rice-lentil-and-spinach-soup-19780\">Brown Rice, Lentil, And Spinach Soup</a>.",
        "preco_unitario": 36,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Creamy, Healthy Asparagus Soup with Avocado and Fennel",
        "descricao": "Creamy, Healthy Asparagus Soup with Avocado and Fennel is a gluten free and primal hor d'oeuvre. For $3.44 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. This recipe serves 4. One portion of this dish contains around 9g of protein, 15g of fat, and a total of 238 calories. It will be a hit at your Autumn event. 1 person were glad they tried this recipe. If you have olive oil, greek yogurt, lemon thyme leaves, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 92%, which is awesome. <a href=\"https://spoonacular.com/recipes/creamy-asparagus-soup-with-fennel-115078\">Creamy Asparagus Soup With Fennel</a>, <a href=\"https://spoonacular.com/recipes/creamy-roasted-fennel-and-carrot-soup-with-black-garlic-fennel-oil-474600\">Creamy Roasted Fennel and Carrot Soup with Black Garlic Fennel Oil</a>, and <a href=\"https://spoonacular.com/recipes/creamy-avocado-pasta-with-chicken-and-asparagus-1516179\">Creamy Avocado “Pasta” with Chicken and Asparagus</a> are very similar to this recipe.",
        "preco_unitario": 24,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Armenian Stew",
        "descricao": "Armenian Stew might be just the main course you are searching for. One serving contains 328 calories, 16g of protein, and 3g of fat. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs 82 cents per serving. Autumn will be even more special with this recipe. A mixture of lentils, water, overnight in water, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person were impressed by this recipe. It is brought to you by Foodista. With a spoonacular score of 67%, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/khashlama-armenian-lamb-stew-1182003\">Khashlama (Armenian Lamb Stew)</a>, <a href=\"https://spoonacular.com/recipes/armenian-okra-428053\">Armenian Okra</a>, and <a href=\"https://spoonacular.com/recipes/armenian-cucumbers-22364\">Armenian Cucumbers</a>.",
        "preco_unitario": 33,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chipotle Black Bean Soup with Avocado Cream",
        "descricao": "If you have around 45 minutes to spend in the kitchen, Chipotle Black Bean Soup with Avocado Cream might be a great gluten free and lacto ovo vegetarian recipe to try. One serving contains 284 calories, 12g of protein, and 9g of fat. For $1.35 per serving, you get a hor d'oeuvre that serves 8. A couple people made this recipe, and 37 would say it hit the spot. Autumn will be even more special with this recipe. If you have chipotle peppers in adobo sauce, cilantro leaves, carrots, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 91%. This score is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/citrus-scented-black-bean-soup-with-chipotle-cream-697694\">Citrus-Scented Black Bean Soup with Chipotle Cream</a>, <a href=\"https://spoonacular.com/recipes/black-bean-soup-with-sweet-plantain-and-avocado-cumin-cream-226746\">Black Bean Soup with Sweet Plantain and Avocado-Cumin Cream</a>, and <a href=\"https://spoonacular.com/recipes/chipotle-black-bean-tomato-corn-avocado-salad-791835\">Chipotle Black Bean Tomato Corn Avocado Salad</a>.",
        "preco_unitario": 63,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Autumn In A Bowl Soup",
        "descricao": "Autumn In A Bowl Soup is a gluten free, dairy free, lacto ovo vegetarian, and vegan soup. This recipe serves 8 and costs 88 cents per serving. One serving contains 130 calories, 3g of protein, and 4g of fat. This recipe from Foodista requires of kale, salt and pepper, ears of corn, and sage. It will be a hit at your Autumn event. 1 person has tried and liked this recipe. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 93%, this dish is tremendous. Try <a href=\"https://spoonacular.com/recipes/autumn-nourish-bowl-926209\">Autumn Nourish Bowl</a>, <a href=\"https://spoonacular.com/recipes/autumn-quinoa-buddha-bowl-617480\">Autumn Quinoa Buddha Bowl</a>, and <a href=\"https://spoonacular.com/recipes/roasted-kabocha-squash-bowl-with-autumn-vegetables-24999\">Roasted Kabocha Squash Bowl with Autumn Vegetables</a> for similar recipes.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Miso Soup With Thin Noodles",
        "descricao": "Miso Soup With Thin Noodles could be just the dairy free, lacto ovo vegetarian, and vegan recipe you've been looking for. One portion of this dish contains around 5g of protein, 2g of fat, and a total of 114 calories. For $1.01 per serving, you get a hor d'oeuvre that serves 8. It can be enjoyed any time, but it is especially good for Autumn. It is brought to you by Foodista. It is a reasonably priced recipe for fans of Japanese food. 1 person found this recipe to be flavorful and satisfying. A mixture of thai kitchen rice noodles, spinach, baby carrots, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 89%. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/a-quick-and-easy-soup-miso-soup-with-soba-noodles-or-mung-bean-31003\">A Quick And Easy Soup {miso Soup With Soba Noodles Or Mung Bean</a>, <a href=\"https://spoonacular.com/recipes/soba-noodles-with-miso-broth-37466\">Soba Noodles with Miso Broth</a>, and <a href=\"https://spoonacular.com/recipes/ginger-miso-noodles-with-eggplant-446340\">ginger miso noodles with eggplant</a> for similar recipes.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Easy Slow Cooker Chicken Tortilla Soup",
        "descricao": "Easy Slow Cooker Chicken Tortilla Soup takes approximately 6 hours and 10 minutes from beginning to end. One portion of this dish contains approximately 32g of protein, 4g of fat, and a total of 283 calories. This recipe serves 8 and costs $1.84 per serving. 1429 people were impressed by this recipe. It will be a hit at your Autumn event. A mixture of chicken breast, kernel corn, cilantro, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a reasonably priced main course. It is brought to you by Pink When. It is a good option if you're following a gluten free and dairy free diet. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/easy-slow-cooker-chicken-tortilla-soup-577486\">Easy Slow Cooker Chicken Tortilla Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-tortilla-soup-1571571\">Slow Cooker Chicken Tortilla Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-tortilla-soup-578807\">Slow Cooker Chicken Tortilla Soup</a> for similar recipes.",
        "preco_unitario": 58,
        "tempo_preparo": 370,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Veggie-Quinoa Stuffed Chilis",
        "descricao": "Veggie-Quinoa Stuffed Chilis might be a good recipe to expand your hor d'oeuvre recipe box. One serving contains 260 calories, 8g of protein, and 8g of fat. This gluten free and lacto ovo vegetarian recipe serves 6 and costs $2.42 per serving. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. A mixture of poblano peppers- roasted, sauce: we used roas ed tomato, olive oil, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 89%, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/spicy-corn-skillet-with-garlic-and-chilis-1654895\">Spicy Corn Skillet with Garlic and Chilis</a>, <a href=\"https://spoonacular.com/recipes/chicken-corn-chowder-with-green-chilis-and-bacon-132473\">Chicken Corn Chowder With Green Chilis and Bacon</a>, and <a href=\"https://spoonacular.com/recipes/smoky-grilled-quesadilla-with-anaheim-chilis-and-chicken-253679\">Smoky Grilled Quesadilla with Anaheim Chilis and Chicken</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "The Secret to the Best Ever Instant Pot Lamb Stew",
        "descricao": "If you want to add more dairy free recipes to your recipe box, The Secret to the Best Ever Instant Pot Lamb Stew might be a recipe you should try. This recipe makes 8 servings with 354 calories, 35g of protein, and 10g of fat each. For $2.66 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. It is brought to you by Pink When. It will be a hit at your Autumn event. If you have sweet potatoes, thyme and rosemary, potatoes, and a few other ingredients on hand, you can make it. It works well as a main course. From preparation to the plate, this recipe takes around 40 minutes. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/instant-pot-lamb-stew-1416491\">Instant Pot Lamb Stew</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-middle-eastern-lamb-stew-941346\">Instant Pot Middle Eastern Lamb Stew</a>, and <a href=\"https://spoonacular.com/recipes/beef-stew-with-butternut-squash-instant-pot-stove-top-or-crock-pot-1525013\">Beef Stew with Butternut Squash (Instant Pot, Stove Top or Crock Pot)</a>.",
        "preco_unitario": 69,
        "tempo_preparo": 40,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lentil, Sweet Potato and Spinach Soup",
        "descricao": "If you have approximately 4 hours to spend in the kitchen, Lentil, Sweet Potato and Spinach Soup might be a great gluten free, dairy free, lacto ovo vegetarian, and vegan recipe to try. This recipe serves 6 and costs $1.0 per serving. One serving contains 304 calories, 20g of protein, and 1g of fat. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. It works well as a reasonably priced main course. It is perfect for Autumn. Head to the store and pick up water, garlic, onion, and a few other things to make it today. With a spoonacular score of 92%, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/sweet-potato-and-lentil-soup-with-spinach-617851\">Sweet Potato and Lentil Soup with Spinach</a>, <a href=\"https://spoonacular.com/recipes/sweet-potato-spinach-and-lentil-stoup-33858\">Sweet Potato, Spinach, And Lentil Stoup</a>, and <a href=\"https://spoonacular.com/recipes/spinach-sweet-potato-lentil-dhal-1110156\">Spinach, sweet potato & lentil dhal</a>.",
        "preco_unitario": 57,
        "tempo_preparo": 240,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chock Full Of Broccoli Soup",
        "descricao": "Need a gluten free, dairy free, and lacto ovo vegetarian main course? Chock Full Of Broccoli Soup could be an amazing recipe to try. One portion of this dish contains around 18g of protein, 8g of fat, and a total of 249 calories. For $2.24 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe serves 4. Only a few people made this recipe, and 1 would say it hit the spot. If you have garlic, to 3 broccoli, onion, and a few other ingredients on hand, you can make it. Autumn will be even more special with this recipe. From preparation to the plate, this recipe takes around 30 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 85%. This score is great. Similar recipes include <a href=\"https://spoonacular.com/recipes/chock-full-blondie-squares-188487\">Chock-Full Blondie Squares</a>, <a href=\"https://spoonacular.com/recipes/chock-full-of-fruit-snackin-cake-408716\">Chock-full of Fruit Snackin' Cake</a>, and <a href=\"https://spoonacular.com/recipes/white-bean-hummus-chock-full-of-chives-608968\">White Bean Hummus Chock Full of Chives</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lebanese Lentil Soup",
        "descricao": "Lebanese Lentil Soup is a middl eastern recipe that serves 4. For $6.75 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. This main course has 1157 calories, 27g of protein, and 88g of fat per serving. This recipe is liked by 1 foodies and cooks. This recipe from Foodista requires pepper, onion, lemon juice, and ham bone. Autumn will be even more special with this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free and dairy free diet. Overall, this recipe earns an amazing spoonacular score of 93%. Similar recipes include <a href=\"https://spoonacular.com/recipes/lebanese-lentil-soup-with-spinach-516930\">Lebanese Lentil Soup with Spinach</a>, <a href=\"https://spoonacular.com/recipes/lebanese-lentil-and-swiss-chard-soup-101593\">Lebanese Lentil and Swiss Chard Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-lebanese-lentil-soup-859792\">Slow Cooker Lebanese Lentil Soup</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegetable Minestrone Soup",
        "descricao": "If you want to add more Mediterranean recipes to your recipe box, Vegetable Minestrone Soup might be a recipe you should try. This recipe serves 4 and costs $1.24 per serving. One portion of this dish contains approximately 19g of protein, 4g of fat, and a total of 412 calories. Autumn will be even more special with this recipe. Head to the store and pick up basil, tomato, carrots, and a few other things to make it today. It is brought to you by Foodista. It works best as a main course, and is done in about 30 minutes. 1 person were impressed by this recipe. Taking all factors into account, this recipe earns a spoonacular score of 91%, which is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/vegetable-minestrone-soup-1067333\">Vegetable Minestrone Soup</a>, <a href=\"https://spoonacular.com/recipes/easy-vegetable-minestrone-soup-1154936\">Easy Vegetable Minestrone Soup</a>, and <a href=\"https://spoonacular.com/recipes/vegetable-garden-minestrone-soup-531452\">Vegetable Garden Minestrone Soup</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Carrot and Coriander Soup",
        "descricao": "Carrot and Coriander Soup might be a good recipe to expand your hor d'oeuvre repertoire. One serving contains 354 calories, 5g of protein, and 15g of fat. This recipe serves 1 and costs $1.32 per serving. This recipe from Foodista requires carrots-peeled, onion-chopped, water, and pepper. 3 people were impressed by this recipe. It is perfect for Autumn. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 92%, this dish is outstanding. <a href=\"https://spoonacular.com/recipes/carrot-and-coriander-soup-1198221\">Carrot and coriander soup</a>, <a href=\"https://spoonacular.com/recipes/carrot-and-coriander-soup-630764\">Carrot and coriander soup</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-coriander-soup-1088974\">Carrot and coriander soup</a> are very similar to this recipe.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Winter Vegetable Minestrone Soup",
        "descricao": "Winter Vegetable Minestrone Soup might be just the Mediterranean recipe you are searching for. This recipe makes 6 servings with 333 calories, 16g of protein, and 1g of fat each. For $1.84 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. A mixture of onion, fusilli pasta, tomatoes, and a handful of other ingredients are all it takes to make this recipe so yummy. It works best as a main course, and is done in about 50 minutes. This recipe is liked by 1 foodies and cooks. It will be a hit at your Autumn event. It is brought to you by Foodista. It is a good option if you're following a dairy free diet. With a spoonacular score of 90%, this dish is outstanding. <a href=\"https://spoonacular.com/recipes/winter-minestrone-soup-590911\">Winter Minestrone Soup</a>, <a href=\"https://spoonacular.com/recipes/winter-minestrone-soup-1699115\">Winter Minestrone Soup</a>, and <a href=\"https://spoonacular.com/recipes/winter-minestrone-soup-20386\">Winter Minestrone Soup</a> are very similar to this recipe.",
        "preco_unitario": 52,
        "tempo_preparo": 50,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Hearty, Healthy Beef Stew",
        "descricao": "Hearty, Healthy Beef Stew is a gluten free and dairy free main course. This recipe serves 6. One portion of this dish contains around 29g of protein, 8g of fat, and a total of 418 calories. For $2.58 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. It will be a hit at your Autumn event. This recipe from Foodista requires peas, thyme, red wine, and carrots. From preparation to the plate, this recipe takes roughly 2 hours. Overall, this recipe earns a great spoonacular score of 90%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/hearty-healthy-beef-stew-1221521\">Hearty, Healthy Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/hearty-healthy-beef-stew-1632259\">Hearty, Healthy Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/hearty-healthy-beef-stew-giveaway-834414\">Hearty Healthy Beef Stew + Giveaway</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 120,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Farro & Leek Soup",
        "descricao": "The recipe Farro & Leek Soup can be made in around 45 minutes. One portion of this dish contains roughly 50g of protein, 12g of fat, and a total of 661 calories. This recipe serves 4. For $6.61 per serving, this recipe covers 38% of your daily requirements of vitamins and minerals. If you have tablespoons olive oil, leeks, carrot, and a few other ingredients on hand, you can make it. Autumn will be even more special with this recipe. 8 people were impressed by this recipe. It works well as a pricey main course. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/farro-leek-soup-39109\">Farro & Leek Soup</a>, <a href=\"https://spoonacular.com/recipes/sweet-corn-gouda-and-farro-risotto-plus-15-more-farro-s-youll-love-forever-617100\">Sweet Corn, Goudan and Farro Risotto Plus 15 More Farro s You’ll Love Forever</a>, and <a href=\"https://spoonacular.com/recipes/farro-soup-with-chorizo-20205\">Farro Soup with Chorizo</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chunky Two-Bean Chili",
        "descricao": "If you want to add more American recipes to your recipe box, Chunky Two-Bean Chili might be a recipe you should try. This recipe makes 6 servings with 637 calories, 23g of protein, and 26g of fat each. For $2.13 per serving, this recipe covers 38% of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. It works best as a main course, and is done in roughly 45 minutes. Head to the store and pick up tomatillos, garlic cloves, flour tortillas, and a few other things to make it today. It can be enjoyed any time, but it is especially good for The Super Bowl. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chunky-no-bean-chili-1323149\">Chunky No Bean Chili</a>, <a href=\"https://spoonacular.com/recipes/chunky-two-bean-and-beef-chili-238882\">Chunky Two-Bean and Beef Chili</a>, and <a href=\"https://spoonacular.com/recipes/chunky-chili-409317\">Chunky Chili</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Jean's Seafood Gumbo",
        "descricao": "Forget going out to eat or ordering takeout every time you crave Cajun food. Try making Jean's Seafood Gumbo at home. One serving contains 524 calories, 68g of protein, and 19g of fat. This recipe serves 9 and costs $5.32 per serving. 6 people were impressed by this recipe. This recipe from Foodista requires thyme, salt, tomato paste, and peppers. It works well as a pricey main course. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a dairy free diet. With a spoonacular score of 87%, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/jeans-seafood-gumbo-1394357\">Jean's Seafood Gumbo</a>, <a href=\"https://spoonacular.com/recipes/seafood-gumbo-12109\">Seafood Gumbo</a>, and <a href=\"https://spoonacular.com/recipes/seafood-gumbo-332787\">Seafood Gumbo</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Asian Green Pea Soup",
        "descricao": "Asian Green Pea Soup might be a good recipe to expand your hor d'oeuvre recipe box. This recipe serves 2. For $1.01 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 273 calories, 10g of protein, and 16g of fat per serving. It will be a hit at your Autumn event. 1 person were impressed by this recipe. This recipe is typical of Asian cuisine. A mixture of peas, ginger - remove skin and, drops of virgin olive oil, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 90%, this dish is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/split-pea-green-pea-smoked-ham-soup-221988\">Split pea & green pea smoked ham soup</a>, <a href=\"https://spoonacular.com/recipes/green-pea-soup-with-tarragon-and-pea-sprouts-101122\">Green Pea Soup with Tarragon and Pea Sprouts</a>, and <a href=\"https://spoonacular.com/recipes/green-pea-soup-with-tarragon-and-pea-sprouts-18311\">Green Pea Soup With Tarragon And Pea Sprouts</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Hearty Beef and Mushroom Soup",
        "descricao": "Hearty Beef and Mushroom Soup might be just the main course you are searching for. This recipe serves 4. One serving contains 293 calories, 28g of protein, and 9g of fat. For $2.74 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about 45 minutes. 1 person has made this recipe and would make it again. It is brought to you by Foodista. If you have olive oil, garlic, merlot, and a few other ingredients on hand, you can make it. Autumn will be even more special with this recipe. It is a good option if you're following a gluten free and dairy free diet. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is spectacular. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/hearty-beef-and-mushroom-soup-529878\">Hearty Beef and Mushroom Soup</a>, <a href=\"https://spoonacular.com/recipes/crock-pot-hearty-beef-and-mushroom-soup-483874\">Crock-Pot Hearty Beef and Mushroom Soup</a>, and <a href=\"https://spoonacular.com/recipes/beef-soup-series-part-3-hearty-beef-vegetable-soup-595058\">Beef Soup Series – Part 3: Hearty Beef Vegetable Soup</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spinach and potato soup",
        "descricao": "If you want to add more gluten free and lacto ovo vegetarian recipes to your repertoire, Spinach and potato soup might be a recipe you should try. One serving contains 266 calories, 10g of protein, and 10g of fat. This recipe serves 2 and costs $2.06 per serving. It works best as a hor d'oeuvre, and is done in approximately 45 minutes. Autumn will be even more special with this recipe. Not a lot of people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. If you have water, pepper flakes, spinach leaves, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/spinach-potato-soup-392892\">Spinach Potato Soup</a>, <a href=\"https://spoonacular.com/recipes/potato-spinach-soup-94696\">Potato Spinach Soup</a>, and <a href=\"https://spoonacular.com/recipes/curried-spinach-potato-soup-760696\">Curried Spinach-Potato Soup</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Farm Fresh Vegetable Stew",
        "descricao": "Farm Fresh Vegetable Stew requires approximately 45 minutes from start to finish. This recipe serves 7 and costs $1.47 per serving. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 264 calories, 13g of protein, and 5g of fat per serving. Not a lot of people made this recipe, and 3 would say it hit the spot. If you have kidney beans, peppers, cumin, and a few other ingredients on hand, you can make it. It works well as a main course. It will be a hit at your Autumn event. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/farm-fresh-quiche-394093\">Farm Fresh Quiche</a>, <a href=\"https://spoonacular.com/recipes/farm-fresh-turkey-chili-506270\">Farm Fresh Turkey Chili</a>, and <a href=\"https://spoonacular.com/recipes/farm-fresh-portobella-burgers-99089\">Farm Fresh Portobella Burgers</a> for similar recipes.",
        "preco_unitario": 45,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Italian Seafood Stew",
        "descricao": "Italian Seafood Stew could be just the gluten free, dairy free, paleolithic, and primal recipe you've been looking for. For $12.1 per serving, this recipe covers 68% of your daily requirements of vitamins and minerals. One portion of this dish contains about 69g of protein, 12g of fat, and a total of 611 calories. This recipe serves 3. Only a few people really liked this main course. 1 person has tried and liked this recipe. If you have tomato, bay leaves, tomato paste, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Autumn will be even more special with this recipe. It is a pricey recipe for fans of Mediterranean food. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a tremendous spoonacular score of 92%. Try <a href=\"https://spoonacular.com/recipes/italian-seafood-stew-697627\">Italian Seafood Stew</a>, <a href=\"https://spoonacular.com/recipes/italian-seafood-stew-with-garlic-herb-croutons-170838\">Italian Seafood Stew with Garlic-Herb Croutons</a>, and <a href=\"https://spoonacular.com/recipes/seafood-stew-1145\">Seafood Stew</a> for similar recipes.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "San Francisco Cioppino",
        "descricao": "If you have roughly 45 minutes to spend in the kitchen, San Francisco Cioppino might be a super gluten free, dairy free, paleolithic, and primal recipe to try. One serving contains 557 calories, 77g of protein, and 12g of fat. This recipe serves 8. For $7.18 per serving, this recipe covers 47% of your daily requirements of vitamins and minerals. It works well as a main course. If you have basil, scallops, wine, and a few other ingredients on hand, you can make it. 4 people found this recipe to be scrumptious and satisfying. It is brought to you by Foodista. Overall, this recipe earns a great spoonacular score of 89%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/san-francisco-cioppino-1318257\">San Francisco Cioppino</a>, <a href=\"https://spoonacular.com/recipes/san-francisco-cioppino-184397\">San Francisco Cioppino</a>, and <a href=\"https://spoonacular.com/recipes/san-francisco-cioppino-1394503\">San Francisco Cioppino</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lentil Soup with Chorizo",
        "descricao": "If you want to add more gluten free and dairy free recipes to your recipe box, Lentil Soup with Chorizo might be a recipe you should try. One portion of this dish contains about 30g of protein, 19g of fat, and a total of 490 calories. For $2.56 per serving, you get a main course that serves 4. It will be a hit at your Autumn event. From preparation to the plate, this recipe takes roughly 30 minutes. 1 person were impressed by this recipe. A mixture of chicken stock, sunflower oil, paprika, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular score of 85%, this dish is amazing. Similar recipes are <a href=\"https://spoonacular.com/recipes/white-lentil-soup-with-chorizo-and-paprika-cream-soupe-aux-lentilles-blondes-avec-chorizo-et-crme-au-paprika-34076\">White lentil soup with chorizo and paprika cream — Soupe aux lentilles blondes avec chorizo et crème au paprika</a>, <a href=\"https://spoonacular.com/recipes/chorizo-and-lentil-soup-246649\">Chorizo and Lentil Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-and-chorizo-soup-1093487\">Lentil and Chorizo Soup</a>.",
        "preco_unitario": 44,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Kale and Roasted Sweet Potato Soup with Chicken Sausage",
        "descricao": "You can never have too many main course recipes, so give Kale and Roasted Sweet Potato Soup with Chicken Sausage a try. One portion of this dish contains around 21g of protein, 26g of fat, and a total of 529 calories. This recipe serves 4 and costs $2.93 per serving. This recipe from Foodista has 2 fans. It is perfect for Autumn. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. If you have thyme, olive oil, chili flakes, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 89%. This score is outstanding. <a href=\"https://spoonacular.com/recipes/kale-and-roasted-sweet-potato-soup-with-chicken-sausage-1356873\">Kale and Roasted Sweet Potato Soup with Chicken Sausage</a>, <a href=\"https://spoonacular.com/recipes/kale-and-roasted-sweet-potato-soup-with-chicken-sausage-1434113\">Kale and Roasted Sweet Potato Soup with Chicken Sausage</a>, and <a href=\"https://spoonacular.com/recipes/sweet-potato-sausage-kale-soup-527141\">Sweet Potato, Sausage & Kale Soup</a> are very similar to this recipe.",
        "preco_unitario": 25,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chilled Avocado and Cucumber Soup With Prawn and Scallop Salsa",
        "descricao": "Chilled Avocado and Cucumber Soup With Prawn and Scallop Salsan is a gluten free, dairy free, and pescatarian recipe with 4 servings. For $8.32 per serving, this recipe covers 47% of your daily requirements of vitamins and minerals. This main course has 547 calories, 33g of protein, and 33g of fat per serving. 1 person has tried and liked this recipe. Head to the store and pick up prawns, coriander leaves, lime zest, and a few other things to make it today. It is perfect for Autumn. Only a few people really liked this Mexican dish. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. With a spoonacular score of 72%, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/chilled-avocado-cucumber-soup-21420\">Chilled Avocado Cucumber Soup</a>, <a href=\"https://spoonacular.com/recipes/chilled-avocado-cucumber-soup-21743\">Chilled Avocado-cucumber Soup</a>, and <a href=\"https://spoonacular.com/recipes/chilled-avocado-cucumber-soup-102308\">Chilled Avocado & Cucumber Soup</a> for similar recipes.",
        "preco_unitario": 32,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Mushroom Tofu Stew",
        "descricao": "Mushroom Tofu Stew is a gluten free, dairy free, and lacto ovo vegetarian recipe with 1 servings. This main course has 513 calories, 41g of protein, and 9g of fat per serving. For $9.4 per serving, this recipe covers 42% of your daily requirements of vitamins and minerals. It is perfect for Autumn. It is brought to you by Foodista. This recipe is liked by 1 foodies and cooks. Head to the store and pick up garlic, strong mushroom broth, carrots, and a few other things to make it today. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/spicy-tofu-stew-757852\">Spicy Tofu Stew</a>, <a href=\"https://spoonacular.com/recipes/tofu-and-kimchi-stew-1582953\">Tofu and Kimchi Stew</a>, and <a href=\"https://spoonacular.com/recipes/tofu-and-kimchi-stew-998341\">Tofu and Kimchi Stew</a>.",
        "preco_unitario": 38,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Pho With Zucchini Noodles",
        "descricao": "Pho With Zucchini Noodles is a gluten free and dairy free main course. For $8.15 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. This recipe serves 2. One portion of this dish contains roughly 49g of protein, 6g of fat, and a total of 322 calories. This recipe is liked by 1 foodies and cooks. Not a lot of people really liked this Vietnamese dish. Head to the store and pick up cloves, basil, cinnamon sticks, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 30 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/chicken-pho-with-daikon-noodles-1314129\">Chicken Pho with Daikon Noodles</a>, <a href=\"https://spoonacular.com/recipes/easy-pho-with-daikon-noodles-679671\">Easy Pho with Daikon Noodles</a>, and <a href=\"https://spoonacular.com/recipes/chicken-pho-with-daikon-noodles-629688\">Chicken Pho with Daikon Noodles</a>.",
        "preco_unitario": 45,
        "tempo_preparo": 30,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "African Bean Soup",
        "descricao": "Forget going out to eat or ordering takeout every time you crave African food. Try making African Bean Soup at home. For 43 cents per serving, you get a hor d'oeuvre that serves 4. One serving contains 189 calories, 10g of protein, and 5g of fat. 1 person were glad they tried this recipe. It will be a hit at your Autumn event. It is brought to you by Foodista. A mixture of water, carrots, peanut butter, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/african-pumpkin-and-bean-soup-1236381\">African Pumpkin and Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/african-pumpkin-and-bean-soup-1282455\">African Pumpkin and Bean Soup</a>, and <a href=\"https://spoonacular.com/recipes/african-pumpkin-and-bean-soup-1319249\">African Pumpkin and Bean Soup</a>.",
        "preco_unitario": 37,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Smokey Rainbow Chili",
        "descricao": "Smokey Rainbow Chili is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 8 servings. One serving contains 218 calories, 9g of protein, and 5g of fat. For $1.07 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 7 would say it hit the spot. From preparation to the plate, this recipe takes around 45 minutes. This recipe from Foodista requires olive oil, stewed tomatoes, ground pepper, and chili powder. It works well as a budget friendly hor d'oeuvre. It will be a hit at your The Super Bowl event. This recipe is typical of American cuisine. With a spoonacular score of 85%, this dish is great. <a href=\"https://spoonacular.com/recipes/7th-annual-chili-contest-entry-smokey-chipotle-chili-with-ranch-sour-cream-weekly-menu-832601\">7th Annual Chili Contest: Entry – Smokey Chipotle Chili with Ranch Sour Cream + Weekly Menu</a>, <a href=\"https://spoonacular.com/recipes/smokey-chili-roasted-broccoli-109681\">Smokey Chili Roasted Broccoli</a>, and <a href=\"https://spoonacular.com/recipes/smokey-slow-cooker-chili-108120\">Smokey Slow Cooker Chili</a> are very similar to this recipe.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lamb Tagine Stew",
        "descricao": "The recipe Lamb Tagine Stew can be made in about 45 minutes. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has 941 calories, 48g of protein, and 71g of fat per serving. This recipe serves 4. For $4.7 per serving, this recipe covers 41% of your daily requirements of vitamins and minerals. It works well as a rather pricey main course for Autumn. 2 people were glad they tried this recipe. Head to the store and pick up oregano, juice of lemon, lamb stock, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 83%, which is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/lamb-tagine-stew-1404521\">Lamb Tagine Stew</a>, <a href=\"https://spoonacular.com/recipes/lamb-tagine-97554\">Lamb Tagine</a>, and <a href=\"https://spoonacular.com/recipes/lamb-tagine-97171\">Lamb Tagine</a>.",
        "preco_unitario": 36,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chili chops with cauliflower salad",
        "descricao": "You can never have too many American recipes, so give Chili chops with cauliflower salad a try. This recipe makes 4 servings with 455 calories, 34g of protein, and 26g of fat each. For $3.06 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. A mixture of lemon juice, chilies, pork chops, and a handful of other ingredients are all it takes to make this recipe so tasty. This recipe from Foodista has 10 fans. The Super Bowl will be even more special with this recipe. From preparation to the plate, this recipe takes around 45 minutes. It works well as a rather pricey main course. It is a good option if you're following a gluten free diet. With a spoonacular score of 88%, this dish is excellent. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/chili-chops-399509\">Chili Chops</a>, <a href=\"https://spoonacular.com/recipes/chili-chops-417937\">Chili Chops</a>, and <a href=\"https://spoonacular.com/recipes/lamb-chops-with-cauliflower-and-raisins-15646\">Lamb Chops with Cauliflower and Raisins</a>.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Sweet Pepper and Heirloom Tomato Gazpacho",
        "descricao": "Need a gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d'oeuvre? Sweet Pepper and Heirloom Tomato Gazpacho could be an awesome recipe to try. This recipe serves 4 and costs $1.87 per serving. One portion of this dish contains around 2g of protein, 14g of fat, and a total of 169 calories. Only a few people made this recipe, and 1 would say it hit the spot. It is perfect for Summer. This recipe from Foodista requires peppers, garlic, cucumber, and salt and pepper. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a great spoonacular score of 90%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/heirloom-tomato-gazpacho-23401\">Heirloom Tomato Gazpacho</a>, <a href=\"https://spoonacular.com/recipes/heirloom-tomato-gazpacho-with-lobster-232021\">Heirloom Tomato Gazpacho with Lobster</a>, and <a href=\"https://spoonacular.com/recipes/lazy-heirloom-tomato-gazpacho-254812\">Lazy Heirloom Tomato Gazpacho</a>.",
        "preco_unitario": 61,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Ham and Red Bean Soup",
        "descricao": "Ham and Red Bean Soup is a gluten free and dairy free main course. This recipe makes 6 servings with 236 calories, 19g of protein, and 6g of fat each. For $1.59 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This recipe from Foodista has 2 fans. A mixture of carrots, peppercorns, celery, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Autumn will be even more special with this recipe. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 75%, which is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/ham-and-red-bean-soup-1395041\">Ham and Red Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/navy-bean-ham-and-bean-soup-119353\">Navy Bean (Ham and Bean) Soup</a>, and <a href=\"https://spoonacular.com/recipes/ham-and-bean-soup-1333163\">Ham and Bean Soup</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chipotle Turkey Chili",
        "descricao": "Chipotle Turkey Chili might be just the American recipe you are searching for. This recipe serves 4 and costs $4.81 per serving. This main course has 549 calories, 52g of protein, and 22g of fat per serving. 1 person found this recipe to be scrumptious and satisfying. It is perfect for The Super Bowl. It is brought to you by Foodista. A mixture of chicken stock, garlic, extra virgin olive oil, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free diet. Taking all factors into account, this recipe earns a spoonacular score of 83%, which is excellent. Try <a href=\"https://spoonacular.com/recipes/quick-easy-chipotle-turkey-chili-for-a-chili-cook-off-492881\">Quick & Easy Chipotle Turkey Chili for a Chili Cook-Off</a>, <a href=\"https://spoonacular.com/recipes/chipotle-turkey-chili-1263215\">Chipotle Turkey Chili</a>, and <a href=\"https://spoonacular.com/recipes/chipotle-turkey-chili-171623\">Chipotle Turkey Chili</a> for similar recipes.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spring Vegetables Soup",
        "descricao": "Spring Vegetables Soup is a gluten free, dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre. This recipe makes 5 servings with 210 calories, 5g of protein, and 6g of fat each. For 51 cents per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. Spring will be even more special with this recipe. Head to the store and pick up carrots, salt and pepper, potatoes, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 40 minutes. Overall, this recipe earns a tremendous spoonacular score of 87%. Similar recipes are <a href=\"https://spoonacular.com/recipes/hot-and-sour-soup-with-spring-vegetables-1298269\">Hot and Sour Soup with Spring Vegetables</a>, <a href=\"https://spoonacular.com/recipes/hot-and-sour-soup-with-spring-vegetables-879711\">Hot and Sour Soup with Spring Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-dumpling-soup-with-spring-vegetables-1436971\">Chicken and Dumpling Soup with Spring Vegetables</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 40,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash and Tahini Soup",
        "descricao": "Butternut Squash and Tahini Soup takes approximately 45 minutes from beginning to end. For $1.65 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. One portion of this dish contains around 11g of protein, 6g of fat, and a total of 296 calories. This recipe serves 6. This recipe from Foodista requires olive oil, tahiti paste, stock, and lentils. Not a lot of people really liked this hor d'oeuvre. It is perfect for Autumn. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is liked by 1 foodies and cooks. Overall, this recipe earns an amazing spoonacular score of 87%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/butternut-squash-and-tahini-soup-1217807\">Butternut Squash and Tahini Soup</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-and-tahini-spread-619321\">Butternut Squash and Tahini Spread</a>, and <a href=\"https://spoonacular.com/recipes/roasted-butternut-squash-with-pomegranate-and-tahini-707575\">Roasted Butternut Squash with Pomegranate and Tahini</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Slow Cooked Black Bean Soup",
        "descricao": "The recipe Slow Cooked Black Bean Soup can be made in around 2 hours and 50 minutes. This main course has 297 calories, 17g of protein, and 1g of fat per serving. This recipe serves 4 and costs $1.08 per serving. Autumn will be even more special with this recipe. Head to the store and pick up bell pepper, tomatoes, garlic, and a few other things to make it today. 1 person has tried and liked this recipe. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. It is brought to you by Foodista. Overall, this recipe earns a solid spoonacular score of 79%. <a href=\"https://spoonacular.com/recipes/chicken-black-bean-tacos-slow-cooked-539932\">Chicken & Black Bean Tacos (Slow Cooked…)</a>, <a href=\"https://spoonacular.com/recipes/brazilian-feijoada-slow-cooked-pork-and-black-bean-stew-569371\">Brazilian Feijoada {Slow Cooked Pork and Black Bean Stew}</a>, and <a href=\"https://spoonacular.com/recipes/brazilian-feijoada-slow-cooked-pork-and-black-bean-stew-1330869\">Brazilian Feijoada {Slow Cooked Pork and Black Bean Stew}</a> are very similar to this recipe.",
        "preco_unitario": 47,
        "tempo_preparo": 170,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Monastery soup",
        "descricao": "Monastery soup is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 4 servings. One serving contains 293 calories, 7g of protein, and 8g of fat. For $1.57 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. 7 people were glad they tried this recipe. It works best as a hor d'oeuvre, and is done in approximately 45 minutes. It will be a hit at your Autumn event. This recipe from Foodista requires parsley, carrots, broad beans, and vegetable stock. With a spoonacular score of 89%, this dish is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/monastery-soup-1412001\">Monastery soup</a>, <a href=\"https://spoonacular.com/recipes/a-quick-and-easy-soup-miso-soup-with-soba-noodles-or-mung-bean-31003\">A Quick And Easy Soup {miso Soup With Soba Noodles Or Mung Bean</a>, and <a href=\"https://spoonacular.com/recipes/pea-soup-with-lettuce-and-mint-aka-clean-out-the-fridge-soup-569347\">Pea soup with lettuce and mint (aka: clean out the fridge soup!)</a>.",
        "preco_unitario": 34,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Ribollita Inspired Bean Stew",
        "descricao": "The recipe Ribollitan Inspired Bean Stew can be made in approximately 45 minutes. For $2.81 per serving, this recipe covers 42% of your daily requirements of vitamins and minerals. This main course has 510 calories, 27g of protein, and 22g of fat per serving. This recipe serves 4. 1 person found this recipe to be scrumptious and satisfying. It is brought to you by Foodista. It is a good option if you're following a gluten free diet. If you have tomatoes, olive oil, garlic cloves, and a few other ingredients on hand, you can make it. It can be enjoyed any time, but it is especially good for Autumn. All things considered, we decided this recipe deserves a spoonacular score of 78%. This score is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/ribollita-tuscan-vegetable-stew-624938\">Ribollita (Tuscan Vegetable Stew)</a>, <a href=\"https://spoonacular.com/recipes/three-bean-ribollita-93728\">Three Bean Ribollita</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-soup-1155949\">Tuscan Soup</a>.",
        "preco_unitario": 48,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Salmon Butternut Squash Corn Chowder",
        "descricao": "Salmon Butternut Squash Corn Chowder might be just the main course you are searching for. This gluten free and pescatarian recipe serves 4 and costs $3.12 per serving. One portion of this dish contains roughly 22g of protein, 12g of fat, and a total of 326 calories. 2 people were impressed by this recipe. If you have butternut squash, onion, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Overall, this recipe earns an amazing spoonacular score of 86%. Try <a href=\"https://spoonacular.com/recipes/salmon-butternut-squash-corn-chowder-1288581\">Salmon Butternut Squash Corn Chowder</a>, <a href=\"https://spoonacular.com/recipes/corn-and-butternut-squash-chowder-105432\">Corn and Butternut Squash Chowder</a>, and <a href=\"https://spoonacular.com/recipes/curried-coconut-turkey-chowder-with-corn-and-butternut-squash-12560\">Curried Coconut Turkey Chowder With Corn And Butternut Squash</a> for similar recipes.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lentil Soup with Smoked Turkey",
        "descricao": "The recipe Lentil Soup with Smoked Turkey can be made in around 45 minutes. This main course has 389 calories, 28g of protein, and 12g of fat per serving. For $1.24 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. This recipe serves 10. It can be enjoyed any time, but it is especially good for Autumn. Only a few people made this recipe, and 1 would say it hit the spot. If you have salt, parmigiano reggiano, lemon zest, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free diet. Overall, this recipe earns an awesome spoonacular score of 91%. <a href=\"https://spoonacular.com/recipes/lentil-soup-with-smoked-turkey-34100\">Lentil Soup with Smoked Turkey</a>, <a href=\"https://spoonacular.com/recipes/smoked-turkey-lentil-soup-202267\">Smoked Turkey-Lentil Soup</a>, and <a href=\"https://spoonacular.com/recipes/smoked-turkey-and-lentil-vegetable-soup-167828\">Smoked Turkey and Lentil Vegetable Soup</a> are very similar to this recipe.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Butternut Squash and Black Bean Chili with Bulgar",
        "descricao": "You can never have too many hor d'oeuvre recipes, so give Butternut Squash and Black Bean Chili with Bulgar a try. This recipe serves 6 and costs $1.26 per serving. One serving contains 231 calories, 9g of protein, and 3g of fat. This recipe from Foodista requires onion, bulgur, butternut squash, and olive oil. It is a budget friendly recipe for fans of American food. 1 person were glad they tried this recipe. It is perfect for The Super Bowl. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 85%. This score is great. Try <a href=\"https://spoonacular.com/recipes/butternut-squash-black-bean-chili-682082\">Butternut Squash Black Bean Chili</a>, <a href=\"https://spoonacular.com/recipes/black-bean-chili-with-butternut-squash-1207473\">Black Bean Chili with Butternut Squash</a>, and <a href=\"https://spoonacular.com/recipes/black-bean-chili-with-butternut-squash-105911\">Black Bean Chili with Butternut Squash</a> for similar recipes.",
        "preco_unitario": 69,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Sweet Potato, Kale & White Bean Soup",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Sweet Potato, Kale & White Bean Soup might be a recipe you should try. This recipe serves 4. One portion of this dish contains roughly 10g of protein, 4g of fat, and a total of 261 calories. For $1.81 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. 2 people were impressed by this recipe. It works well as a reasonably priced hor d'oeuvre. Autumn will be even more special with this recipe. A mixture of white wine, cannellini beans, onion, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a spectacular spoonacular score of 87%. <a href=\"https://spoonacular.com/recipes/sweet-potato-kale-white-bean-soup-1367305\">Sweet Potato, Kale & White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/kale-white-bean-and-sweet-potato-soup-15319\">Kale, White Bean, And Sweet Potato Soup</a>, and <a href=\"https://spoonacular.com/recipes/spiralized-sweet-potato-white-bean-and-kale-bake-837354\">Spiralized Sweet Potato, White Bean and Kale Bake</a> are very similar to this recipe.",
        "preco_unitario": 56,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Romanian Pea and Chicken Stew",
        "descricao": "The recipe Romanian Pean and Chicken Stew can be made in approximately 45 minutes. For $2.6 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free and dairy free recipe has 407 calories, 39g of protein, and 8g of fat per serving. This recipe serves 4. Only a few people really liked this Eastern European dish. This recipe from Foodista has 1 fans. If you have chicken broth, chicken breast, tomato paste, and a few other ingredients on hand, you can make it. It will be a hit at your Autumn event. It works well as a main course. All things considered, we decided this recipe deserves a spoonacular score of 84%. This score is great. Similar recipes are <a href=\"https://spoonacular.com/recipes/creamy-pea-chicken-stew-695875\">Creamy Pea & Chicken Stew</a>, <a href=\"https://spoonacular.com/recipes/chicken-ghiveci-romanian-braised-chicken-1253567\">Chicken Ghiveci (Romanian Braised Chicken)</a>, and <a href=\"https://spoonacular.com/recipes/chicken-ghiveci-romanian-braised-chicken-1257655\">Chicken Ghiveci (Romanian Braised Chicken)</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Light Cream Of Broccoli Soup With Cheddar Cheese",
        "descricao": "Light Cream Of Broccoli Soup With Cheddar Cheese requires approximately 45 minutes from start to finish. For $1.99 per serving, you get a main course that serves 4. One serving contains 190 calories, 16g of protein, and 4g of fat. Head to the store and pick up broccoli slaw, water, chicken broth, and a few other things to make it today. Not a lot of people made this recipe, and 1 would say it hit the spot. It can be enjoyed any time, but it is especially good for Autumn. It is brought to you by Foodista. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. With a spoonacular score of 88%, this dish is amazing. Try <a href=\"https://spoonacular.com/recipes/light-cream-of-broccoli-soup-1209407\">Light Cream of Broccoli Soup</a>, <a href=\"https://spoonacular.com/recipes/light-cream-of-broccoli-soup-685193\">Light Cream of Broccoli Soup</a>, and <a href=\"https://spoonacular.com/recipes/cream-of-broccoli-cheddar-soup-109798\">Cream of Broccoli Cheddar Soup</a> for similar recipes.",
        "preco_unitario": 68,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Italian Sausage and Vegetable Soup",
        "descricao": "Italian Sausage and Vegetable Soup is a Mediterranean main course. This recipe serves 6. For $2.01 per serving, this recipe covers 32% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free and dairy free recipe has 471 calories, 23g of protein, and 28g of fat per serving. 1 person found this recipe to be delicious and satisfying. It is brought to you by Foodista. If you have olive oil, spinach, onion, and a few other ingredients on hand, you can make it. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes about 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 72%, which is pretty good. Try <a href=\"https://spoonacular.com/recipes/slow-cooker-easy-italian-sausage-vegetable-soup-164323\">Slow-Cooker Easy Italian Sausage Vegetable Soup</a>, <a href=\"https://spoonacular.com/recipes/hearty-italian-turkey-sausage-meatball-and-vegetable-soup-530644\">Hearty Italian Turkey Sausage Meatball and Vegetable Soup</a>, and <a href=\"https://spoonacular.com/recipes/30-minute-chicken-sausage-and-italian-vegetable-kebabs-769685\">30-minute Chicken Sausage and Italian Vegetable Kebabs</a> for similar recipes.",
        "preco_unitario": 54,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Kobocha Squash and Ginger Soup",
        "descricao": "Kobocha Squash and Ginger Soup might be just the main course you are searching for. One serving contains 358 calories, 14g of protein, and 18g of fat. For $1.81 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. This recipe serves 6. This recipe from Foodista requires garlic, salt, ginger, and multigrain bread. This recipe is liked by 1 foodies and cooks. It can be enjoyed any time, but it is especially good for Autumn. It is a good option if you're following a lacto ovo vegetarian diet. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 85%. This score is great. Similar recipes include <a href=\"https://spoonacular.com/recipes/ginger-squash-soup-384550\">Ginger Squash Soup</a>, <a href=\"https://spoonacular.com/recipes/ginger-butternut-squash-soup-612492\">Ginger Butternut Squash Soup</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-soup-with-ginger-106352\">Butternut Squash Soup with Ginger</a>.",
        "preco_unitario": 50,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "The Perfect Butter Beans Stew",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, The Perfect Butter Beans Stew might be a recipe you should try. This hor d'oeuvre has 143 calories, 8g of protein, and 3g of fat per serving. For 43 cents per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. This recipe serves 6. This recipe from Foodista has 3 fans. It will be a hit at your Autumn event. If you have lima beans *soaked overnight, tarragon, tarragon, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/the-perfect-butter-beans-stew-1373539\">The Perfect Butter Beans Stew</a>, <a href=\"https://spoonacular.com/recipes/perfect-black-beans-310859\">Perfect Black Beans</a>, and <a href=\"https://spoonacular.com/recipes/perfect-refried-beans-1232339\">Perfect Refried Beans</a>.",
        "preco_unitario": 49,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chicken Tortilla Soup with Fire Roasted Tomatoes",
        "descricao": "If you have roughly 45 minutes to spend in the kitchen, Chicken Tortilla Soup with Fire Roasted Tomatoes might be a tremendous gluten free recipe to try. This main course has 926 calories, 46g of protein, and 45g of fat per serving. This recipe serves 6 and costs $3.92 per serving. 1 person has made this recipe and would make it again. Head to the store and pick up avocado, corn tortillas, cilantro, and a few other things to make it today. It is brought to you by Foodista. It can be enjoyed any time, but it is especially good for Autumn. Taking all factors into account, this recipe earns a spoonacular score of 80%, which is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-tortilla-soup-with-chipotle-and-fire-roasted-tomato-287588\">Chicken Tortilla Soup with Chipotle and Fire Roasted Tomato</a>, <a href=\"https://spoonacular.com/recipes/fire-roasted-tortilla-soup-with-ancho-tortilla-strips-1202139\">Fire Roasted Tortilla Soup with Ancho Tortilla Strips</a>, and <a href=\"https://spoonacular.com/recipes/fire-roasted-tortilla-soup-with-ancho-tortilla-strips-667023\">Fire Roasted Tortilla Soup with Ancho Tortilla Strips</a>.",
        "preco_unitario": 68,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Lemon Vegetable Soup",
        "descricao": "Lemon Vegetable Soup is a hor d'oeuvre that serves 4. One serving contains 203 calories, 10g of protein, and 1g of fat. For $1.43 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. Head to the store and pick up lemon, carrots, oregano, and a few other things to make it today. It is brought to you by Foodista. It will be a hit at your Autumn event. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person were impressed by this recipe. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Overall, this recipe earns an excellent spoonacular score of 86%. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lemon-chicken-quinoa-vegetable-soup-629447\">Lemon Chicken Quinoa Vegetable Soup</a>, <a href=\"https://spoonacular.com/recipes/green-vegetable-soup-with-lemon-basil-pesto-348610\">Green Vegetable Soup with Lemon-Basil Pesto</a>, and <a href=\"https://spoonacular.com/recipes/spiced-moroccan-vegetable-soup-with-chickpeas-cilantro-and-lemon-harira-993992\">Spiced Moroccan Vegetable Soup with Chickpeas, Cilantro, and Lemon (Harira)</a>.",
        "preco_unitario": 40,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Trinidad Callaloo Soup",
        "descricao": "Trinidad Callaloo Soup is a Central American main course. One portion of this dish contains approximately 19g of protein, 42g of fat, and a total of 583 calories. For $3.25 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. 1 person were glad they tried this recipe. It is a good option if you're following a gluten free and dairy free diet. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by Foodista. Head to the store and pick up onion, okra, crab meat, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 80%, which is great. Similar recipes are <a href=\"https://spoonacular.com/recipes/trinidad-callaloo-soup-1241059\">Trinidad Callaloo Soup</a>, <a href=\"https://spoonacular.com/recipes/callaloo-34790\">Callaloo</a>, and <a href=\"https://spoonacular.com/recipes/trini-callaloo-1614299\">Trini Callaloo</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chicken and Chickpea Chili",
        "descricao": "The recipe Chicken and Chickpea Chili can be made in about 1 hour. This recipe serves 6 and costs $2.19 per serving. This main course has 610 calories, 37g of protein, and 18g of fat per serving. This recipe is typical of American cuisine. This recipe is liked by 1 foodies and cooks. A mixture of sugar, bay leaf, pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. It will be a hit at your The Super Bowl event. It is brought to you by Foodista. It is a good option if you're following a dairy free diet. Taking all factors into account, this recipe earns a spoonacular score of 88%, which is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-salsa-verde-chicken-chickpea-chili-720884\">Slow Cooker Salsa Verde Chicken Chickpea Chili</a>, <a href=\"https://spoonacular.com/recipes/chickpea-chili-31899\">Chickpea Chili</a>, and <a href=\"https://spoonacular.com/recipes/moroccan-chickpea-chili-1266677\">Moroccan Chickpea Chili</a>.",
        "preco_unitario": 46,
        "tempo_preparo": 60,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Broccoli-Cheddar Soup",
        "descricao": "Broccoli-Cheddar Soup could be just the gluten free recipe you've been looking for. For $1.6 per serving, you get a main course that serves 4. One serving contains 206 calories, 15g of protein, and 9g of fat. This recipe is liked by 1 foodies and cooks. It is perfect for Autumn. Head to the store and pick up sml broccoli flowerets, salt, water, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. With a spoonacular score of 78%, this dish is pretty good. <a href=\"https://spoonacular.com/recipes/broccoli-cheddar-soup-617139\">Broccoli Cheddar Soup</a>, <a href=\"https://spoonacular.com/recipes/broccoli-cheddar-soup-623138\">Broccoli Cheddar Soup</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-cheddar-soup-492132\">Broccoli Cheddar Soup</a> are very similar to this recipe.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Superbowl Chili",
        "descricao": "If you want to add more gluten free recipes to your recipe box, Superbowl Chili might be a recipe you should try. This recipe serves 8. This main course has 662 calories, 64g of protein, and 33g of fat per serving. For $5.06 per serving, this recipe covers 42% of your daily requirements of vitamins and minerals. It will be a hit at your The Super Bowl event. 3 people were impressed by this recipe. It is a pricey recipe for fans of American food. This recipe from Foodista requires lime, canned tomatoes, sirloin steak, and chipotle chile pepper in adobo sauce. From preparation to the plate, this recipe takes about 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 83%, which is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/superbowl-chili-1372949\">Superbowl Chili</a>, <a href=\"https://spoonacular.com/recipes/superbowl-chili-1406039\">Superbowl Chili</a>, and <a href=\"https://spoonacular.com/recipes/lean-mean-game-day-chili-superbowl-550253\">Lean Mean Game Day Chili – Superbowl</a>.",
        "preco_unitario": 35,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "White Bean and Garlic Soup with Spinach and Crispy Prosciutto and Rosemary-Garlic Toasts",
        "descricao": "White Bean and Garlic Soup with Spinach and Crispy Prosciutto and Rosemary-Garlic Toasts is a dairy free main course. This recipe makes 4 servings with 808 calories, 38g of protein, and 28g of fat each. For $3.86 per serving, this recipe covers 49% of your daily requirements of vitamins and minerals. Head to the store and pick up olive oil, prosciutto, onion, and a few other things to make it today. Not a lot of people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 1 hour. It can be enjoyed any time, but it is especially good for Autumn. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is outstanding. Similar recipes are <a href=\"https://spoonacular.com/recipes/hearty-white-bean-and-spinach-soup-with-rosemary-and-garlic-vegan-197133\">Hearty White Bean and Spinach Soup with Rosemary and Garlic (Vegan)</a>, <a href=\"https://spoonacular.com/recipes/easy-rosemary-garlic-white-bean-soup-1401113\">Easy Rosemary Garlic White Bean Soup</a>, and <a href=\"https://spoonacular.com/recipes/easy-rosemary-garlic-white-bean-soup-1134774\">Easy Rosemary Garlic White Bean Soup</a>.",
        "preco_unitario": 58,
        "tempo_preparo": 60,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Kale and Chickpea Soup with Lemon",
        "descricao": "The recipe Kale and Chickpea Soup with Lemon can be made in about 45 minutes. This main course has 290 calories, 16g of protein, and 15g of fat per serving. This recipe serves 4. For $1.98 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. 4 people were impressed by this recipe. It is brought to you by Foodista. Head to the store and pick up crusty bread, garlic clove, chilli flakes, and a few other things to make it today. Overall, this recipe earns an amazing spoonacular score of 86%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/massaged-kale-chickpea-salad-with-lemon-vinaigrette-1718077\">Massaged Kale Chickpea Salad with Lemon Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/kale-chickpea-soup-1563211\">Kale & Chickpea Soup</a>, and <a href=\"https://spoonacular.com/recipes/kale-chickpea-soup-592100\">Kale & Chickpea Soup</a>.",
        "preco_unitario": 53,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Cashew-Chili Portabello",
        "descricao": "If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Cashew-Chili Portabello might be a recipe you should try. This recipe makes 4 servings with 461 calories, 12g of protein, and 24g of fat each. For $2.13 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. This recipe is typical of American cuisine. It works well as a hor d'oeuvre. This recipe from Foodista has 1 fans. Head to the store and pick up bell pepper, extra virgin olive oil, portabello mushrooms, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 85%, this dish is spectacular. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/cashew-chicken-chili-581817\">Cashew Chicken Chili</a>, <a href=\"https://spoonacular.com/recipes/vegetarian-chili-with-cilantro-lime-cashew-sour-cream-573766\">Vegetarian Chili with Cilantro-Lime Cashew Sour Cream</a>, and <a href=\"https://spoonacular.com/recipes/meat-lite-black-bean-and-cashew-chicken-chili-208799\">Meat Lite: Black Bean and Cashew Chicken Chili</a>.",
        "preco_unitario": 43,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chunky Tomato Gazpacho",
        "descricao": "Chunky Tomato Gazpacho is a hor d'oeuvre that serves 6. For $2.09 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. One serving contains 340 calories, 7g of protein, and 22g of fat. This recipe is liked by 1 foodies and cooks. It is perfect for Summer. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. Head to the store and pick up avocado, garlic, sherry wine vinegar, and a few other things to make it today. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 83%. This score is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chunky-tomato-fruit-gazpacho-27774\">Chunky Tomato-Fruit Gazpacho</a>, <a href=\"https://spoonacular.com/recipes/chunky-gazpacho-205208\">Chunky Gazpacho</a>, and <a href=\"https://spoonacular.com/recipes/chunky-gazpacho-with-sauted-shrimp-199269\">Chunky Gazpacho with Sautéed Shrimp</a>.",
        "preco_unitario": 42,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Slow Braised Red Wine Lamb Stew with Moroccan Spices",
        "descricao": "Slow Braised Red Wine Lamb Stew with Moroccan Spices could be just the dairy free recipe you've been looking for. One portion of this dish contains roughly 39g of protein, 14g of fat, and a total of 601 calories. For $4.19 per serving, you get a main course that serves 4. Autumn will be even more special with this recipe. This recipe from Foodista requires baby carrots, wine, alhambra merguez seasoning, and garlic. Not a lot of people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes around 2 hours and 35 minutes. Taking all factors into account, this recipe earns a spoonacular score of 87%, which is great. Similar recipes include <a href=\"https://spoonacular.com/recipes/red-wine-braised-lamb-shanks-15804\">Red Wine Braised Lamb Shanks</a>, <a href=\"https://spoonacular.com/recipes/red-wine-braised-leg-of-lamb-481190\">Red Wine Braised Leg Of Lamb</a>, and <a href=\"https://spoonacular.com/recipes/red-wine-braised-lamb-shanks-15809\">Red Wine-Braised Lamb Shanks</a>.",
        "preco_unitario": 22,
        "tempo_preparo": 155,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Slow Cooker Minestrone Soup",
        "descricao": "If you want to add more dairy free recipes to your recipe box, Slow Cooker Minestrone Soup might be a recipe you should try. This hor d'oeuvre has 148 calories, 7g of protein, and 2g of fat per serving. For $1.14 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from Foodista has 2 fans. A mixture of garam masala, salt, garbanzo beans, and a handful of other ingredients are all it takes to make this recipe so scrumptious. This recipe is typical of Mediterranean cuisine. From preparation to the plate, this recipe takes roughly 45 minutes. It is perfect for Autumn. Taking all factors into account, this recipe earns a spoonacular score of 77%, which is good. Similar recipes are <a href=\"https://spoonacular.com/recipes/slow-cooker-minestrone-soup-100335\">Slow Cooker Minestrone Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-minestrone-soup-1606803\">Slow Cooker Minestrone Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-minestrone-soup-1723809\">Slow Cooker Minestrone Soup</a>.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vegan Broccoli Cheddar Soup",
        "descricao": "If you have around 45 minutes to spend in the kitchen, Vegan Broccoli Cheddar Soup might be an awesome gluten free and dairy free recipe to try. One portion of this dish contains around 14g of protein, 27g of fat, and a total of 568 calories. This recipe serves 4 and costs $3.69 per serving. Only a few people made this recipe, and 1 would say it hit the spot. It will be a hit at your Autumn event. Head to the store and pick up vegetable broth, salt, vegan cheddar cheese, and a few other things to make it today. It is brought to you by Foodista. It works well as a main course. With a spoonacular score of 79%, this dish is pretty good. <a href=\"https://spoonacular.com/recipes/vegan-broccoli-cheddar-soup-1710499\">Vegan Broccoli Cheddar Soup</a>, <a href=\"https://spoonacular.com/recipes/vegan-broccoli-cheddar-soup-paleo-968676\">Vegan Broccoli “Cheddar” Soup (Paleo)</a>, and <a href=\"https://spoonacular.com/recipes/vegan-broccoli-cheddar-stuffed-sweet-potatoes-1769685\">Vegan Broccoli “Cheddar” Stuffed Sweet Potatoes</a> are very similar to this recipe.",
        "preco_unitario": 47,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Black Bean Soup With Pico De Gallo and Chipotle Creme",
        "descricao": "If you want to add more Mexican recipes to your collection, Black Bean Soup With Pico De Gallo and Chipotle Creme might be a recipe you should try. This recipe serves 6. One portion of this dish contains around 42g of protein, 24g of fat, and a total of 627 calories. For $1.63 per serving, this recipe covers 32% of your daily requirements of vitamins and minerals. Only a few people really liked this main course. It is perfect for Autumn. If you have low far cream, jalapeno, chipotle crème, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. 1 person found this recipe to be flavorful and satisfying. It is brought to you by Foodista. Overall, this recipe earns a spectacular spoonacular score of 83%. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/black-bean-chipotle-burgers-topped-with-pepperjack-pico-de-gallo-591142\">Black Bean Chipotle Burgers topped with Pepperjack & Pico de Gallo</a>, <a href=\"https://spoonacular.com/recipes/black-bean-chipotle-burgers-topped-with-pepperjack-pico-de-gallo-1218189\">Black Bean Chipotle Burgers topped with Pepperjack & Pico de Gallo</a>, and <a href=\"https://spoonacular.com/recipes/black-bean-burger-with-peach-pico-de-gallo-615088\">Black Bean Burger with Peach Pico de Gallo</a>.",
        "preco_unitario": 23,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Nearly Famous Chicken Tortilla Soup",
        "descricao": "Nearly Famous Chicken Tortilla Soup takes approximately 45 minutes from beginning to end. This recipe serves 4. For $4.4 per serving, this recipe covers 47% of your daily requirements of vitamins and minerals. One portion of this dish contains around 42g of protein, 52g of fat, and a total of 915 calories. 1 person were impressed by this recipe. Head to the store and pick up chili powder, cayenne pepper, avocados, and a few other things to make it today. It is perfect for Autumn. It works well as a rather pricey main course. It is brought to you by Foodista. It is a good option if you're following a gluten free diet. All things considered, we decided this recipe deserves a spoonacular score of 78%. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/dionicias-famous-chicken-tortilla-soup-102235\">Dionicia's Famous Chicken Tortilla Soup</a>, <a href=\"https://spoonacular.com/recipes/adams-famous-tortilla-soup-144980\">Adam's Famous Tortilla Soup</a>, and <a href=\"https://spoonacular.com/recipes/jane-foxs-famous-tortilla-soup-406412\">Jane Fox's Famous Tortilla Soup</a>.",
        "preco_unitario": 55,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Smoky roasted tomato and red pepper soup",
        "descricao": "The recipe Smoky roasted tomato and red pepper soup can be made in roughly 45 minutes. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs $1.97 per serving. One portion of this dish contains roughly 4g of protein, 8g of fat, and a total of 174 calories. Autumn will be even more special with this recipe. 1 person has tried and liked this recipe. A mixture of bell pepper, olive oil, tomatoes, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Only a few people really liked this hor d'oeuvre. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 82%, which is awesome. Try <a href=\"https://spoonacular.com/recipes/roasted-red-pepper-and-tomato-soup-with-smoky-caprese-panini-289440\">Roasted Red Pepper and Tomato Soup with Smoky Caprese Panini</a>, <a href=\"https://spoonacular.com/recipes/smoky-tomato-roasted-red-pepper-arugula-pasta-552435\">Smoky Tomato, Roasted Red Pepper & Arugula Pasta</a>, and <a href=\"https://spoonacular.com/recipes/smoky-sun-dried-tomato-roasted-red-pepper-hummus-728774\">Smoky Sun Dried Tomato Roasted Red Pepper Hummus</a> for similar recipes.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Spicy Halibut Stew With Chorizo and Kale",
        "descricao": "Spicy Halibut Stew With Chorizo and Kale is a gluten free, dairy free, and whole 30 recipe with 4 servings. One serving contains 403 calories, 35g of protein, and 23g of fat. For $6.37 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in roughly 45 minutes. This recipe is liked by 1 foodies and cooks. A mixture of fennel bulb, onion, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so flavorful. It can be enjoyed any time, but it is especially good for Autumn. It is brought to you by Foodista. With a spoonacular score of 81%, this dish is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/halibut-and-chorizo-stew-with-garlic-toasts-232126\">Halibut and Chorizo Stew with Garlic Toasts</a>, <a href=\"https://spoonacular.com/recipes/chorizo-kale-and-chickpea-stew-15494\">Chorizo, Kale And Chickpea Stew</a>, and <a href=\"https://spoonacular.com/recipes/meat-lite-lentil-kale-and-chorizo-stew-15408\">Meat Lite: Lentil, Kale and Chorizo Stew</a>.",
        "preco_unitario": 60,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Loaded Baked Potato Soup",
        "descricao": "Loaded Baked Potato Soup might be just the main course you are searching for. This recipe serves 8. One portion of this dish contains about 21g of protein, 35g of fat, and a total of 624 calories. For $1.29 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. 5743 people found this recipe to be flavorful and satisfying. Autumn will be even more special with this recipe. If you have bacon bits, cream, onion, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 1 hour. It is brought to you by Pink When. All things considered, we decided this recipe deserves a spoonacular score of 82%. This score is awesome. <a href=\"https://spoonacular.com/recipes/loaded-baked-potato-soup-with-crispy-fried-potato-skins-1218881\">Loaded Baked Potato Soup with Crispy-Fried Potato Skins</a>, <a href=\"https://spoonacular.com/recipes/loaded-baked-potato-soup-with-crispy-fried-potato-skins-1224705\">Loaded Baked Potato Soup with Crispy-Fried Potato Skins</a>, and <a href=\"https://spoonacular.com/recipes/loaded-baked-potato-soup-with-crispy-fried-potato-skins-1632271\">Loaded Baked Potato Soup with Crispy-Fried Potato Skins</a> are very similar to this recipe.",
        "preco_unitario": 44,
        "tempo_preparo": 60,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Best Buffalo Chicken Chili",
        "descricao": "The recipe Best Buffalo Chicken Chili can be made in approximately 45 minutes. For $2.47 per serving, you get a main course that serves 10. One portion of this dish contains approximately 29g of protein, 7g of fat, and a total of 299 calories. It will be a hit at your The Super Bowl event. 3 people found this recipe to be flavorful and satisfying. It is brought to you by Foodista. Head to the store and pick up ground cumin, garlic, paprika, and a few other things to make it today. It is a good option if you're following a gluten free and dairy free diet. This recipe is typical of American cuisine. Overall, this recipe earns a pretty good spoonacular score of 76%. Try <a href=\"https://spoonacular.com/recipes/buffalo-chicken-chili-682999\">Buffalo Chicken Chili</a>, <a href=\"https://spoonacular.com/recipes/buffalo-chicken-chili-619392\">Buffalo Chicken Chili</a>, and <a href=\"https://spoonacular.com/recipes/buffalo-chicken-chili-973015\">Buffalo Chicken Chili</a> for similar recipes.",
        "preco_unitario": 46,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Chili con Carne that'll make your taste buds go silly",
        "descricao": "If you want to add more American recipes to your collection, Chili con Carne that'll make your taste buds go silly might be a recipe you should try. This main course has 796 calories, 75g of protein, and 31g of fat per serving. This recipe serves 4. For $4.74 per serving, this recipe covers 58% of your daily requirements of vitamins and minerals. A mixture of kidney beans, salt and pepper, shallots, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is perfect for The Super Bowl. It is a good option if you're following a gluten free diet. From preparation to the plate, this recipe takes approximately 2 hours and 30 minutes. It is brought to you by spoonacular user <a href=\"/profile/maplewoodroad\">maplewoodroad</a>. Similar recipes include <a href=\"https://spoonacular.com/recipes/5th-annual-chili-contest-entry-chili-con-carne-y-frijoles-618022\">5th Annual Chili Contest: Entry – Chili Con Carne y Frijoles</a>, <a href=\"https://spoonacular.com/recipes/5th-annual-chili-contest-entry-chili-con-carne-y-frijoles-1209063\">5th Annual Chili Contest: Entry – Chili Con Carne y Frijoles</a>, and <a href=\"https://spoonacular.com/recipes/escarole-salad-that-your-taste-buds-will-love-84854\">Escarole Salad That Your Taste Buds Will Love</a>.",
        "preco_unitario": 23,
        "tempo_preparo": 150,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Roasted Fennel and Broccoli Soup",
        "descricao": "Roasted Fennel and Broccoli Soup requires around 45 minutes from start to finish. One serving contains 194 calories, 9g of protein, and 10g of fat. This gluten free and lacto ovo vegetarian recipe serves 4 and costs $1.55 per serving. 1 person found this recipe to be flavorful and satisfying. It is perfect for Autumn. It works well as a hor d'oeuvre. This recipe from Foodista requires lime juice, evaporated milk, coriander, and basil. With a spoonacular score of 79%, this dish is solid. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/creamy-roasted-fennel-and-carrot-soup-with-black-garlic-fennel-oil-474600\">Creamy Roasted Fennel and Carrot Soup with Black Garlic Fennel Oil</a>, <a href=\"https://spoonacular.com/recipes/for-chickpea-fennel-and-broccoli-rabe-soup-551907\">for Chickpea, Fennel, and Broccoli Rabe Soup</a>, and <a href=\"https://spoonacular.com/recipes/roasted-carrot-fennel-soup-119107\">Roasted Carrot-Fennel Soup</a>.",
        "preco_unitario": 52,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Potato & Leek Soup with Roasted Beets",
        "descricao": "If you want to add more gluten free and dairy free recipes to your repertoire, Potato & Leek Soup with Roasted Beets might be a recipe you should try. This recipe serves 6. This hor d'oeuvre has 434 calories, 10g of protein, and 15g of fat per serving. For $2.61 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. 1 person found this recipe to be scrumptious and satisfying. Head to the store and pick up beets, leeks, oil ), and a few other things to make it today. It is perfect for Autumn. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 78%, which is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/roasted-potato-leek-soup-294202\">Roasted Potato Leek Soup</a>, <a href=\"https://spoonacular.com/recipes/roasted-potato-leek-soup-with-arugula-984545\">Roasted Potato Leek Soup with Arugula</a>, and <a href=\"https://spoonacular.com/recipes/bacon-potato-and-leek-soup-with-roasted-garlic-721154\">Bacon, Potato and Leek Soup with Roasted Garlic</a>.",
        "preco_unitario": 57,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Easy Beef and Bean Chili",
        "descricao": "The recipe Easy Beef and Bean Chili could satisfy your American craving in roughly 45 minutes. Watching your figure? This gluten free and dairy free recipe has 608 calories, 38g of protein, and 25g of fat per serving. For $2.84 per serving, this recipe covers 44% of your daily requirements of vitamins and minerals. This recipe serves 4. It is perfect for The Super Bowl. Only a few people made this recipe, and 1 would say it hit the spot. It works well as a rather inexpensive main course. Head to the store and pick up tomatoes, chili powder, tomato sauce, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 81%, which is amazing. Try <a href=\"https://spoonacular.com/recipes/easy-two-bean-beef-chili-1110616\">Easy Two Bean Beef Chili</a>, <a href=\"https://spoonacular.com/recipes/easy-beef-and-bean-chili-1168767\">Easy Beef and Bean Chili</a>, and <a href=\"https://spoonacular.com/recipes/9th-annual-chili-contest-entry-beef-chorizo-and-bean-taco-chili-weekly-menu-1042007\">9th Annual Chili Contest: Entry – Beef, Chorizo, and Bean Taco Chili + Weekly Menu</a> for similar recipes.",
        "preco_unitario": 44,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": true,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "nome": "Vietnamese Beef-Noodle Soup With Asian Greens, Okay Vietnamese/japanese",
        "descricao": "Vietnamese Beef-Noodle Soup With Asian Greens, Okay Vietnamese/japanese might be a good recipe to expand your main course recipe box. This dairy free recipe serves 4 and costs $3.85 per serving. One serving contains 346 calories, 22g of protein, and 11g of fat. 2 people have made this recipe and would make it again. It is a pretty expensive recipe for fans of Vietnamese food. A mixture of miso, fish sauce, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Autumn will be even more special with this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. With a spoonacular score of 83%, this dish is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/vietnamese-beef-noodle-soup-with-asian-greens-okay-vietnamese-japanese-1469207\">Vietnamese Beef-Noodle Soup With Asian Greens, Okay Vietnamese/japanese</a>, <a href=\"https://spoonacular.com/recipes/vietnamese-beef-noodle-soup-83891\">Vietnamese Beef Noodle Soup</a>, and <a href=\"https://spoonacular.com/recipes/quick-vietnamese-noodle-soup-with-beef-34501\">Quick Vietnamese Noodle Soup with Beef</a>.",
        "preco_unitario": 41,
        "tempo_preparo": 45,
        "categoria": "soup",
        "disponivel": true,
        "destaque": false,
        "ingredientes": [],
        "complementos": [
            {
                "nome": "Batata Frita",
                "preco_adicional": 12.9,
                "maximo_escolhas": 1
            },
            {
                "nome": "Queijo Extra",
                "preco_adicional": 5.9,
                "maximo_escolhas": 1
            }
        ],
        "imagem": "https://via.placeholder.com/150"
    }
];

module.exports = sampleDishes;

async function seedMenu(restaurante_id) {
    const client = await pool.connect();
    
    try {
        await client.query('BEGIN');

        for (const dish of sampleDishes) {
            // Insert prato
            const pratoResult = await client.query(
                `INSERT INTO pratos (restaurante_id, nome, descricao, preco_unitario, 
                    tempo_preparo, categoria_id, disponivel, destaque) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
                ['14', dish.nome, dish.descricao, dish.preco_unitario, 
                    dish.tempo_preparo, dish.categoria_id, dish.disponivel, dish.destaque]
            );

            const prato_id = pratoResult.rows[0].id;

            // Insert ingredientes
            if (dish.ingredientes) {
                for (const ing of dish.ingredientes) {
                    await client.query(
                        'INSERT INTO ingredientes (prato_id, nome, removivel) VALUES ($1, $2, $3)',
                        [prato_id, ing.nome, ing.removivel]
                    );
                }
            }

            // Insert complementos
            if (dish.complementos) {
                for (const comp of dish.complementos) {
                    await client.query(
                        `INSERT INTO complementos (prato_id, nome, preco_adicional, maximo_escolhas) 
                        VALUES ($1, $2, $3, $4)`,
                        [prato_id, comp.nome, comp.preco_adicional, comp.maximo_escolhas]
                    );
                }
            }
        }

        await client.query('COMMIT');
        console.log('Menu seeded successfully!');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error seeding menu:', error);
        throw error;
    } finally {
        client.release();
    }
}

// Usage example:
// seedMenu(YOUR_RESTAURANT_ID);

module.exports = { seedMenu };