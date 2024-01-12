app.get('/', (req, res) => {
    res.render('homepage', { isLandingPage: true });
  });
  console.log(isLandingPage);
  app.get('/otherPage', (req, res) => {
    res.render('otherPage', { isLandingPage: false });
  });
  