import { Navigate, useRoutes } from "react-router-dom";
import DiscoverMusic from "../pages/DiscoverMusic";
import MyFriends from "../pages/MyFriends";
import MyMusic from "../pages/MyMusic";
import Recommend from "../pages/DiscoverMusic/childrenPages/Recommend";
import TopListMain from "../pages/DiscoverMusic/childrenPages/TopList";
import PlayListMain from "../pages/DiscoverMusic/childrenPages/PlayListMain";

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
                element : <Recommend/>,
            },
            {
                path: "toplist",
                element : <TopListMain/>,
            },
            {
                path: "playlist",
                element: <PlayListMain/>,
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
