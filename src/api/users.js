import client from "./clientAuth"


export const getUsers = async (payload) => {
    return await client.get(`admin/outbreak/`).then((response) => {
        return response.data;
    });
};
