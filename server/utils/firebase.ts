import {
  initializeApp,
  applicationDefault,
  App,
  getApps,
  getApp,
} from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getDatabase } from 'firebase-admin/database'

let firebaseAdminApp: App

if (!getApps().length) {
  firebaseAdminApp = initializeApp({
    // uses environment variable GOOGLE_APPLICATION_CREDENTIALS
    credential: applicationDefault(),
    databaseURL: 'https://etdagen-d1f82.firebaseio.com',
  })
} else {
  firebaseAdminApp = getApp()
}

export const auth = getAuth(firebaseAdminApp)
export const db = getDatabase()
