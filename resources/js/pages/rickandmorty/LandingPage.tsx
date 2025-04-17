import { useState, useCallback, useEffect , useMemo } from 'react';
import CharacterList from '@/components/rickandmorty/CharacterList';
import Paginator from '@/components/rickandmorty/ui/Paginator';
import SearchInput from '@/components/rickandmorty/ui/SearchInput';
import useCharacterPagedListFetch from '@/hooks/useCharacterPagedListFetch';
import CharacterDetail from "@/components/rickandmorty/CharacterDetails";
import LoadingSpinner from "@/components/rickandmorty/ui/LoadingSpinner";

const LandingPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [removedIds, setRemovedIds] = useState<number[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const { characters, totalPages, loading, error } = useCharacterPagedListFetch(currentPage, searchQuery);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const visible = useMemo(
        () => characters.filter((c) => !removedIds.includes(c.id)),
        [characters, removedIds]
    );

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    }, []);

    const handleResetSearch = useCallback(() => {
        setSearchQuery('');
        setCurrentPage(1);
    }, []);

    const handleRemove = useCallback((id: number) => {
        setRemovedIds((previous) => [...previous, id]);
    }, []);

    const handleSelect = useCallback((id: number) => {
        setSelectedId(id);
    }, []);

    const handleBack = useCallback(() => {
        setSelectedId(null);
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Rick & Morty characters</h1>

            {/* Show paginator and search if not in character details view */}
            {selectedId === null ? (
                <>
                    <div className="mb-4  max-w-xl m-auto">
                        <SearchInput onSearch={handleSearch} onReset={handleResetSearch} />
                    </div>

                    {loading && <LoadingSpinner />}

                    {error && !loading && (
                        <p className="text-red-600">{error}</p>
                    )}

                    {!loading && !error && (
                        <>
                            <CharacterList
                                characters={visible}
                                removeCharacter={handleRemove}
                                onSelect={handleSelect}
                            />
                            <Paginator
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </>
                    )}
                </>
            ) : (
                <CharacterDetail id={selectedId} onClose={handleBack} />
            )}
        </div>
    )
};

export default LandingPage;
