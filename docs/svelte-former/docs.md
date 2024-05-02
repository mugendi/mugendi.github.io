<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />
    <title>My Projects</title>
    <!-- <link rel="stylesheet" href="/static/styles/bulma.css" /> -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/static/styles/style.css" /> 

  </head>


# Docs

sdds

```javascript
// create an array of controls
let controls = [
  {
    element: 'input',
    // add any valid html input attributes
    attributes: {
      name: 'firstName',
      required: true,
    },
    // bootstrap column classes to position inputs
    classes: ['col-sm-12', 'col-md-6'],
    // validation based on https://github.com/icebob/fastest-validator
    validation: {
      type: 'string',
    },
    label: 'First Name',
  },
];

```

sds 

```javascript
// initialize form
let s = new SvelteFormer({
  target: document.getElementById('form'),
  onSubmit: function (e) {
    console.log(e);
  },
  props: {
    controls,
    // form action
    action: '',
    // form submit post
    method: 'post',
  },
});
```

</html>
