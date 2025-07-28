import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AstroTabs({ title, tabNames, tabContent }) {
  function extractBooks(tabContent) {
    if (tabContent) {
      return (
        <ul id="bookList" className="grid grid-cols-2 gap-6">
          {tabContent.map((tab, idx) => (
            <li key={idx}>
              <a
                href={"/books/" + tab.slug.current}
                className={
                  tab.status === "Completed"
                    ? "text-green-700 line-through"
                    : tab.status === "In Progress"
                    ? "text-slate-900 underline font-bold"
                    : tab.status === "Abandoned"
                    ? "text-red-700 line-through"
                    : "text-slate-600"
                }
              >
                {tab.name}
              </a>{" "}
              <span>
                ({tab.publishYear}
                {tab.bc ? " B.C." : ""})
              </span>
            </li>
          ))}
        </ul>
      );
    }
  }

  return (
    <Tabs defaultValue={title} className="m:min-w-2xl lg:min-w-3xl">
      <TabsList>
        {tabNames.map((tab, idx) => (
          <TabsTrigger key={idx} value={tab}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={tabNames[0]}>
        {/* <ExampleCombobox client:load /> */}
        {extractBooks(tabContent[0])}
      </TabsContent>

      <TabsContent value={tabNames[1]}>
        {/* <ExampleCombobox client:load /> */}
        {extractBooks(tabContent[1])}
      </TabsContent>

      <TabsContent value={tabNames[2]}>
        {/* <ExampleCombobox client:load /> */}
        {extractBooks(tabContent[2])}
      </TabsContent>

      <TabsContent value={tabNames[3]}>
        {/* <ExampleCombobox client:load /> */}
        {extractBooks(tabContent[3])}
      </TabsContent>

      <TabsContent value={tabNames[4]}>
        {/* <ExampleCombobox client:load /> */}
        {extractBooks(tabContent[4])}
      </TabsContent>
    </Tabs>
  );
}
