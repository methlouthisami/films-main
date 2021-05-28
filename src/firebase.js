import 'firebase/firestore'
import axios from "axios"
export default axios.create({
baseURL:"https://aflem-6e85d-default-rtdb.firebaseio.com/post.json"
})
