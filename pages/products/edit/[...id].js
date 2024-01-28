import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../../components/Spinner";
import ProductForm from "../../../components/ProductForm";


export default function EditProductPage() {
    const [productInfo, setProductInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if(!id){
            return;
        }
        setIsLoading(true);
        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data);
            setIsLoading(false);
        })
    }, [id])
    return (
        <>
            <h1>Edit product</h1>
            {isLoading && (
                <Spinner fullWidth={true} />
            )}
            {productInfo && (
                <ProductForm
                    _id={productInfo._id}
                    title={productInfo.title}
                    description={productInfo.description}
                    price={productInfo.price}
                    images={productInfo.images}
                    category={productInfo.category}
                    properties={productInfo.properties}
                />
            )}
        </>
    )
}