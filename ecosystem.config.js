module.exports = {
  apps: [
    {
      name: 'API',
      script: './src/app.js',
      log: './logs/outerr.log',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: [{ host: '176.122.139.155', port: '28351' }],
      ref: 'origin/master',
      repo: 'https://github.com/smileBug/smile-fe.git',
      path: '/var/www/production/smile-fe',
      'post-deploy': 'npm i && npm run build'
    }
  }
}
