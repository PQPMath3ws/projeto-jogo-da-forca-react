import styled from "styled-components";

const GuessStyles = {
    GuessDiv: styled.div`
        display: flex;
        align-self: center;
        height: 40px;
        align-items: center;
        margin-top: 50px;
    `,
    KnowWordP: styled.p`
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    `,
    GuessInput: styled.input`
        margin-left: 20px;
        width: 353px;
        height: 40px;
        border-radius: 3px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border: 1px solid #CCCCCC;
        background: #FFFFFF;
        box-sizing: border-box;
        padding-left: 10px;
        padding-right: 10px;
    `,
    GuessButton: styled.button`
        margin-left: 20px;
        width: 100px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        color: #3C76A1;
        cursor: pointer;
    `
};

export default GuessStyles;