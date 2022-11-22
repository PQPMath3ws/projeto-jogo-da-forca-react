import Game from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";

import AppStyles from "./assets/styles/AppStyles";
import "./assets/styles/reset.css";

const App = () => (
    <AppStyles.GameDiv>
        <Game></Game>
        <Letters></Letters>
        <Guess></Guess>
    </AppStyles.GameDiv>
);

export default App;