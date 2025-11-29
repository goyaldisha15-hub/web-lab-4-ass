// --------------------------------------
// SIMPLE JS CONSOLE QUIZ (BEGINNER LEVEL)
// --------------------------------------

// 1. QUESTIONS ARRAY
const quizQuestions = [
  {
    question: "1) Shubman Gill plays for which country?",
    options: ["a) India", "b) Australia", "c) England"],
    answer: "a",
    hint: "He plays for the team led by Rohit Sharma."
  },
  {
    question: "2) What is Shubman Gill's primary role?",
    options: ["a) Bowler", "b) Batsman", "c) Wicketkeeper"],
    answer: "b",
    hint: "He opens the innings with explosive shots."
  },
  {
    question: "3) Where is cricket mainly played?",
    options: ["a) On a football field", "b) On a pitch", "c) On a tennis court"],
    answer: "b",
    hint: "The 22-yard central area."
  },
  {
    question: "4) How many players are there in a cricket team?",
    options: ["a) 5", "b) 11", "c) 15"],
    answer: "b",
    hint: "The same number as a football team."
  },
  {
    question: "5) Which team does Shubman Gill play for in the IPL?",
    options: ["a) Mumbai Indians", "b) Gujarat Titans", "c) KKR"],
    answer: "b",
    hint: "GT (Hardik Pandya was captain earlier)."
  },
  {
  question: "10) Who is called the 'Hitman' in Indian cricket?",
  options: ["a) Virat Kohli", "b) MS Dhoni", "c) Rohit Sharma"],
  answer: "c",
  hint: "He is also the Indian captain."
},
{
  question: "13) Shubman Gill scored his first ODI double century against?",
  options: ["a) West Indies", "b) Sri Lanka", "c) New Zealand"],
  answer: "c",
  hint: "He scored 208 runs."
}
];

// 2. FUNCTION TO RUN QUIZ
function runQuiz() {
  let score = 0;

  alert("Welcome to the Shubman Gill & Cricket Quiz!");

  for (let i = 0; i < quizQuestions.length; i++) {
    let q = quizQuestions[i];
    let timeUp = false;

    // TIMER (10 seconds)
    let timer = setTimeout(() => {
      timeUp = true;
    }, 10000);

    // ASK QUESTION
    let userAnswer = prompt(
      q.question + "\n" +
      q.options.join("\n") +
      "\n(You have 10 seconds!)"
    );

    clearTimeout(timer);

    if (timeUp) {
      alert("⏳ Time’s up!");
      alert("Hint: " + q.hint);
      continue;
    }

    if (!userAnswer) {
      alert("No answer given!");
      continue;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    // CHECK ANSWER
    if (userAnswer === q.answer) {
      alert("✅ Correct!");
      score++;
    } else {
      alert("❌ Wrong! Hint: " + q.hint);
    }
  }

  // FINAL SCORE
  alert("Quiz Finished!\nYour Score: " + score + "/" + quizQuestions.length);

  // 3. HIGH SCORE USING LOCAL STORAGE
  let highScore = localStorage.getItem("highScore");
  if (!highScore || score > highScore) {
    localStorage.setItem("highScore", score);
    alert("🎉 New High Score: " + score);
  } else {
    alert("Your High Score is still: " + highScore);
  }

  // 4. Restart option
  let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase().trim();

  if (playAgain === "yes") {
    runQuiz();
  } else {
    alert("Thanks for playing!");
  }
}

// 5. START THE QUIZ
runQuiz();