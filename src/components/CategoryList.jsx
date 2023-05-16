import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { getCategory } from "../graphql/query";
const CategoryList = () => {
  const { loading, error, data } = useQuery(getCategory);

  const cachedMutatedData = useMemo(() => {
    if (loading || error) return null;
    return data?.getAllCategory;
  }, [loading, error, data]);

  return (
    <div className="container cat">
      <h2>
        #Our top <span>Categories</span>
      </h2>
      <div className="category">
        {cachedMutatedData?.map((d, i) => (
          <div key={i}>
            <div className="card">
              <img src={d.img} alt={d.title} />
            </div>
            <p>{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
