import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineViewList } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { RiMapPin2Fill } from 'react-icons/ri'
import { IoMdBasket } from 'react-icons/io'
import { BiSliderAlt } from 'react-icons/bi'

export const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<Link to='/'>
					<img src='/assets/svg/LavkaLogo.svg' alt='' />
				</Link>
			</div>

			<div className='category'>
				<button>
					<HiOutlineViewList />
				</button>
			</div>

			<div className='search'>
				<form>
					<div className='search__linze'>
						<span>
							<BiSearch className='lupa' />
						</span>
						<input type='text' placeholder='Найти в Лавке' />
					</div>
				</form>
			</div>

			<div className='map'>
				<button>
					<span>
						<RiMapPin2Fill className='map__flag' />
						Укажите адрес доставки
					</span>
				</button>
			</div>

			<div className='cart'>
				<button>
					<span>
						<IoMdBasket className='cart__basket' />
						Корзина
					</span>
				</button>
			</div>

			<div className='sorting'>
				<button>
					<span>
						<BiSliderAlt className='sorting__icon' />
					</span>
				</button>
			</div>

			<div className='plus'>
				<button>Plus</button>
			</div>

			<div className='signUp'>
				<button>Войти</button>
			</div>
		</div>
	)
}
