import styles from "./page.module.css";
import LandingPage from "./ui/home/landing-page.js"
import NavBar from "./ui/home/navbar.js"

export default function Index() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <LandingPage />
    </>
  );
}
