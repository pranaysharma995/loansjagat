import axios from 'axios'
const instance = axios.create({
   baseURL: 'http://13.233.34.170/backend/api-laravel/public/api/', //Live Server,
  //baseURL: 'http://localhost/api-laravel/public/api/', //My Local server,
  headers: {
    'Content-Type': 'application/json'
  }
})
export default instance
