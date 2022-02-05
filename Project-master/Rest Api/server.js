require("dotenv").config();
const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");


mongoose.connect(
	"mongodb+srv://elms:" + process.env.MONGO_DB_PW + "@cluster0.7ajrj.mongodb.net/test"
);

    
portNo = process.env.PORT;
host = process.env.HOST;

const server = http.createServer(app);
server.listen(portNo, () => {
	console.log(`Server started on port=> ${host}:${portNo}`);
});
