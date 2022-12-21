export const loginUser = async(url: string, data: any) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export const logoutUser = async(url: string) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const result = await response.json();
    return result;
}


export const getUserInfo = async(url: string, method: string) => {
    const response = await fetch(url, {
        method: method,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    return data;
    // return {
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     email: data.email,
    //     avatar: data.avatar,
    //     phone: data.phone,
    //     role: data.role,
    //     about: data.about
    // }
}