<?php
function currencyConverter($currency_from,$currency_to,$currency_input){
    
    
    $amount = urlencode($currency_input);
    $from_Currency = urlencode($currency_from);
    $to_Currency = urlencode($currency_to);
    $get = file_get_contents("https://www.google.com/finance/converter?a=$amount&from=$from_Currency&to=$to_Currency");
    $get = explode("<span class=bld>",$get);
    $get = explode("</span>",$get[1]);  
    $currency_output = preg_replace("/[^0-9\.]/", null, $get[0]);
    
    return $currency_output;
}

$display_result = false;
$currency_from = "";
$currency_to = "";
$currency_input = 1;

if (isset($_POST['currency_from']) && isset($_POST['currency_to']) && isset($_POST['currency_input']))
{
	$currency_from = $_POST['currency_from'];
	$currency_to = $_POST['currency_to'];
	$currency_input = $_POST['currency_input'];
 
    $currency = currencyConverter($currency_from,$currency_to,$currency_input);
    $display_result = true;
}

echo <<<_END
<html>
	<head>
        <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      
<!--Fonts-->      
    <link href="https://fonts.googleapis.com/css?family=Bahiana" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Unica+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Black+Ops+One" rel="stylesheet">
		<title>Currency conversion</title>
	</head>
	<body>
    
    <link href="bootstrap.min.css" rel="stylesheet">
    <link href="cover.css" rel="stylesheet">
    <link href="2-col-portfolio.css" rel=stylesheet>
      
      
      
    
    
    
	<form method="post" action="currency5.php">
		<label>Enter amount:</label>
		<input type="text" name="currency_input" />
        <label>Select currency (from):</label>
        <select name="currency_from">
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="INR">Indian Rupee</option>
        </select>
        <label>Select currency (to):</label>
        <select name="currency_to">
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="INR">Indian Rupee</option>
        </select>
		<input type="submit" value="Convert!" />
        <p>$currency_input $currency_from is equal to $currency $currency_to</p>
	</form>
	</body>
</html>
_END;

if($display_result) {
    echo $currency_input.' '.$currency_from.' = '.$currency.' '.$currency_to;
}
?>

