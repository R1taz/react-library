import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

interface Props {
	srcImgGame: string
	src?: string
	nameGame: string
	rating: number
	release: string
}

const GameItem = ({ srcImgGame, nameGame, rating, release }: Props) => {
	return (
		<div className={styles.gameItem}>
			<div>
				<img src={srcImgGame} alt='Dan Abramov' />
				<div className={styles.info}>
					<h3>{nameGame}</h3>
					<p className={styles.italic}>Rating: {rating}</p>
					<p className={styles.italic}>Release date: {release}</p>
					<NavLink to='/'>Game Information {`→`}</NavLink>
				</div>
			</div>
		</div>
	)
}

export default GameItem
