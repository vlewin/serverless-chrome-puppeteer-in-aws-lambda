import log from '../utils/log'
import metrics from '../chrome/metrics'

export default async function handler (event, context, callback) {
  let responseBody

  log('Getting version info.')

  try {
    responseBody = await metrics()
  } catch (error) {
    console.error('Error getting metrics')
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
