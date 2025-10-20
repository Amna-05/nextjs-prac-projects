
import Providers from '../Components/Providers'
import Card from '../Components/Card'
import ThemeBtn from "@/Components/ThemeBtn";

export default function Home() {

  return (
    <Providers >
   
   <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </Providers>
  );
}
