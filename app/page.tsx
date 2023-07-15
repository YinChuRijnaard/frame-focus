import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-07-14",
  useCdn: false,
});

const Home = async () => {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return (
    <main className="page_styling">
      <div className="bg-red-300">
        <h1>PETS?</h1>
        {pets?.length > 0 && (
          <ul>
            {/* @ts-ignore */}
            {pets.map((pet) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Home;
