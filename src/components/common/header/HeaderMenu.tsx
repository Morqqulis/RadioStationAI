'use client'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { navigation } from './constants'

const HeaderMenu = () => {
  const isSmallDevice = useMediaQuery('(max-width: 768px)')

  const NavigationList = ({ className = '' }) => (
    <ul className={cn('flex gap-8', className)}>
      {navigation.map((item) => (
        <li className="w-full" key={item.name}>
          <Link className="block duration-300 hover:text-blue-500 hover:underline" href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )

  if (isSmallDevice)
    return (
      <div className="ml-auto flex md:hidden">
        <Sheet>
          <SheetTrigger className="rounded border-white bg-slate-800 p-2 duration-300 hover:border">
            <Menu className="h-6 w-6 text-slate-300" />
          </SheetTrigger>
          <SheetContent className="rounded !bg-[#01262a] py-5" side="top">
            <SheetHeader>
              <SheetTitle className="text-center">Navigation</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <NavigationList className="mt-10 flex-col gap-4" />
          </SheetContent>
        </Sheet>
      </div>
    )
  else return <NavigationList />
}

export default HeaderMenu
