import { getUserData } from '@decentraland/Identity'

// get player data
const userData = executeTask(async () => {
  const data = await getUserData()
  log(data.displayName)
  return data
})

// external servers being used by the project - Please change these to your own if working on something else!
export let fireBaseServer =
  'https://us-central1-dcl-door-test.cloudfunctions.net/app/'

// get latest scoreboard data from server
export async function getGuestBook() {
  try {
    let url = fireBaseServer + 'get-scores'
    let response = await fetch(url)
    let json = await response.json()
    log(json)
    return json
  } catch (e) {
    log('error fetching scores from server ', e)
  }
}

// change data in scoreboard
export async function signGuestBook() {
  if (!userData) {
    await userData
  }
  try {
    let url = fireBaseServer + 'publish-scores'
    let body = JSON.stringify({
      name: (await userData).displayName,
      id: (await userData).userId,
    })
    log(body)
    let response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    })
    return response.json()
  } catch (e) {
    log('error posting to server ', e)
  }
}
