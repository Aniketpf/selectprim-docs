'use client';

import { useEffect } from 'react';
import { DOCS_HOME_PATH } from '../constants';

export default function Home(): null {
    const docsHomeUrl = DOCS_HOME_PATH;

    useEffect(() => {
        window.location.replace(docsHomeUrl);
    }, [docsHomeUrl]);
    return null;
}
