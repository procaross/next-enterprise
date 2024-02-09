import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getScopedI18n } from "@/locales/server"

export default async function Page() {
  const scopedT = await getScopedI18n("page.unavailable")
  return (
    <div className="z-10 flex w-full flex-col items-center justify-center">
      <div className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {scopedT("pageTitle")}
      </div>
      <div className="mt-10 flex min-h-[350px] w-full max-w-md items-center justify-center px-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{scopedT("whySeeThisPage")}</AccordionTrigger>
            <AccordionContent>{scopedT("whyContent")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{scopedT("whatCanIDo")}</AccordionTrigger>
            <AccordionContent>{scopedT("whatCanIDoContent")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{scopedT("isMyInfoStillSafe")}</AccordionTrigger>
            <AccordionContent>{scopedT("infoSafetyContent")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{scopedT("howWillAdaptPolicies")}</AccordionTrigger>
            <AccordionContent>{scopedT("adaptPoliciesContent")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
