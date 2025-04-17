import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import LandingPage from "@/pages/rickandmorty/LandingPage";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <LandingPage />
        </>
    );
}
