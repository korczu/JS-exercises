const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: [],
    
    get getAppetizers(){
      return this.appetizers;
    },
    get getMains(){
      return this.mains;
    },
    get getDesserts(){
      return this.desserts;
    },
    set setAppetizers(dishes){
      return this.appetizers.push(dishes);
    },
    set setMains(dishes){
      return this.mains.push(dishes);
    },
    set setDesserts(dishes){
      return this.desserts.push(dishes);
    }
  },
  
  get getCourses(){
    return{   
      appetizers : this._courses.appetizers, 
      mains : this._courses.mains,
      desserts: this._courses.desserts      
      };
  },
  
	addDishToCourse(courseName, dishName, dishPrice){
  dish = {
    name: dishName,
    price: dishPrice
	  }
    courseName = courseName.toLowerCase();
    switch (courseName){
      case "appetizers":
      return 	this._courses.setAppetizers = dish;
      break;
        
      case "mains":
       return 	this._courses.setMains = dish;
       break;
      
       case "desserts":
       return 	this._courses.setDesserts = dish;
       break;
			
      default:
        return console.log("Wrong course name, 					choose appetizers, mains or desserts")
    }
	},
  getRandomDishFromCourse(courseName){
	const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * 			dishes.length);
    
    return dishes[randomIndex];
  }
};

menu.addDishToCourse("APPETIZERS", "Plate of Cheese", 8)
menu.addDishToCourse("APPETIZERS", "Plate of Ham", 8)
menu.addDishToCourse("APPETIZERS", "Sesonal Fruits", 8)
menu.addDishToCourse("mains", "Ribs with chips", 15)
menu.addDishToCourse("mains", "Chicken salad", 12)
menu.addDishToCourse("mains", "Pena a la Carbonara", 11)
menu.addDishToCourse("desserts", "Tiramisu", 10)
menu.addDishToCourse("desserts", "Creme Brule", 9)
menu.addDishToCourse("desserts", "Panna Cotta", 9)
console.log(menu.getRandomDishFromCourse('mains'))