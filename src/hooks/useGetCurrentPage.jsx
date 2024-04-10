import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function useGetCurrentPage() {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState("")
    useEffect(()=>{
        const getPage = ()=>{
            const split = location.pathname.split("/")
            const splitLength = split.length
            setCurrentPage(()=>{
                return(
                    split[splitLength - 1]
                )
            })
        }

        getPage()
    }, [location.pathname])
    return [currentPage]
}

export default useGetCurrentPage
