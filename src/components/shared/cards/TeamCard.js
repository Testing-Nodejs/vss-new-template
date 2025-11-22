import Link from "next/link";
import styles from "./TeamCard.module.css";

const TeamCard = ({ teamMember }) => {
  const {
    id,
    name,
    desig,
    img = "/images/team/team-1.webp",
    link,
  } = teamMember || {};
  return (
    <div className={styles["team-card"]}>
      <div className={styles["team-img-wrapper"]}>
        <img src={img} alt={name} className={styles["team-photo"]} />

        <div className={styles["team-social"]}>
          <Link href={link} target="_blank">
            <i className="fa fa-globe"></i>
          </Link>
        </div>
      </div>

      <div className={styles["team-info"]}>
        <h4 className={styles["team-name"]}>
          <Link href={link} target="_blank">{name}</Link>
        </h4>
        <span className={styles["team-role"]}>{desig}</span>
      </div>
    </div>
  );
};

export default TeamCard;
