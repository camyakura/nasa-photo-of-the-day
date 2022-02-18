import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledPhoto = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: ${pr => pr.theme.secondaryColor};

    p {
        color: ${pr => pr.theme.black };
        width: 80%;
        background-color: ${pr => pr.theme.primaryColor};
        padding: 2%
    }

    h2 {
        font-size: 3rem;
    }

    img {
        scale: .5;
    }

`

function Photo (props) {
    const {photo, title, date, text} = props;


    return (
        <StyledPhoto>
            <h2>{ title }</h2>
            <h3>{date}</h3>
            <img src={photo} alt={title}></img>
            <p>{text}</p>
        </StyledPhoto>
    )
}



export default Photo;