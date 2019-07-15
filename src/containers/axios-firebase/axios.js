import axios from 'axios'

const instance = axios.create({
    firebaseURL: "https://recipebox-51bdc.firebaseio.com/";
});

export default instance;
