import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading..</div>;

  return (
    <main className="relative">
      <div className="p-10 lg:pt-48 container mx-auto relative min-h-screen ">
        <section className="bg-gray-300 rounded-tl-lg shadow-2xl lg:flex p-20 border-l-8 border-black">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-black mb-4">
              Hey. I'm <span className="text-black">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-gray-900">
              <BlockContent blocks={author.bio} projectId="tqvcvwmt" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
