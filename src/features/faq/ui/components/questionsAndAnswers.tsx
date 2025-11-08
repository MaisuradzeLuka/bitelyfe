import HoverTitle from "@/components/shared/hoverTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqTypes = {
  question: string;
  answer: string;
};

export default function QuestionsAndAnswers({ list }: { list: FaqTypes[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full gap-5"
      //defaultValue="0"
    >
      {list.map((q, i) => (
        <AccordionItem
          key={i}
          value={i.toString()}
          className=" py-3 border-[#EEEEEE] "
        >
          <AccordionTrigger className="min-h-12 cursor-pointer text-[20px] mb-1">
            <HoverTitle text={q.question}></HoverTitle>
          </AccordionTrigger>
          <AccordionContent className="text-balance text-[16px] pt-1 ">
            <p className="pl-4">{q.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
