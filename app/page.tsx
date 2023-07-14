import { createClient } from "next-sanity";

const Home = ({ pets }: any) => {
  console.log("Pets is: " + pets);

  return (
    <main>
      <div>
        <h1 className="title_text font-bebas text-center">Frame Focus</h1>
        <p className="subtitle_text font-caveat text-center">
          Carefully curated photographs
        </p>
        <hr className="mx-auto mt-8 w-1/4" />
      </div>

      {/* Sanity testing */}
      <div className="bg-red-300">
        <h1>PETS?</h1>
        {pets?.length > 0 && (
          <ul>
            {pets.map((pet: any) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}

        {/* @ts-ignore */}
        {!pets?.length > 0 && <p>No pets to show</p>}
      </div>
    </main>
  );
};

export default Home;

// Sanity testing

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-07-14",
  useCdn: false,
});

export const fetchData = async () => {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets,
    },
  };
};
