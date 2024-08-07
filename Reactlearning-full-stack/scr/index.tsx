import { createRoot } from "react-dom/client";
import axios from "axios";

import { API_SERVER_URL } from "./public-config";
import App from "./components/app";

const container = document.getElementById("app");
const root = createRoot(container);

// fetch or axios
axios.get(API_SERVER_URL + "/contests")
    .then((resp) => {
        console.log(resp.data);
    })

root.render(<App />)