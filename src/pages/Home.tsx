import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
interface userInfo {
    username: string;
    email: string;
}
interface UserData {
    message: string
    data: userInfo
}

export default function Home() {
    const [data, setData] = useState<UserData | undefined>()
    console.log("data profile", data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = Cookies.get("tokenFood_v2");
                if (!token) {
                    throw new Error("Token not found");
                }
                const res = await axios.get("https://ha-food-api.zenslab.com/api/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

    const handleLogout = () => {
        try {
            const token = Cookies.get("tokenFood_v2");
            if (!token) {
                throw new Error("Token not found");
            }
            axios.get("https://ha-food-api.zenslab.com/api/logout", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    return <div className="flex justify-between">

        {data ? <div>
            <div>{data.message}</div>
            <div>Email: {data.data.email}</div>
            <div>Username: {data.data.username}</div>
            <div></div></div> : <div>Home</div>}
        <div onClick={() => handleLogout()} className=" bg-third  h-fit m-5 p-4 rounded-xl text-white font-bold">Log Out</div>

    </div>;
}
