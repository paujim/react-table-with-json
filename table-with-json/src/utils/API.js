
const titles = [
    "Dessert (100g serving)",
    "Calories",
    "Fat (g)",
    "Carbs (g)",
    "Protein (g)",
]

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const emptyDs = {
    headers: [],
    data: []
}

const fetchDataSet = async (evt) => {
    try {
        if (evt === "" || evt === undefined) {
            return emptyDs
        }
        const ds = {
            headers: titles,
            data: [
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                createData('Eclair', 262, 16.0, 24, 6.0),
                createData('Cupcake', 305, 3.7, 67, 4.3),
                createData('Gingerbread', 356, 16.0, 49, 3.9),
            ]
        }

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
        const details = {
            headers: titles,
            data: [
                createData('Frozen', 159, 6.0, 24, 4.0),
                createData('Ice cream', 237, 9.0, 37, 4.3),
            ]
        }
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
        const rawJson = {
            "name": "John Doe",
            "age": 32,
            "email": "johndoe@example.com"
        };
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