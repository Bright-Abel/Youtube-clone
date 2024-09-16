'use client';

import { Search, Mic } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import MobileSearchBar from './MobileSearchBar';

// Extending Window interface to include SpeechRecognition types
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
/* eslint-disable @typescript-eslint/no-explicit-any */

const SearchBar = () => {
  const router = useRouter();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<string | undefined>(
    undefined
  );
  // const [isListening, setIsListening] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#searching') {
        setIsSearching(true);
      } else {
        setIsSearching(false);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.hash = '';
    if (searchParams) {
      router.push(`/search/${searchParams}`);
      setSearchParams(undefined);
    }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      // recognition.onstart = () => setIsListening(true);
      // recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          window.location.hash = '';
          router.push(`/search/${transcript}`);
          setSearchParams(transcript);
        }
      };
      recognition.start();
    } else {
      alert('Speech Recognition is not supported in this browser.');
    }
  };

  const handleFocus = () => {
    window.location.hash = 'searching';
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="w-full max-w-[600px]">
      <div className="flex gap-3 items-center justify-end lg:justify-normal w-full ">
        <form
          onSubmit={handleSubmit}
          className="border border-solid h-[40px] hidden text-[#ffffffe0] md:flex bg-[#121212] rounded-[40px] border-[#303030] flex-1 pl-4"
        >
          <input
            type="text"
            className="outline-none rounded-[20px] caret-red-500 bg-transparent h-full border-none w-full pl-2"
            value={searchParams}
            placeholder="Search..."
            onChange={(event) => {
              setSearchParams(event.target.value);
            }}
          />
          <button
            type="submit"
            style={{
              color: '#f1f1f1',
              padding: '10px',
              background: '#ffffff14',
              borderRadius: '0 40px 40px 0',
              width: '64px',
              height: '40px',
            }}
            className="flex justify-center items-center"
          >
            <Search sx={{ width: '24px', height: '24px' }} />
          </button>
        </form>
        <button
          type="button"
          onClick={startListening}
          style={{
            color: '#fff',
            padding: '10px',
            background: '#ffffff19',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
          className="md:flex justify-center hidden z-50 items-center"
        >
          <Mic sx={{ width: '24px', height: '24px' }} />
        </button>

        <button
          type="button"
          onClick={handleFocus}
          onTouchEnd={handleFocus}
          className="flex text-[#f1f1f1] md:hidden justify-center items-center"
        >
          <Search sx={{ width: '29px', height: '29px' }} />
        </button>
      </div>
      {isSearching && (
        <MobileSearchBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleSubmit={handleSubmit}
          startListening={startListening}
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default SearchBar;
