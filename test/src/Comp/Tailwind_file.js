import React from "react";

function Tailwind_file() {
  return (
    <>
      <div className="container mx-auto px-4">
        {/* <div className="columns-3 gap-8"> */}
        <h2 className="text-red-800 hover:shadow-sm font-thin">tailwind</h2>
        <button className="bg-sky-800 hover:bg-sky-400 text-white w-20 h-9 rounded-lg font-semibold transition duration-700 ease-out delay-100">
          change
        </button>
        <p>tailwind css</p>
        {/* </div> */}
        {/* <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
          Hello
          <br />
          World
        </span><br />
        <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
          Hello
          <br />
          World
        </span> */}

        {/* <div className="h-24 w-24 bg-black p-6 box-border"></div> */}

        {/* <div className="flex">
          <div className="w-10 h-10 rounded-full text-white bg-pink-500 z-40">
            01
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-pink-500 z-30">
            02
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-pink-500 z-20">
            03
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-pink-500 z-10">
            04
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-pink-500 z-0">
            05
          </div>
        </div> */}

        <div className="flex gap-6 flex-row  ">
          <div className="basis-1/4 bg-pink-600 text-white order-last">1</div>
          <div className="basis-1/4 bg-pink-600 text-white">2</div>
          <div className="basis-1/2 bg-pink-600 text-white order-first">3</div>
        </div>

        <p className="font-serif mt-3 italic underline">Tailwindcss1</p>
        <p className="font-sans text-start overline ">Tailwindcss2</p>
        <p className="font-mono">Tailwindcss3</p>

        <input type="checkbox" className="accent-pink-600" />

        <div className="md:flex lg:w-3/4 gap-4 bg-white shadow-2xl p-5 rounded-3xl m-7">
          <img
            className="object-cover rounded-xl w-full"
            src="data:image/jpeg;base64,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"
          />
          <div>
            <p className="text-justify indent-6 ">
              Maybe we can live without libraries, people like you and me.
              Maybe. Sure, we're too old to change the world, but what about
              that kid, sitting down, opening a book, right now, in a branch at
              the local library and finding drawings of pee-pees and wee-wees on
              the Cat in the Hat and the Five Chinese Brothers? Doesn't HE
              deserve better? Look. If you think this is about overdue fines and
              missing books, you'd better think again.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tailwind_file;
