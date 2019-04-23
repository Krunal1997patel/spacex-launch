import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

//main thing that display all things
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    //GET user name, email, id 
    componentDidMount(){
        //get fake user data as JSON and send it to constructor
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots: user }));
    }

    //disply the data
    onSearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    //render the DOM
    render(){
        const { robots, searchfield } = this.state;

        //filter the cards by name or letters and redisplay the card 
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
                
        });

        //if the website has no user data, tell the user to refress the page
        return !robots.length ?

        //display try again if it loads nothing
            <h1><img alt='Try Again' src='https://fontmeme.com/permalink/190423/4a10442b41a5bb45aa269ddf82378aef.png' /></h1> :
            (
                //display the whole page
                <div className='tc'>
                    <h1><img src='https://fontmeme.com/permalink/190423/a2825c4f9c5ee4cdedf2af3554f6e185.png' alt='Logo'/></h1>
                    <SearchBox searchchange={this.onSearchchange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            )
    }
}

export default App;