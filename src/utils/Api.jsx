import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const Api_key = "3b5d36b5bamsh83b2ffbce803633p17c2a9jsn286187139b87";

const options = {
    params: {
        hl: "en",
        gl: "US",
    },
    headers: {
        "X-RapidAPI-Key": Api_key,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

const fetchdatafromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

export default fetchdatafromApi;
