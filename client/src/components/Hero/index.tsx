import Link from "next/link";
import styles from './styles.module.css';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-custom-background bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/hero/homepage-background.jpg")' }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="text-center">
              <h1 className={`${styles.buffaloFont} -mt-32 text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight`}>
                  Nuffalo Jill
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  Something here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
