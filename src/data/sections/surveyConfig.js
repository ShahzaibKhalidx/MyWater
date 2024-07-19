const surveyJson = {
  "title": "Book Now",
  "description": "Our survey team will pay you a visit\r\n",
  "completedHtml": "<h3>Thank you for your feedback</h3>",
  "completedHtmlOnCondition": [
    {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
    },
    {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us.</h4>"
    }
  ],
  "pages": [
    {
      "name": "current_water",
      "elements": [
        {
          "type": "checkbox",
          "name": "problem_statement",
          "indent": 1,
          "title": "What is the problem with your current bottled water? ",
          "isRequired": true,
          "validators": [
            {
              "type": "answercount",
              "text": "Please select no more than three features.",
              "maxCount": 3
            }
          ],
          "choices": [
            {
              "value": "pricing",
              "text": "Pricing"
            },
            {
              "value": "hassle",
              "text": "Hassle"
            },
            {
              "value": "quality",
              "text": "Quality"
            },
            {
              "value": "plastic_waste",
              "text": "Plastic Waste"
            }
          ],
          "otherText": "Other features:",
          "colCount": 2
        }
      ]
    },
    {
      "name": "about_us",
      "elements": [
        {
          "type": "checkbox",
          "name": "hear_about_us",
          "title": "Where did you hear about us?",
          "choices": [
            {
              "value": "event",
              "text": "Event"
            },
            {
              "value": "workspace",
              "text": "Workspace"
            },
            {
              "value": "home",
              "text": "At Someone's home"
            }
          ],
          "colCount": 3
        },
        {
          "type": "comment",
          "name": "hear_about_us_other",
          "title": "Other"
        }
      ]
    },
    {
      "name": "contact_info",
      "title": "Fill-in Your Contact Information",
      "elements": [
        {
          "type": "text",
          "name": "full_name",
          "title": "Enter your Full Name",
          "isRequired": true,
          "autocomplete": "name",
          "placeholder": "Type your name..."
        },
        {
          "type": "text",
          "name": "phone_number",
          "title": "Enter Phone Number",
          "isRequired": true,
          "inputType": "tel",
          "placeholder": "Type your phone number..."
        },
        {
          "type": "text",
          "name": "city",
          "title": "Enter you City Name",
          "isRequired": true,
          "autocomplete": "country",
          "placeholder": "Type your city name..."
        },
        {
          "type": "text",
          "name": "email",
          "title": "Enter your Email Address",
          "isRequired": true,
          "inputType": "email",
          "autocomplete": "email",
          "placeholder": "Type you email..."
        }
      ],
    }
  ],
  "showPageTitles": false,
  "showQuestionNumbers": "off",
  "allowResizeComment": false,
  "completeText": "Submit",
  "widthMode": "responsive"
}


export default surveyJson;