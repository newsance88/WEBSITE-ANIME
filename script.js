Server.use(cors());


async function getResponse ( ){
  let response = await fetch ('newanimepage.html')
  console.log(response)
}

getResponse()