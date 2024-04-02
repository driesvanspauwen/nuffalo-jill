// use client
import { useEffect, useState } from 'react';
import Image from "next/image"; // Ensure Image is used if imported
import SectionTitle from "../Common/SectionTitle";
import styles from "./compass.module.css";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// Assuming calcDegreeToPoint function is defined elsewhere

const AboutSectionOne = () => {
  // const [pointDegree, setPointDegree] = useState(undefined);

  // useEffect(() => {
  //   const isIOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
  //   const startBtn = document.querySelector(".start-btn");

  //   const handler = (e) => {
  //     const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  //     const compassCircle = document.querySelector(".compass-circle") as HTMLElement;
  //     if (compassCircle) {
  //       compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;
  //     }
  //   };

  //   const startCompass = () => {
  //     if (typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
  //       (DeviceOrientationEvent as any).requestPermission().then((response: any) => {
  //         if (response === 'granted') {
  //           window.addEventListener('deviceorientation', handler);
  //         } else {
  //           alert("Permission has to be allowed!");
  //         }
  //       }).catch(() => alert("Device Orientation not supported or permission not granted"));
  //     } else {
  //       window.addEventListener("deviceorientationabsolute", handler, true);
  //     }
  //   };

  //   startBtn?.addEventListener("click", startCompass);

  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;
  //     const degree = calcDegreeToPoint(latitude, longitude);
  //     setPointDegree(degree >= 0 ? degree : degree + 360);
  //   }, console.error);

  //   return () => {
  //     window.removeEventListener('deviceorientation', handler);
  //     window.removeEventListener('deviceorientationabsolute', handler);
  //     startBtn?.removeEventListener("click", startCompass);
  //   };
  // }, []);

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <SectionTitle title="About Us" />
        <div className={styles.compassContainer}>
          <div className="compass">
            <div className="arrow"></div>
            <div className="compass-circle"></div>
            <div className="my-point"></div>
          </div>
          <button className="start-btn">Start Compass</button>
        </div>
      </div>
    </section>
  );
};
function calcDegreeToPoint(latitude, longitude) {
  // Qibla geolocation
  const point = {
    lat: 21.422487,
    lng: 39.826206
  };
  const phiK = (point.lat * Math.PI) / 180.0;
      const lambdaK = (point.lng * Math.PI) / 180.0;
      const phi = (latitude * Math.PI) / 180.0;
      const lambda = (longitude * Math.PI) / 180.0;
      const psi =
        (180.0 / Math.PI) *
        Math.atan2(
          Math.sin(lambdaK - lambda),
          Math.cos(phi) * Math.tan(phiK) -
            Math.sin(phi) * Math.cos(lambdaK - lambda)
        );
      return Math.round(psi);
}

export default AboutSectionOne;
