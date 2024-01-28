// "use client";
// import React, { useState } from "react";
// // import Carousel from "react-elastic-carousel";
// import { items } from "/public/Items.json";
// import styles from "./carouselstyle.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 1, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 2 },
//   { width: 1200, itemsToShow: 3 },
// ];

// export default function Elasticcarousel() {
//   const { elastic } = items;
//   return (
//     <div className={styles.carouselContainer}>
//       <div>
//         <h1 className="text-center text-white font-bold text-xl tracking-wide font-montserrat mt-5">
//           Food Items
//         </h1>
//       </div>
//       <div>
//         {/* <Carousel breakPoints={breakPoints}> */}
//         {elastic.map((item) => (
//           <div key={item.id}>
//             <div>
//               <h3>{item.title}</h3>
//             </div>
//           </div>
//         ))}
//         {/* </Carousel> */}
//       </div>
//     </div>
//   );
// }
