import React from 'react';


const HomePage = ( props ) => {


    return (
    <div style={{size: "cover", fontSize:  "100px", backgroundColor: "red" }} >
        This is the background
    </div>
    );

}

HomePage.defaultProps = {

    bgHue : "red",
}

export default HomePage;