'use client'

import { CRYPTO_CATEGORIES } from '@/config'
// import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem'
import { SupportedLocales } from "@/types/i18n";

const NavItems = (props: { locale: SupportedLocales}) => {
  const [activeIndex, setActiveIndex] = useState<
    null | number
  >(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  const isAnyOpen = activeIndex !== null

  const navRef = useRef<HTMLDivElement | null>(null)

  // useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className='flex gap-4 h-full' ref={navRef}>
      {CRYPTO_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        const close = () => setActiveIndex(null)

        const isOpen = i === activeIndex

        return (
          <NavItem
            category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
            locale={props.locale}
          />
        )
      })}
    </div>
  )
}

export default NavItems
