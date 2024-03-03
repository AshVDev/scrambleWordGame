const data = {
  rounds: [
    {
      scrambled_word: "pore",
      correct_word: "rope",
      hint: "Used for climbing or tying things together.",
    },
    {
      scrambled_word: "elbt",
      correct_word: "belt",
      hint: "Worn around the waist to support clothing.",
    },
    {
      scrambled_word: "yran",
      correct_word: "yarn",
      hint: "Used for knitting or crocheting.",
    },
    {
      scrambled_word: "ilfde",
      correct_word: "field",
      hint: "An open area of land.",
    },
    {
      scrambled_word: "ctaa",
      correct_word: "cat",
      hint: "A common household pet.",
    },
    {
      scrambled_word: "rocase",
      correct_word: "soccer",
      hint: "A popular sport played with a ball.",
    },
    {
      scrambled_word: "mplae",
      correct_word: "maple",
      hint: "A type of tree or a syrup flavor.",
    },
    {
      scrambled_word: "seriv",
      correct_word: "river",
      hint: "A natural flowing watercourse.",
    },
    {
      scrambled_word: "sith",
      correct_word: "this",
      hint: "Referring to something nearby.",
    },
    {
      scrambled_word: "ecar",
      correct_word: "race",
      hint: "A competition of speed.",
    },
    {
      scrambled_word: "ssune",
      correct_word: "sunrise",
      hint: "The daily appearance of the sun.",
    },
    {
      scrambled_word: "ewinrd",
      correct_word: "windre",
      hint: "To twist or coil.",
    },
    {
      scrambled_word: "ayfamli",
      correct_word: "familiar",
      hint: "Well-known or easily recognized.",
    },
    {
      scrambled_word: "troop",
      correct_word: "troop",
      hint: "A group of soldiers or scouts.",
    },
    {
      scrambled_word: "enture",
      correct_word: "venture",
      hint: "A risky or daring journey.",
    },
    {
      scrambled_word: "roeoedfg",
      correct_word: "foregoed",
      hint: "To precede or go before.",
    },
    {
      scrambled_word: "opuk",
      correct_word: "poku",
      hint: "A traditional Japanese musical instrument.",
    },
    {
      scrambled_word: "riatcnh",
      correct_word: "trachin",
      hint: "A type of fish.",
    },
    {
      scrambled_word: "lcoud",
      correct_word: "cloud",
      hint: "A visible mass of water droplets in the air.",
    },
    {
      scrambled_word: "lradwn",
      correct_word: "drawn",
      hint: "Past participle of draw.",
    },
    {
      scrambled_word: "sneap",
      correct_word: "sneap",
      hint: "To check or rebuke sharply.",
    },
    {
      scrambled_word: "ngroew",
      correct_word: "wrong",
      hint: "Not correct or in accordance with established facts.",
    },
    {
      scrambled_word: "aalrm",
      correct_word: "alarm",
      hint: "A signal or warning of danger.",
    },
    {
      scrambled_word: "aterh",
      correct_word: "earth",
      hint: "The third planet from the sun.",
    },
    {
      scrambled_word: "jummp",
      correct_word: "jump",
      hint: "To propel oneself upward into the air.",
    },
    {
      scrambled_word: "mbeucelr",
      correct_word: "clumber",
      hint: "A type of dog breed.",
    },
    {
      scrambled_word: "moleh",
      correct_word: "home",
      hint: "A place where one lives.",
    },
    {
      scrambled_word: "antrnea",
      correct_word: "narrate",
      hint: "To give an account or tell a story.",
    },
    {
      scrambled_word: "enrao",
      correct_word: "aeron",
      hint: "Relating to aviation or aircraft.",
    },
    {
      scrambled_word: "estairv",
      correct_word: "travies",
      hint: "A playful or mischievous act.",
    },
  ],
};
let timeOutId;
const dataArray = data.rounds;

function randIndex(b = 0) {
  let Ind = Math.max(0, Math.floor(Math.random() * dataArray.length));
  while (b === Ind) {
    Ind = Math.max(0, Math.floor(Math.random() * dataArray.length));
  }
  return Ind;
}
let index = randIndex();

function loadGame() {
  const wordTag = document.querySelector(".word");
  wordTag.textContent = dataArray[index].scrambled_word;
  const hintTag = document.querySelector(".hintText");
  hintTag.textContent = `${dataArray[index].hint}`;
}

function setint() {
  const timeSecTag = document.querySelector(".timeSec");
  timeSecTag.textContent = "30";
  timeOutId = setInterval(() => {
    timeSecTag.textContent = +timeSecTag.textContent - 1;
    if (+timeSecTag.textContent === -1) {
      alert(`Time Up Ans is : ${dataArray[index].correct_word}`);
      location.reload();
    }
  }, 1000);
}
(function () {
  setint();
  loadGame();
})();

const refreshWordBtn = document.querySelector(".refresh-word");

refreshWordBtn.addEventListener("click", () => {
  index = randIndex(index);
  clearInterval(timeOutId);
  setint();
  loadGame();
});
const Input = document.querySelector("input");

const checkWord = document.querySelector(".check-word");
checkWord.addEventListener("click", () => {
  if (Input.value.toLowerCase() === dataArray[index].correct_word) {
    alert("You won");
    index = randIndex(index);
    clearInterval(timeOutId);
    setint();
    loadGame();
    Input.value = "";
  } else {
    alert(`You Lose Ans is : ${dataArray[index].correct_word}`);
    index = randIndex(index);
    clearInterval(timeOutId);
    setint();
    loadGame();
    Input.value = "";
  }
});
