// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://christian:christian@ds053894.mlab.com:53894/mecdev');
//'mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ');
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

var Mec     = require('./models/mec');
var Tech     = require('./models/tech');
var Experience     = require('./models/experience');
var Plans     = require('./models/plans');
var Samples     = require('./models/samples');

/*var chris = new Bear({
  name: 'Chris'
});

chris.save(function(err) {
  if (err) throw err;
  console.log('User saved successfully!');
});*/

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');


  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/mec')

// create a mec (accessed at POST http://localhost:8080/mec)
  .post(function(req, res) {
    var mec = new Mec();		// create a new instance of the Mec model
    mec.name = req.body.name;  // set the mec name (comes from the request)
    mec.save(function(err) {
      console.log('BEAR SAVE');
      if (err)
        res.send(err);

      res.json({
        message: 'Mec created????',
        name:'???'
      });
    });
  })

  // get all the mec (accessed at GET http://localhost:8080/api/mec)
  .get(function(req, res) {
    var mec = new Mec();
    Mec.find(function(err, mec) {
      if (err)
        res.send(err);

      res.json(mec);
    });
  });

// on routes that end in /mec/:mec_id
// ----------------------------------------------------
router.route('/mec/:mec_id')

// get the mec with that id
  .get(function(req, res) {
    Mec.findById(req.params.mec_id, function(err, mec) {
      if (err)
        res.send(err);
      res.json(mec);
    });
  })

  // update the mec with this id
  .put(function(req, res) {
    Mec.findById(req.params.mec_id, function(err, mec) {
      if (err)
        res.send(err);

      mec.name = req.body.name;
      mec.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Mec updated!' });
      });

    });
  })

  // delete the mec with this id
  .delete(function(req, res) {
    Mec.remove({
      _id: req.params.mec_id
    }, function(err, tech) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

router.route('/tech')

// create a tech (accessed at POST http://localhost:8080/tech)
  .post(function(req, res) {
    var tech = new Tech();		// create a new instance of the Tech model
    tech.name = req.body.name;  // set the tech name (comes from the request)
    tech.save(function(err) {
      console.log('BEAR SAVE');
      if (err)
        res.send(err);

      res.json({
        message: 'Tech created????',
        name:'???'
      });
    });
  })

  // get all the tech (accessed at GET http://localhost:8080/api/tech)
  .get(function(req, res) {
    var tech = new Tech();
    Tech.find(function(err, tech) {
      if (err)
        res.send(err);

      res.json(tech);
    });
  });

// on routes that end in /tech/:tech_id
// ----------------------------------------------------
router.route('/tech/:tech_id')

// get the tech with that id
  .get(function(req, res) {
    Tech.findById(req.params.tech_id, function(err, tech) {
      if (err)
        res.send(err);
      res.json(tech);
    });
  })

  // update the tech with this id
  .put(function(req, res) {
    Tech.findById(req.params.tech_id, function(err, tech) {
      if (err)
        res.send(err);

      tech.name = req.body.name;
      tech.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Tech updated!' });
      });

    });
  })

  // delete the tech with this id
  .delete(function(req, res) {
    Tech.remove({
      _id: req.params.tech_id
    }, function(err, tech) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

router.route('/experience')

// create a experience (accessed at POST http://localhost:8080/experience)
  .post(function(req, res) {
    var experience = new Experience();		// create a new instance of the Experience model
    experience.name = req.body.name;  // set the experience name (comes from the request)
    experience.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Experience created????',
        name:'???'
      });
    });
  })

  // get all the experience (accessed at GET http://localhost:8080/api/experience)
  .get(function(req, res) {
    var experience = new Experience();
    Experience.find(function(err, experience) {
      if (err)
        res.send(err);

      res.json(experience);
    });
  });

// on routes that end in /experience/:experience_id
// ----------------------------------------------------
router.route('/experience/:experience_id')

// get the experience with that id
  .get(function(req, res) {
    Experience.findById(req.params.experience_id, function(err, experience) {
      if (err)
        res.send(err);
      res.json(experience);
    });
  })

  // update the experience with this id
  .put(function(req, res) {
    Experience.findById(req.params.experience_id, function(err, experience) {
      if (err)
        res.send(err);

      experience.name = req.body.name;
      experience.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Experience updated!' });
      });

    });
  })

  // delete the experience with this id
  .delete(function(req, res) {
    Experience.remove({
      _id: req.params.experience_id
    }, function(err, experience) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

router.route('/plans')

// create a plans (accessed at POST http://localhost:8080/plans)
  .post(function(req, res) {
    var plans = new Plans();		// create a new instance of the Plans model
    plans.name = req.body.name;  // set the plans name (comes from the request)
    plans.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Plans created????',
        name:'???'
      });
    });
  })

  // get all the plans (accessed at GET http://localhost:8080/api/plans)
  .get(function(req, res) {
    var plans = new Plans();
    Plans.find(function(err, plans) {
      if (err)
        res.send(err);

      res.json(plans);
    });
  });

// on routes that end in /plans/:plans_id
// ----------------------------------------------------
router.route('/plans/:plans_id')

// get the plans with that id
  .get(function(req, res) {
    Plans.findById(req.params.plans_id, function(err, plans) {
      if (err)
        res.send(err);
      res.json(plans);
    });
  })

  // update the plans with this id
  .put(function(req, res) {
    Plans.findById(req.params.plans_id, function(err, plans) {
      if (err)
        res.send(err);

      plans.name = req.body.name;
      plans.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Plans updated!' });
      });

    });
  })

  // delete the plans with this id
  .delete(function(req, res) {
    Plans.remove({
      _id: req.params.plans_id
    }, function(err, plans) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });







router.route('/samples')

// create a samples (accessed at POST http://localhost:8080/samples)
  .post(function(req, res) {
    var samples = new Samples();		// create a new instance of the Samples model
    samples.name = req.body.name;  // set the samples name (comes from the request)
    samples.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Samples created????',
        name:'???'
      });
    });
  })

  // get all the samples (accessed at GET http://localhost:8080/api/samples)
  .get(function(req, res) {
    var samples = new Samples();
    Samples.find(function(err, samples) {
      if (err)
        res.send(err);

      res.json(samples);
    });
  });

// on routes that end in /samples/:samples_id
// ----------------------------------------------------
router.route('/samples/:samples_id')

// get the samples with that id
  .get(function(req, res) {
    Samples.findById(req.params.samples_id, function(err, samples) {
      if (err)
        res.send(err);
      res.json(samples);
    });
  })

  // update the samples with this id
  .put(function(req, res) {
    Samples.findById(req.params.samples_id, function(err, samples) {
      if (err)
        res.send(err);

      samples.name = req.body.name;
      samples.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Samples updated!' });
      });

    });
  })

  // delete the samples with this id
  .delete(function(req, res) {
    Samples.remove({
      _id: req.params.samples_id
    }, function(err, samples) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });







// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
