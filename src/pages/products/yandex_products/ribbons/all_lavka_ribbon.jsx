import React from 'react'
import { ProductItems } from '../components/product_items'
import axios from 'react-axios'
import { useEffect } from 'react'
import { useState } from 'react'
// import items from '../ribbons/t.json'

export const AllLavkaRibbon = () => {
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
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Яйца</h1>
					<div className='productElements'>
						{items.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
