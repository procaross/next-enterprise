import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function TwitterFeedSkeleton() {
  return (
    <div>
      <Skeleton className="h-6 w-full mb-4" />
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/4" />
      </div>
    </div>
  );
}