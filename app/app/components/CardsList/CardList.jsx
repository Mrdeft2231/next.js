import Styles from './CardsList.module.css'
import {PopularCardsFragment} from './PopularCardsFragment' 
import { NewCardsFragment } from './NewCardsFragment'
export const CardList = (props) => {
  return (
    <section className={Styles['list-section']}>
    <h2 className={Styles['list-section__title']} id={props.id}>
      {props.title}
    </h2>
    <ul className={Styles['cards-list']}>
      {props.id === "popular" && <PopularCardsFragment/>}
      {props.id === "new" && <NewCardsFragment/>}
    </ul>
  </section>
  )
}