<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Dashboard</title>
</head>
<body>
    <?php 
    session_start();
    if(isset($_POST["name"]) && $_POST["email"]){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
    }
    ?>
    <h1>Welcome <?php $name ?></h1>
    <p><?php $email ?></p>
    <p><?php $phone ?></p>

    <button class="px-3 py-2 bg-blue-400 rounded"><a href="logout.php">Log out</a></button>
</body>
</html>