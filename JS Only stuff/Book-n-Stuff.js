class Media {
    constructor(title){
        this._title= title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(status){
        this._isCheckedOut = status;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        return this._ratings.reduce(((previousValue, currentValue) => previousValue + currentValue))/this._ratings.length;
    }

    addRating(lastestRate) {
        this._ratings.push(lastestRate);
    }
}

class Book extends Media {
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media{
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime; 
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media{
    constructor(title, artist){
        super(title);
        this._artist = artist;
    }

    get artist() {
        return this._artist;
    }
}

var historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log (historyOfEverything.author);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
var speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());