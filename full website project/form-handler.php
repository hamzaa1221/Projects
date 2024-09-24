<?php

$name = $_post['name'];
$visitor_email = $_post['email'];
$subject = $_post['subject'];
$message = $_post['Message'];

$email_form = 'hamzau2196@gmail.com';

$email_subject =' New Form Submition';

$email_body = "User Name:$name.\n".
                "User Email:$visitor_email.\n".
                "User Subject:$subject.\n".
                "User Message:$message.\n";



                $to='hamzau2196@gmail.com'

                $headers= "form:$email_form \r\n";
                $headers.="Reply-To:$visitor_email\r\n";


                mail($to,$email_subject,$email_body,$headers);

                header("Location:contect,html")










?>