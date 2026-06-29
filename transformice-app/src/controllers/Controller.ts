import { AxiosResponse } from "axios";

export async function Controller<T>(
    exec: Promise<AxiosResponse<T>>,
    successMessage?: string | ((res: T) => string)
) {
    return exec
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}