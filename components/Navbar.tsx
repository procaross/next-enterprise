import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons/Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import MobileNav from './MobileNav'
import { SupportedLocales } from "@/types/i18n";
import { getCurrentLocale } from "@/locales/server";

const Navbar = async () => {
  const localeMap: { [key: string]: SupportedLocales } = {
    "zh-CN": "zh_CN",
    "en": "en",
  };
  const locale = localeMap[getCurrentLocale()] || "en";
  return (
    <div className='bg-white z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div>
            <div className='flex h-16 items-center'>
              <MobileNav />

              <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  <Icons.logo className='h-14 w-14' />
                </Link>
              </div>

              <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems locale={locale}/>
              </div>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      登录
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
