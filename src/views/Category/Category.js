import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


import {collection, where, query, getDocs} from 'firebase/firestore'
import {db} from '../../Firebase/Firebase'

import Card from '../../components/Card/Card'
import NavCategory from '../../components/NavCategory/NavCategory'

const Category = () => {

    const [item, setItem] = useState([]);

    console.log(item)  
    const {category} = useParams();  

    useEffect(() => {
    const getItem = async () => {
        const q = query(collection(db, 'food'),where('category', '==', category));
        const docs = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
        });
        setItem(docs);

    };
    getItem();

    }, [category]);

    return (
        <>
    <>
    
    <NavCategory/>

    </>        

        <div className="items-class">
        


        {item.map((item) =>{
            return(
        <div className='contenedor'>

            <Link to={`/detail/${item.id}`}>

                <Card item={item} key={item.id}/>   

            </Link>
        </div>

                ) 
        })}

        
        </div>
        </>
    )
    }

export default Category
