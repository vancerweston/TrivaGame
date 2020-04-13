function choose() {
    // Block 1: setting up category select
    let value;

    let category = document.getElementById('category').selectedIndex;
    value = parseInt(document.getElementsByClassName('option1')[category].value);

    console.log(category, value);

    // Block 2: setting up difficulty select    

    let dvalue;
    let difficulty = document.getElementById('diff').selectedIndex;
    dvalue = document.getElementsByClassName('option2')[difficulty].value;

    console.log(difficulty, dvalue);

    // Block 3: setting up XMLHttpRequest

    let triviaData;
    let URL = `https://opentdb.com/api.php?amount=10&type=multiple&category=${value}&difficulty=${dvalue}`;
    const request = new XMLHttpRequest();



    function loadData() {
        request.open('GET', URL);
        request.onload = loadComplete;
        request.send();
    }


    function loadComplete(evt) {
        triviaData = JSON.parse(request.responseText);

        // Block 4: placing trivaData into HTML

        let i;
        let test = new Array(10);

        for (i = 0; i < test.length; i++) {

            document.getElementById(`q${i}cat`).innerHTML = triviaData.results[i].category;
            document.getElementById(`q${i}question`).innerHTML = triviaData.results[i].question;
            document.getElementById(`q${i}correct`).innerHTML = triviaData.results[i].correct_answer;
            document.getElementById(`q${i}wrong`).innerHTML = triviaData.results[i].incorrect_answers[0];
            document.getElementById(`q${i}wrong2`).innerHTML = triviaData.results[i].incorrect_answers[1];
            document.getElementById(`q${i}wrong3`).innerHTML = triviaData.results[i].incorrect_answers[2];
        }
        console.log(triviaData);
    }
    loadData();

    q1display();
}

function q1display() {
    document.getElementById('form').style.display = 'none';
    setTimeout(function() { document.getElementById('q1').style.display = 'block'; }, 1000);
    //change form display to none, #q1 display to block;
    //research and see if score can be added to cookies.
}

document.getElementById('q0correct').addEventListener('click',
function q1cookie() {
	document.cookie = 0;
});

function q2display() {
    document.getElementById('q1').style.display = 'none';
    document.getElementById('q2').style.display = 'block';
    //change q0 display to none, #q2 display to block;
}

document.getElementById('q1correct').addEventListener('click', 
function q2cookie() {
    document.cookie += 1;
    //add 100 points to cookie
});


function q3display() {
    document.getElementById('q2').style.display = 'none';
    document.getElementById('q3').style.display = 'block';

    //change q2 display to none, #q3 diplay to block, and so on for all the next functions
}

document.getElementById('q2correct').addEventListener('click', 
function q3cookie() {
    document.cookie += 2;

    //add 100 points to cookie
});


function q4display() {
    document.getElementById('q3').style.display = 'none';
    document.getElementById('q4').style.display = 'block';

}

document.getElementById('q3correct').addEventListener('click', 
function q4cookie() {
    document.cookie += 3;

    //add 100 points to cookie
});


function q5display() {
    document.getElementById('q4').style.display = 'none';
    document.getElementById('q5').style.display = 'block';
}

document.getElementById('q4correct').addEventListener('click', 
function q5cookie() {
    document.cookie += 4;

    //add 100 points to cookie
});


function q6display() {
    document.getElementById('q5').style.display = 'none';
    document.getElementById('q6').style.display = 'block';
}

document.getElementById('q5correct').addEventListener('click', 
function q6cookie() {
    document.cookie += 5;

    //add 100 points to cookie
});


function q7display() {
    document.getElementById('q6').style.display = 'none';
    document.getElementById('q7').style.display = 'block';
}

document.getElementById('q6correct').addEventListener('click', 
function q7cookie() {
    document.cookie += 6;

    //add 100 points to cookie
});


function q8display() {
    document.getElementById('q7').style.display = 'none';
    document.getElementById('q8').style.display = 'block';
}

document.getElementById('q7correct').addEventListener('click', 
function q8cookie() {
    document.cookie += 7;

    //add 100 points to cookie
});


function q9display() {
    document.getElementById('q8').style.display = 'none';
    document.getElementById('q9').style.display = 'block';
}

document.getElementById('q8correct').addEventListener('click', 
function q9cookie() {
    document.cookie += 8;

    //add 100 points to cookie
});


function q10display() {
    document.getElementById('q9').style.display = 'none';
    document.getElementById('q10').style.display = 'block';
}

document.getElementById('q9correct').addEventListener('click', 
function q10cookie() {
    document.cookie += 9;

    //add 100 points to cookie
});


function end() {
    //splice cookie

    document.getElementById('q10').style.display = 'none';
    document.getElementById('end').style.display = 'block';

    let score = document.cookie;
    console.log(score, score.length);
    document.getElementById('gameScore').innerHTML = `${score.length}/10`;

}

//write a function to add all the cookies to current value of Your Score Div


// Removing page refresh onclick of submit button
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault()
});