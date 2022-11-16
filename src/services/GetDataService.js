export const getDataService = ({doGet, doPost}) => {
    const addSensor = async (namaMenu) => {
        try {
            return await doPost({
                url: '/data/add',
                data: {
                    menuName: namaMenu
                }
            })
        } catch (e) {
            throw e
        }
    }

    const getData = async (data) => {
        try {
            return await doPost({url: '/get-data-site-a', data: data})
        } catch (e) {
            throw e
        }
    }


    return {addSensor, getData}
}