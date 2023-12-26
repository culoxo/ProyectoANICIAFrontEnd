import { useSelector } from "react-redux";

const CitizenCrumb = () => {

    const citizen = useSelector(state => state.poblational.citizen);

    
    return(
        citizen ?
        <span>{citizen.id} - {citizen?.nomusu} {citizen.apelusu1} {citizen.apelusu2}</span>
        :""
    )
}

export default CitizenCrumb;