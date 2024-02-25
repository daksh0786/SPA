import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as loadedFun } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailsLoader,
  action as deleteEventAction,
} from "./pages/EventsDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPagePage, {
  action as editEventAction,
} from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRootLayout";
import ErrorPage from "./pages/ErrorPage";
import NewsletterPage, {action as newsletterAction} from "./pages/NewsLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            path: "",
            element: <EventsPage />,
            loader: loadedFun,
            // this loader function is executed before we are redirected to
            //  this page or start navigating to this page.
          },
          {
            path: ":someId",
            id: "user-event",
            loader: eventDetailsLoader,
            action: deleteEventAction,
            children: [
              {
                path: "",
                element: <EventDetailPage />,
              },
              {
                path: "edit",
                element: <EditEventPagePage />,
                action: editEventAction,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
        
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
