const submitTrack = document.querySelector(".submit");
const clearTrack= document.querySelector(".clear");


submitTrack.addEventListener('click', function() {
    if (document.querySelector("#tanggal").value === "YYYY-MM-DD" || document.querySelector("#nominal").value === "") {
        alert("Please fill your form first!");
    } else {
        const history = {
            date: document.querySelector("#tanggal").value,
            amount: document.querySelector("#nominal").value,
            finance: document.querySelector("#financetype").value,
            notes: document.querySelector("#notes").value
        }
        putHistoryData(history);
        renderHistory();
    } 
})

clearTrack.addEventListener('click', function() {
    clearHistory();
})