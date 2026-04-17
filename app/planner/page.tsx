import { FaqList } from "@/components/FaqList";
import { PlannerClient } from "@/components/PlannerClient";
import { faq } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Plan uw middag — Galerie De Kunst van Kunst",
  description: "Transactionele planner",
  path: "/planner",
  noindex: true,
});

export default function PlannerPage() {
  return (
    <>
      <PlannerClient />
      <FaqList heading="Praktische vragen" items={faq.planner} />
    </>
  );
}
