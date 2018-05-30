import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </p>
      </div>
    );
  }
}

export default connect()(App);
