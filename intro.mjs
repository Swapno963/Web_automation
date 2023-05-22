import puppeteer from "puppeteer"; // importing puppter from pakage

// making browser(headful modd)
const browser = await puppeteer.launch({
    headless: false, //for thsi website will be visible

    // it give 800*600 view port which is so small. So we will make it bigger
    defaultViewport:{width:1920, height:1080},

    // making thing slow
    slowMo:250,

    // we can give a profile,generally it create new profile and delet when the work is done
    userDataDir:"temporary",// it won't delet the profile, reuse the pfofile
});

 // crea page(creating new tab)
 const page = await browser.newPage();
 await page.goto("https://pptr.dev/",
{
    // finish background net request and wait 60 sec ot 1 min
        waitUntil:"networkidle2",
        timeout:60000, // generally it wait 30 sec
});
await page.screenshot({path:"pappter.png"});


// taking schren shot of dev config
await page.goto("https://devconfbd.com/#",
{
    // finish background net request and wait 60 sec ot 1 min
        waitUntil:"networkidle2",
        timeout:60000, // generally it wait 30 sec
});
await page.screenshot({path:"devconfig.png"});
await browser.close()


