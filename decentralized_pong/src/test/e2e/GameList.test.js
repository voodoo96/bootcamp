/* global describe, expect, test, beforeAll, afterAll */
import puppeteer from 'puppeteer'
import AppComponents from './AppComponents'
const GameListContent = AppComponents.GameListContent

let browser
let page

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch({
    headless: true // headless mode set to false so browser opens up with visual feedback
    // TODO  Get process.ENV === DEBUG for displaying the browser
    // headless: false, // headless mode set to false so browser opens up with visual feedback
    // slowMo: 250 // how slow actions should be
  })
  // creates a new page in the opened browser
  page = await browser.newPage()
})

describe('Game List', () => {
  test('player creates a new game', async () => {
    // TODO
  }, 900000)

  test('player views an existing game', async () => {
    // TODO
  }, 900000)
})

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close()
})
