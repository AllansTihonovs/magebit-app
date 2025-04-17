Rick & Morty API character list.

1. Dati tiek iegūti no https://rickandmortyapi.com/ ar REST API palīdzību.
2. Izveidots saraksts ar characters no iegūtajiem datiem ar pagination.
3. Izveidots search, kurš meklē character pēc name parametra.
4. Remove pogai, pie katras character rindas, ir tikai viena funkcionalitāte, noņemt rindu no esošās character kolekcijas.
5. Uzspiežot uz jebkuras character rindas atvērsies Details skats katram character, katru reizi tiek veikts jauns request uz rick and morty API, lai iegūtu datus par character.
6. Kā bāzi izmantoju Laravel React starter-kit, tamdēļ nolēmu izmantot TS ar React.js.

Izveidoto vai rediģēto failu struktūra priekš demo:

resources/js/components/rickandmorty/ui/LoadingSpinner.tsx
resources/js/components/rickandmorty/ui/Paginator.tsx
resources/js/components/rickandmorty/ui/SearchInput.tsx

resources/js/components/rickandmorty/CharacterDetails.tsx
resources/js/components/rickandmorty/CharacterItem.tsx
resources/js/components/rickandmorty/CharacterList.tsx

resources/js/hooks/useCharacterFetch.ts
resources/js/hooks/useCharacterPagedListFetch.ts

resources/js/pages/rickandmorty/LandingPage.tsx

resources/js/pages/welcome.tsx

resources/js/types/rickandmorty/component-props.ts
resources/js/types/rickandmorty/general.ts
