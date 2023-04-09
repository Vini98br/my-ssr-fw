import { Response } from "express";
import { renderToString } from "react-dom/server";
import HTMLComponent from "./src/Html";
import App from "./src/App";

const fetchDescription = () =>
  new Promise<string>((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 250)
  );

const commentsFetch = () =>
  new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 2000)
  );

const render = async (res: Response) => {
  const description = await fetchDescription();
  const comments = await commentsFetch();
  res.send(
    renderToString(
      <HTMLComponent comments={comments} description={description}>
        <App comments={comments} description={description} />
      </HTMLComponent>
    )
  );
};

export default render;

// {
//   "compilerOptions": {
// "target": "es5",
// "module": "commonjs",
// "lib": ["es6"],
// "allowJs": true,
// "outDir": "build",
// "rootDir": "src",
// "strict": true,
// "noImplicitAny": true,
// "esModuleInterop": true,
// "resolveJsonModule": true,
// "jsx": "react-jsx",
//   }
// }
