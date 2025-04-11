# EMBRACECANVAS LTD Website

This repository contains the website for EMBRACECANVAS LTD, a web design and hosting company established in 2024.

## Website Structure

The website consists of the following pages:
- Homepage (index.html)
- About Us (about.html)
- Services (services.html)
- Hosting (hosting.html)
- Contact (contact.html)
- Privacy Policy (privacy-policy.html)
- Terms of Service (terms-of-service.html)

## Company Information

- **Company Name:** EMBRACECANVAS LTD
- **Address:** 7 Coronation Road, Dephna House, Launchese #105, London, United Kingdom, NW10 7PQ
- **Established:** 2024
- **Email:** info@embracecanvas.com
- **Phone:** +44 20 1234 5678

## How to Preview the Website

There are several methods you can use to preview this website during development:

### Method 1: Using Node.js and http-server (Recommended)

1. Make sure you have Node.js installed on your system. You can check by running:
   ```
   node -v
   ```

2. If you don't have Node.js, download and install it from [nodejs.org](https://nodejs.org/)

3. Run the following command from the project root directory to start a development server:
   ```
   npx http-server -p 3000 -o
   ```

   This will:
   - Start a local server on port 3000
   - Automatically open your default browser to view the site
   - Serve the website at http://localhost:3000

4. The server will continue running in the terminal. To stop it, press `Ctrl+C`

### Method 2: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code:
   - Open VS Code
   - Go to Extensions (or press `Ctrl+Shift+X`)
   - Search for "Live Server"
   - Install the extension by Ritwick Dey

2. Once installed, right-click on any HTML file in the project and select "Open with Live Server" or click the "Go Live" button in the status bar.

3. The website will open in your default browser and automatically reload when you make changes to the files.

### Method 3: Using Python's Built-in HTTP Server

If you have Python installed, you can use its built-in HTTP server:

1. For Python 3:
   ```
   python -m http.server 3000
   ```

2. For Python 2:
   ```
   python -m SimpleHTTPServer 3000
   ```

3. Open your browser and navigate to http://localhost:3000

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome for icons
- Google Fonts for typography

## Future Improvements

Potential improvements for the website include:
- Implementing a contact form backend
- Adding a blog section
- Integrating a CMS for easier content management
- Adding case studies of client projects