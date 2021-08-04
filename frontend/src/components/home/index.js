import React from 'react';


const onClickHandle = (e) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.backgroundColor = randomColor
    console.log(e.target.backgroundColor)
    return e.target.backgroundColor;
}

const HomePage = ( props ) => {

    return (
    <div style={{size: "cover", fontSize:  "100px", backgroundColor: props.bgHue }} onClick={onClickHandle}>
        This is the background
    </div>
    );

}

HomePage.defaultProps = {

    bgHue : "red",
}

export default HomePage;