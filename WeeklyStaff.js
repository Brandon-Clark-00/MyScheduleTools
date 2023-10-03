/*
  Staff Numbers Data Extraction Script with Documentation

  Purpose:
  This script is designed to extract staff numbers for each hour of the day from a web page,
  which represents staff scheduling per hour per day

  Instructions for Use:
  1. Navigate to the web page containing the staff scheduling data.
  2. Open the browser's developer tools.
  3. Access the "Console" tab within the developer tools.
  4. Paste and run this script in the console.

  Key Components and Functionality:

  1. Setup:
     - The script should be executed within the browser's developer console.
     - It relies on the webpage's structure and class names, so ensure they match the target page.

  2. Observing Changes:
     - The script uses a MutationObserver to monitor changes to the DOM, particularly the
       ".calendarDateLabel" element, which often changes when navigating through the scheduling data.

  3. Data Collection:
     - For each day of the week (Monday through Sunday), the script interacts with scheduling cells
       and records the number of staff members available for each hour of the day.
     - The data is stored in the "staffNumbers" array.

  4. CSV Generation:
     - After collecting data for all seven days, the script generates a CSV-formatted string
       from the "staffNumbers" array.
     - It triggers a download of this CSV file with the filename "export.csv" using the
       "downloadBlob" function.

  Best Practices:
  - Ensure compliance with website terms of service and permissions when scraping data.
  - Test the script on a sample webpage to verify its functionality.
  - Regularly review and update the script to accommodate changes in website structure.
  - Implement error handling mechanisms to manage unexpected situations.
  - Adhere to data privacy and legal regulations when handling collected data.

  Customization:
  - Modify the script as needed to target the correct elements based on the webpage's structure.
  - Adjust timing-related parameters, such as the timeout, to match the webpage's behavior.

  Data Privacy and Compliance:
  - Ensure that data collection and handling comply with relevant privacy laws and regulations.

  To Do:
  - Remove need for select element tool.
  - More error catching

  Note:
  - Use this script responsibly and within legal and ethical boundaries.
  - Always back up critical data on the webpage before running automation scripts.
*/

// Define an array to store staff availability data
staffNumbers = [];

// Define an array to represent days of the week
var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Initialize the current day
var day = 1;

// Initialize the staffNumbers array with headers
staffNumbers[0] = ["Day", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

// Define a MutationObserver to watch for changes in the DOM
var Observer = new MutationObserver((mutationrecords) => {

    setTimeout(() => {
        // console.log("Go to here ", day)
        // Select scheduling cells
        const staff = document.querySelectorAll('[class="cell"], [class="cell selected"]');
        // Initialize an array to store staff availability data for the current day
        staffNumbers[day] = []

        // Set the day label
        staffNumbers[day][0] = dayOfWeek[day];

        // Loop through each hour and click on the hourly cell, recording staff data
        for (let hour = 0; hour < 24; hour++) {
            // console.log("Click")
            staff[hour].click();
            staffNumbers[day][hour + 1] = document.querySelectorAll('[class="greyHeader tab-td pointer ng-pristine ng-untouched ng-valid"]').length;
        }

        // Move to the next day
        day++;

        // If all days of the week have been processed, generate CSV and trigger download
        if (day === 7) {
            console.log(staffNumbers)
            var csv = staffNumbers
                .map((item) => {

                    // Here item refers to a row in that 2D array
                    var row = item;

                    // Now join the elements of the row with "," using join function
                    return row.join(",");
                })
                .join("\n");

            console.log(csv);
            Observer.disconnect();
            downloadBlob(csv, 'week.csv', 'text/csv;charset=utf-8;');
        }

        // Move to the next day in the scheduling calendar
        document.querySelector('[class="calNextButton pointer jm-color-495e9e glyphicon glyphicon-chevron-right"]').click();
    }, 1000);
});

// Start observing changes in the DOM
Observer.observe(document.body.querySelector(".calendarDateLabel"), {
    childList: true,
    subtree: true
});

// Function to download a blob as a file
function downloadBlob(content, filename, contentType) {
    // Create a blob
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
 *    - Description: This tool  assists in generating time-related data, which might be
 *      helpful for the script's purpose.
 *
 * 3. How to Get the Day of the Week from the Day Number in JavaScript
 *    - Source: [Stack Overflow](https://stackoverflow.com/questions/9677757/how-to-get-the-day-of-the-week-from-the-day-number-in-javascript)
 *    - Description: This Stack Overflow post is  referenced for day-of-the-week calculations
 *      within the script.
 *
 * 4. How to Convert a 2D Array to a Comma-Separated Values (CSV) String in JavaScript
 *    - Source: [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-convert-a-2d-array-to-a-comma-separated-values-csv-string-in-javascript/)
 *    - Description: This article provides information on converting the collected data into a CSV
 *      format for export.
 *
 * 5. How to Export JavaScript Array Info to CSV on Client-Side
 *    - Source: [Stack Overflow](https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)
 *    - Description: This Stack Overflow post  informs the script's CSV export functionality
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
