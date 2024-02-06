import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-center">
      <div className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        CryptoInsight Pro 不可用
      </div>
      <div className="mt-10 flex min-h-[350px] w-full max-w-md items-center justify-center px-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>为什么我会看到这个网页？</AccordionTrigger>
            <AccordionContent>
              在您的国家/地区中，您正试图访问的服务可能受到
              <Link
                href={
                  "https://www.gov.cn/zhengce/zhengceku/2021-10/08/content_5641404.htm"
                }
              >
                《关于进一步防范和处置虚拟货币交易炒作风险的通知》
              </Link>
              的影响。
              <br />
              该政策旨在减少虚拟货币交易和投机行为的风险，可能影响了CryptoInsight Pro
              的可用性。
              我们正密切关注相关政策变化，并将根据最新的法律法规更新我们的服务。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>我能做什么？</AccordionTrigger>
            <AccordionContent>
              尽管 CryptoInsight Pro
              目前在您的地区不可用，但我们建议您定期检查我们的网站和社交媒体更新，获取最新信息。
              <br />
              同时，您可以利用这段时间学习Web 3.0 token的相关知识，提高个人投资技能。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>我的个人信息是否仍然安全？</AccordionTrigger>
            <AccordionContent>
              绝对是的。我们深知隐私和数据安全的重要性，即便服务暂时不可用，我们也会继续采取严格的安全措施来保护所有存储的用户信息，防止未经授权的访问和使用。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              CryptoInsight Pro 将如何适应这些政策变化？
            </AccordionTrigger>
            <AccordionContent>
              我们的团队正在积极探索各种合规方案，以便在遵守适用法律和规定的前提下，未来能在更多地区提供我们的服务。
              <br />
              我们致力于不断优化产品，确保一旦有可能，就能迅速恢复服务。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
