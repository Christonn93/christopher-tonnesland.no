import { Outlet } from "@remix-run/react";
import { Layout } from "./components";

export default function App() {
 return (
  <Layout>
   <Outlet />
  </Layout>
 );
}
