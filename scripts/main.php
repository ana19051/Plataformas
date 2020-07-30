<?php
$salt = "AMAG2020";
echo md5($_POST['password'].$salt);
?>
