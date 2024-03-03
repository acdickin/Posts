import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Posts, { loader as postLoader } from "./routes/Posts";
import RootLayout from "./routes/RootLayout";
import NewPost, {action as newPostAction} from "./routes/NewPost";
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'
// import {action as postDetailsAction} from './routes/PostDetails'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action:newPostAction
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader:postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
