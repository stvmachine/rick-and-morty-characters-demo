import { CharacterList } from "@/components/CharacterList";
import {
  GetCharactersDocument,
  type GetCharactersQuery,
} from "@/generated/graphql";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

export function CharacterScreen() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery<GetCharactersQuery>(
    GetCharactersDocument,
    {
      variables: { page },
    }
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>
      <CharacterList
        data={data}
        loading={loading}
        error={error}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}

