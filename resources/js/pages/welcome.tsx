import LandingPage from '@/pages/rickandmorty/LandingPage';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <LandingPage />
        </>
    );
}
