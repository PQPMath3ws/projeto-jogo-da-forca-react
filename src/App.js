//import Game from "./Game";
//import Guess from "./Guess";
//import Letters from "./Letters";

import AppStyles from "./assets/styles/AppStyles";
import Reset from "./assets/styles/Reset";

const App = () => {

    return (
        <AppStyles.GameDiv>
            <Reset></Reset>
            {/*
            <Game hangmanImage={hangmanImage}></Game>
            <Letters></Letters>
            <Guess></Guess>
            */}
        </AppStyles.GameDiv>
    );
};

export default App;