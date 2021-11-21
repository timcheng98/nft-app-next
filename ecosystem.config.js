module.exports = {
  apps : [{
    name   : "wsb-nft",
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
      "ref"  : "origin/main-wsb-testing",
      "repo" : "git@github.com:timcheng98/nft-app-next.git",
      "path" : "/var/www/html/nft-app-next",
      "post-deploy": 'npm ci && sudo npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}