import Header from "./components/header";
import SwipeableComponent from "./components/swipeableComponents";
import Top from "./components/top";
import { NotificationProvider } from "./contexts/notificationContext";

export default function Home() {
  return (
    <NotificationProvider>
      <div className="px-4 md:px-10 lg:px-[45px]">
        <Header />
        <Top />
        <div className="h-auto px-5 flex flex-col justify-center items-center gap-5 md:gap-10 pt-16 md:pt-36">
          <div className="text-center text-[#090040] text-3xl sm:text-4xl md:text-5xl font-semibold ">
            Get things in order
          </div>
          <div className="text-center text-[#605e87] text-base sm:text-lg md:text-xl font-medium ">
            Obține claritatea de care ai nevoie. Observi în timp real ce poate fi ajustat și intervii exact când este necesar
          </div>
        </div>
      </div>
      <SwipeableComponent />
    </NotificationProvider>
  );
}
