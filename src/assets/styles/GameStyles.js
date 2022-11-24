import styled from "styled-components";

const GameStyles = {
    GameItems: styled.div`
        display: flex;
        min-width: 90%;
        max-width: 90%;
        align-self: center;
    `,
    HangmanImage: styled.img`
        width: 40%;
    `,
    LeftGameItem: styled.div`
        min-width: 50%;
        max-width: 50%;
        float: left;
    `,
    RightGameItem: styled.div`
        display: flex;
        min-width: 50%;
        max-width: 50%;
        align-items: flex-end;
        flex-direction: column;
    `,
    StartGameButton: styled.button`
        background-color: #27AE60;
        color: #FFFFFF;
        border: none;
        width: 200px;
        height: 60px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 8px;
        font-family: 'Roboto', sans-serif !important;
    `,
    WordDiv: styled.div`
        margin-top: auto;
        margin-right: 50px;
    `,
    SpanWord: styled.span`
        font-family: 'Noto Sans';
        font-style: normal;
        margin-left: 20px;
        font-weight: 700;
        font-size: 50px;
    `
};

export default GameStyles;