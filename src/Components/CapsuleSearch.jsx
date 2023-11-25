import React, { useState } from 'react';

const CapsuleSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('capsule_serial');

  const handleSearch = () => {
    
    onSearch(searchTerm, searchBy);
  };

  return (
    <div className="mb-4">
      <h3 className="text_color text-xl mb-2">Search Capsules</h3>
      <div className="flex items-center w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            ; 
          }}
          onKeyUp={()=>handleSearch()}
          placeholder={`Search by ${searchBy === 'capsule_serial' ? 'capsule serial' : searchBy}...`}
          className="border rounded py-1 px-2 mr-2 w-full outline-none"
        />
        <select
          value={searchBy}
          onChange={(e) => {
            setSearchBy(e.target.value);
            handleSearch(); 
          }}
          className="border rounded py-1 px-2 mr-2 outline-none"
        >
          <option value="capsule_serial">Capsule Serial</option>
          <option value="status">Status</option>
          <option value="original_launch">Original Launch</option>
          <option value="type">Type</option>
        </select>
      </div>
    </div>
  );
};

export default CapsuleSearch;
