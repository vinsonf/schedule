const table = document.createElement("table");
document.body.appendChild(table);
createRow("SCHEDULE");

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = [
  "time-08-00-AM",
  "time-08-30-AM",
  "time-09-00-AM",
  "time-09-30-AM",
  "time-10-00-AM",
  "time-10-30-AM",
  "time-11-00-AM",
  "time-11-30-AM",
  "time-12-00-PM",
  "time-12-30-PM",
  "time-01-00-PM",
  "time-01-30-PM",
  "time-02-00-PM",
  "time-02-30-PM",
  "time-03-00-PM",
  "time-03-30-PM",
  "time-04-00-PM",
  "time-04-30-PM",
];

days.forEach((day) => createHeader(day));

times.forEach((time) => createRow(time));

days.forEach((day) => {
  times.forEach((time) => {
    createTD(time, day);
  });
});

function createTD(time, day) {
  const tr = document.querySelector(`#${time}`);
  const td = document.createElement("td");
  td.id = `${time}-${day}`;
  tr.appendChild(td);
}

function createRow(name) {
  const table = document.querySelector("table");
  const row = document.createElement("tr");
  row.id = name;
  const rowTd = document.createElement("td");
  rowTd.id = name + "-label";
  rowTd.innerHTML = name;
  table.appendChild(row);
  row.appendChild(rowTd);
}

function createHeader(colName) {
  const headerRow = document.querySelector("#SCHEDULE");
  const header = document.createElement("th");
  header.innerHTML = colName;
  header.id = colName;
  headerRow.appendChild(header);
}

function createLesson(time, day, name, type, description) {
  const td = document.querySelector(`#${time}-${day}`);
  const lesson = document.createElement("button");
  lesson.classList.add('lesson');
  lesson.id = `${time}-${day}-${name}`;
  lesson.innerHTML = `<h4>${name}</h4><p>${type}</p><p>${description}</p>`;
  td.appendChild(lesson);

  if (type == "Coding-Challenge") {
    lesson.classList.add("coding-challenge");
  }
  if (type == "Project") {
    lesson.classList.add("project");
  }
  if (type == "Meetup") {
    lesson.classList.add("meetup");
  }
  if (type == "Presentation") {
    lesson.classList.add("presentation");
  }
  if (type == "Review") {
    lesson.classList.add("review");
  }
  if (type == "Planning") {
    lesson.classList.add("planning");
  }
  if (type == "Debugging") {
    lesson.classList.add("debugging");
  }
  if (type == "Questions") {
    lesson.classList.add("questions");
  }
  if (type == "Follow-Along") {
    lesson.classList.add("follow-along");
  }
  if (type == "Quiz") {
    lesson.classList.add("quiz");
  }

  if (type == "QOTD") {
    lesson.classList.add("qotd");
  }

  if (type == "Pair") {
    lesson.classList.add("pair");
  }

  if (type == "Fun") {
    lesson.classList.add("fun");
  }
  if (type == "Research") {
    lesson.classList.add("research");
  }
  if (type == "Pull-Request") {
    lesson.classList.add("pull-request");
  }
  if (type == "Lecture") {
    lesson.classList.add("lecture");
  }
  if (type == "Assignment") {
    lesson.classList.add("assignment");
  }
  if (type == "Tutorial") {
    lesson.classList.add("tutorial");
  }

  lesson.addEventListener('click', () => {
    if (lesson.classList.contains("selected")) {
      lesson.classList.remove("selected");
      changeTime(type, -1);
    } else {
        const previousSelection = td.querySelector('.selected');
        if (previousSelection) {
            previousSelection.classList.remove('selected');
            const previousType = types.find( type => previousSelection.classList.contains(type.toLowerCase()));
            changeTime(previousType, -1);
        }
        lesson.classList.add("selected");
        console.log(lesson.classList)
        const type = types.find( type => lesson.classList.contains(type.toLowerCase()));
        console.log(type);
        changeTime(type, 1);


    }
      
  })
}

function changeTime(type, time) {
    const typeHeader = document.querySelector(`.type-header`);
    const header = typeHeader.querySelector(`.${type.toLowerCase()}`)
    console.log(header);
    const headerButton = header.querySelector('button');
    const currentTime = Number(headerButton.innerHTML);
    console.log(currentTime)
    headerButton.innerHTML = currentTime + time;
}

const lessons = [
  {
    time: "all-day",
    day: "Monday",
    name: "Aman",
    type: "Project",
    description: "All Day Project",
  },
  {
    time: "all-day",
    day: "Tuesday",
    name: "Aman",
    type: "Project",
    description: "All Day Project",
  },
  {
    time: "all-day",
    day: "Wednesday",
    name: "Aman",
    type: "Project",
    description: "All Day Project",
  },
  {
    time: "all-day",
    day: "Thursday",
    name: "Aman",
    type: "Coding-Challenge",
    description: "All Day Coding Challenge",
  },
  {
    time: "time-09-00-AM",
    day: "Friday",
    name: "Aman",
    type: "Presentation",
    description: "Topic Presentation",
  },
  {
    time: "time-09-30-AM",
    day: "Friday",
    name: "Aman",
    type: "Review",
    description: "Weekly Review",
  },
  {
    time: "time-10-00-AM",
    day: "Friday",
    name: "Aman",
    type: "Planning",
    description: "Planning What's Next",
  },
  {
    time: "time-10-30-AM",
    day: "Friday",
    name: "Aman",
    type: "Planning",
    description: "Planning What's Next",
  },
  {
    time: "time-09-00-AM",
    day: "Monday",
    name: "Angel",
    type: "Meetup",
    description: "Monday Meetup",
  },
  {
    time: "time-09-30-AM",
    day: "Monday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-10-00-AM",
    day: "Monday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-10-30-AM",
    day: "Monday",
    name: "Angel",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "time-11-00-AM",
    day: "Monday",
    name: "Angel",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "time-11-30-AM",
    day: "Monday",
    name: "Angel",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "time-12-00-PM",
    day: "Monday",
    name: "Angel",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "time-12-30-PM",
    day: "Monday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-01-00-PM",
    day: "Monday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-02-00-PM",
    day: "Monday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-02-30-PM",
    day: "Monday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-03-00-PM",
    day: "Monday",
    name: "Angel",
    type: "Follow-Along",
    description: "Follow Along",
  },
  {
    time: "time-03-30-PM",
    day: "Monday",
    name: "Angel",
    type: "Follow-Along",
    description: "Follow Along",
  },
  {
    time: "time-08-00-AM",
    day: "Tuesday",
    name: "Angel",
    type: "Praise",
    description: "Praise God",
  },
  {
    time: "time-09-00-AM",
    day: "Tuesday",
    name: "Angel",
    type: "Follow-Along",
    description: "Follow Along",
  },
  {
    time: "time-09-30-AM",
    day: "Tuesday",
    name: "Angel",
    type: "Follow-Along",
    description: "Follow Along",
  },
  {
    time: "time-10-00-AM",
    day: "Tuesday",
    name: "Angel",
    type: "Follow-Along",
    description: "Follow Along",
  },
  {
    time: "time-12-30-PM",
    day: "Tuesday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-01-00-PM",
    day: "Tuesday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-02-00-PM",
    day: "Tuesday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-02-30-PM",
    day: "Tuesday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-03-00-PM",
    day: "Tuesday",
    name: "Angel",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-03-30-PM",
    day: "Tuesday",
    name: "Angel",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-09-00-AM",
    day: "Wednesday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-09-30-AM",
    day: "Wednesday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-10-00-AM",
    day: "Wednesday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-10-30-AM",
    day: "Wednesday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-11-00-AM",
    day: "Wednesday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-11-30-AM",
    day: "Wednesday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-12-00-PM",
    day: "Wednesday",
    name: "Angel",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    time: "time-12-30-PM",
    day: "Wednesday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-01-00-PM",
    day: "Wednesday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-02-00-PM",
    day: "Wednesday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-02-30-PM",
    day: "Wednesday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-03-00-PM",
    day: "Wednesday",
    name: "Angel",
    type: "Quiz",
    description: "Quiz",
  },
  {
    time: "time-03-30-PM",
    day: "Wednesday",
    name: "Angel",
    type: "Quiz",
    description: "Quiz",
  },
  {
    time: "time-09-00-AM",
    day: "Thursday",
    name: "Angel",
    type: "Pair",
    description: "Code Mentor",
  },
  {
    time: "time-09-30-AM",
    day: "Thursday",
    name: "Angel",
    type: "Pair",
    description: "Code Mentor",
  },
  {
    time: "time-10-00-AM",
    day: "Thursday",
    name: "Angel",
    type: "Pair",
    description: "Code Mentor",
  },
  {
    time: "time-10-30-AM",
    day: "Thursday",
    name: "Angel",
    type: "Pair",
    description: "Code Mentor",
  },
  {
    time: "time-11-00-AM",
    day: "Thursday",
    name: "Angel",
    type: "Pair",
    description: "Code Mentor",
  },
  {
    time: "time-11-30-AM",
    day: "Thursday",
    name: "Angel",
    type: "Pair",
    description: "Code Mentor",
  },
  {
    time: "time-12-00-PM",
    day: "Thursday",
    name: "Angel",
    type: "Pair",
    description: "Code Mentor",
  },
  {
    time: "time-12-30-PM",
    day: "Thursday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-01-00-PM",
    day: "Thursday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-02-00-PM",
    day: "Thursday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-02-30-PM",
    day: "Thursday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-03-00-PM",
    day: "Thursday",
    name: "Angel",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-03-30-PM",
    day: "Thursday",
    name: "Angel",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-09-00-AM",
    day: "Friday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-09-30-AM",
    day: "Friday",
    name: "Angel",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-10-00-AM",
    day: "Friday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-10-30-AM",
    day: "Friday",
    name: "Angel",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-11-00-AM",
    day: "Friday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-11-30-AM",
    day: "Friday",
    name: "Angel",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-12-00-PM",
    day: "Friday",
    name: "Angel",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-12-30-PM",
    day: "Friday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-01-00-PM",
    day: "Friday",
    name: "Angel",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    time: "time-02-00-PM",
    day: "Friday",
    name: "Angel",
    type: "Fun",
    description: "Fun Fridays",
  },
  {
    time: "time-02-30-PM",
    day: "Friday",
    name: "Angel",
    type: "Fun",
    description: "Fun Fridays",
  },
  {
    time: "time-03-00-PM",
    day: "Friday",
    name: "Angel",
    type: "Fun",
    description: "Fun Fridays",
  },
  {
    time: "time-03-30-PM",
    day: "Friday",
    name: "Angel",
    type: "Fun",
    description: "Fun Fridays",
  },
  {
    time: "time-08-30-AM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "Bryce",
    type: "QOTD",
    description: "Question of the Day",
  },
  {
    time: "time-09-00-AM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Meetup",
    description: "Meetup without Instructor",
  },
  {
    time: "time-09-30-AM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Debugging",
    description: "Debugging",
  },

  {
    time: "time-10-00-AM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "Bryce",
    type: "QOTD",
    description: "Answer to Question of the Day",
  },
  {
    time: "time-10-30-AM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Questions",
    description: "Questions",
  },
  {
    time: "time-10-30-AM",
    days: ["Thursday"],
    day: "",
    name: "Bryce",
    type: "Debugging",
    description: "Debugging",
  },
  {
    time: "time-11-00-AM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Research",
    description: "Introduce Topic",
  },
  {
    time: "time-11-00-AM",
    days: ["Thursday"],
    day: "",
    name: "Bryce",
    type: "QOTD",
    description: "Introduce Interview Question",
  },
  {
    time: "time-11-30-AM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Research",
    description: "Research",
  },
  {
    time: "time-12-00-PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Lunch",
    description: "Lucnh Break",
  },
  {
    time: "time-12-30-PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Lunch",
    description: "Lucnh Break",
  },
  {
    time: "time-01-00-PM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Research",
    description: "Research",
  },
  {
    time: "time-01-30-PM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Research",
    description: "Research",
  },
  {
    time: "time-02-00-PM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Questions",
    description: "Questions on Topic",
  },
  {
    time: "time-02-00-PM",
    days: ["Thursday"],
    day: "",
    name: "Bryce",
    type: "QOTD",
    description: "Interview Question Peer Discussion",
  },
  {
    time: "time-02-30-PM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Presentation",
    description: "Presentations on Topic",
  },
  {
    time: "time-02-30-PM",
    days: ["Thursday"],
    day: "",
    name: "Bryce",
    type: "QOTD",
    description: "Answer to Question of the Day",
  },
  {
    time: "time-03-00-PM",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Bryce",
    type: "Pull-Request",
    description: "Pull Requests",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM", "time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Monday"],
    day: "",
    name: "Chazz",
    type: "Lecture",
    description: "Lecture",
  },
  {
    times: ["time-11-00-AM", "time-11-30-AM", "time-12-00-PM", "time-12-30-PM"],
    time: "",
    days: ["Monday", "Tuesday"],
    day: "",
    name: "Chazz",
    type: "Assignment",
    description: "Assignment",
  },
  {
    times: ["time-01-00-PM", "time-01-30-PM"],
    time: "",
    days: ["Monday", "Tuesday"],
    day: "",
    name: "Chazz",
    type: "Lunch",
    description: "Lucnh Break",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM", "time-03-00-PM", "time-03-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday"],
    day: "",
    name: "Chazz",
    type: "Presentation",
    description: "Presentations of Assignments",
  },
  {
    times: ["time-04-00-PM", "time-04-30-PM", "time-05-00-PM", "time-05-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "Chazz",
    type: "Free Time",
    description: "Free Time",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM", "time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Tuesday"],
    day: "",
    name: "Chazz",
    type: "Meetup",
    description: "Discussion on Weaknesses",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM", "time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Wednesday"],
    day: "",
    name: "Chazz",
    type: "Assignment",
    description: "Create Presentation",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM", "time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Thursday"],
    day: "",
    name: "Chazz",
    type: "Assignment",
    description: "Group Assignment",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM", "time-03-00-PM", "time-03-30-PM"],
    time: "",
    days: ["Thursday"],
    day: "",
    name: "Chazz",
    type: "Presentation",
    description: "Group Presentation",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM", "time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Chazz",
    type: "Meetup",
    description: "Reflect on Week",
  },
  {
    times: ["time-11-00-AM", "time-11-30-AM", "time-12-00-PM", "time-12-30-PM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Chazz",
    type: "Free Time",
    description: "Free Time",
  },
  {
    times: ["time-11-00-AM", "time-11-30-AM", "time-12-00-PM", "time-12-30-PM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Chazz",
    type: "Fun",
    description: "Team Choice",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    day: "",
    name: "Gichelle",
    type: "Coding-Challenge",
    description: "Coding Challenge Daily Topics",
  },
  {
    times: ["time-10-00-AM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    day: "",
    name: "Gichelle",
    type: "Follow-Along",
    description: "Follow Along or Discussion",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM", "time-10-00-AM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Gichelle",
    type: "Coding-Challenge",
    description: "Pair Coding Challenge",
  },
  {
    times: ["time-10-30-AM", "time-11-00-AM"],
    time: "",
    days: ["Monday", "Friday"],
    day: "",
    name: "Gichelle",
    type: "Meetup",
    description: "Discussion on Project",
  },
  {
    times: [
      "time-11-30-AM",
      "time-12-00-PM",
      "time-12-30-PM",
      "time-01-00-PM",
      "time-01-30-PM",
    ],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "Gichelle",
    type: "Project",
    description: "Work on Project",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday"],
    day: "",
    name: "Gichelle",
    type: "Debugging",
    description: "Debugging",
  },
  {
    times: ["time-03-00-PM", "time-03-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday"],
    day: "",
    name: "Gichelle",
    type: "Pull-Request",
    description: "Group Pull Request",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM"],
    time: "",
    days: ["Thursday"],
    day: "",
    name: "Gichelle",
    type: "Research",
    description: "Research",
  },
  {
    times: ["time-03-00-PM", "time-03-30-PM"],
    time: "",
    days: ["Thursday"],
    day: "",
    name: "Gichelle",
    type: "Presentation",
    description: "Presentation",
  },
  {
    times: ["time-04-00-PM", "time-04-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday"],
    day: "",
    name: "Gichelle",
    type: "Assignment",
    description: "Assignment Based",
  },
  {
    times: ["time-04-00-PM", "time-04-30-PM"],
    time: "",
    days: ["Thursday"],
    day: "",
    name: "Gichelle",
    type: "Meetup",
    description: "Discussion",
  },
  {
    times: [
      "time-02-00-PM",
      "time-02-30-PM",
      "time-03-00-PM",
      "time-03-30-PM",
      "time-04-00-PM",
      "time-04-30-PM",
    ],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Gichelle",
    type: "Fun",
    description: "Quiz Based",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "John",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    times: ["time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "John",
    type: "Lecture",
    description: "Lecture",
  },
  {
    times: ["time-12-00-PM", "time-12-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "John",
    type: "Lunch",
    description: "Lunch Break",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM", "time-03-00-PM", "time-03-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    day: "",
    name: "John",
    type: "Assignment",
    description: "Assignment",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM", "time-03-00-PM", "time-03-30-PM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "John",
    type: "Fun",
    description: "Flexable",
  },
  {
    times: ["time-04-00-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "John",
    type: "Tutorial",
    description: "Tutorial",
  },
  {
    times: ["time-04-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "",
    name: "John",
    type: "Meetup",
    description: "Recap",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    day: "",
    name: "Lielt",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    times: ["time-10-00-AM", "time-10-30-AM", "time-11-00-AM", "time-11-30-AM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    day: "",
    name: "Lielt",
    type: "Project",
    description: "Project Work",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM", "time-03-00-PM", "time-03-30-PM"],
    time: "",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    day: "",
    name: "Lielt",
    type: "Pull-Request",
    description: "Pull Request Review",
  },

  {
    times: ["time-09-00-AM", "time-09-30-AM"],
    time: "",
    days: ["Thursday"],
    day: "",
    name: "Lielt",
    type: "Research",
    description: "Research and Presentation",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Lielt",
    type: "Quiz",
    description: "Quiz",
  },
  {
    times: ["time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Lielt",
    type: "Meetup",
    description: "Plan Next Week",
  },
  {
    times: ["time-10-00-AM", "time-10-30-AM"],
    time: "",
    days: ["Friday"],
    day: "",
    name: "Lielt",
    type: "Meetup",
    description: "Plan Next Week",
  },

  {
    time: "all-day",
    day: "Monday",
    name: "Mekdes",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "all-day",
    day: "Tuesday",
    name: "Mekdes",
    type: "Assignment",
    description: "Assignment",
  },
  {
    time: "all-day",
    day: "Wednesday",
    name: "Mekdes",
    type: "Research",
    description: "Research",
  },
  {
    time: "all-day",
    day: "Thursday",
    name: "Mekdes",
    type: "Presentation",
    description: "Presentation",
  },
  {
    time: "all-day",
    day: "Friday",
    name: "Mekdes",
    type: "Quiz",
    description: "Quiz",
  },
  {
    time: "all-day",
    day: "Monday",
    name: "Saba",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "all-day",
    day: "Tuesday",
    name: "Saba",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "all-day",
    day: "Wednesday",
    name: "Saba",
    type: "Project",
    description: "Project Work",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM", "time-10-00-AM", "time-10-30-AM"],
    day: "Thursday",
    name: "Saba",
    type: "Coding-Challenge",
    description: "Coding Challenge",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM", "time-03-00-PM", "time-03-30-PM"],
    days: ["Thursday"],
    name: "Saba",
    type: "Debugging",
    description: "Questions and Debugging",
  },
  {
    times: ["time-09-00-AM", "time-09-30-AM"],
    days: "Friday",
    name: "Saba",
    type: "Presentation",
    description: "Coding Challenge",
  },
  {
    times: ["time-10-00-AM", "time-10-30-AM"],
    days: "Friday",
    name: "Saba",
    type: "Meetup",
    description: "Recap",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM"],
    days: "Friday",
    name: "Saba",
    type: "Meetup",
    description: "Plan Next Week",
  },
  {
    times: ["time-03-00-PM", "time-03-30-PM"],
    days: "Friday",
    name: "Saba",
    type: "Fun",
    description: "Quiz",
  },
  {
    time: "all-day",
    day: "Monday",
    name: "Sirisha",
    type: "Tutorial",
    description: "Tutorial",
  },
  {
    time: "all-day",
    day: "Tuesday",
    name: "Sirisha",
    type: "Pair",
    description: "Pair Programming",
  },
  {
    time: "all-day",
    day: "Wednesday",
    name: "Sirisha",
    type: "Project",
    description: "Project Work",
  },
  {
    time: "all-day",
    day: "Thursday",
    name: "Sirisha",
    type: "Follow-Along",
    description: "Follow-Along",
  },
  {
    times: [ "time-09-30-AM", "time-10-00-AM", "time-10-30-AM"],
    day: "Friday",
    name: "Sirisha",
    type: "Quiz",
    description: "Kahoot",
  },
  {
    times: ["time-02-00-PM", "time-02-30-PM", "time-03-00-PM", "time-03-30-PM"],
    day: "Friday",
    name: "Sirisha",
    type: "Assignment",
    description: "Assignment",
  },
  {
    times: ["time-08-30-AM",],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    name: "Sirisha",
    type: "Coding-Challenge",
    description: "Code Challenge",
  },
  {
    times: ["time-04-30-PM",],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    name: "Sirisha",
    type: "Debugging",
    description: "Debugging",
  },
];

days.forEach((day) => {
  times.forEach((time) => {
    lessons.forEach((lesson) => {
      if (lesson.day === day || (lesson.days && lesson.days.includes(day))) {
        if (
          lesson.time === "all-day" ||
          lesson.time === time ||
          (lesson.times && lesson.times.includes(time))
        ) {
          if (
            lesson.time === "all-day" &&
            (time === "time-12-00-PM" || time === "time-12-30-PM")
          ) {
            createLesson(time, lesson.day, lesson.name, "LUNCH", "Lunch Break");
          } else if (
            (time === "time-08-00-AM" || time === "time-08-30-AM") &&
            lesson.time === "all-day"
          ) {
          } else {
            createLesson(
              time,
              day,
              lesson.name,
              lesson.type,
              lesson.description
            );
          }
        }
      }
    });
  });
});

const types = ["QOTD", "Project", "Assignment", "Research", "Presentation", "Quiz", "Tutorial", "Pair", "Follow-Along", "Meetup", "Coding-Challenge", "Debugging", "Fun", ];

const typeHeader = document.createElement("header");
typeHeader.classList.add("type-header");
document.body.prepend(typeHeader);

function createTypeHeader(type) {
  const header = document.createElement("div");
  header.textContent = type;
  typeHeader.appendChild(header);
  console.log(header, typeHeader);
  header.classList.add(type.toLowerCase());
  const button = document.createElement("button");
  header.prepend(button);
  button.innerHTML = '0';
}

types.forEach(type => {
    createTypeHeader(type)
})