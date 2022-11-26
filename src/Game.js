import GameStyles from "./assets/styles/GameStyles";

const Game = (props) => (
    <GameStyles.GameItems>
        <GameStyles.LeftGameItem>
            <GameStyles.HangmanImage src={props.hangmanImage} data-test="game-image"></GameStyles.HangmanImage>
        </GameStyles.LeftGameItem>
        <GameStyles.RightGameItem>
            <GameStyles.StartGameButton onClick={props.chooseWord} data-test="choose-word">Escolher Palavra</GameStyles.StartGameButton>
            <GameStyles.WordDiv data-test="word" data-answer={props.wordProgress.map(letterProgress => letterProgress.letter).join("")}>
                {props.wordProgress.map(word => <GameStyles.SpanWord key={"letter_index_" + Array.prototype.indexOf.call(props.wordProgress, word)} success={word.success}>{word.isDiscovered  ? word.letter : "_"}</GameStyles.SpanWord>)}
            </GameStyles.WordDiv>
        </GameStyles.RightGameItem>
    </GameStyles.GameItems>
);

export default Game;