<?php
    header('Content-Type: text/html; charset=utf-8');
if (isset($_POST['email'])) {

    // Edit The 2 Lines Below As Required
    $email_to = "email@website.com";
    $email_subject = "Email From : We School Website";

    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required

    $email_message = "form details below. \n\n";

    function clean_string($string){
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "message: ".clean_string($message)."\n";

    //Create Email Headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n".
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

<?php 
    echo "<script type='text/javascript'>alert('Thanks For Your Contact, We Will Read Your Message and Answer Soon.')</script>";
    echo "<script> window.location.assign('../index.html'); </script>";
?>

<?php } ?>
