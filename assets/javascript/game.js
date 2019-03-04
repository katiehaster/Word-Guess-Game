 //VARIABLES 

        var words = ["guava", "papaya", "mango", "pineapple", "kiwi", "lychee"];
        var wordsIndex = 0;
        var lives = 8;
        var remainingGuesses;
        var word = words[Math.floor(Math.random() * words.length)];
        var wrong = [];


        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }

        //  To display dashes on viewport

        var dashesh2 = document.getElementById("dashes");
        var guessesp = document.getElementById("guesses");
        var livesP = document.getElementById("lives");
        // .join('') takes away whatever is between ()
        dashesh2.textContent = answerArray.join(' ');
        guessesp.textContent = wrong.join(' ');
        livesP.textContent = lives;



        var remainingLetters = word.length;
        console.log(word, answerArray, remainingLetters);



    document.onkeyup = function(event) {
    // turns user's entry to lowercase
    var userInput = event.key.toLowerCase();
    // console.log(event.key);
    console.log(word.indexOf(event.key))
    //if letter pressed is in word, do something
    if (word.indexOf(event.key) >-1 ){
        for (var i = 0; i < word.length; i++) {
            // go through each _ and see if a letter is applied
            if (event.key === word[i]){
                // only triggered if letter pushed matches letter in word 
                answerArray[i] = event.key;
                dashesh2.textContent = answerArray.join(' ');
                console.log('yay!', answerArray);    
            }
        }
    } 


    //if letter pressed isnt in word, do something else decrease lives 
    else{
       wrong.push(event.key);
       console.log('wrong!', wrong)
       guessesp.textContent = wrong.join(' ');
        lives--;
       console.log('lives left: ' + lives)
       livesP.textContent = lives;
        if (lives === 0) {
            alert("YOU LOSE!");
        }
    }
}



// 