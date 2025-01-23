import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:5173/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});

describe("Filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:5173/");
    await page.waitForSelector("#city-search");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn’t searched for a city, show upcoming events from all cities.", async () => {
    const citySearch = await page.$eval(".city", el => el.value);
    expect(citySearch).toBe("");
    const eventList = await page.$eval("#event-list", (el) => el.children.length);
    expect(eventList).toBe(32);
  });

  test("User should see a list of suggestions when they search for a city.", async ()=> {
    await page.type(".city", "Berlin");
    const suggestionList = await page.$(".suggestions");
    expect(suggestionList).toBeDefined();
  });

  test("User can select a city from the suggested list.", async ()=> {
    await page.click(".suggestions li");
    const citySearch = await page.$eval(".city", el => el.value);
    expect(citySearch).toBe("Berlin, Germany");
  });
});
