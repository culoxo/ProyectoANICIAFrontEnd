import { useSelector } from "react-redux";

const CensusFileCrumb = () => {

    const selectedCensus = useSelector(state => state.poblational.selectedCensus);

    
    return(
        selectedCensus ?
        <span>{selectedCensus.id}</span>
        :""
    )
}

export default CensusFileCrumb;