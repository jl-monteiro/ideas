import { useEffect, useState } from "react";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const rsp = await fetch("http://localhost:3000/api/posts", {
        credentials: "include",
      });
      if (!rsp.ok) {
        throw new Error("Erro ao buscar posts");
      }

      const data = await rsp.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.error("Erro ao retornar os posts ", error);
    }
  };

  const getYoutubeId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen p-6 bg-base-200">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-sm">
            <figure>
              <div className="w-full aspect-video p-3">
                <iframe
                  src={`https://www.youtube.com/embed/${getYoutubeId(post.video)}`}
                  className="w-full h-full rounded-t-xl"
                  allowFullScreen
                />
              </div>
            </figure>

            <div className="card-body">
              <h2 className="card-title">{post.name}</h2>

              <div className="badge badge-outline">{post.type}</div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
