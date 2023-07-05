import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        "Content-Type": "application/json"
    }
    
    
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    
    // headers: { 
    //     "ngrok-skip-browser-warning": "true",
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // }

});