// /components/CategoryFilter.jsx
export default function CategoryFilter({ selected, onChange, categories }) {
  return (
    <select
      className="border-2 border-gray-50 px-3 py-4 rounded-lg mb-4 focus-visible:outline-0"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select category</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
