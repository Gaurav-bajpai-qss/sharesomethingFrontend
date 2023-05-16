import { useQuery } from "@apollo/client";
import React, { useEffect, useMemo, useState } from "react";
import { getAllProducts } from "../graphql/query";

const ProductCard = ({ search }) => {
  const { loading, error, data } = useQuery(getAllProducts);
  // const [page, setPage] = useState();
  const [card, setCard] = useState([]);

  const cachedMutatedData = useMemo(() => {
    if (loading || error) return null;
    return setCard(data?.showProduct);
  }, [loading, error, data]);

  // const handleInfinitScrool = async () => {
  //   console.log("scrollheight" + document.documentElement.scrollHeight);
  //   console.log("innerheight" + window.innerHeight);
  //   console.log("scrollTop" + document.documentElement.scrollTop);
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setPage((prev) => prev + 1);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfinitScrool);
  //   return () => window.removeEventListener("scroll", handleInfinitScrool);
  // }, []);

  return (
    <section className="products container">
      {card
        ?.filter((d) => d.name.includes(search))
        .map((d, i) => (
          <div className="productcard" key={i}>
            <img src={d.image[0].url} />

            <div className="top">
              <h4>
                {d.name}
                <span>
                  {[1, 2, 3, 4, 5].map((d, i) => (
                    <i className="bx bxs-star" key={d + "zx" + i}></i>
                  ))}
                </span>
              </h4>
              <h5>₹{d.price}</h5>
            </div>
            <div className="heart">
              <i className="bx bx-cart"></i>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ProductCard;
