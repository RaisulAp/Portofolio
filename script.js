document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
const express = require('express');
const app = express();
const path = require('path');

app.use('/projects', express.static(path.join(__dirname, 'projects')));

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});