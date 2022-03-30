import { Navigate, useRoutes } from "react-router-dom";
import DiscoverMusic from "../pages/DiscoverMusic";
import MyFriends from "../pages/MyFriends";
import MyMusic from "../pages/MyMusic";

export default function RouElement () {
    return(
        useRoutes(router)
    )
}

const router = [
    {
        path: "/",
        element: <Navigate to='discover' />
    },
    {
        path: "discover/*",
        element: <DiscoverMusic />,
        children: [
            {
                path: "",
                element : <Navigate to='recommend'/>,
            },
            {
                path: "recommend",
                element : <div>000</div>,
            },
            {
                path: "toplist",
                element : <div>111</div>,
            },
            {
                path: "playlist",
                element: <div>222</div>,
            },
            {
                path: "djradio",
                element: <div>333</div>,
            },
            {
                path: "artist",
                element: <div>444</div>,
            },
            {
                path: "album",
                element: <div>555</div>,
            },
        ]
    },
    {
        path: "my",
        element: <MyMusic />,
    },
    {
        path: "friend",
        element: <MyFriends />,
    },
];
