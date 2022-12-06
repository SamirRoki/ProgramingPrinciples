/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/

/*var coffee={
    name: "Espresso", strenght:"black", flavor: "coffee", milk: "no", sugar: "dark",
};
console.log(coffee);
console.log(coffee.sugar);*/


/*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/

/*var movie={ title: "findingForrester", actors: "Sean Connery", genre: "drama", 
}*/

/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/


var exercise3 = function () {
    var project = {
        description: 'BIT-PP',
        language: 'JavaScript',
        repository: 'gitHub',

        statusOfProject: true
    }
    console.log(project.repository);

    var written = function () {

        if (project.language === 'JavaScript') {
            return "Written in JS";
        } else {
            return "Not written in JavaScript";
        }
    }
    console.log(written());

    var development = function () {
        if (project.statusOfProject === true) {
            return "In development"
        } else {
            return "Not in development"
        }
    }
    console.log(development());

}()

/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/


var exercise4 = function(){ 
var recipe = {
    name: "kajgana",
    typeOfCuisine: "Serbia",
    complexity: 1,
    Ingredients: "eggs oil cheese",
    preparingTime: 15,
    instructions: "in baking dish add oil,mix eggs and cheese,after one minut add mix in dish,bake for 10min",
    

}
console.log(recipe.Ingredients);
var duration = function(){
    if(recipe.preparingTime <= 15){
        return " meal can be prepared in under 15 minutes."
    }
    else{
        return " meal can not be prepared in under 15 minutes."
    };

}
console.log(duration());
var cuisine = function(){
    if(recipe.typeOfCuisine){
        recipe.typeOfCuisine = "Serbia";

    }
    return recipe.typeOfCuisine
}
console.log(cuisine());
   var listOfIngredients = function(){
    if(recipe.Ingredients){
        delete recipe.Ingredients;

    }
    return recipe.Ingredients;
   }
   console.log(listOfIngredients());
}()


