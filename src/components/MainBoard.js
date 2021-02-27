import React from 'react';
import Pin from './Pin';
import styled from 'styled-components';

function MainBoard(props) {
    let { pins } = props
    return (
        <div>
            <Wrapper>
                <Container>
                    {pins.map((pin) => {
                        let { urls } = pin;
                        return <Pin urls={urls} />
                    })}

                </Container>
            </Wrapper>

        </div>
    )
}
export default MainBoard;
const Wrapper = styled.div`

background-color:white;
display:flex;

justify-content:center;
width:100%;
height:100%;
margin-top:15px;

`
const Container = styled.div`
background-color:white;

column-count:5;
column-gap:5px;
margin:0 auto;
height:100%;:756px;


`