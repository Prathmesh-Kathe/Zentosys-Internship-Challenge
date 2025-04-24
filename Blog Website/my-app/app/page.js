import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
        Latest Blog Posts
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
          >
            <Link href={`/blog/${post.id}`} className="group block">
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-yellow-400 group-hover:underline mb-2">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                {post.body}
              </p>

              <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
                <span>📅 Apr {10 + post.id}, 2025</span>
                <span>⏱ {Math.floor(post.body.length / 50) + 1} min read</span>
              </div>
            </Link>
          </div>
        ))}

        <Link href="/contact">
          <button
            className="relative inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
            aria-label="Contact Me"
          >
            <span className="relative z-10">📬 Contact Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></span>
          </button>
        </Link>
      </div>
    </div>
  );
}
