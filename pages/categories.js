import {useEffect, useState} from "react";
import axios from "axios";
import { withSwal } from 'react-sweetalert2';

function Categories({swal}) {
    const [editedCategory, setEditedCategory] = useState(null);
    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState('');
    useEffect(() => {
        fetchCategories();
    }, []);
    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        });
    }
    async function saveCategory(e) {
        e.preventDefault();
        const data = {name, parentCategory};
        if (editedCategory){
            data._id = editedCategory._id;
            await axios.put('/api/categories', data);
            setEditedCategory(null);
        } else {
            await axios.post('/api/categories', data);
        }
        setName('');
        setParentCategory('');
        fetchCategories();
    }
    function editCategory(category){
            setEditedCategory(category);
            setName(category.name);
            setParentCategory(category.parent?._id);
    }
    function deleteCategory(category){
        swal.fire({
            title: 'Are you sure',
            text: `Do you really want to delete ${category.name}?`,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes, Delete!',
            reverseButtons: true,
            confirmButtonColor: '#d56',
        }).then( async result => {
            const {_id} =  category;
           if (result.isConfirmed) {
              await axios.delete('/api/categories?_id='+_id);
              fetchCategories();
           }
        })
    }
    return (
        <>
            <h1>Categories</h1>
            {/*<label>{editCategory ? `Edit category ${editedCategory?.name}` : 'Create new category'}</label>*/}
            <form onSubmit={saveCategory} className="flex gap-1">
                <input
                    className="mb-0"
                    type="text"
                    placeholder={'Category name'}
                    onChange={e => setName(e.target.value)}
                    value={name} />
                <select
                    className="mb-0"
                    onChange={e => setParentCategory(e.target.value)}
                    value={parentCategory}
                >
                    <option value="">No parent category</option>
                    {categories.length > 0 && categories.map(category => (
                        <option value={category._id}>{category.name}</option>
                    ))}
                </select>
                <button type="submit" className="button btn-primary p-1">Save</button>
            </form>
            <table className="basic mt-4">
                <thead>
                <tr>
                    <td>Category name</td>
                    <td>Parent category</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {categories.length > 0 && categories.map(category => (
                    <tr>
                        <td>{category.name}</td>
                        <td>{category?.parent?.name}</td>
                        <td>
                            <button
                                onClick={() => editCategory(category)}
                                className='btn-primary mr-1'
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteCategory(category)}
                                className='btn-primary'
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default withSwal(({swal}, ref) => (
    <Categories swal={swal} />
));