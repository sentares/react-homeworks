import React from 'react'
// import { Link } from 'react-router-dom'
import { MainEvent } from './elements/main_event'
import { ButtonSale } from './elements/button_sale'
import { YouLikeLent } from './elements/you_like_lent'
import { LentBlogs } from './elements/lent_blogs'

export const Ribbon = ({ items }) => {
	return (
		<div className='ribbon'>
			<MainEvent />
			<ButtonSale />
			<YouLikeLent items={items} />
			<LentBlogs />
		</div>
	)
}
