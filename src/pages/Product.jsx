import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Welcome to our website, the ultimate destination for travelers and
            explorers alike! We are passionate about providing a platform where
            you can record and cherish the places you have visited. Our website
            offers a seamless and intuitive experience, allowing you to
            effortlessly document your adventures, create personalized travel
            logs, and share your experiences with friends and fellow wanderers.
          </p>
          <p>
            Whether you're a globetrotter, weekend adventurer, or simply someone
            who loves to explore their local surroundings, our website is here
            to help you capture and relive your most cherished memories. Join
            our vibrant community of travelers and embark on a journey of
            discovery today!
          </p>
        </div>
      </section>
    </main>
  );
}
