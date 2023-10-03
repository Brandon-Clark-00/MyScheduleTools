# MyScheduleTools
## Staff Numbers Extraction Scripts
### Overview
This repository contains JavaScript scripts for extracting staff numbers from web pages that represent staff scheduling data. These scripts utilize web scraping techniques, DOM manipulation, and CSV export to collect and organize the data.

### Weekly Staff Numbers Extraction Script
#### Instructions for Use
1. Navigate to the web page containing the weekly staff scheduling data.
2. Open the browser's developer tools.
3. Access the "Console" tab within the developer tools.
4. Paste and run the provided script in the console.
5. Wait for the script to complete, and a CSV file named 'export.csv' will be downloaded, containing the staff numbers data for the entire week.

#### Key Components and Functionality
- Initializes an empty array to store staff availability data.
- Sets up headers for the data, including hours of the day (00:00 to 23:00).
- Selects relevant elements on the web page (likely representing scheduling data).
- Collects and records staff numbers for each hour by simulating clicks on the elements.
- Stores the collected data in the 'staffNumbers' array.
- Generates a CSV-formatted string from the collected data.
- Triggers the download of the CSV file named 'export.csv'.

#### Best Practices
- Ensure compliance with website terms of service and permissions when scraping data.
- Test the script on a sample webpage to verify its functionality.
- Regularly review and update the script to accommodate changes in website structure.
- Implement error handling mechanisms to manage unexpected situations.
- Adhere to data privacy and legal regulations when handling collected data.

#### Customization
- Modify the script as needed to target the correct elements based on the webpage's structure.
- Adjust timing-related parameters, such as the timeout, to match the webpage's behavior.

### Single-Day Staff Numbers Extraction Script
#### Instructions for Use
1. Navigate to the web page containing the staff scheduling data for the single day.
2. Open the browser's developer tools.
3. Access the "Console" tab within the developer tools.
4. Paste and run the provided script in the console.
5. Wait for the script to complete, and a CSV file named 'day.csv' will be downloaded, containing the staff numbers data for the selected day.

#### Key Components and Functionality
- Initializes an empty array to store staff availability data.
- Sets up headers for the data, including hours of the day (00:00 to 23:00).
- Selects relevant elements on the web page (likely representing scheduling data).
- Collects and records staff numbers for each hour by simulating clicks on the elements.
- Stores the collected data in the 'staffNumbers' array.
- Generates a CSV-formatted string from the collected data.
- Triggers the download of the CSV file named 'day.csv'.

#### Best Practices
- Ensure compliance with website terms of service and permissions when scraping data.
- Test the script on a sample webpage to verify its functionality.
- Regularly review and update the script to accommodate changes in website structure.
- Implement error handling mechanisms to manage unexpected situations.
- Adhere to data privacy and legal regulations when handling collected data.
#### Customization
- Modify the script as needed to target the correct elements based on the webpage's structure.
- Adjust timing-related parameters, such as the timeout, to match the webpage's behavior.

## Data Privacy and Compliance
- Ensure that data collection and handling comply with relevant privacy laws and regulations.
