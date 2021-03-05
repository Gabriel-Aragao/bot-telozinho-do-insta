import fs from 'fs';
function postEmail(request, response){

  try {
    const method = request.method;
    if(method === "POST"){
      try {
        const body = request.body;
      } catch (error) {
        response.json({"error": "can`t get body", "catched": error});
      }
      try {
        fs.writeFileSync("./public/latestNews.json", JSON.stringify(body, null, 2), err => {
          if(err){
            response.json({"error": "can`t save file", "catched": err});
          }
        });
      } catch (error) {
        response.json({"error": "can`t use fs", "catched": error});
      }
      response.json({"created":true});
    } else {
        response.json({"ok":true})      
    }
  } catch (error) {
    response.json({"error": "can`t switch", "method": method});
  }

}

export default postEmail;