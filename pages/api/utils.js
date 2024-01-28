export async function handleApiError(swal, error) {

    if (error.response) {
        const { status } = error.response;
        if (status === 401) {
            await swal.fire({
                title: 'Unauthorized',
                text: 'You are not authorized to perform this action',
                icon: 'error',
            });
        } else if (status === 403) {
            await swal.fire({
                title: 'Forbidden',
                text: 'You do not have permission to access this resource',
                icon: 'error',
            });
        } else {
            await swal.fire({
                title: 'Error',
                text: 'An error occurred while processing your request',
                icon: 'error',
            });
        }
    } else {
        await swal.fire({
            title: 'Error',
            text: 'An unexpected error occurred',
            icon: 'error',
        });
    }
}