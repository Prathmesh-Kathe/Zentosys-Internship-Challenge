import Link from "next/link";

export default async function BlogDetail({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const post = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <article className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 ease-in-out duration-300">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-gray-700 dark:text-gray-200">By John Doe</span>
            <span className="text-gray-400">•</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-gray-200 dark:border-zinc-700 mb-6" />

        {/* Article Body */}
        <section className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
          {post.body.split('\n').map((para, i) => (
            <p key={i} className="text-base break-words">{para}</p>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-zinc-700 text-sm text-gray-500 dark:text-gray-400 text-center">
          <p>Thanks for reading. 💙</p>
        </footer>
      </article>

      {/* Back Button */}
      <Link href="/">
        <button className="mt-6 w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Back To Home
        </button>
      </Link>
    </div>
  );
}
