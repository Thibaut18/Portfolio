import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import GlobalLayout from "../layout/GlobalLayout";
import Homepage from "../pages/Homepage";
import ErrorPage from "../pages/ErrorPage";

function Routes() {
	const routes = [
		{
			path: "/",
			element: <Navigate to="/homepage" replace />,
		},
		{
			path: "/",
			element: <GlobalLayout />,
			children: [
				{
					path: "homepage",
					element: <Homepage />,
				},
				{
					path: "*",
					element: <ErrorPage />,
				},
			],
		},
	];
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
}

export default Routes;
