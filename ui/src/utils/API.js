const apiPort = "5000"
const apiUrl = "http://localhost:"+apiPort+"/api"

const emptyDs = {
    headers: [],
    data: []
}

const fetchDataSet = async (evt) => {
    try {
        if (evt === "" || evt === undefined) {
            return emptyDs
        }

        const ds = await fetch(apiUrl+"/ds")
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
            return data
        })

        return ds
    } catch (error) {
        console.log(error);
        return emptyDs;
    }
}

const fetchDetails = async (evt) => {
    try {
        if (evt === "" || evt === undefined) {
            return emptyDs
        }
        
        const details = await fetch(apiUrl+"/details")
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
            return data
        })

        return details
    } catch (error) {
        console.log(error);
        return emptyDs;
    }
}

const fetchJson = async (evt) => {
    try {
        if (evt === "" || evt === undefined) {
            return {}
        }

        const rawJson = await fetch(apiUrl+"/json")
            .then( (response) => {
                return response.json()
            })
            .then( (data) => {
                return data
            })
        return rawJson
    } catch (error) {
        console.log(error);
        return {};
    }
}

const API = {
    fetchDataSet: fetchDataSet,
    fetchDetails: fetchDetails,
    fetchJson: fetchJson,
    emptyDs: emptyDs
}

export default API;