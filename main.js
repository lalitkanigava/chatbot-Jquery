let botName="<span class='bot'>Natasha: </span>"
var userName="";

function sendMessage(message){
         let preMsg= $("#chat-container").html();
         if(preMsg.length>0)
         {
            preMsg=preMsg +"<br>";
         }
         $("#chat-container").html(` ${preMsg} <span class='current_message'>  ${ botName} ${message} </span>`);
         $(".current_message").hide();
         $(".current_message").delay(400).fadeIn();
         $(".current_message").removeClass("current_message");
         $("#chat-container").scrollTop($("#chat-container").prop("scrollHeight"));
   
}
function getUserName(){
         sendMessage("Hello, what is your name?");
}

function bot_replay(message){           
          if(userName.length == 0){
          userName=message;
          sendMessage(`Nice to meet you   <b> ${userName.toUpperCase()} </b> , How are You?`);
          }

          if(message.indexOf("how are you?")>=0 || message.indexOf("how are you?")>=0 || message.indexOf("and you?")>=0)
          {
             sendMessage("Thanks, I am  fine.");
          }

          if(message.indexOf("where is your office location? ")>=0||message.indexOf("office location")>=0){
             sendMessage("Chetak Center, Indore. ");
          }

          if(message.indexOf("working days of your company? ")>=0){
             sendMessage("Monday to Saturday");
          }

          if(message.indexOf("office timing")>=0)
          {
             sendMessage("9am-6pm.");
          }                            
}


$(document).ready(function(){
   getUserName();
    
   function userMessage(){
      let username="<span class='username'>You: </span>"
      let message = $("#message").val();

      if(message.trim().length>=1){
         let preMsg= $("#chat-container").html();
         if(preMsg.length>0)
         {
            preMsg=preMsg +"<br>";
         }
         $("#chat-container").html( preMsg  + username + message);
         $("#chat-container").scrollTop($("#chat-container").prop("scrollHeight"));
      }
      bot_replay(message);
      $("#message").val("");
     

   }

   $("#message").keypress(function(event){
      if(event.which==13){
            userMessage();
         event.preventDefault();
      }
   })

   $("#send").click(function(){
      userMessage();
   });
});