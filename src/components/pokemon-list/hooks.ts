import { useState } from "react";
import { useGetPokemonListByTypeQuery } from "../../services/services";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

const usePokemonNameList = (pokemonType: string) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  const {
    data: pokemonListData,
    error,
    isLoading,
  } = useGetPokemonListByTypeQuery(pokemonType);

  const pokemonNames = pokemonListData
    ? pokemonListData?.pokemon.map((pokemon) => pokemon.pokemon.name)
    : [];

  const caughtPokemons: string[] = useAppSelector(
    (state: RootState) => state.caughtPokemons
  );
  const isCaught = (pokemonName: string): boolean =>
    caughtPokemons.includes(pokemonName);

  const shouldShowOnlyCaughtPokemons = useAppSelector(
    (state: RootState) => state.shouldShowOnlyCaughtPokemons.flag
  );

  const pokemonSearchString = useAppSelector(
    (state: RootState) => state.searchPokemon.searchString
  );

  const headerText = shouldShowOnlyCaughtPokemons
    ? "caught pokemons"
    : `'${pokemonType}' pokemons`;

  const applySearch = (names: string[]): string[] =>
    names.filter((name) => name.startsWith(pokemonSearchString));

  return {
    selectedPokemon,
    setSelectedPokemon,
    pokemonListData,
    error,
    isLoading,
    pokemonNames,
    caughtPokemons,
    isCaught,
    shouldShowOnlyCaughtPokemons,
    pokemonSearchString,
    headerText,
    applySearch,
  };
};

export default usePokemonNameList;
