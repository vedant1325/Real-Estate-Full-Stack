export const EMAIL_HTML = (subject, text) => `
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estate Newsletter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4; /* Light gray background for the whole email */
            color: #333;
        }

        .container {
            width: 100%;
            padding: 20px;
        }

        .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: white; /* White background for the email content */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Navbar Section */
        .navbar {
            background:  #2b466e; 
            padding: 15px;
            text-align: center;
        }

        .navbar img {
            max-height: 50px;
            width: auto;  /* Make sure the logo maintains its aspect ratio */
        }

        /* Header Section */
        .email-header {
           border-radius: 25px ;
            background-color: #324561;
            color: #fff;
            text-align: center;
            padding:20px;
            margin: 3px;
        }

        .email-header h1 {
            margin: 0;
            font-size: 24px;
        }

        .email-body {
            padding: 20px;
            background-color: white; /* Very light gray background for the body */
        }

        .email-body h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }

        .email-body p {
            font-size: 16px;
            color: #666;
            line-height: 1.5;
        }

        .email-footer {
            background: linear-gradient(to right, #4f6ea1, #1e3a8a); 
            padding: 15px;
            text-align: center;
            font-size: 14px;
            color: white;
        }

        .button {
            background-color: #4f6ea1; /* Medium gray for button */
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            margin-top: 20px;
        }

        .button:hover {
            transform: scale(1.04); /* Darker gray for hover effect */
        }

        @media only screen and (max-width: 600px) {
            .email-wrapper {
                width: 100%;
                padding: 10px;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="email-wrapper">
            
            <!-- Navbar Section -->
            <div class="navbar">
                <a href="#">
                    <img src="https://res.cloudinary.com/dfqpw8oqh/image/upload/v1735550130/Untitled_design_1_aqc1to.png" alt="Estate Logo" />
                </a>
            </div>

            <!-- Header Section -->
            <div class="email-header">
                <h1>Estate Newsletter</h1>
            </div>

            <!-- Body Section -->
            <div class="email-body">
                <h2>${subject}</h2>
                <p>${text}</p>
            </div>

            <!-- Footer Section -->
            <div class="email-footer">
                <p>&copy; 2025 Estate. All rights reserved.</p>
            </div>
        </div>
    </div>

</body>
</html>
`;
