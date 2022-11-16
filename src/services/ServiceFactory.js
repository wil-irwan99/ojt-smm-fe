import { getDataService } from "./GetDataService"

export const serviceFactory = (apiClient) => {
    return {
        getDataService: getDataService(apiClient)
    }
}