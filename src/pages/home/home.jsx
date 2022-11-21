import React, { useState } from 'react'
import { Catalog } from '../../components/catalog/catalog'
import { Ribbon } from '../../components/ribbon/ribbon'
import { useEffect } from 'react'

export const Home = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch('https://636a0bb3c07d8f936d91891b.mockapi.io/employe-salary')
			.then(res => {
				return res.json()
			})
			.then(arr => {
				setItems(arr)
			})
	}, [])
	return (
		<div className='home__container'>
			<div className='catalog'>
				<Catalog items={items} />
			</div>
			<div className='ribbon'>
				<Ribbon items={items} />
			</div>
		</div>
	)
}
