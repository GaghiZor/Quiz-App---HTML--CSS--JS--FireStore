import { db } from "./firestore.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const quiz = document.getElementById("quiz");
const getData = await getDocs(collection(db, "questions"));

// Create an array of objects for questions and answers
const questions = [
  {

  },
  {
    question: "In The Force Awakens, which character has Darth Vader's damaged mask?",
    answer1: "Finn",
    answer2: "Rey",
    answer3: "Kylo Ren",
    answer4: "Luke Skywalker",
    correctAnswer: "3",
  },
  {
    question: "How did Princess Leia get her title of royalty?",
    answer1: "She is the adopted daughter of the Ball Organa and Queen Breha",
    answer2: "Her sharp aim with a blaster",
    answer3: "A mocking nickname from Han Solo",
    answer4: "She is the daughter of Queen Katrina of the Geonosians",
    correctAnswer: "1",
  },
  {
    question: "While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith?",
    answer1: "Purple",
    answer2: "Blue",
    answer3: "Red",
    answer4: "Green",
    correctAnswer: "3",
  },
  {
    question: "Who destroyed the Droid Control Ship when they accidentally activated a Naboo Fighter’s Autopilot?",
    answer1: "Biggs Darklighter",
    answer2: "Anakin Skywalker",
    answer3: "Obi Wan Kenobi",
    answer4: "Jar Jar Binks",
    correctAnswer: "2",
  },
  {
    question: "Where does Yoda live when he first trains Luke Skywalker?",
    answer1: "Tatooine",
    answer2: "Dagobah",
    answer3: "Hoth",
    answer4: "Coruscant",
    correctAnswer: "2",
  },
  {
    question: "While fighting his own father in the Cloud City, which hand does Luke Skywalker lose?",
    answer1: "Right",
    answer2: "Left",
    answer3: "Both",
    answer4: "Neither",
    correctAnswer: "1",
  },
  {
    question: "Who defeats Finn in his very first lightsaber duel?",
    answer1: "Darth Maul",
    answer2: "Darth Vader",
    answer3: "Captain Phasma",
    answer4: "Kylo Ren",
    correctAnswer: "4",
  },
  {
    question: "What is Chewbacca’s weapon of choice?",
    answer1: "Blaster rifle",
    answer2: "Metal club",
    answer3: "Bowcaster",
    answer4: "Fists",
    correctAnswer: "3",
  },
  {
    question: "When we see him again in The Force Awakens, after many years galavanting around the galaxy with Han Solo, how old is Chewbacca?",
    answer1: "Under 55 years old",
    answer2: "78 years old",
    answer3: "200 years old on the dot",
    answer4: "Over 220 years old",
    correctAnswer: "4",
  },
  {
    question: "What are the creatures, living on Endor, that helped the Rebel’s to defeat the second Death Star?",
    answer1: "Ewooks",
    answer2: "Wookies",
    answer3: "Nerf Herders",
    answer4: "Jawas",
    correctAnswer: "1",
  },
  {
    question: "What was the original title for the Star Wars movie?",
    answer1: "Star Battles",
    answer2: "Adventures of Luke Skywalker",
    answer3: "The Adventures of the Jedi",
    answer4: "Battles in Space",
    correctAnswer: "2",
  },
  {
    question: "What nickname does Han Solo call Luke Skywalker that drives him crazy?",
    answer1: "Buckaroo",
    answer2: "Kid",
    answer3: "Skydancer",
    answer4: "Lukie",
    correctAnswer: "2",
  },
  {
    question: "Who delivers the final blow that destroys the second Death Star?",
    answer1: "Han Solo with an X-Wing",
    answer2: "Luke Skywalker with a Speeder",
    answer3: "Jar Jar Binks with a Y-Wing",
    answer4: "Lando Calrissian with he Millenium Falcon",
    correctAnswer: "4",
  },
  {
    question: "Who blew up the first Death Star, and with what weapon?",
    answer1: "Luke Skywalker with his lightsaber",
    answer2: "Princess Leia with an X-Wing",
    answer3: "Luke Skywalker with an X-Wing",
    answer4: "Princess Leia with a thermal detonator",
    correctAnswer: "3",
  },
  {
    question: "What does Han Solo have to say about the Force in A New Hope?",
    answer1: "Listen Kid, I can use the force like any of you, I just don't want to.",
    answer2: "I wouldn't be caught dead with those midichlorians in my blood!",
    answer3: "Hokey religions and ancient weapons are no match for a good blaster at your side, kid.",
    answer4: "You can never be too safe. The Force is a powerful ally",
    correctAnswer: "3",
  },
  {
    question: "Ok, now you're in for it: After Han Solo and Chewie made an opening, which X-Wing pilot blew up the Starkiller Base?",
    answer1: "Poe Dameron",
    answer2: "Finn",
    answer3: "Han Solo",
    answer4: "General Hux",
    correctAnswer: "1",
  },
  {
    question: "What is the location of the scene in which we see the predominant color of Luke Skywalker’s outfit change from white to black?",
    answer1: "The Cloud City",
    answer2: "The first Death Star",
    answer3: "The Droid Control Ship",
    answer4: "Jabba's Palace",
    correctAnswer: "4",
  },
  {
    question: "What race does the comical Jar Jar Binks belong to?",
    answer1: "The Ewooks",
    answer2: "The Wookies",
    answer3: "The Hutt",
    answer4: "The Gungan",
    correctAnswer: "4",
  },
  {
    question: "Where do the Gungan live on the planet of Naboo?",
    answer1: "Under water in domes",
    answer2: "On land in palaces",
    answer3: "In the sky, in a Cloud City",
    answer4: "Underground in caverns",
    correctAnswer: "1",
  },
  {
    question: "What colors is the lovable droid BB-8?",
    answer1: "White and blue",
    answer2: "White and red",
    answer3: "White and orange",
    answer4: "Black and green",
    correctAnswer: "3",
  },
  {
    question: "And what about R2D2, what colors cover this handsome little devil?",
    answer1: "Silver and black",
    answer2: "White and orange",
    answer3: "Green and yellow",
    answer4: "White and blue",
    correctAnswer: "4",
  },
  {
    question: "What planet is Rey living on when BB-8 finds her?",
    answer1: "Tatooine",
    answer2: "Jakku",
    answer3: "Hoth",
    answer4: "Endor",
    correctAnswer: "2",
  },
  {
    question: "What color is the first lightsaber Rey uses?",
    answer1: "Blue",
    answer2: "Green",
    answer3: "Red",
    answer4: "Purple",
    correctAnswer: "1",
  },
  {
    question: "Who wins second place in the Boonta Eve Classic pod race where Anakin Skywalker’s wins his freedom?",
    answer1: "Sebulda",
    answer2: "Gasgano",
    answer3: "Anakin Skywalker",
    answer4: "Mawhonic",
    correctAnswer: "2",
  },
  {
    question: "What is Princess Leia's famous line, recorded by R2D2 for her Jedi friend?",
    answer1: "'Help me, Obi-Wan Kenobi. You're my only hope.'",
    answer2: "'Captain, being held by you isn't quite enough to get me excited.'",
    answer3: "'This bucket of bolts is never gonna get us past that blockade.'",
    answer4: "'Han, we need you.'",
    correctAnswer: "1",
  },
  {
    question: "How many lightsaber blades does Darth Maul use?",
    answer1: "5",
    answer2: "2",
    answer3: "4",
    answer4: "3",
    correctAnswer: "2",
  },
  {
    question: "What color was Obi Wan Kenobi's lightsaber when he defeated Darth Maul?",
    answer1: "Blue",
    answer2: "Red",
    answer3: "Green",
    answer4: "Yellow",
    correctAnswer: "3",
  },
  {
    question: "Which character says the famous line, 'Why, you stuck up, half-witted, scruffy-looking Nerf herder!' in Episode V: The Empire Strikes Back?",
    answer1: "C-3PO",
    answer2: "Luke Skywalker",
    answer3: "Princess Leia",
    answer4: "Lando Calrissian",
    correctAnswer: "3",
  },
  {
    question: "When is the only time we see Han Solo use a lightsaber, and in what location?",
    answer1: "Cutting open the Tauntaun to save Luke on Hoth",
    answer2: "Fighting Darth Vader to save Leia on Hoth",
    answer3: "Opening a door to save Chewie on Tatooine",
    answer4: "Defending R2D2 from Storm troopers on Tatooine",
    correctAnswer: "1",
  },
  {
    question: "In Star Wars: The Force Awakens, on what planet do Leia and Han Solo meet after a long separation?",
    answer1: "Jakku",
    answer2: "Takodana",
    answer3: "Endor",
    answer4: "D'Qar",
    correctAnswer: "4",
  },
    
];

async function createDoc() {
  for (let i = 10; i <= 30; i++) {
    await setDoc(doc(db, "questions", `${i}`), {
      answer1: questions[i].answer1,
      answer2: questions[i].answer2,
      answer3: questions[i].answer3,
      answer4: questions[i].answer4,
      correctAnswer: questions[i].correctAnswer,
      question: questions[i].question,
    });
  }
}

function checkAnswers() {
  let answers = [];
  let points = 0;

  getData.forEach((doc) => {
    const checkAnswer = document.getElementsByName(`questionNo${doc.id}`);
    // check if picked answer is the correct answer
    for (let i = 0; i < checkAnswer.length; i++) {
      if (checkAnswer[i].checked) {
        if (checkAnswer[i].value === doc.data().correctAnswer) {
          answers.push({
            question: doc.data().question,
            answer: checkAnswer[i].value,
            correct: true,
          });
          points += 1;
          break;
        } else {
          answers.push({
            question: doc.data().question,
            answer: checkAnswer[i].value,
            correct: false,
          });
          break;
        }
      }
    }
  });

  console.log(answers);
  console.log(points);
}

function createQuiz() {
  getData.forEach((doc) => {
    // Get data from firestore and create Question + Answers
    createQuestion(doc);
  });
}

function createQuestion(doc) {
  const p = document.createElement("p");
  const question = document.createElement("span");
  const newLine = document.createElement("br");
  const answer1 = document.createElement("input");
  const answer2 = document.createElement("input");
  const answer3 = document.createElement("input");
  const answer4 = document.createElement("input");

  const answer1Label = document.createElement("label");
  const answer2Label = document.createElement("label");
  const answer3Label = document.createElement("label");
  const answer4Label = document.createElement("label");

  p.setAttribute("id", doc.id);
  question.setAttribute("id", `q${doc.id}`);

  answer1.setAttribute("id", `q${doc.id}a1`);
  answer1.setAttribute("type", "radio");
  answer1.setAttribute("name", `questionNo${doc.id}`);
  answer1.setAttribute("value", "1");
  answer1.setAttribute("class", "checkbox");

  answer2.setAttribute("id", `q${doc.id}a2`);
  answer2.setAttribute("type", "radio");
  answer2.setAttribute("name", `questionNo${doc.id}`);
  answer2.setAttribute("value", "2");
  answer2.setAttribute("class", "checkbox");

  answer3.setAttribute("id", `q${doc.id}a3`);
  answer3.setAttribute("type", "radio");
  answer3.setAttribute("name", `questionNo${doc.id}`);
  answer3.setAttribute("value", "3");
  answer3.setAttribute("class", "checkbox");

  answer4.setAttribute("id", `q${doc.id}a4`);
  answer4.setAttribute("type", "radio");
  answer4.setAttribute("name", `questionNo${doc.id}`);
  answer4.setAttribute("value", "4");
  answer4.setAttribute("class", "checkbox");

  answer1Label.setAttribute("for", `q${doc.id}a1`);
  answer2Label.setAttribute("for", `q${doc.id}a2`);
  answer3Label.setAttribute("for", `q${doc.id}a3`);
  answer4Label.setAttribute("for", `q${doc.id}a4`);

  p.appendChild(question);
  p.appendChild(newLine);

  p.appendChild(answer1);
  p.appendChild(answer1Label);
  p.appendChild(document.createElement("br"));

  p.appendChild(answer2);
  p.appendChild(answer2Label);
  p.appendChild(document.createElement("br"));

  p.appendChild(answer3);
  p.appendChild(answer3Label);
  p.appendChild(document.createElement("br"));

  p.appendChild(answer4);
  p.appendChild(answer4Label);
  p.appendChild(document.createElement("br"));

  question.textContent = doc.data().question;

  answer1Label.textContent = doc.data().answer1;
  answer2Label.textContent = doc.data().answer2;
  answer3Label.textContent = doc.data().answer3;
  answer4Label.textContent = doc.data().answer4;

  quiz.appendChild(p);
}

createQuiz();

// Export functions for global access
export { checkAnswers, createDoc };
