import DefaultPost from "@/features/defaultPost/ui/views/defaultPost-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import { DISHESTABLE_ID, DRINKSTABLE_ID } from "@/lib/config";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <DefaultPost id={id} tableId={DISHESTABLE_ID} />
      <DontMiss
        className="bg-[#FFE1DF] !text-black"
        categoryBg="bg-white"
        hoverTextColor="hover:text-[#6d62ff]"
      />
    </main>
  );
}
