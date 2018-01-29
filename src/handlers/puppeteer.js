import log from '../utils/log'
import puppeteer from '../chrome/puppeteer'

export default async function handler (event, context, callback) {
  let responseBody

  log('Getting version info.')

  try {
    responseBody = await puppeteer()
  } catch (error) {
    console.error('Error getting version info')
    return callback(error)
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
