module.exports = {
  apps : [{
    name   : "panda",
    script : "npm",
    arg: 'start',
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}