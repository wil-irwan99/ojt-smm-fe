const ApiClientFactory = (client) => {
    const doPost = async ({url = '', data = null}) => {
        try {
            const response = await client.post(url, data)
            return response.data;
        } catch (e) {
            throw e
        }
    }

    const doGet = async ({url = '', data = null}) => {
        try {
            const response = await client.get(url, data)
            return response.data;
        } catch (e) {
            throw e
        }
    }

    return{doGet, doPost}

}

export default ApiClientFactory;