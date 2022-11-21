import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AllLavkaCatalog = () => {
	const [activeCatalogElement, setActiveCatalogElement] = useState(0)

	const productsCatalog = ['Яйца', 'Вода', 'Молочное']

	const onClickCatalogElement = index => {
		setActiveCatalogElement(index)
	}

	return (
		<div>
			<div className='allLavkaCatalog'>
				<ul>
					<li className='name'>
						<button>Все из Лавки</button>
					</li>
					{productsCatalog.map((value, i) => (
						<li key={i}>
							<button onClick={() => onClickCatalogElement(i)}>
								<Link>{value}</Link>
							</button>
						</li>
					))}

					<li className='name'>
						<button>
							<Link to='/'>Новое</Link>
						</button>
					</li>
					<li className='name'>
						<button>
							<Link to='/'>Выбираем вместе</Link>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
