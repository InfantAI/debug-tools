import { post } from "../utils/request"
export const sendData = async (data: any) => {
    await post('/training-plan/devicedollmsg', data)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('Error during POST request:', error);
        });
};
