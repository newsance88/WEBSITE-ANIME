Server.use(cors());


async function getResponse ( ){
  let url = 'newanimepage.html';
let response = await fetch(url);

let commits = await response.json(); // читаем ответ в формате JSON

alert(commits[0].author.login);
}

getResponse()