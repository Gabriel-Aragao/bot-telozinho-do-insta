import fs from 'fs';
function postEmail(request, response){

  const method = request.method;

  switch(method){
    case "POST":
      const body = request.body;
      fs.writeFileSync("./public/latestNews.json", JSON.stringify(body, null, 2), err => {
        if(err){
          console.log(err);
        }
      });
  }
  response.json({"ok":true})
}

export default postEmail;