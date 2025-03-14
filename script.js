function loadProject(taskId) {
    const projects = {
        "task1": { "title": "Project 1", "url": "works/task1/index.html" },
        "task2": { "title": "Project 2", "url": "works/task2/index.html" },
        "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    };

    const frame = document.getElementById("projectFrame");

    if (projects[taskId]) {
        frame.src = projects[taskId].url;
        frame.title = projects[taskId].title;
    } else {
        alert("Project not found!");
        frame.src = "works/landing.html";
        frame.title = "Select a project";
    }
}
