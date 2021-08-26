<?php
    header("Content-Type: text/html; charset=utf-8");

    $key = $_POST['key'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $RETAIL_URL = 'https://instagram234.retailcrm.ru';
    $RETAIL_API_KEY = 'ivLKeYDHvgQTt0KSqwovmfw4dWy63gO4'; 

    $postData = http_build_query(array( 'order' => json_encode(array(
        'phone' => $phone,
        'name' => $name,
    )), 'apiKey' => $RETAIL_API_KEY, 'by' => 'id' ));

    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postData
        )
    );

    $context  = stream_context_create($opts);
    $result = json_decode(
        file_get_contents(
            $RETAIL_URL . "/api/v4/orders/{$key}/edit", 
            false, 
            $context
        ),
        true
    );

    echo '';
?>