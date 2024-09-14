'use client';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const SearchBar = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<string | undefined>(
    undefined
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchParams) {
      router.push(`/search/${searchParams}`);
      setSearchParams(undefined);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-solid flex bg-white rounded-[20px] border-[#e3e3e3] max-[600px]:w-[200px] sm:w-[350px] "
    >
      <input
        type="text"
        className="outline-none rounded-[20px] border-none w-full pl-2"
        name=""
        id=""
        value={searchParams}
        placeholder="Search..."
        onChange={(event) => {
          setSearchParams(event.target.value);
        }}
      />
      <IconButton type="submit" sx={{ color: 'red', p: '10px' }}>
        <Search />
      </IconButton>
    </form>
  );
};
export default SearchBar;
