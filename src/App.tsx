import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import ShoppingCar from './components/ShoppingCar';
import styles from './App.module.css';

interface Props {}
interface State {
  robotGallery: any[];
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: []
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => this.setState( {robotGallery: data}))
    
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="Logo"/>
          <h1>狂拽酷炫叼炸天的名字超级无敌长的的罗伯特Online购物平台</h1>
        </div>
        <ShoppingCar/>
        <div className={styles.robotList}> 
          {this.state.robotGallery.map( r => <Robot id={r.id} name={r.name} email={r.email}/>)}
        </div>
      </div>
    );
  }

}

export default App;
