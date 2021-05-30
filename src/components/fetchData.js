import jwt from "jsonwebtoken";


// this token gets you access to almost all of Emsi's jpa data
const getToken = () => jwt.sign({
  exp: (() => Math.floor(Date.now() / 1000) + 60)(),
  "iss": "learn-web-dev-camper-key"
}, "web-dev-camper-secret");

// Feel free to call a state setter instead of a console log
const fetchData = (search) => {
		let jobData = fetch(`https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/skills?q=${search}&limit=50`, {
		  headers: {
		    "Content-Type": "application/json",      
		    authorization: `Bearer ${getToken()}`,
		  },
		})
		.then(res => res.json()).then(res => res.data)

	return jobData;
}

export default fetchData;