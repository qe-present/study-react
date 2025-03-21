import router from "./router/index.jsx";
import {RouterProvider} from "react-router";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./util/http.jsx";

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
)
}

export default App;
