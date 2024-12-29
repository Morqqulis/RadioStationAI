import Image from 'next/image'
import Link from 'next/link'

interface INavigationItem {
	name: string
	href: string
}
const navigation: INavigationItem[] = [
	{ name: 'AIRadioPlayer', href: 'https://airadioplayer.com/' },
	{ name: 'News', href: 'https://trendingcontent.com/' },
	{ name: 'Automation', href: '#' },
	{ name: 'Analytics', href: 'https://analytics-one-gamma.vercel.app/' },
]

const Header = () => {
	return (
		<header className={`absolute top-0 left-0 right-0 z-50 px-20 py-2`}>
			<nav>
				<div className={`flex gap-8 items-center`}>
					<Link href={'/'}>
						<Image src={'/logo.svg'} alt={'logo'} width={75} height={64} />
					</Link>
					<ul className={`flex gap-8`}>
						{navigation.map(item => (
							<li key={item.name}>
								<a className={`hover:underline`} href={item.href}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
