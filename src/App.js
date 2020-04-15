import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase()));

    return <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search monsters" changeHandler={(e) => this.setState({ search: e.target.value })}></SearchBox>
      <CardList monsters={filteredMonsters} />
    </div >
  }
}

export default App;
