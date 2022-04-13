import { db } from "./firestore.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

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

const getData = await getDocs(collection(db, "questions"));

function createQuiz() {
  const quiz = document.getElementById("quiz");

  getData.forEach((doc) => {
    // create elements
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
    answer1.setAttribute("value", doc.data().answer1);
    answer1.setAttribute("class", "checkbox");

    answer2.setAttribute("id", `q${doc.id}a2`);
    answer2.setAttribute("type", "radio");
    answer2.setAttribute("name", `questionNo${doc.id}`);
    answer2.setAttribute("value", doc.data().answer2);
    answer2.setAttribute("class", "checkbox");

    answer3.setAttribute("id", `q${doc.id}a3`);
    answer3.setAttribute("type", "radio");
    answer3.setAttribute("name", `questionNo${doc.id}`);
    answer3.setAttribute("value", doc.data().answer3);
    answer3.setAttribute("class", "checkbox");

    answer4.setAttribute("id", `q${doc.id}a4`);
    answer4.setAttribute("type", "radio");
    answer4.setAttribute("name", `questionNo${doc.id}`);
    answer4.setAttribute("value", doc.data().answer4);
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
  });
}

createQuiz();

// Export functions for global access
export { checkAnswers };
