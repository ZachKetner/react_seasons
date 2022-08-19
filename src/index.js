import './style/App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {  
    //Same as using constructor becuase Babel will convert
    state = { lat: null, errorMessage: '' };

    //Called only once before the rendering but render will still occur while this can be runner.
    componentDidMount() {
        //Getting users geolocation call
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    //Helper functions can hold condtional rendering so it keeps your render function adjustable as a whole
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <div><Spinner message="Please accept location request."/></div>
    }

    render() {
        return(
            //No border will show in this className. It does not exist but rather an example of avoiding conditional rendering in the render method.
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));