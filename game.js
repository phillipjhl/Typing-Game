$(document).ready(function () {
    //Setting variables
    let $uppercase = $('#keyboard-upper-container');
    let $lowercase = $('#keyboard-lower-container');
    //words in array
    const words = 54;
    //initializing mistake counter
    let mistakes = 0;
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    //counter for which sentence user is on
    let sentIndex = 0;
    //counter for which character user is on in each sentence
    let charIndex = 0;

    //creating each sentence as paragraphs to callback to hide or show
    let $firstSentence = $('<p>' + sentences[0] + '</p>');
    let $secondSentence = $('<p>' + sentences[1] + '</p>');
    let $thirdSentence = $('<p>' + sentences[2] + '</p>');
    let $fourthSentence = $('<p>' + sentences[3] + '</p>');
    let $fifthSentence = $('<p>' + sentences[4] + '</p>');
   
    //appending each sentence to the div with id "sentence"
    $('#sentence').append($firstSentence);
    //$('#sentence').append($secondSentence);
    //$('#sentence').append($thirdSentence);
    //$('#sentence').append($fourthSentence);
    //$('#sentence').append($fifthSentence);

    //Display currently expected letter
    var expected = getExpectedCharCode(sentIndex, charIndex, sentences);
    $target = String.fromCharCode(expected);
    $('#target-letter').append("<p>" + $target + "</p>");

    //main game function that checks user input to the expected character code and then calculates right or wrong
    $(document).keypress(function game (event) {
        //start timer wether right or wrong key was pressed
        var expected = getExpectedCharCode(sentIndex, charIndex, sentences);
        //checks if the correct letter was presed
        if (event.which == expected) {
            //display green check into div #feedback
            console.log('correct');
            //animate highlight to next letter
            //add 1 to the charIndex counter
            charIndex += 1
            //console.log(charIndex);
            //resets expected to next letter to properly display string on screen
            var expected = getExpectedCharCode(sentIndex, charIndex, sentences);
            $target = String.fromCharCode(expected);
            $('#target-letter p').replaceWith("<p>" + $target + "</p>");
            console.log(sentIndex);
        }
        //when user reaches end of sentence, display next sentence and reset charIndex = 0 for next sentence
        else if (charIndex == sentences[sentIndex].length) {
            //go to next sentence
            sentIndex += 1;
            console.log('sentIndex = ' + sentIndex);
            //start at the beginning of the new sentence
            charIndex = 0;
            console.log('charIndex = ' + charIndex);
            //display current sentence the user is on
            $('#sentence p').replaceWith('<p>' + sentences[sentIndex] + '</p>');
        }

        //incorrect letter pressed
        else if (event.which !== expected) {
            //display red 'x' into div #feedback
            console.log('incorrect');
            //add 1 to the mistakes counter
            mistakes += 1;
            console.log(mistakes);
        }
    });
    /* 
    function to return an expected char code of the next letter
    sentence = sentIndex
    character = charIndex
    paragraph = sentences
    */
    function getExpectedCharCode(sentence, character, paragraph) {
        let expectedCode = paragraph[sentence].charCodeAt(character);
        //console.log(expectedCode);
        return expectedCode;
    }

    //hide uppercase keyboard at first
    $($uppercase).hide();

    //Keyboard on key down event listener
    $(document).keydown(function (e) {
        //shift pressed: toggle
        if (e.which == 16) {
            $($uppercase).show();
            $($lowercase).hide();
        }
    });
    $(document).keyup(function (e) {
        //shift released: toggle  
        if (e.which == 16) {
            $($uppercase).hide();
            $($lowercase).show();
        }
    });

    //adding highlight classes to all keys
    //on key down: toggle on highlight class
    //on key up: toggle off hihlight class
    $(document).keydown(function (e) {
        var $target = '#' + e.charCode;
        $($target).addClass('highlighted');
    });
    $(document).keyup(function (e) {
        var $target = '#' + e.charCode;
        $($target).removeClass('highlighted');
    });

});