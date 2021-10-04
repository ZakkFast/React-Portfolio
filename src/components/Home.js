import React from "react";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="grid grid-col-1 relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <div className="mr-64 ml-64">
        <h1 className="text-6xl font-bold text-black cursive leading-none lg:leading-snug home-name pb-16">
          Hey there. I'm <span className="text-blue-600 underline">Zakk.</span>
        </h1>
        <p className="text-2xl text-black cursive">
          ..and I'm a Web Developer that stands out. There are plenty of
          developers content on making cookie-cutter websites. I didn't learn to
          code to make mediocre websites. I learned to code to make Web Apps
          that not only meet my client's needs, but inspire the people who use
          them. So if you're tired of looking at the same indefrentiable,
          uninspiring websites, then you're in the right place..
        </p>
        </div>
      </section>
    </main>
  );
}
