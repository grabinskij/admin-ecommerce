import {useState} from "react";
import axios from "axios";
import {redirect} from "next/dist/server/api-utils";
import {useRouter} from "next/router";


export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter()

    async function createProduct(e) {
        e.preventDefault();
        const data = {title, description, price}
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if(goToProducts){
        router.push('/products');
    }
    return(
            <form onSubmit={createProduct}>
                <h1>New product</h1>
                <label>Products name</label>
                <input
                    type="text"
                    placeholder="product name"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    placeholder="description"
                    value={description}
                    onChange={e =>setDescription(e.target.value)}
                />
                <label>Price(USD)</label>
                <input
                    type="number"
                    placeholder="price"
                    value={price}
                    onChange={e =>setPrice(e.target.value)}
                />
                <button
                    className="btn-primary"

                >
                    Save
                </button>
            </form>
    )
}