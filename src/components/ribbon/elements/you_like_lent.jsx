import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNavigateNext } from 'react-icons/md'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import '../../../scss/components/_swiper.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import { ProductItems } from '../../../pages/products/yandex_products/components/product_items'

export const YouLikeLent = ({ items }) => {
	const [productCount, setProductCount] = useState(0)

	const onClickAdd = () => {
		setProductCount(productCount + 1)
	}

	return (
		<div>
			<div className='ribbon__youLike'>
				<div className=' mt-8 	'>
					<div className=' flex justify-between items-center'>
						<Link to='/'>
							<p className='text-3xl font-bold'>Вам понравится</p>
						</Link>
						<div>
							<button className=' flex items-center font-semibold rounded-3xl bg-[#efeeed] p-2 pl-4 hover:bg-[#d5d5d4] '>
								Все <MdOutlineNavigateNext />
							</button>
						</div>
					</div>
					<div className=' mt-6'>
						<Swiper
							slidesPerView={4}
							spaceBetween={30}
							slidesPerGroup={4}
							loop={true}
							loopFillGroupWithBlank={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className='mySwiper'
						>
							<SwiperSlide>
								{items.map(obj => (
									<ProductItems key={obj.id} {...obj} />
								))}
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}
