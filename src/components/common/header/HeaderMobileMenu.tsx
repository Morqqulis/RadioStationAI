import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import HeaderMenu from './HeaderMenu'

const HeaderMobileMenu = () => {
  return (
    <div className={`dark ml-auto flex md:hidden`}>
      <Sheet>
        <SheetTrigger className={`rounded border-white bg-slate-800 p-2 duration-300 hover:border`}>
          <Menu className={`h-6 w-6 text-slate-300`} />
        </SheetTrigger>
        <SheetContent className={`rounded !bg-[#01262a] py-5`} side={'top'}>
          <SheetHeader>
            <SheetTitle className={`text-center`}>Navigation</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <HeaderMenu
            className={`mt-10 flex-col gap-4 text-center`}
            linkClassName={`py-2 block text-xl text-blue-200`}
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default HeaderMobileMenu
