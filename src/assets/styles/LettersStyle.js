import styled from "styled-components";

const LettersStyle = {
    LettersItems: styled.div`
        display: flex;
        flex-wrap: wrap;
        align-self: center;
        align-items: center;
        margin-top: 60px;
        width: 90%;
    `,
    ButtonLetter: styled.button`
        flex: 1 0 6.5%;
        margin: 5px;
        width: 40px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        background: #E1ECF4;
        color: #39739D;
        border: 1px solid #7AA7C7;
        cursor: pointer;
        border-radius: 3px;
        text-transform: uppercase;
    `,
    ButtonLetterDisabled: styled.button`
        flex: 1 0 6.5%;
        margin: 5px;
        width: 40px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        background: #9FAAB5;
        color: #798A9F;
        border: 1px solid #7AA7C7;
        cursor: pointer;
        border-radius: 3px;
        text-transform: uppercase;
    `
};

export default LettersStyle;