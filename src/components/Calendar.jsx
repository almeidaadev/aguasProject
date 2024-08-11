import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Calendar = ({ onPriceSelect }) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const currentYearReal = date.getFullYear();

    const [selectedDay, setSelectedDay] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(month);
    const [currentYear, setCurrentYear] = useState(currentYearReal);
    const [daysInMonth, setDaysInMonth] = useState(31);
    const [startDayOfWeek, setStartDayOfWeek] = useState(4);
    const [isCurrentMonth, setIsCurrentMonth] = useState(true);

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
        if (dayOfWeek === 3) return "bg-white text-gray-400 cursor-not-allowed";
        if (currentMonth > month || currentYear > currentYearReal)
            return "bg-gray-200 cursor-not-allowed";
        const tariff = tariffs.find((t) => t.days.includes(day));
        return tariff ? tariff.color : "bg-gray-200";
    };

    const getPriceByColor = (color) => {
        const tariff = tariffs.find((t) => t.color === color);
        return tariff ? tariff.price : "Indisponível";
    };

    useEffect(() => {
        const daysInCurrentMonth = new Date(
            currentYear,
            currentMonth,
            0
        ).getDate();
        setDaysInMonth(daysInCurrentMonth);

        const firstDayOfMonth = new Date(
            currentYear,
            currentMonth - 1,
            1
        ).getDay();
        setStartDayOfWeek(firstDayOfMonth);

        setIsCurrentMonth(
            month === currentMonth && currentYear === currentYearReal
        );
    }, [currentMonth, currentYear, month, currentYearReal]);

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

    const handleDayClick = (day) => {
        const dayColor = getDayColor(day);
        const price = getPriceByColor(dayColor);
        setSelectedDay(day);
        if (onPriceSelect) {
            onPriceSelect({
                name: "Ingresso Adulto", // Atualize conforme necessário
                price,
                location: "Águas Correntes Park, Goiás",
                date: `${day}/${currentMonth}/${currentYear}`, // Formatação da data
                time: "00:01 às 17:00",
                category: "Day Use - Adulto",
                image: "/public/m-Z8gvOCnQO4.webp", // Atualize conforme necessário
            });
        }
    };

    return (
        <div className="w-full flex justify-center p-4">
            <div className="w-full max-w-[400px] md:max-w-[600px] flex flex-col">
                {/* Navegação do Mês */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={handlePreviousMonth}
                        className="text-xl p-2"
                    >
                        &#8249;
                    </button>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold">
                            Quando quer visitar?
                        </h2>
                        <h3 className="text-md">
                            {`${currentMonth
                                .toString()
                                .padStart(2, "0")} DE ${currentYear}`}
                        </h3>
                    </div>
                    <button onClick={handleNextMonth} className="text-xl p-2">
                        &#8250;
                    </button>
                </div>

                {/* Grid do Calendário */}
                <div className="grid grid-cols-7 gap-1">
                    {[
                        "dom.",
                        "seg.",
                        "ter.",
                        "qua.",
                        "qui.",
                        "sex.",
                        "sab.",
                    ].map((day) => (
                        <div
                            key={day}
                            className="text-center font-medium text-xs md:text-sm"
                        >
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
                        const isSelectable =
                            isCurrentMonth &&
                            !isWednesday &&
                            !(
                                currentMonth > month ||
                                currentYear > currentYearReal
                            );
                        return (
                            <div
                                key={day}
                                className={`text-center p-2 text-xs md:text-sm rounded-lg ${getDayColor(
                                    day
                                )} ${
                                    selectedDay === day && isSelectable
                                        ? "ring-2 ring-black"
                                        : ""
                                }`}
                                onClick={() =>
                                    isSelectable && handleDayClick(day)
                                }
                                style={{
                                    pointerEvents: isSelectable
                                        ? "auto"
                                        : "none",
                                }}
                            >
                                {day}
                            </div>
                        );
                    })}
                </div>

                {/* Tarifas */}
                <div className="mt-8 flex gap-2 flex-wrap justify-center">
                    {tariffs.map((tariff, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2"
                        >
                            <div className={`rounded-lg p-2 ${tariff.color}`}>
                                <span className="text-xs md:text-sm">
                                    {tariff.price}
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center space-x-2">
                        <div className="rounded-lg p-2 bg-gray-200">
                            <span className="text-xs md:text-sm">
                                Fechado / Aguardando tarifa
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Calendar.propTypes = {
    onPriceSelect: PropTypes.func.isRequired,
};

export default Calendar;
