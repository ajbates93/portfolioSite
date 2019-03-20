import * as React from 'react';
import '../less/content.css';
import banner from '../images/banner.jpg';

const bannerImage = {
    backgroundImage: 'url(' + banner + ')'
};

export interface BannerProps {
    caption: string;
}

class Banner extends React.Component<BannerProps, {}>{
    constructor(props: BannerProps) {
        super(props);
    }
    render() {
        return (
            <div className="banner"
                style={bannerImage}>
                <div className="cover"></div>
                <div className="caption">{this.props.caption}</div>    
            </div> 
        )
    }
}

export default Banner;