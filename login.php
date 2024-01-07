<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Log in</title>
</head>

<body>
<?php
include("config.php");

if (isset($_POST["email"]) && isset($_POST["password"])) {
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = $_POST["password"];

    // Retrieve the hashed password from the database
    $sql = "SELECT name, email, phone, password FROM user WHERE email = ?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    
    $result = mysqli_stmt_get_result($stmt);
    
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $hashed_password = $row["password"];
        
        // Verify the provided password against the stored hashed password
        if (password_verify($password, $hashed_password)) {
            session_start();
            $_SESSION["username"] = $row["name"];
            $_SESSION["email"] = $row["email"];
            $_SESSION["phone"] = $row["phone"];
            header("Location: dashboard.php");
            exit();
        } else {
            echo '<div class="text-red-900">Incorrect email or password.</div>';
        }
    } else {
        echo '<div class="text-red-900">User with this email does not exist.</div>';
    }
    
    mysqli_stmt_close($stmt);
}
?>


    <section class="text-gray-600 body-font overflow-hidden bg-slate-400 p-10 flex justify-center items-center h-screen">
        <div class="container px-5 py-24 mx-auto my-9 rounded-lg flex justify-center items-center">
            <div class="lg:w-4/5 mx-auto flex flex-wrap bg-white shadow-2xl rounded items-center justify-center">
                <img alt="login" class=" lg:w-[44%] hidden md:block  lg:h-auto md:ml-10  md:object-cover md:object-center rounded text-center md:-mr-5" src="signup.jpeg">
                <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post" class="md:w-1/2 bg-gray-100 w-full rounded-lg flex flex-col justify-center md:ml-auto mt-10 md:mt-0 px-20 py-28 h-full">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Log in</h2>

                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>

                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <button name="submit" type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log
                        in</button>
                    <p class="text-xs text-gray-500 mt-3">Don't have an account? sign up <a href="signup.php" class="text-blue-600">here</a>.
                    </p>
                </form>

            </div>
        </div>
    </section>
</body>

</html>