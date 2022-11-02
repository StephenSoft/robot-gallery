import React, { useState, useContext, useEffect }from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import ShoppingCar from './components/ShoppingCar';
import styles from './App.module.css';
import { appContext } from './index';

interface State {
  robotGallery: any[];
  count: number;
}

const App : React.FC = (props) => {

  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() =>{
    document.title = `click ${count} times`
  }, [count])

  useEffect(()=>{
    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setRobotGallery(data)
      } catch (e : any) {
        setError(e.message);
      }
      setLoading(false)

    };
    fetchData();
  },[])

  const value = useContext(appContext);

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="Logo"/>
          <h1>狂拽酷炫叼炸天的名字超级无敌长的的罗伯特Online购物平台</h1>
        </div>
        <h2>{value.author}</h2>
        <button onClick={()=> {setCount(count + 1)}}>click</button>
        <span>Count: {count}</span>
        <ShoppingCar/>
        {(!error || error !== "") && <div>网站出错：{error}</div>}
        { !loading ? 
        <div className={styles.robotList}> 
          {robotGallery.map( r => <Robot id={r.id} name={r.name} email={r.email}/>)}
        </div>
        :
        (<h2>加载中 </h2>)
        }

      </div>
    );
  }

export default App;
