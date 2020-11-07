<?php

        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['email'] . "\r\n";

        $message = '<h1>Message envoyé depuis votre ePortfolio</h1>
        <p>
        <b>Détails : </b>' . $_POST['firstname'] . '<br>
        <b>Email : </b>' . $_POST['email'] . '<br>
        <b>téléphone : </b>' . $_POST['phone'] . '<br>
        <b>Pays : </b>' .$_POST['country'] . '<br>
        <b>Sujet : </b>' . $_POST['describe'] . '<br>
        <b>Rendez-vous : </b>' . $_POST['rdv'] . '</p>';

        $retour = mail('darkbigbossgames@gmail.com', 'Envoi depuis la page contact de votre ePortfolio', $message, $entete);

    ?>
