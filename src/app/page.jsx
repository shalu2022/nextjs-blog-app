import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heading}>It Takes What It Takes To End Something</h1>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nesciunt, dolores ut neque temporibus ratione doloribus nemo exercitationem corporis officia rem quas? Esse inventore dolores nisi perferendis vitae porro saepe sit fugiat commodi corrupti reprehenderit, modi recusandae et iste sapiente, explicabo error blanditiis, ea labore quidem. Laudantium facere perferendis laboriosam.</p>
        <button className={styles.button}>Read More</button>
      </div>
      <div className={styles.text}>
        <Image priority={true} alt="home-page image" src="/home.png" className={styles.img} width={500} height={400}/>
      </div>
    </div>
  );
}
