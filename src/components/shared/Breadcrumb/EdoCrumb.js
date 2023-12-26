import { useSelector } from "react-redux";

const EdoCrumb = () => {

    const edoData = useSelector(state => state.admin.edoData);

    
    return(
        <span>{edoData?.disease.name}</span>
    )
}

export default EdoCrumb;