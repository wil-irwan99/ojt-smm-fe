export const getDataService = ({doGet, doPost}) => {

    const addSensor = async (data) => {
        try {
            return await doPost({
                url: '/sensor/add',
                data: data
            })
        } catch (e) {
            throw e
        }
    }

    const getSensorList = async (page) => {
        try {
            return await doGet({url: `/sensor/get-sensors?page=${page}`})
        } catch (e) {
            throw e
        }
    }

    const getData = async (data) => {
        try {
            return await doGet({url: `/get-data?site=${data.site}&sdate=${data.sdate}&edate=${data.edate}&stime=${data.stime}&etime=${data.etime}`})
        } catch (e) {
            throw e
        }
    }


    return {addSensor, getData, getSensorList}
}