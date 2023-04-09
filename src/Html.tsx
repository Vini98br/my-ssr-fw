import * as React from "react";
import { Suspense } from "react";

export default ({
  children,
  description,
  comments,
}: {
  children: React.ReactElement;
  comments?: string[];
  description?: string;
}) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/index.css" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__data = ${JSON.stringify({
            description,
            comments,
          })};`,
        }}
      ></script>
      <script src="/main.js"></script>
      {/* <Suspense fallback={<script></script>}>
        <CommentsScript comments={comments} />
      </Suspense> */}
    </html>
  );
};
