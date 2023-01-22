const AWS = require('aws-sdk');
require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.accessKey,
  secretAccessKey:  process.env.secretAccessKey,
  region: 'ca-central-1'
});

const ses = new AWS.SES({apiVersion: '2010-12-01'});

const createTemplate = () => {
  const params = {
    Template: {
      TemplateName: 'ActivationCodeTemplate',
      HtmlPart: `<html xmlns="http:www.w3.org/1999/xhtml" lang="en"><head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  <style type="text/css">
    table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
    @media only screen and (min-width: 520px) {
      .u-row {
        width: 500px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
      .u-row .u-col-100 {
        width: 500px !important;
      }
    }
    @media (max-width: 520px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: calc(100% - 40px) !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    p {
      margin: 0;
    }
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    * {
      line-height: inherit;
    }
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
  </style>
</head><body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
<!--[if IE]><div class="ie-container"><![endif]-->
<!--[if mso]><div class="mso-container"><![endif]-->
<table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0;mso-table-rspace: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
      <div class="u-row-container" style="padding: 0;background-repeat: no-repeat;background-position: center top;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #002d74;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-image: url('images/image-1.svg');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #002d74;"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
              <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;"><!--<![endif]-->
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:24px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tbody><tr>
                          <td style="padding-right: 0;padding-left: 0;" align="center">
                            <img align="center" border="0" src="http://touchstone-env-1.eba-k5v8e54g.ca-central-1.elasticbeanstalk.com/images/logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 220px;" width="169">
                          </td>
                        </tr>
                        </tbody></table>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      <div class="u-row-container" style="padding: 0;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
              <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                  <tr>
                    <td style="word-break:break-word;padding: 40px 20px 36px;font-family:arial,helvetica,sans-serif;" align="left">
                      <div style="line-height:140%;text-align:left;word-wrap:break-word">
                        <h2>Dear <span>{{name}}</span>,</h2>
                        <p style="font-size:14px;line-height:140%;text-align:left;margin-bottom: 30px;"><span style="font-size:18px;line-height:25.2px">{{description}}</span></p>


                        <p style="font-size:14px;line-height:140%;text-align:left;margin-bottom: 30px;"><span style="font-size:18px;line-height:25.2px"> Use the activation code listed below to enter the <span style="font-size:18px;line-height:25.2px">registration portal so that you can set up a profile and register for an examination. <span style="font-size:18px;line-height:25.2px"> Please visit our website at <a href="https://touchstoneinstitute.ca/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://touchstoneinstitute.ca/learning/canadian-medicine-primer/&amp;source=gmail&amp;ust=1655382283289000&amp;usg=AOvVaw0A0RdU_h2pgBAHvO6EagdI">https://touchstoneinstitute.ca/</a> for information about your exam.</span></span></span></p><p style="font-size:14px;line-height:140%;text-align:left"><span style="font-size:18px;line-height:25.2px"> If you need assistance, please contact us by email at <a href="mailto:exams@tsin.ca" target="_blank">exams@tsin.ca.</a> </span></p></div>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      <div class="u-row-container" style="padding: 0;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
              <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:36px 10px 24px;font-family:arial,helvetica,sans-serif;" align="left">
                      <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 20px; line-height: 28px;">Here is your Activation Code: </span></p>
                        <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 22px; line-height: 30.8px;"><strong>{{code}}</strong></span></p>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      <div class="u-row-container" style="padding: 0;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
              <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:24px 10px 72px;font-family:arial,helvetica,sans-serif;" align="left">
                      <div align="center">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:49px; v-text-anchor:middle; width:310px;" arcsize="0%" stroke="f" fillcolor="#002d74"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                        <a href="https://portal.tsin.ca/auth/code-activation" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #002d74; border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-width: 0; border-top-style: solid; border-left-width: 0; border-left-style: solid; border-right-width: 0; border-right-style: solid; border-bottom-width: 0; border-bottom-style: solid;">
                          <span style="display:block;padding:16px 32px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">Click here to enter your Activation Code</span></span>
                        </a>
                        <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      <div class="u-row-container" style="padding: 2px 0 0;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 2px 0 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
              <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      <div class="u-row-container" style="padding: 0;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
              <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
</table>
<!--[if mso]></div><![endif]-->
<!--[if IE]></div><![endif]-->`,
      SubjectPart: 'Activation code',
      TextPart: 'ExamActivationCode'
    }
  };
  ses.createTemplate(params, function(err:any, data:any) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
};

// export const getTemplate = (TemplateName: string) => {
//   ses.getTemplate({ TemplateName }, function(err:any, data:any) {
//     if (err) console.log(err, err.stack);
//     else console.log(data.Template.HtmlPart);
//   });
// }
// export const updateTemplate = (params: any) => {
//   ses.updateTemplate(params, function(err:any, data:any) {
//     if (err) console.log(err, err.stack);
//     else console.log(data);
//   });
// }
// export const deleteTemplate = (TemplateName: string) => {
//   ses.deleteTemplate({ TemplateName }, function(err:any, data:any) {
//     if (err) console.log(err, err.stack);
//     else console.log(data);
//   });
// }

const sendActiveCodeToEmail = (to: string[], subject: string, code: string, name: string = '',programType = '', from = 'exams@tsin.ca') => {
  const emailTemplateTypeLongName:any = {
    IENCAP: "You have been referred to Touchstone Institute by the College of Nurses of Ontario to participate in the Internationally Educated Nurses Competency Assessment Program (IENCAP).",
    CNO: "You have been referred to Touchstone Institute by the College of Nurses of Ontario to participate in the Internationally Educated Nurses Competency Assessment Program (IENCAP).",
    ALPNCE: "You have been referred to Touchstone Institute by the College of Licensed Practical Nurses of Alberta to participate in the Alberta Licensed Practical Nurses Competence Examination (ALPNCE).",
    ARNAP: "You have been referred to Touchstone Institute by the College and Association of Registered Nurses of Alberta (CRNA) to participate in the Alberta Registered Nurses Assessment Program (ARNAP) examination.",
    KCAT: "You have been referred to Touchstone Institute by the College of Dietitians of Ontario to participate in the Knowledge and Competency Assessment Tool (KCAT) examination.",
    IGOEE: "You have been referred to Touchstone Institute by the Federation of Optometric Regulatory Authorities of Canada (FORAC) to participate in the Internationally Graduated Optometrist Evaluating Examination (IGOEE).",
    ARTLABEXAM: "You have been referred to Touchstone Institute by the Canadian Fertility and Andrology Society to participate in the Assisted Reproductive Technology Laboratory Exam (ART Lab Exam)."
  }
  const description = emailTemplateTypeLongName[programType] || '';
  const params = {
    Source: from,
    Destination: {
      ToAddresses: to
    },
    Template: "ActivationCodeTemplate",
    TemplateData: JSON.stringify({
      code ,
      name,
      description
    })
  };
  ses.sendTemplatedEmail(params, (err: any, data: any) => {
    if (err) {
      return console.log(err, err.stack);
    } else {
      console.log("Email sent.", data);
    }
  });
};
const sendEmail = (to: string[], subject: string, message: string, from = 'exams@tsin.ca') => {
  const params = {
    Source: from,
    Destination: {
      BccAddresses: to
    },

    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: message
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
  };

  ses.sendEmail(params, (err: any, data: any) => {
    if (err) {
      return console.log(err, err.stack);
    } else {
      console.log("Email sent.", data);
    }
  });
};
const sendCreationAccountEmail = (to: string, name: string, from = 'exams@tsin.ca') => {
  const params = {
    Source: from,
    Destination: {
      ToAddresses: [to]
    },
    "Template": "CreateAccountTemplate",
    "TemplateData": JSON.stringify({ name })

  };

  ses.sendTemplatedEmail(params, (err: any, data: any) => {
    if (err) {
      return console.log(err, err.stack);
    } else {
      console.log("Email sent.", data);
    }
  });
}
const sendEmailWithSignature = (to: string[], subject: string, message: string, from = 'exams@tsin.ca', signature = '') => {
  const params = {
    Source: from,
    Destination: {
      BccAddresses: to
    },

    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
                <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                  <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
                  <head>
                  <!--[if gte mso 9]>
                  <xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                  </xml>
                  <![endif]-->
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="x-apple-disable-message-reformatting">
                    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
                    <title></title>
                      <style type="text/css">
                        table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
                  @media only screen and (min-width: 520px) {
                    .u-row {
                      width: 500px !important;
                    }
                    .u-row .u-col {
                      vertical-align: top;
                    }
                    .u-row .u-col-100 {
                      width: 500px !important;
                    }
                  }
                  @media (max-width: 520px) {
                    .u-row-container {
                      max-width: 100% !important;
                      padding-left: 0 !important;
                      padding-right: 0 !important;
                    }
                    .u-row .u-col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                    }
                    .u-row {
                      width: calc(100% - 40px) !important;
                    }
                    .u-col {
                      width: 100% !important;
                    }
                    .u-col > div {
                      margin: 0 auto;
                    }
                  }
                  body {
                    margin: 0;
                    padding: 0;
                  }
                  table,
                  tr,
                  td {
                    vertical-align: top;
                    border-collapse: collapse;
                  }
                  p {
                    margin: 0;
                  }
                  .ie-container table,
                  .mso-container table {
                    table-layout: fixed;
                  }
                  * {
                    line-height: inherit;
                  }
                  a[x-apple-data-detectors='true'] {
                    color: inherit !important;
                    text-decoration: none !important;
                  }
                  </style>
                  </head>
                  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
                    <!--[if IE]><div class="ie-container"><![endif]-->
                    <!--[if mso]><div class="mso-container"><![endif]-->
                    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0;mso-table-rspace: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
                  <div class="u-row-container" style="padding: 0;background-image: url('https://touchstone-be.s3.ca-central-1.amazonaws.com/tlogo4.png');background-repeat: no-repeat;background-position: center top;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #002d74;">
                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-image: url('images/image-1.svg');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #002d74;"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;" valign="top"><![endif]-->
                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;"><!--<![endif]-->
                  <table style="font-family:arial,helvetica,sans-serif;" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td style="overflow-wrap:break-word;word-break:break-word;padding:24px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td id="logo_svg" style="padding-right: 0;padding-left: 0;" align="center">
                        <img src="https://touchstone-be.s3.ca-central-1.amazonaws.com/tlogo4.png" width="120px" alt="logo"/>
                      </td>
                    </tr>
                  </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
                  <div class="u-row-container" style="padding: 0;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                    <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                  <table style="font-family:arial,helvetica,sans-serif;" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td style="overflow-wrap:break-word;word-break:break-word;padding:36px 10px 24px;font-family:arial,helvetica,sans-serif;" align="left">
                    <div style="word-wrap: break-word; padding: 1rem; padding: 1rem 1rem">
                      ${message}
                    </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
                  <div class="u-row-container" style="padding: 0;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                    <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                  <table style="font-family:arial,helvetica,sans-serif;" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td style="overflow-wrap:break-word;word-break:break-word;padding:24px 10px 72px;font-family:arial,helvetica,sans-serif;" align="left">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
                  <div class="u-row-container" style="padding: 2px 0 0;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 2px 0 0;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;" valign="top"><![endif]-->
                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;">
                    <!--[if (!mso)&(!IE)]><!--><div style="padding: 0;border-top: 0 solid transparent;border-left: 0 solid transparent;border-right: 0 solid transparent;border-bottom: 0 solid transparent;border-radius: 0;-webkit-border-radius: 0; -moz-border-radius: 0;"><!--<![endif]-->
                  <table style="font-family:arial,helvetica,sans-serif;" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td style="overflow-wrap:break-word;word-break:break-word;padding:24px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                    <div style="line-height: 140%; text-align: center; word-wrap: break-word;">
                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;">${signature}</span></p>
                    </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    </tbody>
                    </table>
                    <!--[if mso]></div><![endif]-->
                    <!--[if IE]></div><![endif]-->
                  </body>
                  </html>
                    `
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
  };

  ses.sendEmail(params, (err: any, data: any) => {
    if (err) {
      return console.log(err, err.stack);
    } else {
      console.log("Email sent.", data);
    }
  });
};

module.exports = {
  sendEmail,
  createTemplate,
  sendActiveCodeToEmail,
  sendEmailWithSignature,
  sendCreationAccountEmail,
};
