import React, { useState } from "react";
import { GetPosts } from "../graphql/query";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <section className="home">
      <Header search={search} setSearch={setSearch} />
      <CategoryList />
      <ProductCard search={search} />
    </section>
  );
};

export default Home;
