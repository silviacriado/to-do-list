<?php
    error_reporting(E_ALL);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "to-do-list";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        exit();
    }

    $sql = "SELECT title, date, done FROM to_dos";
    echo $conn->query($sql);
    if ($conn->query($sql) === TRUE) {
        while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
            echo "EMP title :{$row['emp_title']}  <br> ".
                "EMP date : {$row['emp_name']} <br> ".
                "EMP done : {$row['emp_salary']} <br> ".
                "--------------------------------<br>";
            }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        http_response_code(500);
    }

    $conn->close();

?>