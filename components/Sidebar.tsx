'use client';
import categories from '@/custom/constant';
import { Stack } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';

interface SidebarProperties {
  hoverCategory: string;
  setHoverCategory: (category: string) => void;
}
const Sidebar: React.FC<SidebarProperties> = ({
  hoverCategory,
  setHoverCategory,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        px: 1,
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((item, index) => (
        <button
          onClick={() => setHoverCategory(item.name)}
          key={index}
          className={clsx(
            `category-btn lg:w-[80%] whitespace-nowrap flex items-center gap-4 text-white`,
            item.name === hoverCategory && '!bg-[#fc1403bd]'
          )}
        >
          <span
            className={clsx(
              ``,
              item.name === hoverCategory ? 'text-wite' : 'text-[#FC1503]'
            )}
          >
            {item.icon}
          </span>
          <span
            className={clsx(
              ``,
              item.name === hoverCategory ? 'opacity-[1]' : 'opacity-[0.8]'
            )}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
export default Sidebar;
