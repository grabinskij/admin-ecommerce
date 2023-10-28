import {useRouter} from "next/router";
import axios from "axios";
import {useState} from "react";



export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
    images
}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter()

    const data = {title, description, price}
    async function saveProduct(e) {
        e.preventDefault();
        if(_id){
            await axios.put('/api/products', {...data, _id})
        } else {
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }

    if (goToProducts) {
        router.push('/products');
    }
    return (
        <form onSubmit={saveProduct}>
            <label>Products name</label>
            <input
                type="text"
                placeholder="product name"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <label>Images</label>
            <div className="mb-2">
                {!images?.length && (
                    <div>No images in this product</div>
                )}
            </div>
            <label>Description</label>
            <textarea
                placeholder="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <label>Price(USD)</label>
            <input
                type="number"
                placeholder="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <button
                className="btn-primary"

            >
                Save
            </button>
        </form>
    )
}