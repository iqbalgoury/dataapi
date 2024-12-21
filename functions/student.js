// netlify/functions/student.js
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'students.json');

exports.handler = async function(event, context) {
  const { httpMethod, body } = event;

  if (httpMethod === "GET") {
    const data = fs.readFileSync(filePath, 'utf8');
    const students = JSON.parse(data);
    return {
      statusCode: 200,
      body: JSON.stringify(students)
    };
  }

  if (httpMethod === "POST") {
    const newStudent = JSON.parse(body);
    const data = fs.readFileSync(filePath, 'utf8');
    const students = JSON.parse(data);
    students.push(newStudent);
    fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
    return {
      statusCode: 201,
      body: JSON.stringify(newStudent)
    };
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed"
  };
};
