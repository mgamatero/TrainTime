// JavaScript function that wraps everything


$(document).ready(function () {
    var triviaQuestion = [{
        question: "What is the largest bone in the human body?",
        answers: ["Femur", "Lemur", "Radius", "Ulna"],
        correct: 0,
        image: "https://media.giphy.com/media/IvhprlIKgLbaw/giphy.gif",
    },

    {
        question: "What is the largest two digit prime number?",
        answers: ["97", "67", "37", "91"],
        correct: 0,
        image: "https://media.giphy.com/media/nSfyYGO3LMGjK/giphy.gif"
    },

    {
        question: "Which pop album is the best selling of all time?",
        answers: ["Sgt. Pepper's Lonely Hearts Club Band", "Thriller", "Jagged Little Pill", "The Chronic"],
        correct: 1,
        image: "https://media.giphy.com/media/ZXD5JEmd2VFxC/giphy.gif"
    },
    {
        question: "Which of the following can NOT be said of Will in “Good Will Hunting?",
        answers: ["He has been in trouble with the law", "He has trouble holding jobs", "He comes from a good family", "He is a Genius"],
        correct: 2,
        image: "https://media.giphy.com/media/Md2HLNKZL2YEw/giphy.gif"
    },
    {
        question: "In “Inception,” the spinning top is an example of a/an:",
        answers: ["Idol", "Hex", "Good Luck Charm", "Totem"],
        correct: 3,
        image: "https://media.giphy.com/media/Gw6zuulR3WKlO/giphy.gif"
    },
    {
        question: "What happens when Aaron gets a shot at anchoring the nightly news on “Broadcast News?",
        answers: ["He is unable to speak", "The teleprompter breaks", "There is a power outage at the studio", "He has a sweating attack"],
        correct: 3,
        image: "https://media.giphy.com/media/4bWWKmUnn5E4/giphy.gif"
    },
    {
        question: "What is the most common element on Earth?",
        answers: ["Hydrogen", "Gold", "Sodium", "Silver"],
        correct: 0,
        image: "https://media.giphy.com/media/oMOO5py01rwGs/giphy.gif"
    },
    {
        question: "Which Ocean goes to the deepest depths?",
        answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
        correct: 0,
        image: "https://media.giphy.com/media/11i4hptC71c90c/giphy.gif"
    },
    {
        question: "How many sides does a heptagon have?",
        answers: ["5", "3", "7", "9"],
        correct: 2,
        image: "https://media.giphy.com/media/eFmm3rq114lR6/giphy.gif"
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hot Tamales Meal Large", "Hey There My Lady", "Typer Hext Markup Language", "Hyper Text Markup Language"],
        correct: 3,
        image: "https://media.giphy.com/media/sl444NqppDOBa/giphy.gif"
    },
    {
        question: "Which is the most populous state?",
        answers: ["New York", "Utah", "Oregon", "California"],
        correct: 3,
        image: "https://media.giphy.com/media/2Wf4E5HlJhM0IrVV0x/giphy.gif"
    },
    {
        question: "Who is trying to seduce Benjamin in The Graduate?",
        answers: ["Mr. Robinson", "Ms. Robinson", "Mrs. Robinson", "Robinson Crusoe"],
        correct: 2,
        image: "https://media.giphy.com/media/6O9fkxYQ1dbG/giphy.gif"
    },
    {
        question: "Who interrupted Taylor Swift's acceptance speech at the 2009 Video Music Awards?",
        answers: ["Snoop", "Jay-Z", "Kanye", "Britney Spears"],
        correct: 2,
        image: "https://media.giphy.com/media/1hjmySJVirhOU/giphy.gif"
    },
    {
        question: "How many items are in a bakers dozen?",
        answers: ["13", "12", "11", "14"],
        correct: 0,
        image: "https://media.giphy.com/media/6iuLysv5iB3bO/giphy.gif"
    },
    {
        question: "Entomology is the branch of science that studies what?",
        answers: ["Plants", "Music", "Animals", "Insects"],
        correct: 3,
        image: "https://media.giphy.com/media/Yuvl9zDgVNCcU/giphy.gif"
    },
    {
        question: "What is the traditional fermented Korean side dish made with seasoned vegetables and salt?",
        answers: ["Kimchi", "Bulgogi", "Galbi", "Bibimbap"],
        correct: 0,
        image: "https://media.giphy.com/media/xUPJPhnAzy86MR7WmI/giphy.gif"
    },
    {
        question: "Who played Darth Vader on the set of the movie?",
        answers: ["David Prowse", "Peter Mayhew", "Anthony Daniels", "James Earl Jones"],
        correct: 0,
        image: "https://media.giphy.com/media/RvV4sUKIvrzGM/giphy.gif"
    },
    {
        question: "What is the time for the fastest mile ever run?",
        answers: ["1:43", "2:43", "3:43", "4:43"],
        correct: 2,
        image: "https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif"
    },
    {
        question: "What is the tallest building in the world?",
        answers: ["Tapei 101", "Petronas Towers", "Shanghai Tower", "Burj Khalifa"],
        correct: 3,
        image: "https://media.giphy.com/media/SoQcUe6jyVoxG/giphy.gif"
    },
    {
        question: "What is the most common training command taught to dogs?",
        answers: ["Stay", "Beg", "Sit", "Dance"],
        correct: 2,
        image: "https://media.giphy.com/media/xtGpIp4ixR6Gk/giphy.gif"
    },
    {
        question: "What is the square root of 256?",
        answers: ["36", "16", "14", "17"],
        correct: 1,
        image: "https://media.giphy.com/media/DHqth0hVQoIzS/giphy.gif"
    }
    ]

    //Fisher-Yates Shuffle, shuffles array contents
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //function countdown - decrements global var timer by 1, displays to html
    function countdown() {
        if (questionNumber > 10) {
            clearInterval(questionTimer) //stopping timer here but doesn't work?
            var delayFinal = setTimeout(function () { //delay in case the last question is a timeout.  This allows time for the transition screen to finish first.
                finalTally()
                clearTimeout(delayFinal)
            }, 4000)
        }
        else if (timer <= 0) {
            $("#timeRemaining").html("Time's Up!")
            clearInterval(questionTimer) //stopping timer here but doesn't work?
            $("#rightWrongTimeout").html("TIME IS UP!")
            answerAnimation(triviaQuestion[randQuestionNum].question, triviaQuestion[randQuestionNum].answers[triviaQuestion[randQuestionNum].correct], triviaQuestion[randQuestionNum].image)
            totalTimeout++
            randQuestionNum++
            questionNumber++
            timer = 13  //had to allow for that 3 sec transition, as described in bootcampspot comments
            questionTimer = setInterval(countdown, 1000)
            console.log("questionTimer"+questionTimer)
            loadQuestion(questionNumber, randQuestionNum)
        }
        else {
            $("#timeRemaining").html(timer)
            timer--
            console.log("timer else: " + timer)
        }
    }

    //function to load questions
    function loadQuestion(qNum, randQnum) {
        
        $("#questionNum").html(qNum)
        $("#actualQuestion").html(triviaQuestion[randQnum].question)
        $("#firstQuestion").html("A) " + triviaQuestion[randQnum].answers[0])
        $("#secondQuestion").html("B) " + triviaQuestion[randQnum].answers[1])
        $("#thirdQuestion").html("C) " + triviaQuestion[randQnum].answers[2])
        $("#fourthQuestion").html("D) " + triviaQuestion[randQnum].answers[3])
    }

    // function that displays answer and transitions once answer is picked
    function answerAnimation(currQuest, correct, img) {
        $("#transition").hide() //extra hide because sometimes, the previous gif is still shown
        $("#questions").hide()
        $("#transitionQuestion").html(currQuest)
        $("#correctAnswer").html(correct)
        $('#transitionImg').attr("src", img)
        $("#transition").show()
        var answerAnimationDelay = setTimeout(function () {
            $("#transition").hide()
            if (questionNumber <= 10) {
                $("#questions").show()
            }
            clearTimeout(answerAnimationDelay)
        }, 4000)
    }

    // function displays results
    function finalTally() {
        $("#finalResult").show()
        $("#totalQuestions").html(totalCorrect + totalWrong + totalTimeout)
        $("#totalCorrect").html(totalCorrect)
        $("#totalWrong").html(totalWrong)
        $("#totalTimeout").html(totalTimeout)
    }

    //initialize --
    triviaQuestion = shuffle(triviaQuestion) //This shuffles the questions
    $("#questions").hide()
    $("#transition").hide()
    $("#finalResult").hide()

    var totalCorrect = 0
    var totalWrong = 0
    var totalTimeout = 0
    var timer
    var randQuestionNum = 0
    var questionTimer //variable for setInterval
    var questionNumber = 1
    var questionDelay //variable for setTimeout


    //This section hides the splash screen and starts the questions
    $("#splashButton").on("click", function () {
        $("#splash").hide()
        $("#questions").show()

        timer = 10 // initial timer is ok
        questionTimer = setInterval(countdown, 1000)
        loadQuestion(questionNumber, randQuestionNum)


        $(".answer").on("click", function () {
            clearInterval(questionTimer)
            timer = 13 //had to allow for that 3 sec transition, as described in bootcampspot comments
            if (parseInt($(this).attr("value")) === triviaQuestion[randQuestionNum].correct) {
                $("#rightWrongTimeout").html("CORRECT!")
                answerAnimation(triviaQuestion[randQuestionNum].question, triviaQuestion[randQuestionNum].answers[triviaQuestion[randQuestionNum].correct], triviaQuestion[randQuestionNum].image)
                totalCorrect++
                randQuestionNum++
                questionNumber++

                //debug console.log("answerclick questionNumber - correct: " + questionNumber)
                //debug console.log("answerclick inside final if " + questionNumber)
                if (questionNumber > 10) {
                    var delayFinal = setTimeout(function () {
                        finalTally()
                        clearTimeout(delayFinal)
                    }, 4000)
                }
                else {
                    //debug console.log("answerclick inside final else " + questionNumber)                 
                    questionTimer = setInterval(countdown, 1000)
                    loadQuestion(questionNumber, randQuestionNum)
                }
            }
            else if (parseInt($(this).attr("value")) !== triviaQuestion[randQuestionNum].correct) {
                $("#rightWrongTimeout").html("WRONG!")

                answerAnimation(triviaQuestion[randQuestionNum].question, triviaQuestion[randQuestionNum].answers[triviaQuestion[randQuestionNum].correct], triviaQuestion[randQuestionNum].image)
                totalWrong++
                randQuestionNum++
                questionNumber++

                console.log("answerclick questionNumber - wrong: " + questionNumber)
                if (questionNumber > 10) {
                    var delayFinal = setTimeout(function () {
                        finalTally()
                        clearTimeout(delayFinal)
                    }, 4000)
                }
                else {
                    //debug console.log("answerclick inside final else " + questionNumber)

                    questionTimer = setInterval(countdown, 1000)
                    loadQuestion(questionNumber, randQuestionNum)
                }
            }
        })//end click answer 
    })   //end click splash


    $("#playAgainButton").on("click", function () {

        totalCorrect = 0
        totalWrong = 0
        totalTimeout = 0
        timer = 10 
        randQuestionNum = 0
        questionNumber = 1
        triviaQuestion = shuffle(triviaQuestion) //This shuffles the questions

        $("#questions").show()
        $("#transition").hide()
        $("#finalResult").hide()

        clearInterval(questionTimer) 
        questionTimer = setInterval(countdown, 1000)
        loadQuestion(questionNumber, randQuestionNum)
    })
});  //close document.ready



















