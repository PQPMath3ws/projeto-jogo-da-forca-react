import GameStyles from "./assets/styles/GameStyles";

const Game = (props) => (
    <GameStyles.GameItems>
        <GameStyles.LeftGameItem>
            <GameStyles.HangmanImage src={props.hangmanImage}></GameStyles.HangmanImage>
        </GameStyles.LeftGameItem>
        <GameStyles.RightGameItem>
            <GameStyles.StartGameButton>Escolher Palavra</GameStyles.StartGameButton>
            <GameStyles.WordDiv>
                <GameStyles.SpanWord>_</GameStyles.SpanWord>
            </GameStyles.WordDiv>
        </GameStyles.RightGameItem>
    </GameStyles.GameItems>
)

export default Game;