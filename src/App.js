import { useState } from "react";

import Game from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";

import AppStyles from "./assets/styles/AppStyles";
import Reset from "./assets/styles/Reset";

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
    const [lettersState, setLettersState] = useState(alphaAscii.map((x) => ({disabled: true, letter: String.fromCharCode(x)})))

    return (
        <AppStyles.GameDiv>
            <Reset></Reset>
            <Game hangmanImage={hangmanImage}></Game>
            <Letters lettersState={lettersState}></Letters>
            <Guess></Guess>
        </AppStyles.GameDiv>
    );
};

export default App;