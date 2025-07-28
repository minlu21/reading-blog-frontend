import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookList from "./BookList";

export default function AstroTabs({ title, tabNames, tabContent }) {
  function extractBooks(tabContent) {
    if (tabContent) {
      return <BookList bookList={tabContent} />;
    }
  }

  return (
    <Tabs defaultValue={title} className="w-full sm:w-2xl lg:w-3xl">
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
