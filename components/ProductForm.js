import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import Spinner from "./Spinner";
import {ReactSortable} from "react-sortablejs";
import {withSwal} from "react-sweetalert2";
import {handleApiError} from "../pages/api/utils";


function ProductForm({swal, ...props}) {

    const {
        _id,
        title: existingTitle,
        description: existingDescription,
        price: existingPrice,
        images: existingImages,
        category: existingCategory,
        properties: existingProperties,
    } = props

    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [category, setCategory] = useState(existingCategory || '');
    const [productProperties, setProductProperties] = useState(existingProperties || {});
    const [price, setPrice] = useState(existingPrice || '');
    const [images, setImages] = useState(existingImages || []);
    const [goToProducts, setGoToProducts] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        setCategoriesLoading(true);
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
            setCategoriesLoading(false);
        })
    }, []);

    async function saveProduct(e) {
        e.preventDefault();
        const data = {title, description, price, images, category, properties: productProperties};
        try {
            if (_id) {
                await axios.put('/api/products', {...data, _id})
            } else {
                await axios.post('/api/products', data);
            }
            setGoToProducts(true);
        } catch (error) {
            await handleApiError(swal, error);
        }
    }

    if (goToProducts) {
        router.push('/products');
    }

    async function uploadImages(e) {
        const files = e.target?.files;
        try {
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file)
            }
            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
        }
        } catch (error) {
            await handleApiError(swal, error);
        } finally {
            setIsUploading(false);
        }
    }

    function updateImagesOrder(images) {
        setImages(images);
    }

    function setProductProp(propName, value) {
        setProductProperties(prev => {
            const newProductProps = {...prev};
            newProductProps[propName] = value;
            return newProductProps;
        });
    }

    const propertiesToFill = [];
    if (categories.length > 0 && category) {
        let catInfo = categories.find(({_id}) => _id === category)
        propertiesToFill.push(...catInfo.properties);
        while (catInfo?.parent?._id) {
            const parentCat = categories.find(({_id}) => _id === catInfo.parent?._id);
            propertiesToFill.push(...parentCat.properties);
            catInfo = parentCat;
        }
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
            <label>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Uncategorized</option>
                {!!categories?.length > 0 && categories.map(c => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                ))}
            </select>
            {categoriesLoading && (
                <Spinner/>
            )}
            {propertiesToFill.length > 0 && propertiesToFill.map(p => (
                <div key={p.name} className="flex gap-1">
                    <div>{p.name}</div>
                    <select value={productProperties[p.name]} onChange={e => setProductProp(p.name, e.target.value)}>
                        {p.values.map(v => (
                            <option key={v} value={v}>{v}</option>
                        ))}
                    </select>
                </div>
            ))}
            <label>Images</label>
            <div className="mb-2 flex flex-wrap gap-2">
                <ReactSortable
                    list={images}
                    setList={updateImagesOrder}
                    className="flex flex-wrap gap-2"
                >
                    {!!images?.length && images.map(link => (
                        <div key={link} className="h-24">
                            <img src={link} alt="img" className="rounded-lg"/>
                        </div>
                    ))}
                </ReactSortable>
                {isUploading && (
                    <div className="h-28 flex items-center">
                        <Spinner/>
                    </div>
                )}
                <label className="w-28 h-28 cursor-pointer border text-center flex flex-col
                items-center justify-center gap-1 text-sm text-gray-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                    </svg>
                    <div>Upload</div>
                    <input type="file" onChange={uploadImages} className="hidden"/>
                </label>
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

export default withSwal(({swal, ...props}, ref) => {
    return <ProductForm swal={swal} {...props} />;
});
