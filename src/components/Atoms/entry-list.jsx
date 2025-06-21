{
  /* this is gonna be able to filter all the lead so im not repeating myself */
}

import { useData } from "../context/DataContext";

export default function EntryList({ title, filter }) {
  const { entries } = useData();

  const filtered = entries.filter(filter);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {filtered.length === 0 ? (
        <p className="text-gray-500">No entries found.</p>
      ) : (
        filtered.map((entry) => (
          <div key={entry.id} className="p-2 border-b">
            <strong>{entry.name}</strong> — {entry.email}
          </div>
        ))
      )}
    </div>
  );
}
