//run 'npm install' and 'vercel' to initialize project
const app = require("express")();

let chrome = {};
let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

app.get("/api/:slug", async (req, res) => {
  let options = {};

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    };
  }

  try {
    // let browser = await puppeteer.launch(options);

    // let page = await browser.newPage();
    
    // await page.goto(`https://www.youtube.com/watch?v=${req.params.slug}`);
    // await page.waitForSelector("head > title");
    // const data = await page.$eval("head > title", (el) => el.textContent);

    // res.send(data.slice(0,-10));
    res.send(req.params.slug)
  } catch (err) {
    console.error(err);
    return null;
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
