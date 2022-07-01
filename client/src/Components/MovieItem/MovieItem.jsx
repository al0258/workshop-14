import styles from "./MovieItem.module.css";

export default function MovieItem({ id, title, synopsis, year, img, rating }) {
  const empty_star = require("../../assets/empty_star.png");
  const rated_star = require("../../assets/rated_star.png");
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(rating, 10)) {
      stars.push(
        <img src={rated_star} alt="rated_star" className={styles.star} />
      );
    } else {
      stars.push(
        <img src={empty_star} alt="empty_star" className={styles.star} />
      );
    }
  }

  return (
    <section className={styles.wrapper}>
      <div>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.p}>{synopsis}</p>
        <p>{stars}</p>
        <p>{rating}</p>
      </div>
      <div>
        <img src={img} alt={title} />
      </div>
    </section>
  );
}
