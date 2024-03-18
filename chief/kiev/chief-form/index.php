<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Эффективный руководитель — регистрация</title>
	<link href="css/bootstrap.min.css" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&subset=cyrillic,cyrillic-ext" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,700" rel="stylesheet">


	<link rel="stylesheet/less" type="text/css" href="css/style.less" />
	<script src="js/less.min.js"></script>

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TQF53N');</script>
    <!-- End Google Tag Manager -->
 
</head>
<body>

	<section class="form-section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="logo text-center">
						<a target="_blank" href="http://www.constructor.biz.ua/">
							<img src="img/bc_logo_white.svg" width="220px">
						</a>
					</div>
				</div>
			</div>
		</div>
        <div class="container">
            <div class="form">
                <div class="form-header">
                    <div class="event__type">
                        <div style="display: flex;min-height: 27px;">
                            <span>Практикум</span>
                            <i><img src="img/arrow-yelow-icon.svg" alt=""></i>
                        </div>
                        <div class="event__type--description">Кирилла Куницкого</div>
                    </div>
                	<div class="form-registration">
                        <span>Эффективный руководитель</span>
                    </div>
                    <div class="icons">
                        <div class="iten-icon">
                            <img src="img/date-icon-black.svg" alt="">
                            <span>7 июля</span>
                        </div>
                        <div class="iten-icon">
                            <img src="img/location_icon-black.svg" alt="">
                            <span>Киев</span>
                        </div>
                    </div>
                </div>
                <div class="form-content">
                    <div class="form-content-left">
                        <div class="content">
                            <div class="content-item price line-through">
                                <span>Полная стоимость:</span>
                                <span><span data-total-price></span> грн</span>
                            </div>
                            <div class="content-item price sale-price full">
                                <span>Стоимость со скидкой:</span>
                                <span><span data-price></span> грн</span>
                            </div>
                            <div class="content-item more-members">
                                <span>при оплате до <span data-deadline></span></span>
                            </div>
                            <div class="timer">
                                <div>До поднятия цены осталось:</div>
                                <div class="timer_content" style="padding-top: 0;"></div>
                            </div>
                        </div>
                        <div class="content danger">
                            <div class="danger-text">
                                Количество мест ограничено, поэтому регистрация может закрыться в любой момент.
                            </div>
                        </div>
                    </div>
                    <div class="form-content-right">
                        <div class="form-inputs">
                            <form action="http://proceed.bizconstructor.com/" data-rules='{"name":"required","email":"required", "phone":"required"}'>
                                <div class="input">
                                    <label for="name">Имя и фамилия</label>
                                    <input type="text" id="name" name="name" required>
                                    <div class="response">
                                        <img class="error" src="build/img/error-icon.svg" alt="">
                                        <img class="valid" src="build/img/valid-icon.svg" alt="">
                                    </div>
                                </div>
                                <div class="input">
                                    <label for="phone">Телефон</label>
                                    <input type="text" id="phone" name="phone"  data-phone data-mask="+38 099 999 99 99">
                                    <div class="response">
                                        <img class="error" src="build/img/error-icon.svg" alt="">
                                        <img class="valid" src="build/img/valid-icon.svg" alt="">
                                    </div>
                                </div>
                                <div class="input">
                                    <label for="email">E-mail</label>
                                    <input type="email" id="email" name="email" data-email required>
                                    <div class="response">
                                        <img class="error" src="build/img/error-icon.svg" alt="">
                                        <img class="valid" src="build/img/valid-icon.svg" alt="">
                                    </div>
                                </div>
                                <div class="input">
                                    <label for="promocode">Промо-код</label>
                                    <input type="text" id="promocode" name="promocode" >
                                </div>
                                <div>
                                    <button class="send-form button blue">Регистрация</button>
                                </div>
                                <div class="politics">
                                    Нажимая кнопку «Регистриция», я даю согласие на обработку моих персональных данных согласно
                                    <a href="http://www.constructor.biz.ua/privacy/" target="_blank">политике конфиденциальности</a>
                                </div>
                                <input type="hidden" name="utm_source" value="<?=$_GET['utm_source']?>">
                                <input type="hidden" name="utm_medium" value="<?=$_GET['utm_medium']?>">
                                <input type="hidden" name="utm_term" value="<?=$_GET['utm_term']?>">
                                <input type="hidden" name="utm_content" value="<?=$_GET['utm_content']?>">
                                <input type="hidden" name="utm_campaign" value="<?=$_GET['utm_campaign']?>">
                                <input type="hidden" name="ref" value="<?=$_GET['ref']?>">
                                <input type="hidden" name="landing_id" value="725">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>	
    <script src="http://cdn.bizconstructor.com/scripts.js"></script>
    <script>
        autoPriceChange('[data-price]','[data-total-price]', '[data-deadline]');
    </script>
</body>
</html>
