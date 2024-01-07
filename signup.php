<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Signup</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="Themesdesign" />

    <link rel="shortcut icon" href="images/favicon.ico">

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

    <!--Material Icon -->
    <link rel="stylesheet" type="text/css" href="css/materialdesignicons.min.css" />

    <!-- Custom  Css -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />

</head>

<?php
include("config.php");

if (isset($_POST["submit"])) {
    // Sanitize user input to prevent SQL injection
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);

    // Hash the password securely using PHP's password_hash function
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Check if the email already exists in the database
    $sql_check = "SELECT email FROM `user` WHERE `email` = '$email'";
    $result_check = mysqli_query($conn, $sql_check);

    if (mysqli_num_rows($result_check) > 0) {
        $exists = true;
        echo "User with this email already exists.";
    } else {
        // Insert new user if not exists
        $sql_insert = "INSERT INTO `user` (`name`, `email`, `phone`, `password`) VALUES (, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql_insert);

        if ($stmt) {
            // Bind parameters and execute the prepared statement
            mysqli_stmt_bind_param($stmt, "ssss", $username, $email, $phone, $hashed_password);
            if (mysqli_stmt_execute($stmt)) {
                session_start();
                $_SESSION['username'] = $username;
                $_SESSION['email'] = $email;
                $_SESSION['phone'] = $phone;
                header("Location: dashboard.php");
                exit(); // Terminate script execution after redirection
            } else {
                echo "Error: " . mysqli_stmt_error($stmt);
            }

            mysqli_stmt_close($stmt);
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
}
?>



<body>

    <!-- START -->
    <div class="account-pages">
        <div class="container">
            <div class="row g-0 bg-white align-items-center">

                <div class="col-lg-6">
                    <div class="bg-login">
                        <img src="images/bg-login-1.png" class="img-fluid" alt="">
                        <div class="auth-contain">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="text-center text-white my-4 p-4">
                                            <h3>Learn and Practice</h3>
                                            <p class="text-white-50 f-20 mt-3">No matter what experience you have.We
                                                will help you start
                                                coding in minutes.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="text-center text-white my-4 p-4">
                                            <h3>Learn and Practice</h3>
                                            <p class="text-white-50 f-20 mt-3">No matter what experience you have.We
                                                will help you start
                                                coding in minutes.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="text-center text-white my-4 p-4">
                                            <h3>Learn and Practice</h3>
                                            <p class="text-white-50 f-20 mt-3">No matter what experience you have.We
                                                will help you start
                                                coding in minutes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-6">
                    <div class="auth-box">
                        <div class="mb-4 mb-md-5 text-center">
                            <!-- Add company logo -->
                            <!-- <a href="javascript:void(0);" class="auth-logo">
                                <img src="images/logo-dark.png" height="24" alt="">
                            </a> -->
                        </div>
                        <div class="auth-content">
                            <div class="mb-3 pb-3 text-center">
                                <h4 class="fw-normal">Register Account to <span class="fw-bold">First Hash</span></h4>
                                <p class="text-muted">Get your First Hash account now</p>
                            </div>

                            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                                <div class="form-floating form-floating-custom mb-3">
                                    <input type="text" name="username" class="form-control" id="input-username" placeholder="Enter Name">
                                    <label for="input-username">Username</label>
                                </div>
                                <div class="form-floating form-floating-custom mb-3">
                                    <input type="email" name="email" class="form-control" id="input-email" placeholder="Enter Email">
                                    <label for="input-email">Email</label>
                                </div>
                                <div class="form-floating form-floating-custom mb-3">
                                    <input type="tel" name="phone" class="form-control" id="input-phone" placeholder="Enter Phone">
                                    <label for="input-phone">Phone</label>
                                </div>
                                <div class="form-floating form-floating-custom mb-3 form-password auth-pass-inputgroup">
                                    <input type="password" name="password" class="form-control" id="password-input" placeholder="Enter Password">
                                    <button type="button" class="btn btn-link position-absolute h-100 end-0 top-0" id="password-addon">
                                        <i class="mdi mdi-eye-outline font-size-18 text-muted"></i>
                                    </button>
                                    <label for="input-password">Password</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label text-muted f-15" for="flexCheckDefault">
                                        I agree to all the term and condition.
                                    </label>
                                </div>
                                <div class="mt-3">
                                    <button class="btn btn-dark shadow-none w-100" type="submit" name="submit">Register</button>
                                </div>
                                <hr>
                                <div class="mt-3 text-center">
                                    <p class="mb-0 text-muted">Already have an account ?<a href="signin.html" class="text-success fw-bold text-decoraton-underline ms-1"> Sign in
                                        </a></p>
                                </div>
                            </form><!-- end form -->
                            <div class="row justify-content-center align-items-center mt-4 mt-md-5">
                                <div class="col-4">
                                    <div class="client-images my-3 my-md-0">
                                        <img src="images/img-1.png" class="mx-auto d-block img-fluid" alt="logo-img">
                                    </div>
                                </div>
                                <!-- end col -->
                                <div class="col-4">
                                    <div class="client-images my-3 my-md-0">
                                        <img src="images/img-2.png" class="mx-auto d-block img-fluid" alt="logo-img">
                                    </div>
                                </div>
                                <!-- end col -->
                                <div class="col-4">
                                    <div class="client-images my-3 my-md-0">
                                        <img src="images/img-3.png" class="mx-auto d-block img-fluid" alt="logo-img">
                                    </div>
                                </div>
                                <!-- end col -->
                            </div>
                            <!-- end row -->
                        </div><!-- auth content -->
                    </div>
                    <!-- end authbox -->
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
    <!-- END -->
    <!-- bootstrap -->
    <script src="js/bootstrap.bundle.min.js"></script>
    <!-- CUSTOM JS -->
    <script src="js/app.js"></script>
</body>

</html>