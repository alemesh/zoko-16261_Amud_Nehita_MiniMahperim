<?php
//****************************************
//edit here
$senderName = 'Web2info - Zoko-Amud-Nehita-MiniMahperim';
$senderEmail = $_SERVER['SERVER_NAME'];
$targetEmail = [];
$targetEmail = ['gil.pinkas@zoko.co.il', 'israel@gofmans.co.il', 'info@zoko.co.il'];
//$targetEmail = ['alemesh@acceptic.com'];
//$messageSubject = 'Message from web-site - '. $_SERVER['SERVER_NAME'];
$messageSubject = 'Message from web-site - '. $_SERVER['SERVER_NAME'];
$redirectToReferer = true;
$redirectURL = $_SERVER['SERVER_NAME'];
//****************************************

// mail content

$last_name = $_POST['name'];
$mobile = $_POST['tel'];
$email = $_POST['email'];
$company = $_POST['company'];


$oid = $_POST['oid'];
$retURL = $_POST['retURL'];
$zokokSource = "ZOKO's Website";
$zokoDescription = "Zoko-Amud-Nehita-MiniMahperim";
$bl_Department__c = 'a050J00000UNQtE';



// prepare message text
$messageText =	'Web2info - Zoko-Amud-Nehita-MiniMahperim'."\n".
    'Name: '.$last_name."\n".
    'Phone: '.$mobile."\n".
    'Email: '.$email."\n".
    'Company: '.$company."\n";


// send email
$senderName = "=?UTF-8?B?" . base64_encode($senderName) . "?=";
$messageSubject = "=?UTF-8?B?" . base64_encode($messageSubject) . "?=";
$messageHeaders = "From: " . $senderName . " <" . $email . ">\r\n"
    . "MIME-Version: 1.0" . "\r\n"
    . "Content-type: text/plain; charset=UTF-8" . "\r\n";

//if (preg_match('/^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4}$/',$targetEmail,$matches))
foreach ($targetEmail as $val){
    mail($val, $messageSubject, $messageText, $messageHeaders);
}


//========== api sending========================
$url = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';

$params = array(
    'last_name' => $last_name,
    'mobile' => $mobile,
    'email' => $email,
    'company' => $company,
    'LeadSource' => $zokokSource,
    'description' => $zokoDescription,
    'bl_Department__c' => $bl_Department__c,
    'oid' => $oid,
    'retURL' => $retURL
);

$result = file_get_contents($url, false, stream_context_create(array(
    'http' => array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => http_build_query($params)
    )
)));
//========== finish api sending========================




//========== xml backups lids ================

$today = date("F j, Y, g:i a");

$file = 'sample.csv';
$tofile = "$last_name;$mobile;$email;$company;$today\n";
$bom = "\xEF\xBB\xBF";
@file_put_contents($file, $bom . $tofile . file_get_contents($file));


$redirectToTnxPage = 'https://web2info.co.il/zoko-amud-nehita-minimahperim/thanks-page.html';

// redirect
if($redirectToReferer) {
    header("Location: ".$redirectToTnxPage);
} else {
    header("Location: ".$redirectURL);
}

