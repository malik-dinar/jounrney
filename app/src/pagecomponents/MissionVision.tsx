import Image from "next/image";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import beImage from "../assets/visionMission.png"; // your backend image

import "../styles/visionMission.css";

export const VisionMissions = () => {
    const data = [
        {
            img: mission,
            title: "Mission",
            text: "To enhance and support individuals' opportunities for choice, inclusion and independent living."
        },
        {
            img: vision,
            title: "Vision",
            text: "An inclusive society where all individuals enjoy human rights and fulfill aspirations."
        }
    ];

    return (
        <div className="vision-wrapper">
            <div className="vision-container">
                {/* LEFT SIDE */}
                <div className="vision-left">
                    {data.map((item, index) => (
                        <div key={index} className="vision-card">
                            <Image src={item.img} alt={item.title} width={80} height={80} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>


                <div className="vision-right">


                    <div className="image-wrapper">
                        <Image
                            src={beImage}
                            alt="Backend Illustration"
                            className="be-image"
                        />
                    </div>

                </div>


            </div>
        </div>
    );
};
