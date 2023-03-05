const hobbies = [
  "Reading books",
  "Playing video games",
  "Watching movies/TV shows",
  "Listening to music",
  "Playing musical instruments",
  "Singing",
  "Dancing",
  "Drawing/painting",
  "Photography",
  "Writing",
  "Blogging",
  "Cooking",
  "Baking",
  "Gardening",
  "Hiking",
  "Camping",
  "Traveling",
  "Playing sports (e.g. basketball, soccer, tennis)",
  "Working out/fitness",
  "Yoga",
  "Meditation",
  "Learning new languages",
  "Volunteering",
  "Community service",
  "Going to concerts/live music events",
  "Attending theater shows/musicals",
  "Playing board games/card games",
  "Collecting (e.g. stamps, coins, vinyl records)",
  "Solving puzzles (e.g. crosswords, Sudoku)",
  "Watching sports (e.g. football, basketball, baseball)",
  "Fishing",
  "Hunting",
  "Biking",
  "Running/jogging",
  "Swimming",
  "Surfing",
  "Skateboarding",
  "Snowboarding/skiing",
  "Scuba diving/snorkeling",
  "Cycling",
  "Playing chess",
  "Playing poker",
  "Doing magic tricks",
  "Watching documentaries",
  "Attending book clubs",
  "Participating in debates",
  "Attending political rallies",
  "Attending environmental rallies",
  "Practicing calligraphy",
  "Building models (e.g. planes, cars, ships)",
  "Creating animations"
];
const h_size = hobbies.length;
for (let i = 0; i < h_size; i++) {
  document.getElementById('form2').innerHTML += "<option value = \"" + (i + 1) + "\">" + " " + hobbies[i] + " " + "</option>";
}
function submit_h() {
  let options = document.getElementById('form2').selectedOptions;
  let val = "";
  for (let obj of options) {
    val += obj.innerHTML;
  }
  document.getElementById('reg-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const regno = document.getElementById('reg_num').value;
    const hob = val;
    console.log(fname, lname, regno, hob)
    fetch('/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'fname=' + encodeURIComponent(fname) +
        '&lname=' + encodeURIComponent(lname) +
        '&regno=' + encodeURIComponent(regno) +
        '&hob=' + encodeURIComponent(hob)
    })
      .then(function (response) {
        if (response.ok) {
          // document.getElementById('fname').value = '';
          // document.getElementById('lname').value = '';
          // document.getElementById('reg_name').value = '';
        } else {
          console.error('Error adding contact:', response.statusText);
        }
      })
      .catch(function (error) {
        console.error('Error adding data:', error);
      });
  });
  location.href = 'http://127.0.0.1:5500/sign_in.html'

}
function signIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  let form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  let params = {
    'client_id': '511417185897-o609h2u8skhtvo4qjebt2e1v1is0d9eq.apps.googleusercontent.com',
    'redirect_uri': "http://127.0.0.1:5500/sign_in.html",
    'response_type': 'token',
    'scope': 'https://www.googleapis.com/auth/userinfo.profile',
    'include_granted_scopes': 'true',
    'state': 'pass-through value'
  };

  // Add form parameters as hidden input values.
  for (let p in params) {
    let input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }



  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
function signUp() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  let form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  let params = {
    'client_id': '511417185897-o609h2u8skhtvo4qjebt2e1v1is0d9eq.apps.googleusercontent.com',
    'redirect_uri': "http://127.0.0.1:5500/register.html",
    'response_type': 'token',
    'scope': 'https://www.googleapis.com/auth/userinfo.profile',
    'include_granted_scopes': 'true',
    'state': 'pass-through value'
  };

  // Add form parameters as hidden input values.
  for (let p in params) {
    let input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }



  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

