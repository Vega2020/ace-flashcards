function Cardmaker() {

    const actionBtn = document.getElementById("action-button");
    // new item
    const makeNote = document.getElementById("make-new");
    // clear all items
    const clear = document.getElementById("clear-all");
    // delete an item
    const results = document.getElementById("results");
    
    const status = document.getElementById("status");
    
    function getResults() {
        clearTodos();
        fetch("/all")
            .then(function(response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }
                response.json().then(function(data) {
                    newTodoSnippet(data);
                });
            })
            .catch(function(err) {
                console.log("Fetch Error :-S", err);
            });
    }
    
    function newTodoSnippet(res) {
        for (var i = 0; i < res.length; i++) {
            let data_id = res[i]["_id"];
            let title = res[i]["title"];
            let todoList = document.getElementById("results");
            snippet = `
          <p class="data-entry">
          <span class="dataTitle" data-id=${data_id}>${title}</span>
          <span onClick="delete" class="delete" data-id=${data_id}>x</span>;
          </p>`;
            todoList.insertAdjacentHTML("beforeend", snippet);
        }
    }
    
    function clearTodos() {
        const todoList = document.getElementById("results");
        todoList.innerHTML = "";
    }
    
    function resetTitleAndNote() {
        const question = document.getElementById("question");
        question.value = "";
        const title = document.getElementById("title");
        title.value = "";
        const answer = document.getElementById("answer");
        answer.value = "";
    }
    
    function updateTitleAndNote(data) {
        const question = document.getElementById("question");
        question.value = data.question;
        const title = document.getElementById("title");
        title.value = data.title;
        const answer = document.getElementById("answer");
        answer.value = data.answer;
    }
    
    getResults();
    
    clear.addEventListener("click", function(e) {
        if (e.target.matches("#clear-all")) {
            element = e.target;
            data_id = element.getAttribute("data-id");
            fetch("/clearall", {
                    method: "delete"
                })
                .then(function(response) {
                    if (response.status !== 200) {
                        console.log("Looks like there was a problem. Status Code: " + response.status);
                        return;
                    }
                    clearTodos();
                })
                .catch(function(err) {
                    console.log("Fetch Error :-S", err);
                });
        }
    });
    
    results.addEventListener("click", function(e) {
        if (e.target.matches(".delete")) {
            element = e.target;
            data_id = element.getAttribute("data-id");
            fetch("/delete/" + data_id, {
                    method: "delete"
                })
                .then(function(response) {
                    if (response.status !== 200) {
                        console.log("Looks like there was a problem. Status Code: " + response.status);
                        return;
                    }
                    element.parentNode.remove();
                    resetTitleAndNote();
                    let newButton = `
          <button id='make-new'>Submit</button>`;
                    actionBtn.innerHTML = newButton;
                })
                .catch(function(err) {
                    console.log("Fetch Error :-S", err);
                });
        } else if (e.target.matches(".dataTitle")) {
            element = e.target;
            data_id = element.getAttribute("data-id");
            status.innerText = "Editing"
            fetch("/find/" + data_id, { method: "get" })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    updateTitleAndNote(data);
                    let newButton = `<button id='updater' data-id=${data_id}>Update</button>`;
                    actionBtn.innerHTML = newButton;
                })
                .catch(function(err) {
                    console.log("Fetch Error :-S", err);
                });
        }
    });
    
    actionBtn.addEventListener("click", function(e) {
        if (e.target.matches("#updater")) {
            updateBtnEl = e.target;
            data_id = updateBtnEl.getAttribute("data-id");
            const title = document.getElementById("title").value;
            const question = document.getElementById("question").value;
            const answer = document.getElementById("answer").value;
            fetch("/update/" + data_id, {
                    method: "post",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title,
                        question,
                        answer
                    })
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    element.innerText = title
                    resetTitleAndNote();
                    let newButton = `<button id='make-new'>Submit</button>`;
                    actionBtn.innerHTML = newButton;
                    status.innerText = "Creating"
                })
                .catch(function(err) {
                    console.log("Fetch Error :-S", err);
                });
        } else if (e.target.matches("#make-new")) {
            element = e.target;
            data_id = element.getAttribute("data-id");
            fetch("/submit", {
                    method: "post",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: document.getElementById("title").value,
                        question: document.getElementById("question").value,
                        answer: document.getElementById("answer").value,
                        created: Date.now()
                    })
                })
                .then(res => res.json())
                .then(res => newTodoSnippet([res]));
            resetTitleAndNote();
        }
    });

    
    return (<>
    <h1>Custom Card Maker</h1>
    <h2>Status: <span id="status" class="primary">Creating</span></h2>
    <h4>Create a new card by submitting its tags and content below</h4>
    <h4>Click on a card to edit its title or content</h4>
    <div id="user-input">
        <h2>Tags</h2>
        <input type="text" id="title" />
        <br />
        <h2>Question</h2>
        <textarea id="question"></textarea>
        <br />
        <h2>Answer</h2>
        <textarea id="answer"></textarea>
        <div id="buttons">
            <div id="action-button">
                <button id="make-new">Submit</button>
            </div>
            <button id="clear-all">Delete All Notes</button>
        </div>
    </div>
    <div id="results"></div>
    </>)
}

