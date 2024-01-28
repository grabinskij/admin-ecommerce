import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import {withSwal} from "react-sweetalert2";
import {handleApiError} from "./api/utils";

function SettingsPage({swal}) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [featuredProductId, setFeaturedProductId] = useState('');
    const [shippingFee, setShippingFee] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetchAll().then(() => {
            setIsLoading(false);
        });
    }, []);

    async function fetchAll() {
        try {
        await axios.get('/api/products').then(res => {
            setProducts(res.data);
        });
        await axios.get('/api/settings?name=featuredProductId').then(res => {
            setFeaturedProductId(res?.data?.value);
        });
        await axios.get('/api/settings?name=shippingFee').then(res => {
            setShippingFee(res?.data?.value);
        });
    } catch (error) {
            await handleApiError(swal, error);
        }
    }

    async function saveSettings() {
        try {
        setIsLoading(true);
        await axios.put('/api/settings', {
            name: 'featuredProductId',
            value: featuredProductId,
        })
        await axios.put('/api/settings', {
            name: 'shippingFee',
            value: shippingFee,
        })

        setIsLoading(false);

        await swal.fire({
            title: 'Settings are saved!',
            icon: 'success',
        })
    } catch (error) {
            setIsLoading(false);

            await handleApiError(swal, error);
        }
    }

    return (
        <>
            <div>Settings</div>
            {isLoading && (
                <Spinner/>
            )}
            {!isLoading && (
                <>
                    <label>Featured product</label>
                    <select value={featuredProductId} onChange={e => setFeaturedProductId(e.target.value)}>
                        {products.length > 0 && products.map(product => (
                            <option key={product._id} value={product._id}>{product.title}</option>
                        ))}
                    </select>
                    <label>Shipping price ($)</label>
                    <input type="number" value={shippingFee} onChange={e => setShippingFee(e.target.value)}/>
                    <div>
                        <button onClick={saveSettings} className="btn-primary">Save settings</button>
                    </div>
                </>
            )}
        </>
    )
}

export default withSwal(({swal}) => (
    <SettingsPage swal={swal}/>
));