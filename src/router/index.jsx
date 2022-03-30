import DiscoverMusic from "../pages/DiscoverMusic";
import MyFriends from "../pages/MyFriends";
import MyMusic from "../pages/MyMusic";

export const router = [
    {
        path: "/",
        element: <></>
    },
    {
        path: "discover",
        element: <DiscoverMusic />,
        children: [
            {
                path: "toplist",
                element : <div />,
            },
            {
                path: "playlist",
                element: <div />,
            },
            {
                path: "djradio",
                element: <div />,
            },
            {
                path: "artist",
                element: <div />,
            },
            {
                path: "album",
                element: <div />,
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
