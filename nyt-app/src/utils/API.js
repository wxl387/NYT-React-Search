import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
    search: function(query, start_year, end_year) {
        return axios.get(BASEURL + APIKEY + "&q" + query + "&begin_data=" + start_year + "0101" + "&end_date=" + end_year + "0101");
    }
};