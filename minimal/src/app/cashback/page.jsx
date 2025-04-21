"use client";
import { useState } from "react";
import StoreCard from "../components/generic/storeCard";
import SearchBar from "../components/generic/searchBar";
import CategoryFilter from "../components/generic/CategoryFilter";
import constants from "../components/generic/constants";

export default function CashbackPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const { stores } = constants();

  const categories = [...new Set(stores.map((s) => s.category))];

  const filteredStores = stores.filter((store) => {
    return (
      store.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? store.category === category : true)
    );
  });

  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row md:py-16 py-6 sm:items-baseline  justify-between gap-6 md:px-5">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          selected={category}
          onChange={setCategory}
          categories={categories}
        />
      </div>
      <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(135px,_1fr))]   justify-items-center md:gap-6 gap-4">
        {filteredStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
