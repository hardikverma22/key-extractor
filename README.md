# Keyword Extractor using OpenAI API

This Github repository contains code for a web application that utilizes OpenAI's natural language processing API to generate relevant keywords from a text paragraph.
The application is built using React and Vite and the API is hosted on AWS, using API Gateway and Lambda function.

:link: [Demo Link](https://keyext.netlify.app/)

## Getting Started
### Prerequisites

To use the application in this repository, you will need an OpenAI API key.

You can sign up for a free API key at the [OpenAI website](https://beta.openai.com/signup/).

You will also need to have Node.js and npm installed on your machine.


### Local Setup

To set up the application locally, follow these steps:

1. Clone the repository:

    [https://github.com/hardikverma22/key-extractor](https://github.com/hardikverma22/key-extractor).
  
  
2. Navigate to the `root` of the directory and install the required packages using:
  
     `npm install`

3. Create a `.env` file in the `root` directory and add your API URL:
    VITE_AWS_API_URL=YOUR_API_URL_HERE
    

4. Deploy the Lambda function to AWS using the Serverless Framework.
    - The lambda function is under server folder.
    - You can copy paste to you AWS lambda and deply and test by setting proper env variables for OPENAI_API_KEY and OPENAI_API_URL.
    - Add an AWS API Gateway trigger to you lambda function and set the CORS properly for every method you want.
    - In case of issues use this: [https://enable-cors.org/server_awsapigateway.html](https://enable-cors.org/server_awsapigateway.html)
    
5. Finally in the root directory run the folling command:

    `npm run dev`

    This will start the development server and open the application in your browser.
    
    
    
    



