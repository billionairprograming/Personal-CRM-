{
  /*This is an overview page that is gonna overview the lead or contact.*/
}
import React from "react";

import { useState } from "react";
import { useData } from "../../context/data-context";

const Overview = ({ title, filter }) => {
  const [selectedLead, setSelectedLead] = useState(null);

  const { entries } = useData();

  const filtered = entries.filter(filter);

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {filtered.length === 0 ? (
          <p className="text-gray-500">No entries found.</p>
        ) : (
          filtered.map((entry) => (
            <div
              key={entry.id}
              className="p-2 border-b"
              onClick={() => setSelectedLead(entry)}
            >
              <strong>{entry.name}</strong> — {entry.email}
            </div>
          ))
        )}
      </div>
      {selectedLead && (
        <dialog open style={{ padding: "20px", border: "1px solid black" }}>
          <h3>Lead Info</h3>
          <p>Name: {selectedLead.name}</p>
          <p>Email: {selectedLead.email}</p>
          <p>Phone: {selectedLead.phone}</p>
          <p>Notes: {selectedLead.notes}</p>
          <button onClick={() => setSelectedLead(null)}>Close</button>
        </dialog>
      )}
    </>
  );
};

export default Overview;
