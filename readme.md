# Using AppSript to capture form submits to a google sheet

This takes the input of a regular HTML form and when the submit occurs, sends the data to a web-app published via AppScript to a google form.
Email is also triggered to the listed email-ids with all the information in the GET

## Dependancies

- jQuery

## Steps:

1. Setup Form and copy `script.js`
2. Make sure that jQuery is setup before `script.js`
3. Make a google sheet
4. On google sheet go to Tools -> <>Script Editor
5. Copy all the files in the `gs` folder
6. Go to `get_request_to_sheets.gs` and run setup => allow permissions
7. Go to `email.gs` and run email() => allow permissions
8. Change `ToEmail` in `email.gs` to the list of people you want the email to go to. 
9. Publish -> web app 
    1. Who has access to the app -> anyone, even anonymous
    2. get the url and paste it into `script.js` 

## Improvements:

- Handle error and success and show corresponding messages
- Built a better HTML form (Maybe using Bootstrap)

## Credits : 
- original from: http://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
- original gist: https://gist.github.com/willpatera/ee41ae374d3c9839c2d6
