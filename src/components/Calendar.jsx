import { useState, useEffect } from "react";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(8); // August by default
    const [currentYear, setCurrentYear] = useState(2024);
    const [daysInMonth, setDaysInMonth] = useState(31);
    const [startDayOfWeek, setStartDayOfWeek] = useState(4); // Default start day for August 2024

    const tariffs = [
        { days: [8], price: "R$ 80,00", color: "bg-purple-700" },
        {
            days: [5, 6, 7, 12, 13, 14, 19, 20, 21, 26, 27, 28],
            price: "R$ 54,90",
            color: "bg-blue-400",
        },
        {
            days: [1, 2, 3, 15, 16, 17, 22, 23, 24, 29, 30, 31],
            price: "R$ 59,00",
            color: "bg-green-400",
        },
        {
            days: [4, 9, 10, 11, 18, 25],
            price: "R$ 49,00",
            color: "bg-yellow-400",
        },
    ];

    const getDayColor = (day) => {
        const dayOfWeek = (startDayOfWeek + day - 1) % 7;
        if (dayOfWeek === 3) return "bg-white text-gray-400 cursor-not-allowed"; // Wednesday styling
        const tariff = tariffs.find((t) => t.days.includes(day));
        return tariff ? tariff.color : "bg-gray-200";
    };

    useEffect(() => {
        // Calculate the number of days in the current month
        const daysInCurrentMonth = new Date(
            currentYear,
            currentMonth,
            0
        ).getDate();
        setDaysInMonth(daysInCurrentMonth);

        // Calculate the start day of the week for the current month
        const firstDayOfMonth = new Date(
            currentYear,
            currentMonth - 1,
            1
        ).getDay(); // getDay() returns 0 for Sunday, 1 for Monday, etc.
        setStartDayOfWeek(firstDayOfMonth);
    }, [currentMonth, currentYear]);

    const handlePreviousMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(12);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 12) {
            setCurrentMonth(1);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[350px] p-4">
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={handlePreviousMonth}
                        className="text-xl p-2"
                    >
                        &#8249; {/* Left arrow */}
                    </button>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">
                            Quando quer visitar?
                        </h2>
                        <h3 className="text-lg">{`${currentMonth
                            .toString()
                            .padStart(2, "0")} DE ${currentYear}`}</h3>
                    </div>
                    <button onClick={handleNextMonth} className="text-xl p-2">
                        &#8250; {/* Right arrow */}
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {[
                        "dom.",
                        "seg.",
                        "ter.",
                        "qua.",
                        "qui.",
                        "sex.",
                        "sÃ¡b.",
                    ].map((day) => (
                        <div key={day} className="text-center font-medium">
                            {day}
                        </div>
                    ))}
                    {Array.from({ length: startDayOfWeek }).map((_, i) => (
                        <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }, (_, i) => {
                        const day = i + 1;
                        const dayOfWeek = (startDayOfWeek + i) % 7;
                        const isWednesday = dayOfWeek === 3;
                        return (
                            <div
                                key={day}
                                className={`text-center p-1 text-sm rounded-lg ${getDayColor(
                                    day
                                )} ${
                                    selectedDate === day && !isWednesday
                                        ? "ring-2 ring-black"
                                        : ""
                                }`}
                                onClick={() =>
                                    !isWednesday && setSelectedDate(day)
                                }
                                style={{
                                    pointerEvents: isWednesday
                                        ? "none"
                                        : "auto",
                                }}
                            >
                                {day}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-4 space-y-2">
                    {tariffs.map((tariff, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${tariff.color}`}
                            />
                            <span className="text-sm">{tariff.price}</span>
                        </div>
                    ))}
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-gray-200" />
                        <span className="text-sm">
                            Fechado / Aguardando tarifa
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
