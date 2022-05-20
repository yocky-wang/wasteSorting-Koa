const CORS_CONFIG = {
  origin: ()=> '*',
  maxAge: -1,
  credentials: true,
  allowMethods: ["GET","POST"],
  exposeHeaders: ["Authorization"],
  allowHeaders: ["Content-Type","Authorization","Accept"] 
}

module.exports = CORS_CONFIG