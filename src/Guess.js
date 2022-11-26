import GuessStyles from "./assets/styles/GuessStyles";

const Guess = (props) => (
    <GuessStyles.GuessDiv>
        <GuessStyles.KnowWordP>Já sei a palavra!</GuessStyles.KnowWordP>
        <GuessStyles.GuessInput value={props.guessInput} onChange={(inputValue) => { props.setGuessInput(inputValue.target.value.replaceAll(" ", "")) } }></GuessStyles.GuessInput>
        <GuessStyles.GuessButton onClick={() => { props.guess() }}>Chutar!</GuessStyles.GuessButton>
    </GuessStyles.GuessDiv>
);

export default Guess;