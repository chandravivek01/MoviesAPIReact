import axios from "axios";

export default axios.create({
    // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    // headers: {"ngrok-skip-browser-warning": "true"}
    
    
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    
    headers: { 
        "ngrok-skip-browser-warning": "true",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

});