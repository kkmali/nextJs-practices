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
      <div className="flex flex-col sm:flex-row bg-white sm:py-16 py-6  justify-between gap-6 px-5">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          selected={category}
          onChange={setCategory}
          categories={categories}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] justify-items-center gap-6">
        {filteredStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
