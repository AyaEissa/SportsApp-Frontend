import BackendAxios from '../services/backendAxios'
export const toggleLikeState = async (id, currentStatus) => {
    return await BackendAxios.put(`/class/like/${id}`, { 'status': !currentStatus }).then(
        (res) => {
            return true;
        }

    )
        .catch(
            err => {
                return false;
            }
        )
}

export const cancelClassReservation = async (id, feedback) => {
    return await BackendAxios.post('Class/CancelClassReservation', { id })
        .then(
            (res) => {
                return true;
            }
        )
        .catch(
            (err) => {
                return false;
            }
        )
}

export const rateClass = async (id, feedback, rate) => {
    return await BackendAxios.post('/Class/RateClass', { id, feedback, rate: Number(rate) })
        .then(
            (res) => {
                return true;
            }
        )
        .catch(
            (err) => {
                return false;
            }
        )
}

export const getAllClasses = async () => {
    return await BackendAxios.get('/class/allclasses')
        .then(
            res => res.data.payload
        )

}