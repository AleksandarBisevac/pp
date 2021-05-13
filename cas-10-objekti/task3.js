/*
Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.
*/
function createProject(description, programLanguage, git, status) {
  var obj = {
    description: description,
    language: programLanguage,
    status: function () {
      if (status) {
        return "In develop";
      }
      return "Finished";
    },
    repository: function () {
      console.log(git);
    },
    writtenLang: function () {
      return programLanguage === "JavaScript";
    },
  };
  return obj;
}

var project1 = createProject("bla", "C#", "alek.bisevac", false);
console.log(project1);

console.log(project1.writtenLang());
