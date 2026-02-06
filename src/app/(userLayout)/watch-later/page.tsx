import WatchLaterMovies from "@/components/modules/WatchLater/WatchLaterMovies";
import SectionHeader from "@/components/shared/SectionHeader";

const WatchLaterPage = () => {
  return (
    <>
      <SectionHeader
        title="Watch Later"
        subtitle="All the movies you saved to watch later are here"
      />
      <WatchLaterMovies />
    </>
  );
};

export default WatchLaterPage;
