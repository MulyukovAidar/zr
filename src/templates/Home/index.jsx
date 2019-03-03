import React from 'react';
import TransparentNavbar from '../../molecules/TransparentNavbar';
import BgSlider from "../../molecules/BgSlider";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="home">
                <TransparentNavbar/>
                <BgSlider/>
            </div>
        );
    }
}

export default Home;
