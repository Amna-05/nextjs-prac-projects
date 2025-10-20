import Login from "@/components/Login";
import Profile from '@/components/Profile'
import ContextProvider from '../components/Contextapi/ContextProvider'
import Providers from "@/components/Contextapi/Provider";


export default function Home() {
  return (
   <>
    <Providers>
      <h1>hello world with nextjs</h1>
    <Login/>
    <Profile/>
    </Providers>
</>
  );
}
