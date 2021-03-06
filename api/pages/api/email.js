import fs from 'fs';

async function postEmail(request, response){

  const method = request.method;


  switch(method){
    case "POST":
      const body = request.body;
      const sender = body.envelope.from;
      let content = body.html;
      content = content.split("\r").join("");
      content = content.split("\n").join("");
      content = content.split("\t").join("");
      content = content.split("\\").join("");
      const res = {
        "sender": sender,
        "content": content
      };

      response.json(res);
  }
  response.json({"ok":true})
}

export default postEmail;