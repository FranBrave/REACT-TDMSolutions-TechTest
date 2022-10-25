import React from 'react';

const SearchInput: React.FC = ({ ...rest }) => {
  return (
    <div>
      <input {...rest} placeholder="Buscar..." />
    </div>
  );
};

export default SearchInput;
