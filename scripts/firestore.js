import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'

import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js'
			
const firebaseConfig = {
	apiKey: "AIzaSyA4Yk2c2_KqgQgrfquRRc8d2nj7YCp6n0Y",
	authDomain: "quiz-671fb.firebaseapp.com",
	projectId: "quiz-671fb",
	storageBucket: "quiz-671fb.appspot.com",
	messagingSenderId: "84710136268",
	appId: "1:84710136268:web:8eb3797cd914fa66f42569"
};
			
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }