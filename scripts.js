<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding For Fun</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>
    <div id="header">
        <h1>Welcome to Coding For Fun</h1>
        <nav>
            <ul>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#contribute">Contribute</a></li>
                <li><a href="#feedback">Feedback</a></li>
            </ul>
        </nav>
    </div>

    <div id="getting-started">
        <!-- Your content here -->
    </div>

    <div id="features">
        <!-- Your content here -->
    </div>

    <div id="tutorials">
        <!-- Your content here -->
    </div>

    <div id="projects">
        <!-- Your content here -->
    </div>

    <div id="community">
        <!-- Your content here -->
    </div>

    <div id="contribute">
        <!-- Your content here -->
    </div>

    <div id="feedback">
        <!-- Your content here -->
    </div>

    <div id="footer">
        <!-- Your content here -->
    </div>

    <script>
        // JavaScript for changing background color on menu item click
        const navLinks = document.querySelectorAll('#header ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                const section = document.getElementById(sectionId);
                section.style.backgroundColor = '#007acc'; // Change to the desired color
            });
        });
    </script>
</body>
</html>
