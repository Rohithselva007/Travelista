import { useState } from "react";
import style from "./FlightSearch.module.css";

const TABS = [
    { key: "flights", label: "FLIGHTS", locationLabels: ["From", "To"] },
    { key: "hotels", label: "HOTELS", locationLabels: ["City", "Hotel Area"] },
    { key: "holidays", label: "HOLIDAYS", locationLabels: ["Leaving From", "Destination"] },
];

const emptyForm = {
    from: "",
    to: "",
    start: "",
    end: "",
    adults: "1",
    child: "0",
};

const FlightSearch = () => {
    const [activeTab, setActiveTab] = useState("flights");

    // Keep each tab's inputs independent so switching tabs doesn't lose data.
    const [formsByTab, setFormsByTab] = useState({
        flights: { ...emptyForm },
        hotels: { ...emptyForm },
        holidays: { ...emptyForm },
    });

    const tab = TABS.find((t) => t.key === activeTab);
    const form = formsByTab[activeTab];

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormsByTab((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [name]: value,
            },
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // No backend/search API is wired up yet — this is where a real
        // search request would be dispatched using `form`.
        console.log(`${tab.label} search:`, form);
    };

    return (
        <div className={style.searchBox}>

            {/* Tabs */}
            <div className={style.tabs}>
                {TABS.map(({ key, label }) => (
                    <button
                        key={key}
                        type="button"
                        className={activeTab === key ? style.active : ""}
                        onClick={() => setActiveTab(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Form */}
            <form className={style.form} onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="from"
                    placeholder={tab.locationLabels[0]}
                    value={form.from}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="to"
                    placeholder={tab.locationLabels[1]}
                    value={form.to}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="start"
                    value={form.start}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="end"
                    value={form.end}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="adults"
                    placeholder="Adults"
                    min="1"
                    value={form.adults}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="child"
                    placeholder="Child"
                    min="0"
                    value={form.child}
                    onChange={handleChange}
                />

                <button type="submit">
                    SEARCH {tab.label}
                </button>

            </form>

        </div>
    );
};

export default FlightSearch;
