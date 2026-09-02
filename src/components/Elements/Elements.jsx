import styles from "./Elements.module.css";
import leftAlignedImage from "../../assets/elements/a2.jpg";
import rightAlignedImage from "../../assets/elements/d.jpg";

const Elements = () => {
    return (
        <main className={styles.elementsPage}>

            {/* TEXT SAMPLE */}
            <section className={styles.section}>
                <h2>Text Sample</h2>

                <p>
                    Every avid independent filmmaker has{" "}
                    <strong>Bold</strong> about making that{" "}
                    <em>Italic</em> interest documentary, or short film
                    to show off their creative prowess.
                </p>

                <p>
                    Many have great ideas and want to{" "}
                    <sup>“wow”</sup> the scene, or video renters with
                    their big project.
                </p>
            </section>


            {/* BUTTONS */}
            <section className={styles.section}>
                <h2>Sample Buttons</h2>

                <div className={styles.buttonRow}>
                    <button className={styles.default}>Default</button>
                    <button className={styles.primary}>Primary</button>
                    <button className={styles.success}>Success</button>
                    <button className={styles.info}>Info</button>
                    <button className={styles.warning}>Warning</button>
                    <button className={styles.danger}>Danger</button>
                    <button className={styles.link}>Link</button>
                    <button className={styles.disabled}>Disable</button>
                </div>
            </section>


            {/* IMAGE + TEXT */}
            <section className={styles.section}>
                <h2>Left Aligned</h2>

                <div className={styles.imageText}>
                    <img
                        src={leftAlignedImage}
                        alt="Travel"
                    />

                    <p>
                        Recently, the US Federal government banned online
                        casinos from operating in America by making it
                        illegal to transfer money to them through any US
                        bank or payment system.
                    </p>
                </div>
            </section>


            {/* RIGHT ALIGNED */}
            <section className={styles.section}>
                <h2>Right Aligned</h2>

                <div className={styles.imageTextRight}>
                    <img
                        src={rightAlignedImage}
                        alt="Travel"
                    />

                    <p>
                        Over time, even the most sophisticated,
                        memory-packed computer can begin to run slow.
                    </p>
                </div>
            </section>


            {/* DEFINITIONS */}
            <section className={styles.section}>
                <h2>Definition</h2>

                <div className={styles.definitionGrid}>
                    <div>
                        <h4>Definition 01</h4>
                        <p>
                            Recently, the US Federal government banned
                            online casinos from operating in America.
                        </p>
                    </div>

                    <div>
                        <h4>Definition 02</h4>
                        <p>
                            Recently, the US Federal government banned
                            online casinos from operating in America.
                        </p>
                    </div>

                    <div>
                        <h4>Definition 03</h4>
                        <p>
                            Recently, the US Federal government banned
                            online casinos from operating in America.
                        </p>
                    </div>
                </div>
            </section>


            {/* BLOCKQUOTE */}
            <section className={styles.section}>
                <h2>Block Quotes</h2>

                <blockquote>
                    Recently, the US Federal government banned online
                    casinos from operating in America by making it illegal
                    to transfer money to them through any US bank or
                    payment system.
                </blockquote>
            </section>


            {/* TABLE */}
            <section className={styles.section}>
                <h2>Table</h2>

                <div className={styles.tableWrapper}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Countries</th>
                                <th>Visits</th>
                                <th>Percentages</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                <tr key={item}>
                                    <td>0{item}</td>
                                    <td>Canada</td>
                                    <td>645032</td>
                                    <td>58.2%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>


            {/* TYPOGRAPHY */}
            <section className={styles.section}>
                <h2>Typography</h2>

                <h1>This is header 01</h1>
                <h2>This is header 02</h2>
                <h3>This is header 03</h3>
                <h4>This is header 04</h4>
                <h5>This is header 05</h5>
                <h6>This is header 06</h6>
            </section>


            {/* LISTS */}
            <section className={styles.section}>
                <div className={styles.listGrid}>

                    <div>
                        <h2>Unordered List</h2>

                        <ul>
                            <li>Fta Keys</li>
                            <li>For Women Only Your Computer Usage</li>
                            <li>Facts Why Inkjet Printing Is Very Appealing</li>
                            <li>
                                Addiction When Gambling Becomes
                                <ul>
                                    <li>Protective Preventative Maintenance</li>
                                </ul>
                            </li>
                            <li>Dealing With Technical Support</li>
                            <li>Cleaning And Organizing Your Computer</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Ordered List</h2>

                        <ol>
                            <li>Fta Keys</li>
                            <li>For Women Only Your Computer Usage</li>
                            <li>Facts Why Inkjet Printing Is Very Appealing</li>
                            <li>Dealing With Technical Support</li>
                            <li>Make Myspace Your Best Designed Space</li>
                            <li>Cleaning And Organizing Your Computer</li>
                        </ol>
                    </div>

                </div>
            </section>


            {/* FORM */}
            <section className={styles.section}>
                <h2>Form Element</h2>

                <form className={styles.form}>

                    <input
                        type="text"
                        placeholder="First Name"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                    />

                    <input
                        type="text"
                        placeholder="Address"
                    />

                    <select>
                        <option>Select</option>
                        <option>India</option>
                        <option>Canada</option>
                        <option>USA</option>
                    </select>

                    <input
                        type="color"
                        defaultValue="#ff0000"
                    />

                </form>
            </section>


            {/* SWITCHES */}
            <section className={styles.section}>
                <h2>Switches</h2>

                <label className={styles.switchRow}>
                    <span>01. Sample Switch</span>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                </label>

                <label className={styles.switchRow}>
                    <span>02. Primary Color Switch</span>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                </label>

                <label className={styles.switchRow}>
                    <span>03. Confirm Color Switch</span>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                </label>
            </section>


            {/* CHECKBOXES */}
            <section className={styles.section}>
                <h2>Checkboxes</h2>

                <label>
                    <input type="checkbox" />
                    01. Sample Checkbox
                </label>

                <label>
                    <input type="checkbox" />
                    02. Primary Color Checkbox
                </label>

                <label>
                    <input type="checkbox" />
                    03. Confirm Color Checkbox
                </label>

                <label>
                    <input type="checkbox" disabled />
                    04. Disabled Checkbox
                </label>
            </section>


            {/* RADIOS */}
            <section className={styles.section}>
                <h2>Radios</h2>

                <label>
                    <input type="radio" name="radio" />
                    01. Sample radio
                </label>

                <label>
                    <input type="radio" name="radio" />
                    02. Primary Color radio
                </label>

                <label>
                    <input type="radio" name="radio" />
                    03. Confirm Color radio
                </label>

                <label>
                    <input type="radio" disabled />
                    04. Disabled radio
                </label>
            </section>

        </main>
    );
};

export default Elements;