import { useSelector } from "react-redux";


export const UserCrumb = () => {
    const selectedUser = useSelector(state => state.user.user);

    return (
        <span>
            {selectedUser ?
                `${selectedUser.name} ${selectedUser.surname1} ${selectedUser.surname2 ? selectedUser.surname2 : ""} 
            ${selectedUser.nif ? '(' + selectedUser.nif + ')' : ""}`
                : ""}
        </span>
    )
}