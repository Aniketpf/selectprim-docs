import { useEffect } from 'react';

const DOCS_HOME = '/docs/api/selectprism-external-apis';

export default function Home(): null {
    useEffect(() => {
        window.location.replace(DOCS_HOME);
    }, []);
    return null;
}
