import FindMusic from "../pages/FindMusic";
import MyFriends from "../pages/MyFriends";
import MyMusic from "../pages/MyMusic";
export const router = [
    {
        path: "/",
        element: <></>
    },
    {
        path: "discover",
        element: <FindMusic />,
    },
    {
        path: "mine",
        element: <MyMusic />,
    },
    {
        path: "friends",
        element: <MyFriends />,
    },
];
