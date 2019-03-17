import React from 'react';
import '../less/content.css';
import banner from '../images/banner.jpg';

var bannerImage = {
    backgroundImage: 'url(' + banner + ')'
};

class Banner extends React.Component{
    render() {
        return (
            <div className="banner"
                style={bannerImage}></div>
        )
    }
}

export default Banner;