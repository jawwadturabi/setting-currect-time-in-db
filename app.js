const admin = require("firebase-admin");
const serviceAccount = require("./agent-e2634-firebase-adminsdk-g23y7-17d2ddddb2.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
var time = new Date()
var datetime = time.getDate() + "-"
    + (time.getMonth() + 1) + "-"
    + time.getFullYear() + "@"
    + time.getHours() + ":"
    + time.getMinutes() + ":"
    + time.getSeconds();
db.collection("new").doc(`${datetime.toString()}`).set({
    name: "some string"
}).then(()=>{
    console.log("data saved")
}).catch(err=>{
    console.log("err is : ",err)
})
