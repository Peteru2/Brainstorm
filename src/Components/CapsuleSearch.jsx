import React, { useState } from 'react';

const CapsuleSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4">
      <h3 className="text_color text-xl mb-2">Search Capsules</h3>
      <div className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by capsule serial..."
          className="border rounded py-1 px-2 mr-2"
        />
        <button onClick={handleSearch} className="bg_color text-white rounded px-3 py-1">Search</button>
      </div>
    </div>
  );
};

export default CapsuleSearch;