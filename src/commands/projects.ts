import command from '../../config.json' assert {type: 'json'};

const createProject = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>");

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;

    // Title line
    string += SPACE.repeat(2);
    string += link;
    projects.push(string);

    // Description on NEW LINE (minimal change here)
    const desc = SPACE.repeat(4) + ele[1];
    projects.push(desc);

    // Blank line between projects
    projects.push("<br>");

    string = '';
  });

  projects.push(files);
  projects.push("<br>");
  return projects;
}

export const PROJECTS = createProject();
