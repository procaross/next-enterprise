import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"

function EthereumAnalysisSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[220px]" />
              <Skeleton className="h-4 w-[170px]" />
              <Skeleton className="h-4 w-[240px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[220px]" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[190px] mt-12"/>
              <Skeleton className="h-4 w-[260px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="space-y-2">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <Skeleton className="h-4 w-[240px]" />
              <Skeleton className="h-4 w-[210px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[220px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[220px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <Skeleton className="h-4 w-[100px]" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[280px]" />
              <Skeleton className="h-4 w-[220px]" />
              <Skeleton className="h-4 w-[290px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default EthereumAnalysisSkeleton;