import RecentlyViewedMovies from "@/components/modules/RecentlyViewed/RecentlyViewedMovies";
import SectionHeader from "@/components/shared/SectionHeader";

const RecentlyViewedPage = () => {
  return (
    <>
      <SectionHeader
        title="Recently Viewed"
        subtitle="Movies you’ve recently explored are listed here"
      />
      <RecentlyViewedMovies />
    </>
  );
};

export default RecentlyViewedPage;
