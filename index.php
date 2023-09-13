<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Инструкция к биснес-процессу / Бизнес-конструктор</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="http://constructor.biz.ua/favicon.ico" type="image/x-icon" />    
	<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Ubuntu:600,500,400,300,200,100,300italic,400italic,500,500italic'>
	<link rel="stylesheet" href="css/css_reset.css"/>
	<link rel="stylesheet" href="css/bootstrap.css"/>
	<link rel="stylesheet" href="css/animate.css"/>
	<link rel="stylesheet" href="css/font-awesome.min.css"/>
	<link rel="stylesheet" href="css/main.css"/>
	<!--[if lt IE 10]>
	  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<!-- Facebook Pixel Code -->
	<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','422318891243887');fbq('track',"PageView");fbq('track','ViewContent');</script>
	<noscript><img height=1 width=1 style=display:none src="https://www.facebook.com/tr?id=422318891243887&ev=PageView&noscript=1"/></noscript>
	<!-- End Facebook Pixel Code -->
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TQF53N');</script>
	<!-- End Google Tag Manager -->

</head>
<body>


	<!-- BEGIN Preloader -->
	<div id="preloader">
		<img src="img/tail-spin.svg" alt=""/>
	</div>
	<!-- END Preloader -->

	<!-- BEGIN block_1 -->
	<div id="block_1_bg">
		<div class="container">
			<div class="row">
				<div id="block_1">
					
					<div class="col-md-3">
						<a href="http://www.constructor.biz.ua/" target="blank">
							<img id="top_logo" src="img/logo.svg" alt=""/>
						</a>
					</div>
					
					<div class="col-md-6">
						<p>
							Единая площадка для развития вашего бизнеса 
						</p>
					</div>
					
					<div class="col-md-3">
						<p>
							<i class="fa fa-phone-square"></i><span>+38 (044)</span><span>220-18-92</span>
						</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<!-- END block_1 -->
	
	<!-- BEGIN block_2 -->
	<div id="block_2_bg">
		<div class="container">
			<div class="row">
				<div id="block_2" class="wow" data-wow-duration="1.3s">
					
					<div class="col-sm-3">
						<img src="img/book.png" alt=""/>
					</div>
					
					<div class="col-sm-9">
						<p class="grey_text">
							Как искоренить хаос в своем бизнесе и <span>наладить системную работу</span> отделов?
						</p>
						
						<div class="hr"></div>
						
						<p class="grey_text">
							Начните со знакомства с <span>правильным построением бизнес-процессов</span> внутри компании!
						</p>
						
						<a class="down scroll_to_form">
							<img src="img/arrow.svg" alt=""/>
						</a>
						
						<h1>
							Инструкция к бизнес-процессу
						</h1>
						
						<p>
							поможет вам понять его суть и наладить системный, продуктивный механизм работы.
						</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<!-- END block_2 -->
	
	<!-- BEGIN block_free -->
	<div id="block_free_bg">
		<div class="container">
			<div class="row">
				<div id="block_free">
					
					<div class="col-sm-3 col-sm-offset-3 col-md-offset-9">
						<div id="free" class="scroll_to_form">
							<img src="img/free_arrow.svg" alt=""/>
						</div>
						
						<p>
							бесплатно
						</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<!-- END block_free -->
	
	<!-- BEGIN block_3 -->
	<div id="block_3_bg">
		<div class="container">
			<div class="row">
				<div id="block_3">
					
					<form id="form" action="http://proceed.bizconstructor.com" method="POST"> 
					<!--<form id="form" action="http://www.constructor.biz.ua/business-process-spasibo/" method="POST"> -->
 					<?php 
					$fields = ['lead_name', 'lead_price', 'product_type', 'product_subject', 'lead_date', 'lead_title', 'ref', 'utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'event_id', 'summ', 'promocode'];
					foreach ($fields as $field){
					echo isset($_GET[$field]) ? '<input name="'.$field.'" type="hidden" value="'.$_GET[$field].'">' : '';
					}?>
						<div>
							<p class="alarm alarm_name"></p>
							<input class="name" type="text" name="name" placeholder="Ваши фамилия, имя *">
						</div> 
						 
						<div>
							<p class="alarm alarm_email"></p>
							<input class="email" type="text" name="email" placeholder="Ваш e-mail *">
						</div> 
						
						<div>
							<p class="alarm alarm_phone"></p>
							<input class="phone phone_key" type="text" name="phone" placeholder="Ваш телефон *">
						</div>
						
						<input type="hidden" class="href" name="href" value="">
						<input type="hidden" name="unbounce" value="1">
						
						<div>
							<input id="form_send" class="go" type="submit" value="Получить инструкцию">
						</div>
						
					</form>
					
				</div>
			</div>
		</div>
	</div>
	<!-- END block_3 -->
	
	<!-- BEGIN block_4 -->
	<div id="block_4_bg">
		<div class="container">
			<div class="row">
				<div id="block_4">
				
					<p>
						Этот документ определит:
					</p>
					
					<div id="service">
						<div class="wow" data-wow-duration="1s" data-wow-delay="0.2s">
							<img src="img/service_1.png" alt=""/>
							<p>
								Участников бизнес-процессов и их зоны ответственности
							</p>
						</div>
						
						<div class="wow" data-wow-duration="1s" data-wow-delay="0.3s">
							<img src="img/service_2.png" alt=""/>
							<p>
								Порядок<br/> успешного выполнения
							</p>
						</div>
						
						<div class="wow" data-wow-duration="1s" data-wow-delay="0.4s">
							<img src="img/service_3.png" alt=""/>
							<p>
								Проблемные<br/> зоны
							</p>
						</div>
						
						<div class="wow" data-wow-duration="1s" data-wow-delay="0.5s">
							<img src="img/service_4.png" alt=""/>
							<p>
								Правильную интерпретацию и внедрение
							</p>
						</div>
						
						<div class="wow" data-wow-duration="1s" data-wow-delay="0.6s">
							<img src="img/service_5.png" alt=""/>
							<p>
								Набор показателей для оценки эффективности
							</p>
						</div>
					</div>
					
					<a class="down center scroll_2">
						<img src="img/arrow.svg" alt=""/>
					</a>
					
					<p class="economy">
						Экономьте время и силы – превращайте свой бизнес в системно работающий механизм.
					</p>
					
					<div class="col-md-12 orange_cont">
						<a class="orange_button scroll_to_form">
							Получить инструкцию бесплатно
						</a>
					</div>
				
				</div>
			</div>
		</div>
	</div>
	<!-- END block_4 -->
	
	<!-- BEGIN block_5 -->
	<div id="block_5_bg">
		<div class="container">
			<div class="row">
				<div id="block_5" class="wow" data-wow-duration="1s">
				
					<div class="col-sm-4">
						<img src="img/kirill.jpg" alt=""/>
					</div>
				
					<div class="col-sm-8">
						<p>
							Автор документов Кирилл Куницкий
						</p>
						
						<p>
							Предприниматель с 12-летним опытом ведения бизнеса, основатель образовательно-консалтингового проекта “Бизнес-Конструктор”. 
							За два года существования “Бизнес-Конструктор”, обучение прошло более 5 тысяч собственников малого и среднего бизнеса..
						</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<!-- END block_5 -->
	
	<!-- BEGIN block_6 -->
	<div id="block_6_bg">
		<div class="container">
			<div class="row">
				<div id="block_6">
				
					<div class="col-md-3">
						<a href="http://www.constructor.biz.ua/" target="blank">
							<img id="bottom_logo" src="img/logo.svg" alt=""/>
						</a>
					</div>
					
					<div class="col-md-4">
						<p>
							Киев, ул. Владимирская, 47, 2 этаж, оф. 1.
						</p>
					</div>
					
					<div class="col-md-3">
						<p>
							&copy; Бизнес-Конструктор, <span id="year"></span>
						</p>
					</div>
					
					<div class="col-md-2">
						<ul id="social_links">
							<li><a href="https://www.facebook.com/business.constructor" target="blank" title="Страница Facebook"><img src="img/social_1.png" alt=""></a></li>
							<li><a href="https://www.youtube.com/user/businessconstructor" target="blank" title="Канал Youtube"><img src="img/social_2.png" alt=""></a></li>
							<li><a href="https://vk.com/business.constructor" target="blank" title="Страница Вконтакте"><img src="img/social_3.png" alt=""></a></li>
							<li><a href="https://www.instagram.com/business_constructor/" target="blank" title="Страница Instagram"><img src="img/social_4.png" alt=""></a></li>
							<li><a href="http://www.kunitsky.com/" target="blank" title="Блог Кирилла Куницкого"><img src="img/social_5.png" alt=""></a></li>
						</ul>
					</div>
				
				</div>
			</div>
		</div>
	</div>
	<!-- END block_6 -->

<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/wow.js"></script>
<script src="js/formvalidation.js"></script>
<script src="js/main.js"></script>
</body>
</html>
