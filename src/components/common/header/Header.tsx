'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderMobileMenu from './HeaderMobileMenu'
const Header = () => {
  const [smallDevice, setSmallDevice] = useState(false)

  useEffect(() => {
    if (window) {
      setSmallDevice(window.innerWidth < 768)
    }
  }, [])

  return (
    <header className={`absolute left-0 right-0 top-0 z-50 px-5 py-2 xl:px-20`}>
      <nav className={``}>
        <div className={`flex items-center gap-8`}>
          <Link className={`font-medium`} href={'/'}>
            <Image src={'/logo.svg'} alt={'logo'} width={75} height={64} />
          </Link>
          {smallDevice ? <HeaderMobileMenu /> : <HeaderMenu />}
        </div>
      </nav>
    </header>
  )
}

export default Header
