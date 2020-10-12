const CACHE_KEY = "track_history";

function checkForStorage() {
    return typeof(Storage) !== "undefined"
}

function putHistoryData(data) {
    if(checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data);

        

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

function showHistory() {
    if (checkForStorage) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const historyData = showHistory();
    let trackList = document.querySelector("#trackList");
    trackList.innerHTML = "";
    for (let history of historyData) {
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + history.date + "</td>";

        if (history.finance == "income") {
            row.innerHTML += "<td>" + history.amount + "</td>";
            row.innerHTML += "<td>-</td>";
        } else {
            row.innerHTML += "<td>-</td>";
            row.innerHTML += "<td>" + history.amount + "</td>";
        }
        row.innerHTML += "<td>" + history.notes + "</td>";

        trackList.appendChild(row);
    }
}

function clearHistory() {
    trackList.innerHTML = "";
    localStorage.removeItem(CACHE_KEY);
}

renderHistory();