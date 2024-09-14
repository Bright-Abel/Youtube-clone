'use client';

import { useState, useEffect } from 'react';
import { getDataFromAPI } from '@/custom/action';
interface CommentProperties {
  videoId: string;
}
const Comment: React.FC<CommentProperties> = ({ videoId }) => {

  useEffect(() => {
    const fetchComment = async () => {
      console.log(videoId);
      try {
        const response = await getDataFromAPI(
          `commentThreads?part=snippet&videoId=${videoId}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComment();
  }, [videoId]);
  return <div>Comment</div>;
};
export default Comment;
