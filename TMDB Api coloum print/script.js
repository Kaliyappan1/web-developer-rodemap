



fetch("https://api.themoviedb.org/3/account/20906947", options)
  .then((response) => response.json())
  .then((data) => {
    for (let result = 0; result < data.length; result++) {
      const element = data[result];
      console.log(element);
      $("#table_body").append(`
      <td>${status_code}</td>
      <td>${status_message}</td>
      <td>${success}</td>`)
    }
      
    console.log();

  })






  //   .then((response)  () .map((value) => {
//   tabelData += `
//     <td>kali</td>
//     <td>hello</td>
//     td>true</td>
//     `;
// }));

// $("#table_body").append(tabelData)
// // .catch(err => console.error(err));
