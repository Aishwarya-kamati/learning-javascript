let user=prompt("enter a s, w ,g");
let ran=Math.floor(Math.random()*3);
let cpu=["s","w","g"][ran];
let i=1;
let result=" ";

    let match=(user,cpu)=>{
        if(cpu===user){
          return "nobody";
        }
        else if(cpu=="s"&& user=="w"){
          return "cpu";
        }
        else if(cpu=="s"&& user=="g"){
          return "user";
        }
        else if(cpu=="w"&& user=="g"){
          return "cpu";
        }
        else if(cpu=="w"&& user=="s"){
          return "user";
        }
        else if(cpu=="g"&& user=="w"){
          return "user";
        }
        else if(cpu=="g"&& user=="s"){
          return "cpu";
        }
      
      }     
result=match(user,cpu);
document.write(`cpu:${cpu} <br> user:${user} <br> result:${result} <br> you attempted is over ${i}`);
i++;


