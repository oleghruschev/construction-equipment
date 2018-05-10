<?php
  include 'lib/Twig/Autoloader.php';
  Twig_Autoloader::register();

  try {
    $loader = new Twig_Loader_Filesystem('templates');

    $twig = new Twig_Environment($loader);

    //Массив с услугами
    $services = array(
      array('title' => 'ЗАСЫПКА ТРАНШЕЙ', 
            'value' => 'Нашей компанией осуществляется засыпка траншей в Екатеринбурге, востребованная предприятиями и частными лицами.',
            'row' => true),
      array('title' => 'ВЫВ0З МУСОРА', 
            'value' => 'Вывоз мусора — составляющая деятельности производств и бытовых предприятий'),
      array('title' => 'ДОСТАВКА', 
            'value' => 'Отсев образуется после разработки твердых горных пород и является востребованным материалом в строительстве.',
            'row' => true),
      array('title' => 'ПОДЪЕМ ГРУЗОВ',
            'value' => 'Выполнение широкого спектра высотных операций сложно представить без специализированной техники.')
    );

    $template = $twig->loadTemplate('main_child.html');

    echo $template->render(array('services' => $services));

  } catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
  }
?>
