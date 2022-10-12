import { CartDiv, CartTitle, CartP, ImgDiv } from "../styles/Styles"
import divider from "../images/pattern-divider-desktop.svg"
import icon from "../images/icon-dice.svg"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';


const Cart = () => {

    const [data, setData] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://api.adviceslip.com/advice")
            const res = await data.json()
            setData(res)
        }
        fetchData()
    }, [])

    const refresh = () => window.location.reload()

    console.log(data.slip)

    return <CartDiv>

        {data ? <>
            <CartTitle>ADVICE {data?.slip?.id}</CartTitle>
            <CartP>
                {data?.slip?.advice}
            </CartP>
        </> : <Spinner animation="border" variant="primary" />}
        <img src={divider} alt="" />

        <ImgDiv>
            <img src={icon} alt="" onClick={refresh} />
        </ImgDiv>
    </CartDiv>
}

export default Cart