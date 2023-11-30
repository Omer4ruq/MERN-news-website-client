// import { useEffect, useState } from "react";
// import { axiosSecure } from "./useAxiosSecure";
// import useAxiosPublic from "./useAxiosPublic";

// const useSearch = (search) => {
//   const [article, setArticle] = useState([]);
//   const axiosPublic = useAxiosPublic();

//   useEffect(() => {
//     // fetch('https://car-doctor-server-topaz-one.vercel.app/services')
//     //     .then(res => res.json())
//     //     .then(data => setServices(data))

//     axiosPublic.get(`/articleSearch/search=${search}`).then((res) =>
//       setArticle(res.data)
//     );
//   }, [search]);

//   return article;
// };

// export default useSearch;
