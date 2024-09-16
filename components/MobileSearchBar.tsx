import { Mic, Search, ArrowBack } from '@mui/icons-material';
import { forwardRef } from 'react';

interface MobileSearchProperties {
  handleSubmit: (value: React.FormEvent<HTMLFormElement>) => void;
  searchParams: string | undefined;
  setSearchParams: (value: string) => void;
  startListening: () => void;
}

const MobileSearchBar = forwardRef<HTMLInputElement, MobileSearchProperties>(
  ({ handleSubmit, searchParams, setSearchParams, startListening }, ref) => {
    console.log(ref);
    return (
      <div className="fixed inset-0 bg-black z-50">
        <div className="bg-[#ffffff19] py-4 px-2">
          <div className="flex gap-3 items-center w-full">
            <button
              type="button"
              aria-label="Close Search"
              onClick={() => (window.location.hash = '')}
              style={{
                color: '#f1f1f1',
              }}
              className="flex justify-center items-center"
            >
              <ArrowBack sx={{ width: '24px', height: '24px' }} />
            </button>
            <form
              onSubmit={handleSubmit}
              className="h-[40px] text-[#ffffffe0] flex md:hidden bg-[#303030] rounded-[40px] flex-1 pl-4"
            >
              <input
                ref={ref}
                type="text"
                className="outline-none rounded-[20px] bg-transparent h-full border-none w-full pl-2"
                value={searchParams}
                placeholder="Search Videos"
                onChange={(event) => {
                  setSearchParams(event.target.value);
                }}
              />
              <button
                type="submit"
                aria-label="Submit search"
                style={{
                  color: '#f1f1f1',
                  padding: '10px',
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
              aria-label="Start voice search"
              style={{
                color: '#fff',
                padding: '10px',
                background: '#68686824',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
              }}
              className="flex justify-center md:hidden border-[4px] border-solid border-[#3030303b] items-center"
            >
              <Mic sx={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default MobileSearchBar;
