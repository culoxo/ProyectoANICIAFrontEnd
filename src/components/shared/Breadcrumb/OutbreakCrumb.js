import { useSelector } from "react-redux";

const OutbreakCrumb = () => {

    const selectedOutbreak = useSelector(state => state.admin.selectedOutbreak);

    
    return(
        <span>{selectedOutbreak ? selectedOutbreak.name : ""}</span>
    )
}

export default OutbreakCrumb;