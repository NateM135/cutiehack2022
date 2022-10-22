function htmlEmail({ url, host, email }) {
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;
  return `
    <html>
    <head>
       <style>
          @import url('https://fonts.googleapis.com/css?family=3DRubik');
          .container {
          max-width: 512px;
          }
          .footer {
          text-align: center;
          font-size: 14px;
          }
          .social {
          background: orange;
          width: 24px;
          height: 24px;
          margin: 0 0.2rem;
          padding: 0.5rem;
          border-radius: 10rem;
          }
          p {
          padding: 0 1rem;
          font-family: 'Rubik', sans-serif;
          }
          svg {
          padding: 0.5rem;
          border-radius: 10rem;
          background: orange;
          }
          a {
          color: orange;
          }
       </style>
    </head>
    <body>
       <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
             <td align="center">
                <div class="container">
                   <img
                   style="object-fit: contain; width: 100%;"
                   src="https://i.imgur.com/HW5R5QW.png"/>
                   <br/>
                   <br/>
                   <p style="text-align:left">
                      Hello!
                   </p>
                   <p style="text-align:left">
                      You are receiving this email because someone has tried to login to Cutie Hack's website with your email addresss.
                   </p>
                   <p style="text-align:left">
                     If you are trying to login, click <a href="${url}">here</a> to sign in.
                     If you did not attempt to sign-in to this site, you can safely ignore this email.
                   </p>
                   <p style="text-align:left">
                      The Cutie Hack Team
                   </p>
                   <br/>
                   <hr/>
                   <br/>
                   <div class="footer">
                      <p>
                         Head back to our website at <a href="${host}">${host}</a>
                     </p>
                     <p>
                         Join our Discord server by clicking <a href="https://discord.gg/jduNFuwKuk">here</a>
                      </p>
                      <p>
                         Contact us, whenever at <a href="mailto:citrushack@gmail.com">citrushack@gmail.com</a>
                      </p>
                      <a href="${host}"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/18518ec5-9e99-4737-8748-aaf321c86d93/24x24.png"/></a>
                      <a href="https://www.facebook.com/cutiehack/"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/6b62002f-f863-4ca1-9f6c-c11ee2cef453/24x24.png" /></a>
                      <a href="https://www.instagram.com/cutiehack_ucr/?hl=en"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/5bc8e9f4-455c-4f40-b6aa-cc552e812c04/24x24.png" /></a>
                      <a href="https://www.linkedin.com/company/citrus-hack"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/0061c602-b7f9-4a2c-a015-66c3aa221f33/24x24.png" /></a>
                   </div>
                </div>
             </td>
             <td align="center">
             </td>
          </tr>
       </table>
    </body>
  </html>
    `;
}

// Fallback for non-HTML email clients
function textEmail({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

export { htmlEmail, textEmail };
