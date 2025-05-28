import { useEffect, useState } from 'react';
import styles from './DataFetecher.module.css';

function DataFetecher() {
    const [ data, setData ] = useState([]);
    const [ Loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts=> {
            setData(posts);
            setLoading(false);
        });
    },[]);

    return <>
        <div className={styles["data--container"]}>
            { Loading ? <h1 className={styles["loading"]}>Loading...</h1> :
                <ul className={styles["post--container"]}>
                    {data.map(post => 
                    <li className={styles["post"]} 
                        key={post.id}
                    >
                        {post.title}
                    </li>)}
                </ul> 
            }
        </div>        
    </>;
}

export default DataFetecher;