'use client';
import Error from '@/app/[lang]/components/Error'; // Error components must be Client components

export default function RootErrorBoundary() {
    return <Error />;
}
