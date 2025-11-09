import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GetCharactersQuery } from "@/generated/graphql";

type Character = NonNullable<
  NonNullable<GetCharactersQuery["characters"]>["results"]
>[number];

interface CharacterCardProps {
  character: NonNullable<Character>;
}

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <Card>
    <CardHeader>
      {character.image && (
        <img
          src={character.image}
          alt={character.name || "Unknown"}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
    </CardHeader>
    <CardContent>
      <CardTitle className="mb-2">{character.name || "Unknown"}</CardTitle>
      <p className="text-sm text-muted-foreground">
        {character.species || "Unknown species"}
      </p>
    </CardContent>
  </Card>
);
