function getCurrentDay() {
    daysOfWeek = {
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thur",
        5: "Fri",
        6: "Sat",
        7: "Sun",
    };
    const date = new Date();
    const graduateDay = date.toDateString("20.06.2024")
    document.getElementById("year").innerHTML = date.getUTCFullYear();
    document.getElementById("dayOfWeek").innerHTML = daysOfWeek[date.getDay()];
    document.getElementById("day").innerHTML = date.getDate();
    document.getElementById("month").innerHTML = date.getUTCMonth();
    document.getElementById("time").innerHTML = date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
    document.getElementById("daysLeft").innerHTML = date.getTime();
}

function getInfo() {
    document.getElementById("name").innerHTML = "Danil";
    document.getElementById("group").innerHTML = "SE-2213";
}