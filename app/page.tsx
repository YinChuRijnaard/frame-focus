import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import AllPhotos from "@/components/AllPhotos";

const Home = () => {
  return (
    <main className="page_styling">
      {/* Feature Card */}
      <FeaturedCard />

      {/* All Photos title + Filters */}
      <div className="my-16 space-y-4 text-center">
        <h1 className="title_text font-bebas">All photos</h1>
        <p className="desc text-sm sm:text-base">
          <i className="ri-information-line ri-lg"></i>&nbsp;Click on a photo to
          learn more about it
        </p>
        <Filters />
      </div>

      {/* All Photos */}
      <AllPhotos />
    </main>
  );
};

export default Home;
