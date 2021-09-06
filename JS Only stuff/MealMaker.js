const menu = {
    _course: {
        appetizers: [], 
        mains: [], 
        desserts: []
        },
        get appetizers(){
            return this._course.appetizers;
        },
        get mains(){
            return this._course.mains;
        },
        get desserts(){
            return this._course.desserts;
        },
        set appetizers(appetizers){
            this._course.appetizers = appetizers;
        },
        set mains(mains){
            this._course.mains = mains;
        },
        set desserts(dessert){
            this._course.desserts = dessert; 
        },
        get course(){
            return {
                appetizers: this.appetizers,
                mains: this.mains,
                desserts: this.desserts
            };
        },
        addDishToCourse(courseName, dishName, dishPrice){
            let dish = {
                name: dishName,
                price: dishPrice
            }
            switch(courseName){
                case('desserts'):
                    this._course.desserts.push(dish);
                    break;
                case('mains'):
                    this._course.mains.push(dish);
                    break;
                case('appetizers'):
                    this._course.appetizers.push(dish);
                    break;
            }
        },
        getRandomDishFromCourse(courseName){
            const dishes =  this.course[courseName];
            const ranNumber = Math.floor(Math.random() * (Object.keys(dishes).length-1));
            return dishes[ranNumber];
        },
        generateRandomMeal(){
            const appetizer = this.getRandomDishFromCourse('appetizers');
            const main = this.getRandomDishFromCourse('mains');
            const dessert = this.getRandomDishFromCourse('desserts');
            return `De entrada tenemos ${appetizer.name}, la cual tiene un costo de ${appetizer.price}, el plato principal sera ${main.name}, con un costo de ${main.price} y de postre tenemos ${dessert.name} con un costo de ${dessert.price}, total de estos productos seria: ${(dessert.price+main.price+appetizer.price)}.`;
        }
};

menu.addDishToCourse('desserts','Rollitos', 310);
menu.addDishToCourse('desserts','Pan con ajo', 200);
menu.addDishToCourse('desserts','Agua salada', 10);
menu.addDishToCourse('mains','Arro con pollo', 400);
menu.addDishToCourse('mains','Frito con salami', 550);
menu.addDishToCourse('mains','Fracaso', 10);
menu.addDishToCourse('appetizers','Victoria', 1000);
menu.addDishToCourse('appetizers','Dulce de leche', 200);
menu.addDishToCourse('appetizers','Deja esto', 10);
console.log(menu.generateRandomMeal());