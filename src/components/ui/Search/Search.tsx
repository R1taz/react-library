import { useAppDispatch } from '@/hooks/react-redux'
import styles from './styles.module.css'
import { setCurrentPage, setKeywords } from '@/store/slices/gamesSlice'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

interface Props {
	chapter: string
}

const Search = ({ chapter }: Props) => {
	const [searchValue, setSearchValue] = useState('')
	const dispatch = useAppDispatch()
	const debouncedValue = useDebounce(searchValue, 500)
	const placeholder = `Search ${chapter}`

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		setSearchValue(event.target.value)
	}

	useEffect(() => {
		dispatch(setKeywords(debouncedValue))
		dispatch(setCurrentPage(1))
	}, [debouncedValue, dispatch])

	return (
		<input
			type='text'
			value={searchValue}
			onChange={handleChange}
			className={styles.search}
			placeholder={placeholder}
		/>
	)
}

export default Search
