

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1089195590224715848", ""], 
  mongodbUri : "mongodb+srv://hogalallaop:hogalalla1320@atlascluster.zzaea.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",
  spotifyClientId : "f23f61779897474497648af2d97fdfa5",
  spotifyClientSecret : "e8367d486ab14bbeb387ac07886b81b4",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Server",
      password: "youshallnotpass",
      host: "lavalink.jirayu.net",
      port:  13592,
      secure: false
    }
  ]
}
