import { CharacterCard } from "@/components/CharacterCard";
import { PaginationControls } from "@/components/PaginationControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  GetCharactersDocument,
  type GetCharactersQuery,
} from "@/generated/graphql";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

export function CharacterList() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery<GetCharactersQuery>(
    GetCharactersDocument,
    {
      variables: { page },
    }
  );

  const characters =
    data?.characters?.results?.filter(
      (character) => character !== null && character !== undefined
    ) || [];
  const info = data?.characters?.info;
  const totalCount = info?.count || 0;
  const pageSize = 20;

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-48 w-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error.message}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <PaginationControls
        currentPage={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={setPage}
      />
    </div>
  );
}
