require('dotenv').config()

export const MongoDB = process.env.mongoDB || 'mongodb+srv://touchstone:7bJsvMprNq3y755C@cluster0.dgcqk.mongodb.net/touchstone_db?retryWrites=true&w=majority'
export const MongoDBLearning = process.env.mongoDBLearning || 'mongodb+srv://touchstone-staging:4eVXBJQUvhx9lKn7@cluster1.umziw.mongodb.net/touchstone_Learning_db?retryWrites=true&w=majority'
if (!MongoDB) {
  console.log('No mongo connection strings. Set MongoDB environment variable.')
  process.exit(1)
}

export const JWT_SECRET = process.env['JWT_SECRET'] || ''

if (!JWT_SECRET) {
  console.log('No JWT secret string. Set JWT_SECRET environment variable.')
  process.exit(1)
}

export const environment = {
  nodeEnv: process.env.NODE_ENV,
  logDir: process.env.LOG_DIR || 'logs',
  logLevel: process.env.LOG_LEVEL || 'info',
  logFile: process.env.LOG_FILE || 'app.log',
}