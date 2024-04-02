import Goals from "@/components/Goals";
import EventViewer from "@/components/EventViewer";
import Video from "@/components/Video";
import styles from "@/components/HomeContentWrapper/styles.module.css";

// Used to wrap home page content under the same background image
export default function HomeContentWrapper() {
    return (
        <>
            <div
                className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative"
            >
                <Video/>
                <Goals/>
                <EventViewer/>
                <div className={styles.fadeTop}></div>
            </div>
        </>
    );
}
