import Goals from "@/components/Goals";
import EventViewer from "@/components/EventViewer";
import Video from "@/components/Video";
import styles from "@/components/HomeContentWrapper/styles.module.css";
import Catering from "@/components/Catering";

// Used to wrap home page content under the same background image
export default function HomeContentWrapper() {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-brown-dark to-transparent pointer-events-none z-10"></div>
            <div className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative">
                <Goals/>
                <EventViewer/>
                <Catering/>
            </div>
        </div>
    );
}

