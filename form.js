// function sendEmail() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const message = document.getElementById('message').value;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "form70099@gmail.com",
//         Password : "47D2504A608B4F30D068B917BF189FE77D10",
//         To : 'namanchandok1@gmail.com',
//         From : email,
//         Subject : `${name} Hiring Form Submission`,
//         Body : `${name}\n${phone}\n${message}`
//     }).then(
//       message => alert(message)
//     );
// }