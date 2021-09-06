<?php
    header("Content-Type: text/html; charset=utf-8");

    $email = "vrassrochky.by@gmail.com";
    $RETAIL_URL = 'https://instagram234.retailcrm.ru';
    $RETAIL_API_KEY = 'ivLKeYDHvgQTt0KSqwovmfw4dWy63gO4';

    $id = $_POST['id'];
    $title = $_POST['title'];
    $price = $_POST['price'];
    $method = $_POST['method'];

    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $postData = http_build_query(array(
        'order' => json_encode(array(
            'firstName' => $name,
            'phone' => $phone,
            'customFields' => array(
                'id_osnovnogo' => $id,
                'visosiblyad' => 'new',
                'ab_pososi' => 'yes',
            ),
            'orderMethod' => $method,
            'items' => array(
                array(
                    'initialPrice' => $price,
                    'offer' => array(
                        'externalId' => $id,
                    )
                ),
            )
        )),
        'apiKey' => $RETAIL_API_KEY,
    ));

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
            $RETAIL_URL . '/api/v4/orders/create', 
            false, 
            $context
        ),
        true
    );
    
    $order_id = json_encode($result['id']);

    $text = "
        Допродажа.
        Информация о покупателе:

        Имя: ".$_POST['name']."
        Телефон: ".$_POST['phone']."
        Время заказа: ".date("Y-m-d H:i:s");

    if (mail($email, $title, $text)) {
        echo $order_id; 
    } else {
        echo "Ошибка.";
    }
?>
