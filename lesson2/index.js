/*
Title:Basic node app example
Description:Simple node application thaht print random quotes per second
Author:Shariful islam(by following Learn with sumit)
Date: 07/04/2022


*/

// Dependencies
const mathLibrary=require('../lib/math');
const quotesLibrary=require('../lib/quotes');

// app object - Module scaffolding
const app={};

// configuration
app.config={
    timeBetweenQuotes:1000,
};

app.printAQuote=function printAQuote(){

    //get all the quotes
    const allQuotes=quotesLibrary.allQuotes();
    // get the length of the quotes
    const numberOfQuotes=allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber=mathLibrary.getRandomNumber(1,numberOfQuotes);

    // Get the quote at that position in the array (minus one)
    const selectedQuote=allQuotes[randomNumber-1];
    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it is 

app.indefiniteLoop=function indefiniteLoop(){
    setInterval(() => {
        app.printAQuote();
        
    }, 1000);
}


app.indefiniteLoop();