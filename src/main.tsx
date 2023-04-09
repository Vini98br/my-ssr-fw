import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <App
    comments={(window as unknown as any).__data.comments}
    description={(window as unknown as any).__data.description}
  />
);
