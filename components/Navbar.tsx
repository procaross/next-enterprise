import Link from 'next/link'
import { Icons } from './Icons/Icons'
import MaxWidthWrapper from './MaxWidthWrapper'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { SupportedLocales } from "@/types/i18n";
import { getCurrentLocale } from "@/locales/server";
import AuthButton from "@/components/AuthButton";

const Navbar = async () => {
  const localeMap: { [key: string]: SupportedLocales } = {
    "zh-CN": "zh_CN",
    "en": "en",
  };
  const locale = localeMap[getCurrentLocale()] || "en";
  return (
    <div className='bg-white z-50 top-0 inset-x-0 h-18 sticky border-b-gray-200 border-b'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div>
            <div className='flex h-16 items-center justify-between lg:justify-start'>

              <MobileNav locale={locale}/>

              <div className='flex-1 flex justify-center lg:justify-start lg:ml-10 cursor-pointer'>
                <Link href='/' className="cursor-pointer">
                  <Icons.logo className='h-14 w-14 cursor-pointer'/>
                </Link>
              </div>

              <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems locale={locale}/>
              </div>

              <AuthButton/>

            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
