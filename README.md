# QR Code Generator

A simple Node.js application that generates QR codes from user input URLs and saves them as image files.

## Features

- Interactive command-line interface using Inquirer.js
- Generates QR codes from URLs or text input
- Saves QR codes as SVG files
- Stores user input in a text file for reference

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install the required dependencies:

npm install

text

## Dependencies

This project uses the following npm packages:
- `inquirer` - For interactive command-line prompts
- `qr-image` - For generating QR code images

## Usage

1. Run the application:

node index.js

text

2. When prompted, enter a URL (e.g., `https://www.google.com`)

3. The application will:
   - Generate a QR code and save it as an PNG file in the current directory
   - Save your input URL to `answer.txt` for reference

4. Scan the generated QR code with your phone's camera or QR scanner app to test it

## File Structure

- `index.js` - Main application file
- `package.json` - Project dependencies and metadata
- `answer.txt` - Stores the user input (generated after first run)
- `*.png` - Generated QR code files

## Example

Enter a URL: https://github.com

text

This will create a QR code that, when scanned, will open GitHub in your browser.

## Notes

- The generated QR codes work with any URL or text input
- SVG format provides scalable, high-quality images
- Make sure to test your QR codes with a scanner app to verify they work correctly
