$(document).ready(function () {
    //Setting variables
    let $uppercase = $('#keyboard-upper-container');
    let $lowercase = $('#keyboard-lower-container');
    //words in array
    const words = 54;
<<<<<<< HEAD
=======
    //initializing mistake counter
    let mistakes = 0;
>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    //each sentence is a string
    //can count through each sentence string to match charCodes with user input
    let sentence1 = sentences[0];
    let sentence2 = sentences[1];
    let sentence3 = sentences[2];
    let sentence4 = sentences[3];
    let sentence5 = sentences[4];

    //counter for which sentence user is on
    let sentIndex = 0;
    //counter for which character user is on in each sentence
    let charIndex = 0;
<<<<<<< HEAD
    //expeccted character ASCII character
    let expected = getExpectedCharCode(sentIndex, charIndex, sentences);
=======
>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51

    //display sentences one at a time
    //creating each sentence as paragraphs to callback to hide or show
    let $firstSentence = $('<p>' + sentences[0] + '</p>');
    let $secondSentence = $('<p>' + sentences[1] + '</p>');
    let $thirdSentence = $('<p>' + sentences[2] + '</p>');
    let $fourthSentence = $('<p>' + sentences[3] + '</p>');
    let $fifthSentence = $('<p>' + sentences[4] + '</p>');
<<<<<<< HEAD

=======
>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51
    //appending each sentence to the div with id "sentence"
    $('#sentence').append($firstSentence);
    $('#sentence').append($secondSentence);
    $('#sentence').append($thirdSentence);
    $('#sentence').append($fourthSentence);
    $('#sentence').append($fifthSentence);
<<<<<<< HEAD

=======
>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51
    //each if statement checks the sentIndex to show the correct sentence the user is on
    if (sentIndex === 0) {
        $($secondSentence).hide();
        $($thirdSentence).hide();
        $($fourthSentence).hide();
        $($fifthSentence).hide();
    }
    if (sentIndex === 1) {
        $($firstSentence).hide();
        $($thirdSentence).hide();
        $($fourthSentence).hide();
        $($fifthSentence).hide();
    }
    if (sentIndex === 2) {
        $($firstSentence).hide();
        $($secondSentence).hide();
        $($fourthSentence).hide();
        $($fifthSentence).hide();
    }
    if (sentIndex === 3) {
        $($firstSentence).hide();
        $($secondSentence).hide();
        $($thirdSentence).hide();
        $($fifthSentence).hide();
    }
    if (sentIndex === 4) {
        $($firstSentence).hide();
        $($secondSentence).hide();
        $($thirdSentence).hide();
        $($fourthSentence).hide();
    }

<<<<<<< HEAD
    //Display currently expected letter
    $target = String.fromCharCode(expected);
    $('#target-letter').append($target);

    //main game function that checks user input to the expected character code and then calculates right or wrong
    $(document).keypress(function (event) {
        //var mistakes = 0;
        //var sentIndex = 0;
        //var charIndex = 0;
        //var expected = getExpectedCharCode(sentIndex, charIndex, sentences);

        //conditional to start game which checks if the correct letter was presed
        if (event.which == expected) {
            //start timer
            //display green check into div #feedback
            console.log('correct');
            //animate highlight to next letter
            //add 1 to the charIndex counter
            charIndex ++;
        }
        //incorrect letter pressed
        else if (event.which !== expected) {
            //display red 'x' into div #feedback
            //add 1 to the mistakes counter
            mistakes += 1;
            //console.log(mistakes);
        }
    });

    /* 
    function to return an expected char code of the next letter
    sentence = sentIndex
    character = charIndex
    paragraph = sentences
    */
=======
    //function to return an expected char code of the next letter
    //sentence = sentIndex
    //character = charIndex
    //paragraph = sentences
>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51
    function getExpectedCharCode(sentence, character, paragraph) {
        var sentence;
        var character;
        var paragraph;
        let expectedCode = paragraph[sentence].charCodeAt(character);
<<<<<<< HEAD
        //console.log(expectedCode);
        return expectedCode;
    }

=======
        console.log(expectedCode);
        return expectedCode;
        }
    var e = getExpectedCharCode(0, 2, sentences);
    
>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51
    //hide uppercase keyboard at first
    $($uppercase).hide();

    //Keyboard on key down event listener
    $(document).keydown(function (e) {
        //shift pressed: toggle
        if (e.which == 16) {
            $($uppercase).show();
            $($lowercase).hide();
        }
<<<<<<< HEAD

=======
>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51
    });
    $(document).keyup(function (e) {
        //shift released: toggle  
        if (e.which == 16) {
            $($uppercase).hide();
            $($lowercase).show();
        }
    });

<<<<<<< HEAD
    $(document).keypress(function(e) {
        var $target = '#' + e.which;
        $($target).css('background-color', 'yellow');
    });
=======

>>>>>>> ca51f517fcea1e274a2723ac28cadd72db928d51

});