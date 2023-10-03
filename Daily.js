/**
 * Single-Day Staff Numbers Extraction Script
 *
 * Overview:
 * This script is designed to extract staff numbers for each hour of a single day from a web page,
 * which likely represents staff scheduling or availability data.
 *
 * Instructions for Use:
 * 1. Navigate to the web page containing the staff scheduling data for a single day.
 * 2. Open the browser's developer tools.
 * 3. Access the "Console" tab within the developer tools.
 * 4. Paste and run this script in the console.
 *
 * Key Components and Functionality:
 *
 * 1. Initialize an empty array 'staffNumbers' to store staff availability data.
 * 2. Set up headers for the data, including hours of the day (00:00 to 23:00).
 * 3. Select relevant elements on the web page (likely representing scheduling data).
 * 4. Collect and record staff numbers for each hour by simulating clicks on the elements and
 *    counting related elements with a specific class.
 * 5. Store the collected data in the 'staffNumbers' array.
 * 6. Generate a CSV-formatted string from the collected data.
 * 7. Trigger the download of the CSV file named 'day.csv'.
 *
 * Best Practices:
 * - Ensure compliance with website terms of service and permissions when scraping data.
 * - Test the script on a sample webpage to verify its functionality.
 * - Regularly review and update the script to accommodate changes in website structure.
 * - Implement error handling mechanisms to manage unexpected situations.
 * - Adhere to data privacy and legal regulations when handling collected data.
 *
 * Customization:
 * - Modify the script as needed to target the correct elements based on the webpage's structure.
 * - Adjust timing-related parameters, such as the timeout, to match the webpage's behavior.
 *
 * Data Privacy and Compliance:
 * - Ensure that data collection and handling comply with relevant privacy laws and regulations.
 */

// Initialize an empty array to store staff availability data
var staffNumbers = [];

// Set up headers for the data, including hours of the day (00:00 to 23:00)
staffNumbers[0] = ["Index", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

// Select relevant elements on the web page (likely representing scheduling data)
var staffElements = document.querySelectorAll('[class="cell"], [class="cell selected"]');

// Initialize an array to store staff availability data for the single day
staffNumbers[1] = [];
staffNumbers[1][0] = "Amount";

// Collect and record staff numbers for each hour
for (var hour = 0; hour < 24; hour++) {
    staffElements[hour].click();
    staffNumbers[1][hour + 1] = document.querySelectorAll('[class="greyHeader tab-td pointer ng-pristine ng-untouched ng-valid"]').length;
}

// Generate a CSV-formatted string from the collected data
var csv = staffNumbers
    .map(function (item) {
        // Here item refers to a row in that 2D array
        var row = item;
        // Join the elements of row with "," using join function
        return row.join(",");
    })
    .join("\n");

// Trigger the download of the CSV file named 'day.csv'
downloadBlob(csv, 'day.csv', 'text/csv;charset=utf-8;');

// Function to download a blob as a file
function downloadBlob(content, filename, contentType) {
    var blob = new Blob([content], { type: contentType });
    var url = URL.createObjectURL(blob);
    var pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', filename);
    pom.click();
}


/**
 * References to Used Information Sources
 *
 * This section contains references to information sources that were used during the development
 * of the web scraping and data extraction script. These sources provided valuable insights and
 * guidance for various aspects of the script's functionality.
 *
 * 1. Observer APIs in JavaScript - Part I
 *    - Source: [indepth.dev](https://indepth.dev/posts/1348/observer-apis-in-javascript-part-i)
 *    - Description: This article introduces Observer APIs in JavaScript, providing insights
 *      into the MutationObserver, a critical component of the web scraping script.
 *
 * 2. Generate Clock Times
 *    - Source: [catonmat.net](https://catonmat.net/tools/generate-clock-times)
 *    - Description: This tool likely assists in generating time-related data, which might be
 *      helpful for the script's purpose.
 *
 * 3. How to Get the Day of the Week from the Day Number in JavaScript
 *    - Source: [Stack Overflow](https://stackoverflow.com/questions/9677757/how-to-get-the-day-of-the-week-from-the-day-number-in-javascript)
 *    - Description: This Stack Overflow post is likely referenced for day-of-the-week calculations
 *      within the script.
 *
 * 4. How to Convert a 2D Array to a Comma-Separated Values (CSV) String in JavaScript
 *    - Source: [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-convert-a-2d-array-to-a-comma-separated-values-csv-string-in-javascript/)
 *    - Description: This article provides information on converting the collected data into a CSV
 *      format for export.
 *
 * 5. How to Export JavaScript Array Info to CSV on Client-Side
 *    - Source: [Stack Overflow](https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)
 *    - Description: This Stack Overflow post likely informs the script's CSV export functionality
 *      on the client side.
 *
 * 6. MutationObserver - MDN Web Docs
 *    - Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
 *    - Description: The MDN Web Docs page explains the MutationObserver API, which is used to
 *      observe changes in the DOM in the script.
 *
 * These references provide valuable information and insights that contributed to the development
 * and functionality of the web scraping script.
 */
