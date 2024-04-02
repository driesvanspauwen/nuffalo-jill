import Link from "next/link";
import styles from './styles.module.css';

const Hero = ({title, subtitle }) => {
  return (
    <>
      <section
          id="home"
          className={`relative z-10 overflow-hidden bg-[url("/images/hero/homepage-background.jpg")] bg-cover bg-center h-screen flex items-center justify-center`}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="text-center space-y-8">
                <h1 className={`${styles.buffaloFont} text-brown-light -mt-32 leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}>
                  {title}
                </h1>
                <div className="flex flex-col items-center justify-center">
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fadeBottom}></div>
      </section>
    </>
  );
};

export default Hero;
