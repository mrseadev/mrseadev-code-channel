const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(currentMonth, currentYear);
});

// Render calendar
function renderCalendar(month, year) {
    const datesContainer = document.getElementById('dates');
    datesContainer.innerHTML = '';
    const monthYear = document.getElementById('monthYear');
    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty divs for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        datesContainer.appendChild(emptyDiv);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = day;
        dateDiv.classList.add('date');
        if (day === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
            dateDiv.classList.add('active');
        }
        datesContainer.appendChild(dateDiv);
    }
}

// Go to the previous month
function prevMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar(currentMonth, currentYear);
}

// Go to the next month
function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar(currentMonth, currentYear);
}