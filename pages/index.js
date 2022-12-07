import Head from 'next/head'
import Image from 'next/image'

// components
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Features from '../src/components/Features'
import FeaturesSecond from '../src/components/FeaturesSecond'
import NewItems from '../src/components/NewItems'
import Products from '../src/components/Products'
import Testimonial from '../src/components/Testimonial'
import Newsletter from '../src/components/Newsletter'
import Footer from '../src/components/Footer'

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>VAM Design</title>
				<meta
					name='description'
					content='VAM design.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='w-full max-w-[1440px] mx-auto bg-white'>
				<Header />
				<Hero />
				<Features />
				<NewItems />
				<FeaturesSecond />
				<Products />
				<Testimonial />
				<Newsletter />
				<Footer />
			</div>
		</div>
	)
}
