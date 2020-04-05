let sportsQuestions = [
    {
        question: "Where do you want to go?",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?S",
        choiceA: "Faisal Mosque",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?S",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    }
];

let videogameQuestions = [
    {
        question: "Where do you want to go?",
        choiceA: "Faisal Mosque",
        choiceB: "Jinnah Super",
        choiceC: "F6",
        choiceD: "F10",
        correct: "A"
    },
    {
        question: "Where do you want to go?V",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?V",
        choiceA: "Faisal Mosque",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?V",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?V",
        choiceA: "Faisal Mosque",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    }
];
let sportsQuestions1 = [
    {
        question: "Where do you want to go?S1",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?S1",
        choiceA: "Faisal Mosque",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?S1",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    }
];

let videogameQuestions1 = [
    {
        question: "Where do you want to go?V1",
        choiceA: "Faisal Mosque",
        choiceB: "Jinnah Super",
        choiceC: "F6",
        choiceD: "F10",
        correct: "A"
    },
    {
        question: "Where do you want to go?V1",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?V1",
        choiceA: "Faisal Mosque",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?V1",
        choiceA: "Office",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    },
    {
        question: "Where do you want to go?V1",
        choiceA: "Faisal Mosque",
        choiceB: "Hospital",
        choiceC: "Police Station",
        choiceD: "Airport",
        correct: ["A","B","C","D"]
    }
];




const playerInfo = [];
var questions;
var divChoice = "0";
var divChoice1 = "0";

const start = document.getElementById("start");
const trivia = document.getElementById("trivia");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const scoreContainer = document.getElementById("scoreContainer");
const finish = document.getElementById("finish");
const progress = document.getElementById("progress");
const gameContainer = document.getElementById("gameContainer");
const sportsQ = document.getElementById("sportsQ");
const videogamesQ = document.getElementById("videogamesQ");
const startBtn = document.getElementById("startBtn");

const oklocBtn = document.getElementById("oklocBtn");
const okBtn = document.getElementById("okBtn");
const islamtronDiv = document.getElementById("islamatronCarsDiv");
const islamabadDiv = document.getElementById("islamabadCarsDiv");
const islamtronlocDiv = document.getElementById("islamatronlocDiv");
const islamabadlocDiv = document.getElementById("islamabadlocDiv");
const startBtnsDiv = document.getElementById("startBtnsDiv");
const subtitleHeading = document.getElementById("subtitle");
let lastQuestionIndex;
let runningQuestionIndex = 0;

const qTime = 10;
const gaugeWidth = 300;
var count = 0;
var count1 = 0;
var questype = 0;
const gaugeProgressBar = gaugeWidth / qTime;
let TIMER;

let score = 0;
let startButtonDisabled = true;

let okButtonDisabled = true;
let sportsQDisabled = false;
let videogamesQDisabled = false;
let startBtnsDivDisabled = false;


let isPaused = false;
const countQuestion = 20;
const curQuestion = runningQuestionIndex + 1;

const choices = {
    'A': choiceA,
    'B': choiceB,
    'C': choiceC,
    'D': choiceD
};

function showCars(val){
    if (divChoice == "1"){
        islamtronDiv.style.display = "inline-block";
    } else{
        islamabadDiv.style.display = "inline-block";
    }
    subtitleHeading.innerHTML = "Select a car:";
    disabledStartBtnsDiv(true);
    disableOkButton(true);
    // disableStartButton(false);
    activateCatButton(val);
    // disableOkButton(false);
}

function showlocation(){
    if (divChoice1 == "1"){
        islamatronlocDiv.style.display = "inline-block";
    } else{
        islamabadDiv.style.display = "inline-block";
    }
    subtitleHeading.innerHTML = "Select a location wher you want to go:";
    disabledStartBtnsDiv(true);
    disableOkButton(true);
    // disableStartButton(false);
    activateCatButton(val);
    disableOkButton(false);
}

function startGame() {
    runningQuestionIndex = 0;
    score = 0;
    count = 0;
    count1 = 0;
    resetAllAnswers();
    shuffleQuestions(questions);
    displayQuestion();
    finish.style.display = "none";
    start.style.display = "none";
    trivia.style.display = "flex";
    progress.style.display = "block";
    counterRender();
    TIMER = setInterval(counterRender, 100);
    //Once game is started -> start display = hidden
    //start timer
    //display progress bar
    //display question and choices
}


function startAgain() {
    console.log("startAgain");
    finish.style.display = "none";
    start.style.display = "flex";
    trivia.style.display = "none";
    progress.style.display = "none";
    disactivateAllCatButtons();
    disableStartButton(true)
}

function setCars(val)
{
    switch(val){
        case "1":
            divChoice = "1";
            break;
        case "2":
            divChoice = "2";
            break;
    }
    disableOkButton(false);
    // activateCatButton(val);
}

function setQtype(val1)
{
    switch(val1){
        case "1":
            divChoice1 = "1";
            break;
        case "2":
            divChoice1 = "2";
        case "3":
            divChoice1 = "1";
            break;
        case "4":
            divChoice1 = "2";
            break;
    }
    disableOklocButton(false);
    // activateCatButton(val);
}

function showIslamabadLocDiv()
{
    console.log("Infuction");
    subtitleHeading.innerHTML = "Select a location:"
    // islamtronDiv.style.display = "none";
    // islamtronlocDiv.style.display = "inline-block";
    islamtronDiv.style.display = "none";
    islamtronlocDiv.style.display = "inline-block";
    console.log("GOES down");
}

function setQuestions(val) {
    switch (val) {
        case "1":
            questions = sportsQuestions;
            break;
        case "2":
            questions = videogameQuestions;
            break;
        case "3":
            questions = sportsQuestions1;
            break;
        case "4":
            questions = videogameQuestions1;
            break;
            default:
                questions = null; 
            }
    disableStartButton(false);
    activateCatButton(val);
    lastQuestionIndex = questions ? questions.length - 1 : null;
}
    

function disableSportsQBtn(disabled)
{
    sportsQDisabled = !disabled;
    if(disabled){
        sportsQ.classList.add("disabled");
        sportsQ.style.display = "none";
        sportsQ.style.visibility = false;
    } else{
        sportsQ.classList.remove("disabled");
        sportsQ.style.display = "initial";
        sportsQ.style.visibility = true;
    }
}

function disabledStartBtnsDiv(disabled){
    startBtnsDivDisabled = !disabled;
    if(disabled){
        startBtnsDiv.style.display = 'none';
    } else {
        startBtnsDiv.style.display = 'initial';
    }
}
function disableVideogamesQBtn(disabled)
{
    videogamesQDisabled = !disabled;
    if(disabled){
        videogamesQ.classList.add("disabled");
        videogamesQ.style.display = "none";
    } else{
        videogamesQ.classList.remove("disabled");
        videogamesQ.style.display = "initial";
    }
}
function disableOkButton(disabled) {
    okButtonDisabled = !disabled;
    console.log(okBtn.innerHTML);
    if (disabled) {
        okBtn.classList.add("disabled");
        okBtn.style.display = "none";
    } else {
        okBtn.classList.remove("disabled");
        okBtn.style.display = "initial";
    }
}

function disableOklocButton(disabled) {
    oklocButtonDisabled = !disabled;
    console.log(oklocBtn.innerHTML);
    if (disabled) {
        oklocBtn.classList.add("disabled");
        oklocBtn.style.display = "none";
    } else {
        oklocBtn.classList.remove("disabled");
        oklocBtn.style.display = "initial";
    }
}
function disableStartButton(disabled) {
    startButtonDisabled = !disabled;
    if (disabled) {
        startBtn.classList.add("disabled");
        startBtn.style.display = "none";
    } else {
        startBtn.classList.remove("disabled");
        startBtn.style.display = "initial";
    }
}

/**
 * On category screen, unselect all category buttons
 */
function disactivateAllCatButtons() {
    sportsQ.classList.remove("active");
    videogamesQ.classList.remove("active");
}

/**
 * On category screen, mark one category button as selected
 */
function activateCatButton(val) {
    disactivateAllCatButtons();
    if (val == "1") {
        sportsQ.classList.add("active");
    }
    if (val == "2") {
        videogamesQ.classList.add("active");
    }
}

function counterRender() {
    if (count <= qTime) {
        counter.innerHTML = Math.ceil(((10*qTime) - count1)/10);
        var temp = gaugeProgressBar * count;
        timeGauge.style.width = temp + "px";
        count=count+0.1;
        count1++;
        //Every second the green gauge bar increases by 1/10 of gaugeWidth
        //Counter + 1 every second
    } else {
        count = 0;
        count1 = 0;
        answerIsWrong(runningQuestionIndex);
        if (isGameOver()) {
            clearInterval(TIMER);
            gameContainer.display = "";
            displayScore();
        } else {
            runningQuestionIndex++;
            displayQuestion();
        }
        //If timer runes out set count back to 0
        //Because time ran out answer will be wrong
        //progress bar is updated to turn red
        //If game is over clear and display score
        //if game is not over, the current quesion index + 1 to display next question and choices in the array
    }
}

function isGameOver() {
    if (runningQuestionIndex < lastQuestionIndex) {
        return false;
    } else {
        runningQuestionIndex++;
        return true;
    }
    //If the current question index is <= to the questions array length
    //return true or else return false
}

function setPlayerName() {
    var playerName = document.getElementById("playerName");
    //set var playerName = to user input in HTML
}

function displayQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    //current question = the index of the questions array
    //set question and choices in HTML and displau them
}

function showNoChoice(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function showWrongChoice(element) {
    element.classList.remove("correct");
    element.classList.add("wrong");
}

function showCorrectChoice(element) {
    element.classList.remove("wrong");
    element.classList.add("correct");
}

function shuffleQuestions(questionArr) {
    let newPosition;
    let cur;
    for (var i = questionArr.length - 1; i > 0; i--) {
        newPosition = Math.floor(Math.random() * (i + 1));
        cur = questionArr[i];
        questionArr[i] = questionArr[newPosition];
        questionArr[newPosition] = cur;
    }
    return questions;
    //var newPosition and var current pos
    //for loop
    //the question array length and -1 every time
    //shuffles the questions index in the array
}

function isAnswerCorrect(answer,val) {
    if (!isPaused) {
        isPaused = true;
        if (questions[runningQuestionIndex].correct[0] == answer) {
            if (runningQuestionIndex < 20) {
                score++;
                answerIsCorrect(runningQuestionIndex);
                showCorrectChoice(choices[answer]);
            }
        } else if (questions[runningQuestionIndex].correct[1] == answer) {
            if (runningQuestionIndex < 20) {
                score=score+2;
                answerIsCorrect(runningQuestionIndex);
                showCorrectChoice(choices[answer]);
            }
        }else {
            answerIsWrong(runningQuestionIndex);
            showWrongChoice(choices[answer]);
        }
        setTimeout(function () {
            Object.values(choices).forEach(choice => showNoChoice(choice));
            if (isGameOver()) {
                clearInterval(TIMER);
                displayScore();
            } else {
                count = 0;
                count1 = 0;
                runningQuestionIndex++;
                displayQuestion();
            }
            isPaused = false;
        }, 300);
    }
    //if and else statement
    //if the choice == the questions array correct choice
    //score++ and update progress bar to green
    //else score remains unchanged and update progress bar to red
    //second if else statement
    //checks to see if game is over
    //if game is over clear time and display score
    //else set count to 0, cur question index++ and display next question
}

function answerIsCorrect(index) {
    document.getElementById("q" + index).style.backgroundColor =
        "#4CAF50";
    //changes the progress bar of the current question index to green
}

function answerIsWrong(index) {
    document.getElementById("q" + index).style.backgroundColor =
        "#777";
    //changes the progress bar of the current question index to red
}

function resetAnswer(index) {
    document.getElementById("q" + index).style.backgroundColor =
        "transparent";
    //changes the progress bar of the current question index to default
}

function resetAllAnswers() {
    questions.forEach((q, i) => resetAnswer(i));
}

function displayScore() {
    finish.style.display = "block";
    start.style.display = "none";
    trivia.style.display = "none";
    progress.style.display = "block";

    var scorePercent = score;//Math.round((100 * score) / questions.length);
    scoreContainer.innerHTML = scorePercent + "%";
    //Show score percent Math.round to get a whole number
    //Send var scorePercent to html to display
}
