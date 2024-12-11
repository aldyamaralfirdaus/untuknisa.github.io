const questions = [
    { question: "Ikan Ikan Apa Yang Bisa Terbang?", answer: "ican love with you" },
    { question: "Apakah Kamu Cantik Hari Ini?", answer: "Aku Selalu Cantik" },
    { question: "Kenapa Kamu Cantik?", answer: "Karena Aku Cantik Hehehe" },
];

let currentQuestionIndex = 0;
let attempts = 0; // Variabel untuk menghitung jumlah kesalahan

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionElement = document.getElementById("question");
        questionElement.textContent = questions[currentQuestionIndex].question;
        attempts = 0; // Reset jumlah kesalahan saat menampilkan pertanyaan baru
    } else {
        // Jika semua pertanyaan sudah dijawab, arahkan ke halaman selanjutnya
        window.location.href = "selesai.html"; // Ganti dengan URL halaman tujuan Anda
    }
}

function checkAnswer() {
    const answerElement = document.getElementById("answer");
    const resultElement = document.getElementById("result");

    const userAnswer = answerElement.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        resultElement.textContent = "Nah Jawaban Kamu Bener Nih, Kita Lanjut Ya...";
        resultElement.style.color = "green";
        currentQuestionIndex++;
        showQuestion();
    } else {
        attempts++;
        if (attempts >= 3) {
            resultElement.textContent = `Jawaban kamu salah nisaaaaa, yang bener itu : ${correctAnswer}`;
            resultElement.style.color = "red";
            currentQuestionIndex++;
            showQuestion();
        } else {
            resultElement.textContent = `Jawaban Kamu salah nis, ayo serius!!! (${attempts}/3)`;
            resultElement.style.color = "red";
        }
    }

    answerElement.value = "";
}

window.onload = showQuestion;
