import styles from '../../styles/jelly.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { shinobis : data}
    }
}

const Shinobi = ({shinobis}) => {
    return (
        <div>
            <h1>All Shinobi</h1>
            {shinobis.map(shinobi => (
                <Link href={'/Jelly/' + shinobi.id} key={shinobi.id} className={styles.single}>
                    
                        <h3>{shinobi.name}</h3>
                    
                </Link>
            ))}
        </div>
    );
}
 
export default Shinobi;