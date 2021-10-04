import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";

export default function Home() {
  const [clientData, setClient] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "client"]{
      client,
      description
    }`
    )
      .then((data) => setClient(data))
      .catch(console.error);
  });

  return (
    <main className="bg-white">
      <section className="grid grid-col-1 relative flex justify-center pt-12 lg:pt-64 px-8 mb-48">
        <div className="mr-64 ml-64">
          <h1 className="text-5xl font-bold text-black nav-font leading-none lg:leading-snug home-name pb-16">
            Hey there. I'm{" "}
            <span className="text-black underline cursive  animate-pulse">Zakk.</span>
          </h1>
          <p className="text-2xl text-center text-black cursive pb-3">
            ..and I'm a Web Developer that stands out.
          </p>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="bg-black w-11/12 h-0.5 "></div>
      </div>

      <section className="bg-white p-12">
        <h1 className="text-5xl flex justify-center nav-font mb-12">
          Who I Build For
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientData && clientData.map((client, index) => (
          <article>
            <h3 className="text-gray-800 text-3xl font-bold mb-2 cursive">
              {client.client}
              </h3>
            <p className="font-medium">
              {client.description}
            </p>
          </article>
          ))}
        </div>
      </section>
    </main>
  );
}
