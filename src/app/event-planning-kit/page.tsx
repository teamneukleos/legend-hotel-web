import EventPlanningKitForm from "@/app/components/eventplanningkitform";

export const metadata = {
  title: "Corporate Event Planning Kit | Legend Lagos Airport",
  description:
    "Download Legend Lagos Airport's Corporate Event Planning Kit — a practical workbook for planning a polished, well-organised corporate event.",
};

export default function EventPlanningKitPage() {
  return (
    // 1. pt-[170px] completely clears the 120px fixed navbar and adds 50px top padding
    <main className="min-h-screen bg-white pt-[170px]">
      {/* 2. max-w-[1440px] and px-6 md:px-10 lg:px-12 perfectly mirror your navbar's left/right boundaries */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-20 md:px-10 lg:grid-cols-2 lg:px-12 lg:pb-28">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            Free Resource
          </p>
          <h1 className="mt-4 font-serif text-4xl text-black sm:text-5xl">
            Corporate Event Planning Kit
          </h1>
          <p className="mt-6 max-w-md text-neutral-600">
            A practical workbook for planning a polished, well-organised
            corporate event — from venue selection to event day. Designed for
            conferences, meetings, trainings, AGMs, workshops, retreats and
            corporate celebrations.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-neutral-600">
            <li>— Venue Selection Checklist</li>
            <li>— Event Budget Template</li>
            <li>— Seating Planner</li>
            <li>— Catering Checklist</li>
            <li>— AV & Technical Checklist</li>
            <li>— Guest Management Checklist</li>
            <li>— Event-Day Timeline</li>
            <li>— Accommodation Planner</li>
          </ul>
        </div>

        <div className="bg-neutral-50 p-8 sm:p-10">
          <EventPlanningKitForm />
        </div>
      </section>
    </main>
  );
}
