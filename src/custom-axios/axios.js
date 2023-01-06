import axios from "axios";

const instance =axios.create({
    baseURL: "http://localhost:9090/api", //урл врз кое ќе правам повици.
    headers: {   //хедери кои ќе ни бидат потребни
       'Access-Control-Allow-Origin' : '*' //da gi dozvoluva site
    }
})

//ako sakame da ja pristpauvame instancata od nadvor treba da ja exportirame
//i vaka ke moze da ja pristapuvame so ostanatite delovi na nasata react appliakcija
export default instance;
