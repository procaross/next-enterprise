import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from '@/components/ui/button'

function EthereumAnalysisSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[120px]" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
          <Skeleton className="h-[125px] w-[150px] rounded-xl mt-4" />
          <Skeleton className="h-4 w-[220px] mt-4" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full rounded" />
        </CardFooter>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-4 w-[220px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[190px]" />
            <Skeleton className="h-4 w-[260px]" />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[80px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[120px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[200px] w-full" />
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-[250px]" />
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-[250px]" />
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[120px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[280px]" />
            <Skeleton className="h-4 w-[220px]" />
            <Skeleton className="h-4 w-[290px]" />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[180px]" />
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full rounded" />
        </CardFooter>
      </Card>
    </div>
  );
}

export default EthereumAnalysisSkeleton;