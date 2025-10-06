import Head from "next/head";
import Dashboard from "./dashboard";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Login from "./login";
import { useSession } from "next-auth/react";
import scss from "../Home.module.scss";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const Home:React.FC = ()=> {
  const {data:session }= useSession();
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div
      >
        
        <main className={scss.main}>
          <Header />
        {session &&
        <>
        <SideMenu />
        <Dashboard />
        </>        
        }
        <Login />
        </main>
       
      </div>
    </>
  );
}
export default Home;