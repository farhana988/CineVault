import GenreTabs from "@/components/modules/genre/GenreTabs";
import SectionHeader from "@/components/shared/SectionHeader";

import { getMoviesByGenre } from "@/helper/getMoviesByGenre";

const GenrePage = async () => {
  const moviesByGenre = await getMoviesByGenre();
  return (
    <>
      <SectionHeader
        title="Browse by Genre"
        subtitle="Explore movies based on your favorite genres"
      />
      <GenreTabs moviesByGenre={moviesByGenre} />
    </>
  );
};

export default GenrePage;
