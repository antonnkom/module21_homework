const jsonString = `
    {
        "name":"Anton",
        "age":36,
        "skills":["Javascript","HTML","CSS"],
        "salary":80000
    }`;

const jsonObj = JSON.parse(jsonString);
let skills = [];

for (let i in jsonObj.skills) {
    skills[i] = jsonObj.skills[i];
}

const result = {
    name: jsonObj.name,
    age: parseInt(jsonObj.age),
    skills: skills,
    salary: parseInt(jsonObj.salary)
};

console.log(result);