import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {withSwal} from "react-sweetalert2";
import {handleApiError} from "../../api/utils";

function DeleteProductPage({swal}) {
    const router = useRouter()
    const [productInfo, setProductInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id=' + id).then(response => {
            setProductInfo(response.data);
        })
    }, [id])

    function goBack() {
        router.push('/products');
    }

    async function deleteProduct() {
        try {
            await axios.delete('/api/products?id=' + id);
            goBack();
        } catch (error) {
            await handleApiError(swal, error);
        }
    }

    return (
        <>
            <h1 className="text-center">Do you really want to delete "{productInfo?.title}" product?</h1>
            <div className="flex justify-center gap-2">
                <button className="btn-red" onClick={deleteProduct}>Yes</button>
                <button className="btn-default" onClick={goBack}>No</button>
            </div>
        </>
    )
}

export default withSwal(({swal}, ref) => (
    <DeleteProductPage swal={swal}/>
));