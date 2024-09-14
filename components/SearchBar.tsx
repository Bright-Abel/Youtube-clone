'use client';
import { Paper, IconButton } from '@mui/material';
import { Search, Mic } from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Extend Window interface to include SpeechRecognition types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const SearchBar = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<string | undefined>(
    undefined
  );
  // const [isListening, setIsListening] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          router.push(`/search/${transcript}`);
          setSearchParams(transcript);
        }
      };
      recognition.start();
    } else {
      alert('Speech Recognition is not supported in this browser.');
    }
  };

  return (
    <div className="flex gap-3 items-center w-full max-w-[732px]">
      <form
        onSubmit={handleSubmit}
        className="border border-solid h-[40px] text-[#ffffffe0] flex bg-[#121212] rounded-[40px] border-[#303030] flex-1 pl-4"
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
        <IconButton
          type="submit"
          sx={{
            color: '#f1f1f1',
            p: '10px',
            background: '#ffffff14',
            borderRadius: '0 40px 40px 0',
            width: '64px',
            height: '40px',
          }}
        >
          <Search sx={{ width: '24px', height: '24px' }} />
        </IconButton>
      </form>
      <IconButton
        type="button"
        onClick={startListening}
        sx={{
          color: '#fff',
          p: '10px',
          background: '#ffffff19',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
        }}
      >
        <Mic sx={{ width: '24px', height: '24px' }} />
      </IconButton>
    </div>
  );
};

export default SearchBar;
