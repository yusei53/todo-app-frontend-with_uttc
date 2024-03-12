"use client";
import useSWR from "swr";
import NotFound from "./not-found";
import Loading from "./loading";

type User = {
  id: number;
  title: string;
  deleted: boolean;
};

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<User[] | null>);
}

const Home = () => {
  const { data, error } = useSWR("http://localhost:8083/boards", fetcher);

  if (error) return <NotFound />;
  if (!data) return <Loading />;
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.title}</div>
      ))}
    </div>
  );
};

export default Home;
