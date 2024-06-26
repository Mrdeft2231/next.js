import Styles from './CardsList.module.css'
import { Card } from '../Card/Card';
import Link from 'next/link';

export const CardList = (props) => {  
  return (
    <ul className={Styles["cards-list"]}>
    {props.data.map((item)  => {
  return (
    <li className={Styles["card-list__item"]} key={item.id}>
      <Link href={`/games/${item.id}`}  className={Styles["card-list__link"]}>
        <Card {...item} />
      </Link>
    </li>
  ); 
  })}
  </ul>
  );
};