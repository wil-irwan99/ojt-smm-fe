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
            return await doGet({url: `/get-data?site=${data.site}&sdate=${data.sdate}&edate=${data.edate}&stime=${data.stime}&etime=${data.etime}`})
        } catch (e) {
            throw e
        }
    }


    return {addSensor, getData}
}