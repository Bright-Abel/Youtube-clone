'use client';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'; // Correct import
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { ReactNode } from 'react';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

interface CategoriesProperties {
  name: string;
  icon: ReactNode;
}

const categories: CategoriesProperties[] = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'JS Mastery', icon: <CodeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'ReactJS', icon: <CodeIcon /> },
  { name: 'NextJS', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movie', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Sport', icon: <FitnessCenterIcon /> },
  { name: 'Fashion', icon: <CheckroomIcon /> },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
  { name: 'Comedy', icon: <TheaterComedyIcon /> },
  { name: 'Gym', icon: <FitnessCenterIcon /> },
  { name: 'Crypto', icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle =
  'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture =
  'http://dergipark.org.tr/assets/app/images/buddy_sample.png';

export const timeDifference = (inputDate: string): string => {
  const date = new Date(inputDate);
  const now = new Date();

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000, // 60 * 60 * 24 * 365
    month: 2592000, // 60 * 60 * 24 * 30
    day: 86400, // 60 * 60 * 24
    hour: 3600, // 60 * 60
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

export default categories;
