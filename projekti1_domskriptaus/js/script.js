const questionBank = [
  {
    type: "multiple",
    question: "Mikä näistä on metallimusiikin alagenre?",
    answers: [
      { text: "Thrash metal", correct: true },
      { text: "Salsa pop", correct: false },
      { text: "Ambient folk jazz", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä soitin on erityisen tyypillinen heavy metalissa?",
    answers: [
      { text: "Sähkökitara", correct: true },
      { text: "Huilu", correct: false },
      { text: "Klarinetti", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista liittyy usein metallimusiikkiin?",
    answers: [
      { text: "Raskaat riffit", correct: true },
      { text: "Kevyt hissimusiikki", correct: false },
      { text: "Hiljainen taustahyräily", correct: false }
    ]
  },
  {
    type: "boolean",
    question: "Metallimusiikissa käytetään usein särökitaraa.",
    answers: [
      { text: "Tosi", correct: true },
      { text: "Epätosi", correct: false }
    ]
  },
  {
    type: "boolean",
    question: "Heavy metal ja klassinen musiikki ovat täysin sama asia.",
    answers: [
      { text: "Tosi", correct: false },
      { text: "Epätosi", correct: true }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä liittyy heavy metal -historiaan?",
    answers: [
      { text: "Black Sabbath", correct: true },
      { text: "ABBA", correct: false },
      { text: "Aqua", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä bändeistä tunnetaan maskien käytöstä lavalla?",
    answers: [
      { text: "Slipknot", correct: true },
      { text: "The Beatles", correct: false },
      { text: "Eagles", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä on suomalainen metallibändi?",
    answers: [
      { text: "Nightwish", correct: true },
      { text: "Kraftwerk", correct: false },
      { text: "Kiss", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista liittyy usein thrash metaliin?",
    answers: [
      { text: "Nopea ja aggressiivinen soitto", correct: true },
      { text: "Pelkkä akustinen kitara", correct: false },
      { text: "Täysin kuoropohjainen tyyli", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä bändeistä liitetään usein thrash metaliin?",
    answers: [
      { text: "Slayer", correct: true },
      { text: "Bee Gees", correct: false },
      { text: "Coldplay", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista on metallibändi?",
    answers: [
      { text: "Iron Maiden", correct: true },
      { text: "Backstreet Boys", correct: false },
      { text: "Spice Girls", correct: false }
    ]
  },
  {
    type: "boolean",
    question: "Rumpali pitää usein yllä kappaleen rytmistä perustaa.",
    answers: [
      { text: "Tosi", correct: true },
      { text: "Epätosi", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä liittyy usein symphonic metaliin?",
    answers: [
      { text: "Orkesterimaiset elementit", correct: true },
      { text: "Pelkkä räppivokaali", correct: false },
      { text: "Täysi hiljaisuus", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista on tunnettu suomalainen metallibändi?",
    answers: [
      { text: "Children of Bodom", correct: true },
      { text: "Oasis", correct: false },
      { text: "Blur", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista kuuluu yleensä bändin rytmisektioon?",
    answers: [
      { text: "Basso", correct: true },
      { text: "Viulujousi", correct: false },
      { text: "Trumpetin suukappale", correct: false }
    ]
  },
  {
    type: "boolean",
    question: "Basso tukee usein kappaleen matalia taajuuksia.",
    answers: [
      { text: "Tosi", correct: true },
      { text: "Epätosi", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä bändeistä on tunnettu kahdesta kitaristista ja gallop-tyylisestä menosta?",
    answers: [
      { text: "Iron Maiden", correct: true },
      { text: "Daft Punk", correct: false },
      { text: "Pet Shop Boys", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä on suomalainen?",
    answers: [
      { text: "Amorphis", correct: true },
      { text: "Rammstein", correct: false },
      { text: "Pantera", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä on saksalainen?",
    answers: [
      { text: "Rammstein", correct: true },
      { text: "Sabaton", correct: false },
      { text: "Metallica", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä bändeistä on ruotsalainen?",
    answers: [
      { text: "Sabaton", correct: true },
      { text: "Nightwish", correct: false },
      { text: "Megadeth", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista liittyy yleensä doom metaliin?",
    answers: [
      { text: "Hidas ja raskas tunnelma", correct: true },
      { text: "Nopea diskobiitti", correct: false },
      { text: "Pelkkä synapop-rakenne", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä liittyy usein power metaliin?",
    answers: [
      { text: "Helloween", correct: true },
      { text: "The Prodigy", correct: false },
      { text: "Nirvana", correct: false }
    ]
  },
  {
    type: "boolean",
    question: "Power metalissa voi esiintyä melodisia ja nopeita kappaleita.",
    answers: [
      { text: "Tosi", correct: true },
      { text: "Epätosi", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä yhdistetään usein progressiiviseen metalliin?",
    answers: [
      { text: "Dream Theater", correct: true },
      { text: "Boney M.", correct: false },
      { text: "The Corrs", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista on thrash metal -bändi?",
    answers: [
      { text: "Megadeth", correct: true },
      { text: "A-ha", correct: false },
      { text: "Roxette", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista kuuluu usein live-metallikeikan tunnelmaan?",
    answers: [
      { text: "Voimakas energia", correct: true },
      { text: "Täydellinen hiljaisuus koko ajan", correct: false },
      { text: "Ei rumpuja lainkaan", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä on tunnettu brittiläinen heavy metal -bändi?",
    answers: [
      { text: "Judas Priest", correct: true },
      { text: "Bon Jovi", correct: false },
      { text: "The Doors", correct: false }
    ]
  },
  {
    type: "boolean",
    question: "Tuplabasarit ovat metallissa täysin tuntematon ilmiö.",
    answers: [
      { text: "Tosi", correct: false },
      { text: "Epätosi", correct: true }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä on yhdysvaltalainen?",
    answers: [
      { text: "Metallica", correct: true },
      { text: "Nightwish", correct: false },
      { text: "Sabaton", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista liittyy usein black metaliin?",
    answers: [
      { text: "Synkempi ja kylmä tunnelma", correct: true },
      { text: "Reggaeton-komppi", correct: false },
      { text: "Samba-rumpupiiri", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista on death metal -bändi?",
    answers: [
      { text: "Cannibal Corpse", correct: true },
      { text: "Take That", correct: false },
      { text: "Ace of Base", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä näistä bändeistä tunnetaan sotahistoria-aiheista sanoituksista?",
    answers: [
      { text: "Sabaton", correct: true },
      { text: "The Beach Boys", correct: false },
      { text: "Wham!", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista on yksi tunnetuimmista suomalaisista sinfonisen metallin bändeistä?",
    answers: [
      { text: "Nightwish", correct: true },
      { text: "Kent", correct: false },
      { text: "Phoenix", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä liitetään usein groove metaliin?",
    answers: [
      { text: "Pantera", correct: true },
      { text: "ABBA", correct: false },
      { text: "Eurythmics", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Mikä seuraavista bändeistä liittyy usein progressiiviseen ja tunnelmalliseen metalliin?",
    answers: [
      { text: "Opeth", correct: true },
      { text: "Modern Talking", correct: false },
      { text: "Aqua", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/metallica.jpg",
    answers: [
      { text: "Metallica", correct: true },
      { text: "Nightwish", correct: false },
      { text: "Sabaton", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/iron-maiden.jpg",
    answers: [
      { text: "Iron Maiden", correct: true },
      { text: "Slayer", correct: false },
      { text: "Slipknot", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/nightwish.jpg",
    answers: [
      { text: "Nightwish", correct: true },
      { text: "Megadeth", correct: false },
      { text: "Korn", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/black-sabbath.jpg",
    answers: [
      { text: "Black Sabbath", correct: true },
      { text: "Dream Theater", correct: false },
      { text: "Sabaton", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/slayer.jpg",
    answers: [
      { text: "Slayer", correct: true },
      { text: "Rammstein", correct: false },
      { text: "Opeth", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/judas-priest.jpg",
    answers: [
      { text: "Judas Priest", correct: true },
      { text: "Children of Bodom", correct: false },
      { text: "Ghost", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/sabaton.jpg",
    answers: [
      { text: "Sabaton", correct: true },
      { text: "Pantera", correct: false },
      { text: "Amorphis", correct: false }
    ]
  },
  {
    type: "image",
    question: "Mikä bändi näkyy kuvassa?",
    image: "images/children-of-bodom.jpg",
    answers: [
      { text: "Children of Bodom", correct: true },
      { text: "Slipknot", correct: false },
      { text: "Manowar", correct: false }
    ]
  }
];

const dragTaskBank = [
  {
    instruction: "Yhdistä alagenre oikeaan kuvaukseen.",
    items: [
      { id: "heavy", text: "Heavy metal" },
      { id: "thrash", text: "Thrash metal" },
      { id: "symphonic", text: "Symphonic metal" }
    ],
    zones: [
      { text: "Perinteinen raskas metallityyli", match: "heavy" },
      { text: "Nopea ja aggressiivinen tyyli", match: "thrash" },
      { text: "Melodinen ja orkesterimainen tyyli", match: "symphonic" }
    ]
  },
  {
    instruction: "Yhdistä soitin oikeaan rooliin.",
    items: [
      { id: "drums", text: "Rummut" },
      { id: "bass", text: "Basso" },
      { id: "guitar", text: "Kitara" }
    ],
    zones: [
      { text: "Pitää rytmiä", match: "drums" },
      { text: "Tukee matalia taajuuksia", match: "bass" },
      { text: "Soittaa riffejä ja sooloja", match: "guitar" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan kotimaahan.",
    items: [
      { id: "nightwish", text: "Nightwish" },
      { id: "rammstein", text: "Rammstein" },
      { id: "sabaton", text: "Sabaton" }
    ],
    zones: [
      { text: "Suomi", match: "nightwish" },
      { text: "Saksa", match: "rammstein" },
      { text: "Ruotsi", match: "sabaton" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan kotimaahan.",
    items: [
      { id: "metallica", text: "Metallica" },
      { id: "ironmaiden", text: "Iron Maiden" },
      { id: "amorphis", text: "Amorphis" }
    ],
    zones: [
      { text: "Yhdysvallat", match: "metallica" },
      { text: "Iso-Britannia", match: "ironmaiden" },
      { text: "Suomi", match: "amorphis" }
    ]
  },
  {
    instruction: "Yhdistä alagenre oikeaan avainsanaan.",
    items: [
      { id: "doom", text: "Doom metal" },
      { id: "power", text: "Power metal" },
      { id: "death", text: "Death metal" }
    ],
    zones: [
      { text: "Hidas ja raskas tunnelma", match: "doom" },
      { text: "Melodinen ja usein nopea", match: "power" },
      { text: "Äärimmäisempi ja raskaampi ilmaisu", match: "death" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan tyyliin.",
    items: [
      { id: "slayer", text: "Slayer" },
      { id: "dreamtheater", text: "Dream Theater" },
      { id: "nightwish2", text: "Nightwish" }
    ],
    zones: [
      { text: "Thrash metal", match: "slayer" },
      { text: "Progressiivinen metalli", match: "dreamtheater" },
      { text: "Symphonic metal", match: "nightwish2" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan tyyliin.",
    items: [
      { id: "pantera", text: "Pantera" },
      { id: "opeth", text: "Opeth" },
      { id: "helloween", text: "Helloween" }
    ],
    zones: [
      { text: "Groove metal", match: "pantera" },
      { text: "Progressiivinen / tunnelmallinen metalli", match: "opeth" },
      { text: "Power metal", match: "helloween" }
    ]
  },
  {
    instruction: "Yhdistä termi oikeaan merkitykseen.",
    items: [
      { id: "riff", text: "Riffi" },
      { id: "solo", text: "Soolo" },
      { id: "tempo", text: "Tempo" }
    ],
    zones: [
      { text: "Toistuva soitollinen kuvio", match: "riff" },
      { text: "Yksittäisen soittajan näyttävä osuus", match: "solo" },
      { text: "Kappaleen nopeus", match: "tempo" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan maahan.",
    items: [
      { id: "judas", text: "Judas Priest" },
      { id: "megadeth", text: "Megadeth" },
      { id: "children", text: "Children of Bodom" }
    ],
    zones: [
      { text: "Iso-Britannia", match: "judas" },
      { text: "Yhdysvallat", match: "megadeth" },
      { text: "Suomi", match: "children" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan maahan.",
    items: [
      { id: "ghost", text: "Ghost" },
      { id: "gojira", text: "Gojira" },
      { id: "kreator", text: "Kreator" }
    ],
    zones: [
      { text: "Ruotsi", match: "ghost" },
      { text: "Ranska", match: "gojira" },
      { text: "Saksa", match: "kreator" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan maahan.",
    items: [
      { id: "sepultura", text: "Sepultura" },
      { id: "behemoth", text: "Behemoth" },
      { id: "manowar", text: "Manowar" }
    ],
    zones: [
      { text: "Brasilia", match: "sepultura" },
      { text: "Puola", match: "behemoth" },
      { text: "Yhdysvallat", match: "manowar" }
    ]
  },
  {
    instruction: "Yhdistä metallityyli oikeaan kuvaukseen.",
    items: [
      { id: "black", text: "Black metal" },
      { id: "prog", text: "Progressiivinen metalli" },
      { id: "groove", text: "Groove metal" }
    ],
    zones: [
      { text: "Synkempi ja kylmempi tunnelma", match: "black" },
      { text: "Monimutkaisemmat rakenteet", match: "prog" },
      { text: "Raskas groove ja rytminen potku", match: "groove" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan tunnistettavaan piirteeseen.",
    items: [
      { id: "slipknot", text: "Slipknot" },
      { id: "sabaton2", text: "Sabaton" },
      { id: "rammstein2", text: "Rammstein" }
    ],
    zones: [
      { text: "Maskit lavalla", match: "slipknot" },
      { text: "Sotahistoria-aiheita", match: "sabaton2" },
      { text: "Saksankielinen industrial-vaikutteinen tyyli", match: "rammstein2" }
    ]
  },
  {
    instruction: "Yhdistä bändi oikeaan kotimaahan.",
    items: [
      { id: "blacksabbath", text: "Black Sabbath" },
      { id: "slayer2", text: "Slayer" },
      { id: "nightwish3", text: "Nightwish" }
    ],
    zones: [
      { text: "Iso-Britannia", match: "blacksabbath" },
      { text: "Yhdysvallat", match: "slayer2" },
      { text: "Suomi", match: "nightwish3" }
    ]
  },
  {
    instruction: "Yhdistä tehtävä oikeaan bändirooliin.",
    items: [
      { id: "vocal", text: "Laulaja" },
      { id: "drummer", text: "Rumpali" },
      { id: "bassist", text: "Basisti" }
    ],
    zones: [
      { text: "Vastaa usein lauluosuuksista", match: "vocal" },
      { text: "Rakentaa rytmistä pohjaa rummuilla", match: "drummer" },
      { text: "Tukee alataajuuksia ja groovea", match: "bassist" }
    ]
  }
];

const QUIZ_COUNT_PER_ROUND = 10;
const DRAG_COUNT_PER_ROUND = 2;
const QUESTION_TIME = 15;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const dragScreen = document.getElementById("drag-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const answerButtons = document.getElementById("answer-buttons");
const feedback = document.getElementById("feedback");

const dragTitle = document.querySelector("#drag-screen h2");
const dragInstruction = document.querySelector("#drag-screen .instruction");
const dragContainer = document.getElementById("drag-container");
const dropZonesWrapper = document.querySelector(".drop-zones");
const checkDragBtn = document.getElementById("check-drag-btn");
const dragFeedback = document.getElementById("drag-feedback");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");

let selectedQuestions = [];
let selectedDragTasks = [];
let currentQuestionIndex = 0;
let currentDragIndex = 0;
let score = 0;
let draggedItem = null;
let dragChecked = false;
let timer = null;
let timeLeft = QUESTION_TIME;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", restartQuiz);
checkDragBtn.addEventListener("click", checkDragAnswers);

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  currentDragIndex = 0;
  dragChecked = false;

  selectedQuestions = shuffleArray(
    questionBank.map(question => ({
      ...question,
      answers: shuffleArray([...question.answers])
    }))
  ).slice(0, QUIZ_COUNT_PER_ROUND);

  selectedDragTasks = shuffleArray([...dragTaskBank]).slice(0, DRAG_COUNT_PER_ROUND);

  updateScore();
  showScreen(quizScreen);
  showQuestion();
}

function showScreen(screenToShow) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  dragScreen.classList.remove("active");
  resultScreen.classList.remove("active");

  screenToShow.classList.add("active");
}

function updateScore() {
  scoreDisplay.textContent = `Pisteet: ${score}`;
}

function showQuestion() {
  resetQuestionState();
  stopTimer();

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  questionCounter.textContent = `Kysymys ${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
  questionText.textContent = currentQuestion.question;

  if (currentQuestion.type === "image" && currentQuestion.image) {
    questionImage.src = currentQuestion.image;
    questionImage.classList.remove("hidden");
  } else {
    questionImage.src = "";
    questionImage.classList.add("hidden");
  }

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });

  startTimer();
}

function resetQuestionState() {
  nextBtn.classList.add("hidden");
  feedback.textContent = "";
  answerButtons.innerHTML = "";
  questionImage.src = "";
  questionImage.classList.add("hidden");
}

function selectAnswer(selectedButton, isCorrect) {
  stopTimer();

  const allButtons = answerButtons.querySelectorAll(".answer-btn");
  allButtons.forEach(button => {
    button.disabled = true;
  });

  if (isCorrect) {
    selectedButton.classList.add("correct");
    feedback.textContent = "Oikein!";
    score++;
    updateScore();
  } else {
    selectedButton.classList.add("wrong");
    feedback.textContent = "Väärin!";

    const quizCard = document.querySelector(".quiz-card");
    if (quizCard) {
      quizCard.classList.add("shake");

      setTimeout(() => {
        quizCard.classList.remove("shake");
      }, 400);
    }
  }

  const correctAnswerButton = [...allButtons].find(button =>
    selectedQuestions[currentQuestionIndex].answers.some(
      answer => answer.text === button.textContent && answer.correct
    )
  );

  if (correctAnswerButton) {
    correctAnswerButton.classList.add("correct");
  }

  nextBtn.classList.remove("hidden");
}

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    currentDragIndex = 0;
    loadDragTask();
    showScreen(dragScreen);
  }
}

function startTimer() {
  timeLeft = QUESTION_TIME;
  timerDisplay.textContent = `Aikaa: ${timeLeft}`;
  timerDisplay.classList.remove("timer-warning");

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Aikaa: ${timeLeft}`;

    if (timeLeft <= 5) {
      timerDisplay.classList.add("timer-warning");
    }

    if (timeLeft <= 0) {
      stopTimer();
      handleTimeUp();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function handleTimeUp() {
  const allButtons = answerButtons.querySelectorAll(".answer-btn");

  allButtons.forEach(button => {
    button.disabled = true;
  });

  const correctAnswerButton = [...allButtons].find(button =>
    selectedQuestions[currentQuestionIndex].answers.some(
      answer => answer.text === button.textContent && answer.correct
    )
  );

  if (correctAnswerButton) {
    correctAnswerButton.classList.add("correct");
  }

  feedback.textContent = "Aika loppui!";
  nextBtn.classList.remove("hidden");
}

function loadDragTask() {
  dragChecked = false;
  dragFeedback.textContent = "";
  draggedItem = null;

  const task = selectedDragTasks[currentDragIndex];

  dragTitle.textContent = `Drag and Drop -haaste ${currentDragIndex + 1} / ${selectedDragTasks.length}`;
  dragInstruction.textContent = task.instruction;

  dragContainer.innerHTML = "";
  dragContainer.classList.remove("hovered", "filled");

  const oldRows = dropZonesWrapper.querySelectorAll(".drop-row");
  oldRows.forEach(row => row.remove());

  let title = dropZonesWrapper.querySelector("h3");
  if (!title) {
    title = document.createElement("h3");
    title.textContent = "Pudota oikeaan kohtaan";
    dropZonesWrapper.prepend(title);
  }

  dragContainer.ondragover = handleContainerDragOver;
  dragContainer.ondragleave = handleContainerDragLeave;
  dragContainer.ondrop = handleContainerDrop;

  const shuffledItems = shuffleArray([...task.items]);
  shuffledItems.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("drag-item");
    div.setAttribute("draggable", "true");
    div.id = item.id;
    div.textContent = item.text;

    addDragEvents(div);

    dragContainer.appendChild(div);
  });

  task.zones.forEach(zoneData => {
    const row = document.createElement("div");
    row.classList.add("drop-row");

    const description = document.createElement("p");
    description.textContent = zoneData.text;

    const zone = document.createElement("div");
    zone.classList.add("drop-zone");
    zone.dataset.match = zoneData.match;

    zone.ondragover = handleZoneDragOver;
    zone.ondragleave = handleZoneDragLeave;
    zone.ondrop = handleZoneDrop;

    row.appendChild(description);
    row.appendChild(zone);
    dropZonesWrapper.appendChild(row);
  });
}

function addDragEvents(item) {
  item.addEventListener("dragstart", () => {
    if (dragChecked) {
      return;
    }

    draggedItem = item;
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
}

function handleContainerDragOver(event) {
  event.preventDefault();

  if (dragChecked) {
    return;
  }

  dragContainer.classList.add("hovered");
}

function handleContainerDragLeave() {
  dragContainer.classList.remove("hovered");
}

function handleContainerDrop(event) {
  event.preventDefault();
  dragContainer.classList.remove("hovered");

  if (!draggedItem || dragChecked) {
    return;
  }

  dragContainer.appendChild(draggedItem);
}

function handleZoneDragOver(event) {
  event.preventDefault();

  if (dragChecked) {
    return;
  }

  event.currentTarget.classList.add("hovered");
}

function handleZoneDragLeave(event) {
  event.currentTarget.classList.remove("hovered");
}

function handleZoneDrop(event) {
  event.preventDefault();

  const zone = event.currentTarget;
  zone.classList.remove("hovered");

  if (!draggedItem || dragChecked) {
    return;
  }

  const existingItem = zone.querySelector(".drag-item");

  if (existingItem && existingItem !== draggedItem) {
    dragContainer.appendChild(existingItem);
  }

  zone.innerHTML = "";
  zone.appendChild(draggedItem);
  zone.classList.add("filled");
}

function checkDragAnswers() {
  if (dragChecked) {
    return;
  }

  dragChecked = true;

  const zones = document.querySelectorAll(".drop-zone");
  let correctCount = 0;

  zones.forEach(zone => {
    const droppedItem = zone.querySelector(".drag-item");

    if (droppedItem && droppedItem.id === zone.dataset.match) {
      correctCount++;
      zone.style.borderColor = "green";
    } else {
      zone.style.borderColor = "crimson";
    }

    if (!droppedItem) {
      zone.classList.remove("filled");
    }
  });

  score += correctCount;
  updateScore();

  dragFeedback.textContent = `Sait tästä tehtävästä ${correctCount} / ${zones.length} pistettä.`;

  setTimeout(() => {
    currentDragIndex++;

    if (currentDragIndex < selectedDragTasks.length) {
      loadDragTask();
    } else {
      showResults();
    }
  }, 1600);
}

function showResults() {
  const maxScore =
    selectedQuestions.length +
    selectedDragTasks.reduce((sum, task) => sum + task.zones.length, 0);

  finalScore.textContent = `Sait ${score} / ${maxScore} pistettä`;

  if (score === maxScore) {
    resultMessage.textContent = "Täydellinen suoritus. Olet Metallijumala.";
  } else if (score >= maxScore * 0.75) {
    resultMessage.textContent = "Todella hyvä tulos. Metallitietoutesi on vahvalla tasolla.";
  } else if (score >= maxScore * 0.5) {
    resultMessage.textContent = "Hyvä suoritus. Lisää metallitotuuden opiskelua jotta saavutat metallijumalan tietouden.";
  } else {
    resultMessage.textContent = "Tässä on hyvä pohja. Kokeile uudelleen ja paranna tulosta.";
  }

  showScreen(resultScreen);
}

function restartQuiz() {
  stopTimer();

  score = 0;
  currentQuestionIndex = 0;
  currentDragIndex = 0;
  selectedQuestions = [];
  selectedDragTasks = [];
  draggedItem = null;
  dragChecked = false;

  updateScore();
  timerDisplay.textContent = `Aikaa: ${QUESTION_TIME}`;
  timerDisplay.classList.remove("timer-warning");
  feedback.textContent = "";
  dragFeedback.textContent = "";
  questionImage.src = "";
  questionImage.classList.add("hidden");

  showScreen(startScreen);
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}