import { useState } from "react";

import Game from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";

import AppStyles from "./assets/styles/AppStyles";
import Reset from "./assets/styles/Reset";

import palavras from "./palavras";

const hangmanImages = [
    require("./assets/images/forca0.png"),
    require("./assets/images/forca1.png"),
    require("./assets/images/forca2.png"),
    require("./assets/images/forca3.png"),
    require("./assets/images/forca4.png"),
    require("./assets/images/forca5.png"),
    require("./assets/images/forca6.png"),
];

const App = () => {
    const alphaAscii = Array.from(Array(26)).map((e, i) => i + 97);

    const [hangmanImage, setHangmanImage] = useState(hangmanImages[0]);
    const [lettersState, setLettersState] = useState(alphaAscii.map((x) => ({disabled: true, letter: String.fromCharCode(x)})));
    const [wordProgress, setWordProgress] = useState([]);
    const [guessInput, setGuessInput] = useState("");
    const [disableGuess, setDisableGuess] = useState(true);

    function chooseWord() {
        let word = palavras[Math.floor(Math.random() * palavras.length)];
        setHangmanImage(hangmanImages[0]);
        setWordProgress(word.split("").map(letter => ({letter: letter, isDiscovered: false})));
        setLettersState(alphaAscii.map((x) => ({disabled: false, letter: String.fromCharCode(x)})));
        setGuessInput("");
        setDisableGuess(false);
    }

    function guessLetter(letter) {
        const newLettersState = lettersState.map(letterState => {
            if (letterState.letter === letter) letterState.disabled = true;
            return letterState;
        });
        setLettersState(newLettersState);
        let changes = 0;
        const newWordProgress = wordProgress.map(letterProgress => {
            if (letterProgress.letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === letter) {
                changes++;
                letterProgress.isDiscovered = true;
            }
            return letterProgress;
        });
        if (changes !== 0) {
            setWordProgress(newWordProgress);
            if (wordProgress.filter(letterProgress => letterProgress.isDiscovered).length === wordProgress.length) {
                endGame(true);
            }
        } else {
            let indexOf = Array.prototype.indexOf.call(hangmanImages, hangmanImage);
            setHangmanImage(hangmanImages[indexOf + 1] ? hangmanImages[indexOf + 1] : hangmanImages[hangmanImages.length - 1]);
            if (indexOf === hangmanImages.length - 2) {
                endGame(false);
            }
        }
    }

    function guess() {
        let canGuess = wordProgress.filter(letterProgress => letterProgress.isDiscovered === false).length;
        if (canGuess > 0 && guessInput !== "") {
            let word = wordProgress.map(letterProgress => letterProgress.letter).join("");
            if (word === guessInput) {
                endGame(true);
            } else {
                setHangmanImage(hangmanImages[hangmanImages.length - 1]);
                endGame(false);
            }
        }
    }

    function endGame(success) {
        setLettersState(lettersState.map(letterState => ({letter: letterState.letter, disabled: true})));
        setWordProgress(wordProgress.map(letterProgress => ({letter: letterProgress.letter, isDiscovered: true, success})));
        setDisableGuess(true);
    }

    return (
        <AppStyles.GameDiv>
            <Reset></Reset>
            <Game hangmanImage={hangmanImage} chooseWord={chooseWord} wordProgress={wordProgress}></Game>
            <Letters lettersState={lettersState} guessLetter={guessLetter}></Letters>
            <Guess guess={guess} guessInput={guessInput} setGuessInput={setGuessInput} isDisabled={disableGuess}></Guess>
        </AppStyles.GameDiv>
    );
};

export default App;