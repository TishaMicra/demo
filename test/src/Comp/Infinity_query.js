// import React, { useEffect, useRef } from "react";
// import { useInfiniteQuery } from "@tanstack/react-query";

// function Infinity_query() {
//   const fetchProjects = async ({ pageParam = 1 }) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
//     );
//     return res.json();
//   };

//   const {
//     data,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     status,
//   } = useInfiniteQuery({
//     queryKey: ["projects"],
//     queryFn: fetchProjects,
//     getNextPageParam: (lastPage, pages) => {
//       return lastPage?.length === 10 ? pages?.length + 1 : undefined;
//     },
//   });

//   // const observer = useRef(null);

//   // const lastElementRef = (node) => {
//   //   if (isFetchingNextPage) return;
//   //   if (observer.current) observer.current.disconnect();
//   //   console.log("observer.current");
//   //   observer.current = new IntersectionObserver((entries) => {
//   //     console.log("entries", entries[0]);
//   //     if (entries[0].isIntersecting && hasNextPage) {
//   //       fetchNextPage();
//   //     }
//   //   });

//   //   if (node) observer.current.observe(node);
//   //   console.log(node);
//   // };
//   // console.log("observer", observer);

//   // useEffect(() => {

//   //   if (hasNextPage && !isFetchingNextPage) {
//   //     fetchNextPage();
//   //   }
//   // }, [hasNextPage, isFetchingNextPage, fetchNextPage]);
//   //
//   return status === "loading" ? (
//     <p>Loading...</p>
//   ) : status === "error" ? (
//     <p>Error: {error.message}</p>
//   ) : (
//     <>
//       {console.log("data.page", data.pages)}
//       {data?.pages?.map((group, i) => (
//         <React.Fragment key={i}>
//           {console.log("group", group)}
//           {/* {console.log('group length' , group.length - 1)} */}
//           {group.map((project, index) => (
//             <p
//               key={project.id}
//               // ref={index === group.length - 1 ? lastElementRef : null}
//             >
//               {project.title}
//             </p>
//           ))}
//         </React.Fragment>
//       ))}
//       {console.log(data?.pages)}
//       <div>
//         <button
//           onClick={() => fetchNextPage()}
//           disabled={!hasNextPage || isFetchingNextPage}
//         >
//           {isFetchingNextPage
//             ? "Loading more..."
//             : hasNextPage
//             ? "Load More"
//             : "Nothing more to load"}
//         </button>
//       </div>
//       <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
//     </>
//   );
// }

// export default Infinity_query;

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const fetchUser = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
  return res.json();
};

function Infinity_query() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery(
    ["users", page],
    () => fetchUser(page)
    // { keepPreviousData: true }
  );

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error : {error.message}</div>;

  return (

   // All module search functionality in the admin has been changed.
    <>
      <div className="font-bold">Pagination</div>
      {data &&
        data.map((i) => {
          return (
            <>
              <ul>
                <li key={i.id}>{i.title}</li>
              </ul>
            </>
          );
        })}

      <div>
        <button
          onClick={() => setPage((pre) => Math.max(pre - 1, 1))}
          className="border-2 border-black p-1 m-2"
        >
          pre
        </button>
        <button
          onClick={() => setPage((next) => next + 1)}
          className="border-2 border-black p-1 m-2"
        >
          next
        </button>
      </div>
    </>
  );
}

export default Infinity_query;
