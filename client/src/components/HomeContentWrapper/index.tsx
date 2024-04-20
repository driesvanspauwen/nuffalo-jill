import Goals from "@/components/Goals";
import EventViewer from "@/components/EventViewer";
import Video from "@/components/Video";
import styles from "@/components/HomeContentWrapper/styles.module.css";
import Catering from "@/components/Catering";
import {getTranslations} from 'next-intl/server';

// Used to wrap home page content under the same background image
export default async function HomeContentWrapper() {

    const goals = await getTranslations('Goals');
    const kiesweek = await getTranslations('EventViewer');

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-brown-dark to-transparent pointer-events-none z-10"></div>
            <div className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative">
                <Goals
                    title = {goals('title')}
                />
                <EventViewer
                    title = {kiesweek('title')}
                    dag1 = {kiesweek('dag1')}
                    dag2 = {kiesweek('dag2')}
                    dag3 = {kiesweek('dag3')}
                />
                <Catering/>
            </div>
        </div>
    );
}

