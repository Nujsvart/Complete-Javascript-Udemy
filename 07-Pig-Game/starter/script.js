"use strict";

// Element secimi
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let score, activePlayer, currentScore, playing;

// Baslangic degerleri
const init = function () {
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  diceEl.classList.add("hidden");
  document.querySelectorAll(".score").forEach((skor) => (skor.textContent = 0));
  document.querySelectorAll(".player").forEach((player) => player.classList.remove("player--winner"));
  player0El.classList.add("player--active");
};

init();

// Player degistir
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0; // UI'ye 0 yaz
  currentScore = 0; // Skoru sifirla
  activePlayer = activePlayer === 0 ? 1 : 0; // Player'i degistir
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Zar atma buton event fonksiyonu
btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1; // 1. Rastgele numara elde et
    // 2. Zar resmini goster
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");
    // 3. Eger numara 1 degilse
    if (dice !== 1) {
      // Rastgele atilan numarayi current skor'a ekle
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
      //current0El.textContent = currentScore;
    } else {
      // Diger player'a gec
      switchPlayer();
    }
  }
});

// Hold buton event fonksiyonu
btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore; // Skor, total skora eklendi
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]; // UI'de yazildi
    // score 100'e esit veya buyuk mu?
    if (score[activePlayer] >= 100) {
      playing = false; // oyunu bitir
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

// Yeni oyun buton event fonksiyonu
btnNew.addEventListener("click", init);
