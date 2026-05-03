'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuth } from '@/app/helpers/auth';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        router.replace(isAuth() ? '/orders' : '/login');
    }, []);

    return null;
}