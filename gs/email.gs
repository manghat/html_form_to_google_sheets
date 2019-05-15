//e = {form_field_1: "Field 3", form_field_2: "Field 2", form_field_3: "Field 3", form_field_4: "Field 4"}

ToEmail = 'ashwin@ei-india.com, amit.varshney@ei-india.com, maruf.shaikh@ei-india.com';

EmailSubject = '[IMP] Payment Attempt Failed';



function email_body(mail, data) {
  var t = HtmlService.createTemplateFromFile(mail);
  console.log(data)
  t.data = data;
  return t.evaluate().getContent();
}



function email(payload) {
  e = payload.parameter
  console.log(e)
//  e = {form_field_1: "Field 3", form_field_2: "Field 2", form_field_3: "Field 3", form_field_4: "Field 4"}
  left = MailApp.getRemainingDailyQuota();
  html = email_body('index', e)
//  Logger.log(html)
  MailApp.sendEmail({
    to: ToEmail,
    subject: EmailSubject,
    htmlBody: html,
    name: "Support",
    noReply: true
  });
    if(left < 10){
      MailApp.sendEmail('ashwin@ei-india.com', 'Alert: Email running low', 'Emails left:'+left);
  }
}
