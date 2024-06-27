export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(shinobi => {
        return {
            params: { id: shinobi.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { shinobi: data }
    }
}

const Details = ({shinobi}) => {
    return ( 
        <div>
            <h1>{shinobi.name}</h1>
            <p>{shinobi.email}</p>
            <p>{shinobi.website}</p>
            <p>
                {shinobi.address.street}, {shinobi.address.suite}, {shinobi.address.city}, {shinobi.address.zipcode}
            </p>
            
        </div>
     );
}
 
export default Details;