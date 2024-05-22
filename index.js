const { BlizzAPI } = require("blizzapi")

const api = new BlizzAPI({
  region: "us",
  clientId: "",
  clientSecret: "",
})

const getData = async () => { 
  const data = await api.query("/hearthstone/cards?locale=en_US&gameMode=battlegrounds")
  return data
}

getData()
  .then(res => console.log(res))
