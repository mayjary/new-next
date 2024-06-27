import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const crashland = () => {
    
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3500);
    },[]);

    return (
        <>
            <Head>
                <title>Shinobi | 404</title>
            </Head>
            <div className="crash">
                <h1>OOPPSSS...</h1>
                <h2>Page Not Found</h2>
                <p>Go back to <Link href="/">Homepage</Link></p>
            </div>
        </>
    );
}
 
export default crashland;