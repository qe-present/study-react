import Card from "../ui/Card";
import classes from "./MeetupDetail.module.css";

export default function MeetupDetail({image, title, address, description}) {
    return (
        <Card>
            <section className={classes.detail}>
                <div className={classes.imageContainer}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.content}>
                    <h1>{title}</h1>
                    <address>{address}</address>
                    <div className={classes.descriptionContainer}>
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        </Card>
    );
}