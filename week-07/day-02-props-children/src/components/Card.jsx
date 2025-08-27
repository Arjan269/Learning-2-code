import Styles from './Card.module.css'

export default function Card({ h3Text, children }) {

  return (

    <div className={Styles.cardContainer}>
        <h3>This is a {h3Text} div</h3>

        {children || "Default thing to display"}
    </div>
  )
}
