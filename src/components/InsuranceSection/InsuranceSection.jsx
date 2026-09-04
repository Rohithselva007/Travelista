import { Link } from "react-router-dom";
import style from "./InsuranceSection.module.css";
import icon from '../../assets/insurence/bullet.png'
import insurance1 from "../../assets/insurence/i1.jpg";
import insurance2 from "../../assets/insurence/i2.jpg";
import { insuranceSections } from "../../data/insuranceData";

const InsuranceSection = () => {
    const sections = insuranceSections;
    
    return (
        <section className={style.insurance}>
            <div className={style.container}>
                {sections.map((section, index) => (
                    <div className={`${style.row} ${index === 1 ? style.reverse : ''}`} key={index}>

                        <div className={style.imageBox}>
                            <img
                                src={index === 0 ? insurance1 : insurance2}
                                alt={section.title}
                            />
                        </div>

                        <div className={style.content}>
                            <h2>{section.title}</h2>

                            <p>{section.description1}</p>

                            <p>{section.description2}</p>

                            <ul className={style.featureList}>
                                {section.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>
                                        <img src={icon} alt="" />
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className={style.button}>
                                {section.buttonText}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InsuranceSection;