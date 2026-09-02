import { useState } from "react";
import style from "./FlightSearch.module.css";

const FlightSearch = () => {
    const [activeTab, setActiveTab] = useState("flights");

    return (
        <div className={style.searchBox}>

            {/* Tabs */}
            <div className={style.tabs}>

                <button
                    className={activeTab === "flights" ? style.active : ""}
                    onClick={() => setActiveTab("flights")}
                >
                    FLIGHTS
                </button>

                <button
                    className={activeTab === "hotels" ? style.active : ""}
                    onClick={() => setActiveTab("hotels")}
                >
                    HOTELS
                </button>

                <button
                    className={activeTab === "holidays" ? style.active : ""}
                    onClick={() => setActiveTab("holidays")}
                >
                    HOLIDAYS
                </button>

            </div>


            {/* Form */}
            {activeTab === "flights" && (
                <form className={style.form}>

                    <input
                        type="text"
                        placeholder="From"
                    />

                    <input
                        type="text"
                        placeholder="To"
                    />

                    <input
                        type="date"
                        placeholder="Start"
                    />

                    <input
                        type="date"
                        placeholder="Return"
                    />

                    <input
                        type="number"
                        placeholder="Adults"
                        min="1"
                    />

                    <input
                        type="number"
                        placeholder="Child"
                        min="0"
                    />

                    <button type="submit">
                        SEARCH FLIGHTS
                    </button>

                </form>
            )}

            {activeTab === "hotels" && (
                <form className={style.form}>

                    <input
                        type="text"
                        placeholder="From"
                    />

                    <input
                        type="text"
                        placeholder="To"
                    />

                    <input
                        type="date"
                        placeholder="Start"
                    />

                    <input
                        type="date"
                        placeholder="Return"
                    />

                    <input
                        type="number"
                        placeholder="Adults"
                        min="1"
                    />

                    <input
                        type="number"
                        placeholder="Child"
                        min="0"
                    />

                    <button type="submit">
                        SEARCH FLIGHTS
                    </button>

                </form>
            )}

            {activeTab === "holidays" && (
                <form className={style.form}>

                    <input
                        type="text"
                        placeholder="From"
                    />

                    <input
                        type="text"
                        placeholder="To"
                    />

                    <input
                        type="date"
                        placeholder="Start"
                    />

                    <input
                        type="date"
                        placeholder="Return"
                    />

                    <input
                        type="number"
                        placeholder="Adults"
                        min="1"
                    />

                    <input
                        type="number"
                        placeholder="Child"
                        min="0"
                    />

                    <button type="submit">
                        SEARCH FLIGHTS
                    </button>

                </form>
            )}

        </div>
    );
};

export default FlightSearch;