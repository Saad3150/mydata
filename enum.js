var daysaweek;
(function (daysaweek) {
    daysaweek[daysaweek["Mon"] = 0] = "Mon";
    daysaweek[daysaweek["Tue"] = 1] = "Tue";
    daysaweek[daysaweek["Wed"] = 2] = "Wed";
    daysaweek[daysaweek["thur"] = 3] = "thur";
    daysaweek[daysaweek["fri"] = 4] = "fri";
    daysaweek[daysaweek["sat"] = 5] = "sat";
    daysaweek[daysaweek["sun"] = 6] = "sun";
})(daysaweek || (daysaweek = {}));
;
var dAYS = daysaweek.thur;
if (dAYS === daysaweek.thur) {
    console.log("Today is Thursday");
}
else {
    console.log("Today is not Thursday");
}
