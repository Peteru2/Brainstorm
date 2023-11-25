import React, { useState } from 'react';

const CapsuleSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('capsule_serial');

  const handleSearch = () => {
    // Pass the search term and search criteria to the parent component
    onSearch(searchTerm, searchBy);
  };

  return (
    <div className="mb-4">
      <h3 className="text_color text-xl mb-2">Search Capsules</h3>
      <div className="flex items-center w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search by ${searchBy === 'capsule_serial' ? 'capsule serial' : searchBy}...`}
          className="border rounded py-1 px-2 mr-2 w-full"
        />
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
          className="border rounded py-1 px-2 mr-2 outline-none"
        >
          <option value="capsule_serial">Capsule Serial</option>
          <option value="status">Status</option>
          <option value="original_launch">Original Launch</option>
          <option value="type">Type</option>
        </select>
        <button onClick={handleSearch} className="bg_color text-white rounded px-3 py-1">Search</button>
      </div>
    </div>
  );
};

export default CapsuleSearch;
