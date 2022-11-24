import GuessStyles from "./assets/styles/GuessStyles";

const Guess = (props) => (
    <GuessStyles.GuessDiv>
        <GuessStyles.KnowWordP>Já sei a palavra!</GuessStyles.KnowWordP>
        <GuessStyles.GuessInput></GuessStyles.GuessInput>
        <GuessStyles.GuessButton>Chutar!</GuessStyles.GuessButton>
    </GuessStyles.GuessDiv>
);

export default Guess;