import { CRYPTO_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import CryptoCoinsHeatmap from "@/components/CryptoHeatmap";
import CryptoCurrencyMarket from "@/components/MarketWidget";
import { SupportedLocales } from "@/types/i18n";
import { Suspense } from "react";
import WhaleTransactionSankeyViz from "@/components/WhaleTransactionSankeyViz";
import WhaleTransactionSankeyVizSkeleton from "@/components/skeleton/WhaleTransactionSankeyVizSkeleton";

type Category = (typeof CRYPTO_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  close: () => void
  isOpen: boolean
  isAnyOpen: boolean
  locale: SupportedLocales
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  close,
  isOpen,
  locale
}: NavItemProps) => {
  return (
    <div className='flex'>
      <div className='relative flex items-center'>
        <Button
          className='gap-1.5'
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}>
          {category.label}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-all text-muted-foreground',
              {
                '-rotate-180': isOpen,
              }
            )}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            'absolute inset-x-0 top-full text-sm text-muted-foreground',
            {
              'animate-in fade-in-10 slide-in-from-top-5':
                !isAnyOpen,
            }
          )}>
          <div
            className='absolute inset-0 top-1/2 bg-white shadow'
            aria-hidden='true'
          />

          <div className="relative bg-white">
            <div className="mx-auto max-w-8xl px-8">
              {category.label === 'Popular Currencies' ? (
                <div className="pb-8">
                  <CryptoCurrencyMarket locale={locale}/>
                </div>
              ) : category.label === 'Crypto Heatmap' ? (
                <div className="pb-8">
                  <CryptoCoinsHeatmap locale={locale}/>
                </div>
              ) : (
                <div className="pb-8 h-fit">
                  <Suspense fallback={<WhaleTransactionSankeyVizSkeleton/>}>
                    <WhaleTransactionSankeyViz/>
                  </Suspense>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NavItem
