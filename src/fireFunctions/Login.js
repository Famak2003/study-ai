import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export default Login
