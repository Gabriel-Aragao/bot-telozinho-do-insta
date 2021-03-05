import fs from 'fs';

function postEmail(request, response){


    const method = request.method;
    if(method === "POST"){
      response.json(request.body);
    } else {
      response.json({"ok":true});
    }

}

export default postEmail;