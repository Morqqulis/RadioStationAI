'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
const HeaderMenu = dynamic(() => import('./HeaderMenu'), { ssr: false })

const Header = () => {
  return (
    <header className={`absolute left-0 right-0 top-0 z-50 px-5 py-2 xl:px-20`}>
      <nav className={``}>
        <div className={`flex items-center gap-8`}>
          <Link className={`font-medium`} href={'/'}>
            <Image src={'/logo.svg'} alt={'logo'} width={75} height={64} />
          </Link>
          <HeaderMenu />
        </div>
      </nav>
    </header>
  )
}

export default Header
