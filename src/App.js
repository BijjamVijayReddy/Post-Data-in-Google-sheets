/**
 *  1.Create the New Google Sheet and Copy the URL and Copy in the NotePad.. 
 *  2. Open the Extension in Google Sheet and Select the Apps Script..
 *  3. copy the Below Code:  const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10AuRzRugSjs8nz6jT1LWzpNURh1pnvBcxZUguhfaT24/edit#gid=0");
     //if you have changed your sheet name then replace the below Sheet1 with your sheet name
     const sheet = sheets.getSheetByName("Sheet1");
    function doPost(e){
    let data = e.parameter;
    sheet.appendRow([data.UserName,data.Userage,data.Usersalary,data.Userhobby]);
    return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
     }
  * Changes according the Above Code in sheet.appenRow.
  * Deploy to New Deployment and select type to web app and  Changes to anyone in "Who can Access" and Click the Deploy
  * Give Authcation and choose Advance and allow that it's ...
//  Google Sheet Link -- https://docs.google.com/spreadsheets/d/11B5jPfLa4mP2qlu7lpZ-CSIK184Zl9qOWeVAWzS4cNI/edit#gid=0
 */

import "./App.css";

export default function App() {
  function Submit(e) {
    e.preventDefault()
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      'https://script.google.com/macros/s/AKfycbweqWTT4_HcxKfSopxnSiU6MizrrvMeapxeaXZPbHo2edkYpMXLmo8FJejv4RX-Gs9p/exec',
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Form </h1>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}


