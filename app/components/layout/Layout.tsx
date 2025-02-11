import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { Header } from "./Header";
import { Suspense } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta />
    <Links />
   </head>
   <body>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    <ScrollRestoration />
    <Scripts />
   </body>
  </html>
 );
}
