import Home from "../HomeScreen";
import Courses from "../CoursesScreen";
import Scripts from "../ScriptScreen";
import Profile from "../ProfileScreen";
import ChatScreen from "../ChatScreen";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/scripts", element: <Scripts /> },
  { path: "/profile", element: <Profile /> },
  { path: "/chat", element: <ChatScreen /> },
];