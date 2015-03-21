/* This is the information that will display in your Window -> Plugins */
SCRIPT_NAME = "Bouncer Connect";
SCRIPT_VER  = "1.0.0";
SCRIPT_DESC = "Allows you to connect to a bouncer";


/* 
* Uses the 'Server Notice' default message string as a hook and 
* sends "my_password_here" to the server when there is a matching password request
*/
hook_print("Server Notice",function(msg) {

        if ( !!msg[0].match(/QUOTE PASS thepassword/) ) {
                command("QUOTE PASS my_password_here");
        }

});
