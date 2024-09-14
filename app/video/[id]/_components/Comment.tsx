'use client';

import { useEffect } from 'react';
import { getDataFromAPI } from '@/custom/action';
interface CommentProperties {
  videoId: string;
}
const Comment: React.FC<CommentProperties> = ({ videoId }) => {
  useEffect(() => {
    const fetchComment = async () => {
      // console.log(videoId);
      try {
        await getDataFromAPI(`commentThreads?part=snippet&videoId=${videoId}`);
      } catch {
        // console.log(error);
      }
    };
    fetchComment();
  }, [videoId]);
  return <div>Comment</div>;
};
export default Comment;
