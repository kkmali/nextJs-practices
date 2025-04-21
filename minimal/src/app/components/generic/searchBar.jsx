// /components/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      className="border-2 border-light-gray md:p-4 px-4 py-2.5  rounded-2xl bg-light-gray w-full sm:w-100 focus-visible:outline-0 focus-visible:border-green-600"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
