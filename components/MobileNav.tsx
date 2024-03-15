'use client';
import { useState, useEffect, SetStateAction } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CRYPTO_CATEGORIES } from '@/config/index';
import MarketWidget from '@/components/MarketWidget';
import CryptoCoinsHeatmap from '@/components/CryptoHeatmap';
import { SupportedLocales } from "@/types/i18n";

interface MobileNavProps {
  locale: SupportedLocales
}

const MobileNav = ({locale} : MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleCategory = (category: string | SetStateAction<null>) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      // @ts-ignore
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen) return (
    <button type='button' onClick={() => setIsOpen(true)} className='fixed lg:hidden -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
      <Menu className='h-6 w-6' aria-hidden='true' />
    </button>
  );

  return (
    <div className='fixed inset-0 z-40 flex overflow-y-auto overscroll-y-none lg:hidden'>
      <div className='w-full max-w-xs'>
        <div className='flex flex-col overflow-y-auto bg-white shadow-xl'>
          <div className='flex px-4 pb-2 pt-5'>
            <button type='button' onClick={() => setIsOpen(false)} className='fixed lg:hidden -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
              <X className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-2'>
            <ul>
              {CRYPTO_CATEGORIES.map((category) => (
                <li key={category.label} className='border-b border-gray-200'>
                  <button className='w-full text-left p-4' onClick={() => toggleCategory(category.label)}>
                    {category.label}
                  </button>
                  {activeCategory === category.label && (
                    <div className='p-4'>
                      {category.label === 'Popular Currencies' && <MarketWidget locale={locale}/>}
                      {category.label === 'Crypto Heatmap' && <CryptoCoinsHeatmap locale={locale}/>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* 其他操作按钮例如登录、注册等 */}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;