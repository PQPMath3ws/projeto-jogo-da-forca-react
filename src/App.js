import { useState } from "react";

import Game from "./Game";
import Guess from "./Guess";
//import Letters from "./Letters";

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
    const [hangmanImage, setHangmanImage] = useState(hangmanImages[0]);

    return (
        <AppStyles.GameDiv>
            <Reset></Reset>
            <Game hangmanImage={hangmanImage}></Game>
            <Guess></Guess>
            {/*
            <Letters></Letters>
            */}
        </AppStyles.GameDiv>
    );
};

export default App;