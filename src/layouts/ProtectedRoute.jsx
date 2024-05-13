import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function ProtectedRoute() {
    const nav = useNavigate()
    const userState = useSelector((state) => state.auth.userLogin )
    return userState ? nav('/home/chat-history') : nav('/auth/login')
}

export default ProtectedRoute
