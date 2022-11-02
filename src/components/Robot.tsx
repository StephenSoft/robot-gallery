import React from 'react';
import styles from './Robot.module.css';
import { useContext } from 'react';
import { appContext } from '../AppState';

interface RobotProps{
    id: number;
    name: string;
    email: string;
}
const Robot : React.FC<RobotProps> = ({id, name, email}) => {   
    const value = useContext(appContext);

    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>Author: {value.author}</p>
        </div>
    );

}

export default Robot;