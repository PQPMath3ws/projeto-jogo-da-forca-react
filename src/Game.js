import GameStyles from "./assets/styles/GameStyles";

const Game = (props) => (
    <GameStyles.GameItems>
        <GameStyles.LeftGameItem>
            <GameStyles.HangmanImage src={props.hangmanImage}></GameStyles.HangmanImage>
        </GameStyles.LeftGameItem>
        <GameStyles.RightGameItem>
            <GameStyles.StartGameButton onClick={props.chooseWord}>Escolher Palavra</GameStyles.StartGameButton>
            <GameStyles.WordDiv>
                {props.wordProgress.map(word => <GameStyles.SpanWord key={"letter_index_" + Array.prototype.indexOf.call(props.wordProgress, word)}>{word.isDiscovered  ? word.letter : "_"}</GameStyles.SpanWord>)}
            </GameStyles.WordDiv>
        </GameStyles.RightGameItem>
    </GameStyles.GameItems>
)

export default Game;