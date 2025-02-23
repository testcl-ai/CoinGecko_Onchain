const { exec } = require('child_process');

exec('K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=report.html k6 run load_test.js', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err.message}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});