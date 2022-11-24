import LettersStyle from "./assets/styles/LettersStyle";

const Letters = (props) => (
    <LettersStyle.LettersItems>
        {props.lettersState.map(letterState => letterState.disabled ? <LettersStyle.ButtonLetterDisabled key={letterState.letter}>{letterState.letter}</LettersStyle.ButtonLetterDisabled> : <LettersStyle.ButtonLetter key={letterState.letter}>{letterState.letter}</LettersStyle.ButtonLetter>)}
    </LettersStyle.LettersItems>
);

export default Letters;