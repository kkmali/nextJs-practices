import Button from "../core/Button";

// /components/StoreCard.jsx
export default function StoreCard({ store }) {
  return (
    <div className="max-w-[329px] w-full border-2 border-gray-50 rounded-2xl pt-6 flex flex-col items-center text-center overflow-hidden">
      <img
        src={store.logo}
        alt={store.name}
        className="sm:size-36 size-25 object-contain mb-4"
      />
      <p className="text-sm sm:text-2xl text-green-400 mb-1">Up to</p>
      <p className="text-4xl sm:text-5xl font-bold mb-1 text-green-600">
        {store.cashback}
      </p>
      <p className="text-base sm:text-2xl text-green-400 font-medium mb-4">
        cashback
      </p>
      <Button
        label="Go to store"
        variant="primary"
        className="text-base sm:text-lg py-3 rounded-none"
        fullWidth
        type="link"
        url="/store"
      />
    </div>
  );
}
