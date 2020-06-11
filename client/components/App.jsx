import React, { Component } from 'react';
import PicRender from './PicRender.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: [],
            house: []
        };
    }

    componentDidMount() {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(result => result.json())
        .then(data => this.setState({ pics: data }))
        .catch(err => console.log(err))

        fetch('https://www.potterapi.com/v1/sortingHat')
        .then(result => result.json())
        .then(data => this.setState({ house: data }))
        .catch(err => console.log(err))
    }


    render() {
        const picArr = [];
        const houseArr =[]
        for(let i = 0; i < this.state.pics.length; i++) {
            picArr.push(
                <PicRender 
                    key={'pic' + `${i}`}
                    pic={this.state.pics[i]}
                />
            )
        }
        console.log(this.state.house)
        return ( 
            <div>
                <h1>Cats</h1> 
                {picArr}
                <br/>
                <h2>The sorting hat has deemed you worthy to be in</h2>
                <br/>
                <h5>{this.state.house}</h5>
            </div>
        )
    }
}
export default App;