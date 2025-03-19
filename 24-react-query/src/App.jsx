import router from "./router/index.jsx";
import {RouterProvider} from "react-router";
import {QueryClientProvider,QueryClient} from "@tanstack/react-query";

function App() {
  return (
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
)
}

export default App;
