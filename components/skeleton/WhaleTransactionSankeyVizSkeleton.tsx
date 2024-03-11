import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"

const WhaleTransactionSankeyVizSkeleton = () => {
  return (
    <div className="max-w-8xl mx-auto">
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px]" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-[20px] w-[70%]" />
            <Skeleton className="h-[20px] w-[60%] self-end" />
            <Skeleton className="h-[20px] w-[30%]" />
            <Skeleton className="h-[20px] w-[50%] self-end" />
            <Skeleton className="h-[20px] w-[80%]" />
            <Skeleton className="h-[20px] w-[40%] self-end" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WhaleTransactionSankeyVizSkeleton;