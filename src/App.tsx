import React, { useState, useEffect }from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import ShoppingCar from './components/ShoppingCar';
import styles from './App.module.css';

interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}

const App : React.FC = () => {

  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  // const [robotGallery, setrobotGallery] 
  useEffect(() =>{
    document.title = `click ${count} times`
  }, [count])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setRobotGallery(data))
  },[])

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="Logo"/>
          <h1>狂拽酷炫叼炸天的名字超级无敌长的的罗伯特Online购物平台</h1>
        </div>
        <button onClick={()=> {setCount(count + 1)}}>click</button>
        <span>Count: {count}</span>
        <ShoppingCar/>
        <div className={styles.robotList}> 
          {robotGallery.map( r => <Robot id={r.id} name={r.name} email={r.email}/>)}
        </div>
      </div>
    );
  }

export default App;
