'use client';

import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import TwitterFeedSkeleton from './skeleton/TwitterFeedSkeleton';

interface Tweet {
  id: number;
  text: string;
  filter: string;
}

interface TwitterFeedProps {
}

const TwitterFeed: React.FC<TwitterFeedProps> = (props) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      setTimeout(() => {
        const fetchedTweets: Tweet[] = [
          { id: 1, text: "This is a tweet", filter: "general" },
        ];
        const filteredTweets = selectedFilter !== 'all' ? fetchedTweets.filter(tweet => tweet.filter === selectedFilter) : fetchedTweets;
        setTweets(filteredTweets);
        setLoading(false);
      }, 2000);
    };

    fetchTweets();
  }, [selectedFilter]);

  if (loading) return <TwitterFeedSkeleton />;

  return (
    <div className="space-y-4">
      <Select onValueChange={setSelectedFilter}>
        <SelectTrigger className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Choose a filter
        </SelectTrigger>
        <SelectContent className="py-1 mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
          <SelectItem value="all" className="px-4 py-2 cursor-pointer hover:bg-gray-100">All</SelectItem>
          <SelectItem value="general" className="px-4 py-2 cursor-pointer hover:bg-gray-100">General</SelectItem>
          <SelectItem value="personal" className="px-4 py-2 cursor-pointer hover:bg-gray-100">Personal</SelectItem>
        </SelectContent>
      </Select>

      <div className="space-y-2">
        {tweets.map(tweet => (
          <div key={tweet.id} className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-md">
            {tweet.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed;