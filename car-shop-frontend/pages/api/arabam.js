const puppeteer = require("puppeteer")
const cheerio = require("cheerio")
const chrome = require("chrome-aws-lambda")
const src = "https://www.arabam.com/ikinci-el?searchText="
var search = "volkwagen"

const exePath =
process.platform === "win64"
"C:\Program Files\Google\Chrome\Application\chrome.exe"
const getOptions = async () => {
  let options
  if (process.env.NODE_ENV === "production") {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    }
  } else {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    }
  }
  return options
}

const getArabam = async (req, res) => {
  const detailSelector = ".horizontal-half-padder-minus h4 .listing-text-new "
  const modelSelector = ".listing-modelname h3 .listing-text-new "
  const priceSelector = ".listing-price"
  const yearSelector = ".tac .fade-out-content-wrapper a"
  const imageSelector = ".listing-image "
  const urlSelector=".pr10 a"
  const properties = req.body.properties

  try {
    const options = await getOptions()
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()
    await page.setRequestInterception(true)
    page.on("request", (request) => {
      if (request.resourceType() === "document") {
        request.continue()
      } else {
        request.abort()
      }
    })
    
    let url = src + search;

    await page.goto(url, { timeout: 0 }).then(async (response) => {})
    const html = await page.evaluate(() => {
      return document.querySelector("body").innerHTML
    })
    const $ = cheerio.load(html)

    // create empty result set, assume selectors will return same number of results
    let result = []
    for (let i = 0; i < $(detailSelector).length; i++) {
      result.push({})
    }

    // fill result set by parsing the html for each property selector
    $(detailSelector).each((i, elem) => {
        result[i].detail = $(elem).text()
      })
      $(modelSelector).each((i, elem) => {
        result[i].model = $(elem).text()
      })
      $(priceSelector).each((i, elem) => {
        result[i].price = $(elem).text()
      })
      $(yearSelector).each((i, elem) => {
        result[i].year = $(elem).text()
      })
      $(imageSelector).each((i, elem) => {
    let href = $(elem).attr("data-src")
      if (href.charAt(0) === "/") href = "https://www.arabam.com/ikinci-el?searchText=bmw" + href
        result[i].image = href
      })
      $(urlSelector).each((i, elem) => {
        let href = $(elem).attr("href")
          if (href.charAt(0) === "/") href = "https://www.arabam.com/" + href
            result[i].url = href
          })

    await browser.close()
    res.status(200).json({ statusCode: 200, result })
  } catch(error) {
  }
}

export default getArabam

export const config = {
  api: {
    externalResolver: true,
  },
}