module.exports = {
  apps : [{
    name   : "panda-nft",
    script : "npm",
    args: "start",
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }],
  deploy: {
    testing: {
      "user" : "root",
      "host" : ["165.22.251.49"],
      "ref"  : "origin/main-panda-testing",
      "repo" : "git@github.com:timcheng98/nft-app-next.git",
      "path" : "/var/www/html/squat-panda",
      "post-deploy": 'npm ci && sudo npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}