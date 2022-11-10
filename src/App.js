import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/searchBox/searchBox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    // console.log('constructer');
  }
  componentDidMount() {
    // console.log('update');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = event => {
    //  console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    console.log('render from app');

    const filterMonster = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} searchBox={'search-box'} />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
