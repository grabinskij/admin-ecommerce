import {useEffect, useState} from "react";
import axios from "axios";
import {withSwal} from "react-sweetalert2";
import Spinner from "../components/Spinner";
import {prettyDate} from "../lib/date";


function AdminsPage({swal}) {
    const [email, setEmail] = useState('');
    const [adminEmails, setAdminEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [debouncedEmail, setDebouncedEmail] = useState('');

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    function addAdmin(e) {
        e.preventDefault();
        axios.post('/api/admins', {email}).then(res => {
            swal.fire({
                title: 'Admin created!',
                icon: "success",
            })
            setEmail('');
            debouncedLoadAdmins();
        })
            .catch(err => {
            swal.fire({
                title: 'Error!',
                text: err.response.data.message,
                icon: "error",
            })
        });
    }

    function deleteAdmin(_id, email) {
        swal.fire({
            title: 'Are you sure',
            text: `Do you really want to delete ${email}?`,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes, Delete!',
            reverseButtons: true,
            confirmButtonColor: '#d56',
        }).then(async result => {
            if (result.isConfirmed) {
                axios.delete('/api/admins?_id=' + _id).then(() => {
                    swal.fire({
                        title: 'Admin deleted!',
                        icon: "success",
                    })
                    debouncedLoadAdmins();
                })
            }
        });
    }

    const debouncedLoadAdmins = debounce(() => {
        setIsLoading(true);

        axios.get('/api/admins')
            .then(res => {
                setAdminEmails(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);

                if (error.response) {
                    if (error.response.status === 403) {
                        swal.fire({
                            title: 'Forbidden',
                            text: 'You do not have permission to access this resource',
                            icon: 'error',
                        });
                    } else {
                        swal.fire({
                            title: 'Error',
                            text: 'An error occurred while loading admins',
                            icon: 'error',
                        });
                    }
                } else {
                    swal.fire({
                        title: 'Error',
                        text: 'An unexpected error occurred while loading admins',
                        icon: 'error',
                    });
                }
            });
    }, 500); // Adjust the delay as needed

    // Use debouncedLoadAdmins in useEffect
    useEffect(() => {
        console.log('Component is mounting. Calling loadAdmins...');
        debouncedLoadAdmins();
    }, [debouncedEmail]); // Include debouncedEmail in the dependencies


    return (
        <>
            <h1>Admins</h1>
            <h2>Add new admin</h2>
            <form onSubmit={addAdmin}>
                <div className="flex gap-2">
                    <input
                        className="mb-0"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button
                        className="btn-primary py-1 whitespace-nowrap"
                        type="submit"
                    >
                        Add admin
                    </button>
                </div>
            </form>

            <h2>Existing admins</h2>
            <table className="basic">
                <thead>
                <tr>
                    <th className="text-left">Admin email</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {isLoading && (
                    <tr>
                        <td colSpan={2}>
                            <div className="py-4">
                                <Spinner fullWidth={true}/>
                            </div>
                        </td>
                    </tr>
                )}
                {adminEmails.length > 0 && adminEmails.map(adminEmail => (
                    <tr key={adminEmail.email}>
                        <td>{adminEmail.email}</td>
                        <td>
                            {adminEmail.createdAt && prettyDate(adminEmail.createdAt)}
                        </td>
                        <td>
                            <button className="btn-red"
                                    onClick={() => deleteAdmin(adminEmail._id, adminEmail.email)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}


export default withSwal(({swal}) => (
    <AdminsPage swal={swal}/>
))