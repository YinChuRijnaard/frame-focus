import FeaturedCard from "@/components/FeaturedCard";
import AllPhotos from "@/components/AllPhotos";

const Home = () => {
  return (
    <main className="page_styling">
      <FeaturedCard />

      {/* All photos */}
      <div className="my-16 space-y-2 text-center">
        <h1 className="title_text font-bebas">All photos</h1>
        <p className="desc text-sm">
          <i className="ri-information-line ri-lg"></i>&nbsp;Click on a photo to
          learn more about it
        </p>
      </div>
      <AllPhotos />
    </main>
  );
};

export default Home;
