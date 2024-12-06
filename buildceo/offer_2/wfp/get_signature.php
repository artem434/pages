<?php 

$data = json_decode(file_get_contents('php://input'), 1);

$string= $data['merchantAccount'] . ';'
        .$data['merchantDomainName'] . ';'
        .$data['orderReference'] . ';'
        .$data['orderDate'] . ';'
        .$data['amount'] . ';'
        .$data['currency'] . ';'
        .$data['productName'] . ';'
        .$data['productCount'] . ';'
        .$data['productPrice'];

$secret_key = '6776940142a70f12883b7496a521282898e2bf0a';    

$hash = hash_hmac("md5",$string,$secret_key);

die(json_encode(['hash' => $hash]));
