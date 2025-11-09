import { CharacterList } from "@/components/CharacterList";

export function CharacterScreen() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>
      <CharacterList />
    </div>
  );
}

