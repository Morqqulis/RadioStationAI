import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import { navigation } from './constants'
import Link from 'next/link'

const HeaderMenu = ({ className, linkClassName }: { className?: ClassNameValue; linkClassName?: string }) => {
  return (
    <ul className={cn(`flex gap-8`, className)}>
      {navigation.map((item) => (
        <li className={cn(`w-full`)} key={item.name}>
          <Link
            className={(cn(`block duration-300 hover:text-blue-500 hover:underline`), linkClassName)}
            href={item.href}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HeaderMenu
