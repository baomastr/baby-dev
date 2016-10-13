<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule("iblock");

//if($APPLICATION->CaptchaCheckCode($_REQUEST["captcha_word"], $_REQUEST["captcha_code"])) {
#echo '<pre>'; print_r($_REQUEST); echo '</pre>';
$el = new CIBlockElement;
$date = date( 'd.m.Y', time());

$PROP=array();
$PROP['56']=htmlspecialcharsEx($_REQUEST['id']);
$PROP['57']=htmlspecialcharsEx($_REQUEST['rating']);

$arLoadProductArray = Array(
  "ACTIVE_FROM"    => $date,
  "IBLOCK_ID"      => 11,
  "NAME"           => htmlspecialcharsEx($_REQUEST['usr_name']),
  "ACTIVE"         => "N",
  "PROPERTY_VALUES"=>$PROP,
  "PREVIEW_TEXT"    => htmlspecialcharsEx($_REQUEST['comment']),
  "CODE"    => htmlspecialcharsEx($_REQUEST['usr_email'])
  );

if($PRODUCT_ID = $el->Add($arLoadProductArray)){

#найдем все отзывы врача и обновим ему рейтинг
$arSelectDoc = Array("ID","PROPERTY_RATING", "PROPERTY_DOC_ID");
$arFilterDoc = Array("IBLOCK_ID"=>11,"PROPERTY_DOC_ID"=>$_REQUEST['id'], "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
$resDoc = CIBlockElement::GetList(Array(), $arFilterDoc, false, Array("nPageSize"=>1000), $arSelectDoc);
$countreviews = 0;
while($obDoc = $resDoc->GetNextElement()){ 
 $arDocProp[$countreviews] = $obDoc->GetFields();  
 $countreviews++;
}

#обновим рейтинг данного врача средним значением
foreach ($arDocProp as $k => $rating):
	$sumL+= $rating['PROPERTY_RATING_VALUE'];
endforeach;
echo $sumR = round($sumL/count($arDocProp),0);
CIBlockElement::SetPropertyValueCode($_REQUEST['id'], "RATING", $sumR);
#echo '<pre>'; print_r($arDocProp); echo '</pre>';
#echo '<pre>'; print_r($_REQUEST); echo '</pre>';
	
#$to  = "kovrezhenkova@openclinics.ru";
$to  = "akopova.e@il7pro.ru, tchorteg@yandex.ru";

$subject = "Новый отзыв на врача на педиатрии";
$message = '
<html>
    <head>
        <title>Новый отзыв от '.$_REQUEST['name'].'</title>
    </head>
    <body>
        <p>Отзыв написал(-а) '.$_REQUEST['usr_name'].'</p>
		<p>О специалисте '.$_REQUEST['h1'].'</p>
        <p>E-mail: '.$_REQUEST['usr_email'].'</p>
        <p>Телефон: '.$_REQUEST['phone'].'</p>        
        <p>Отзыв: '.$_REQUEST['comment'].'</p>
    </body>
</html>';

$headers  = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: zdorovyj-rebjonok.ru <noreply@zdorovyj-rebjonok.ru>\r\n";

mail($to, $subject, $message, $headers);
	#LocalRedirect($_REQUEST['url'].'?review=ok');
}else{
	echo "Error: ".$el->LAST_ERROR;
}

?>
