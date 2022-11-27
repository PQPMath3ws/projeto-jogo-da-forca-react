import GuessStyles from "./assets/styles/GuessStyles";

const Guess = (props) => (
    <GuessStyles.GuessDiv>
        <GuessStyles.KnowWordP>Já sei a palavra!</GuessStyles.KnowWordP>
        <GuessStyles.GuessInput value={props.guessInput} onChange={(inputValue) => { props.setGuessInput(inputValue.target.value.replaceAll(" ", "")) } } data-test="guess-input" disabled={props.isDisabled}></GuessStyles.GuessInput>
        <GuessStyles.GuessButton onClick={() => { props.guess() }} data-test="guess-button" disabled={props.isDisabled}>Chutar!</GuessStyles.GuessButton>
    </GuessStyles.GuessDiv>
);

export default Guess;