import GenreTabs from "@/components/modules/genre/GenreTabs";
import SectionHeader from "@/components/shared/SectionHeader";
import { getallMoviesByGenre } from "@/helper/getAllMoviesByGenre";

const GenrePage = async () => {
  const allMoviesByGenre = await getallMoviesByGenre();
  // console.log(allMoviesByGenre);
  return (
    <>
      <SectionHeader
        title="Browse by Genre"
        subtitle="Explore movies based on your favorite genres"
      />
      <GenreTabs moviesByGenre={allMoviesByGenre} />
    </>
  );
};

export default GenrePage;
