import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookList from "./BookList";

export default function AstroTabs({ title, tabNames, tabContent }) {
  function extractBooks(tabContent) {
    if (tabContent) {
      return <BookList bookList={tabContent} />;
    }
  }

  // const [fictionSubgenre, setFictionSubgenre] = useState(null);
  // const [nonfictionSubgenre, setNonfictionSubgenre] = useState(null);
  // const [dramaSubgenre, setDramaSubgenre] = useState(null);
  // const [poetrySubgenre, setPoetrySubgenre] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchGenres = async () => {
  //     try {
  //       const fictionResult = await sanityClient.fetch(
  //         `array::unique(*[_type == "book"].fictionSubgenre)`
  //       );
  //       setFictionSubgenre(fictionResult);
  //       const nonfictionResult = await sanityClient.fetch(
  //         `array::unique(*[_type == "book"].nonfictionSubgenre)`
  //       );
  //       setNonfictionSubgenre(nonfictionResult);
  //       const dramaResult = await sanityClient.fetch(
  //         `array::unique(*[_type == "book"].dramaSubgenre)`
  //       );
  //       setDramaSubgenre(dramaResult);
  //       const poetryResult = await sanityClient.fetch(
  //         `array::unique(*[_type == "book"].poetrySubgenre)`
  //       );
  //       setPoetrySubgenre(poetryResult);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchGenres();
  // }, []); // Empty dependency array ensures this runs once on mount

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  // console.log(fictionSubgenre);
  // console.log(nonfictionSubgenre);
  // console.log(dramaSubgenre);
  // console.log(poetrySubgenre);

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
        {/* <GenreFilter genreType={"Fiction"} genres={fictionSubgenre} /> */}
        {extractBooks(tabContent[0])}
      </TabsContent>

      <TabsContent value={tabNames[1]}>
        {/* <GenreFilter genreType={"Nonfiction"} genres={nonfictionSubgenre} /> */}
        {extractBooks(tabContent[1])}
      </TabsContent>

      <TabsContent value={tabNames[2]}>
        {/* <GenreFilter genreType={"Drama"} genres={dramaSubgenre} /> */}
        {extractBooks(tabContent[2])}
      </TabsContent>

      <TabsContent value={tabNames[3]}>
        {/* <GenreFilter genreType={"Poetry"} genres={poetrySubgenre} /> */}
        {extractBooks(tabContent[3])}
      </TabsContent>
    </Tabs>
  );
}
