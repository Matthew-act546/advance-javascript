console.log("A STEP BY STEP CREATING A SCRAMBLE NA ITLOG!");

function step1(callback) {
  setTimeout(() => {
    console.log("step 1: batiin ang itlog.(HI itlog! joke) break the egg(alam niyo nayon)");
    callback()
  }, 5000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("step 2: lagyan ng asin at magic sarap kung hindi ka expose sa msg lately");
    callback()
  }, 3000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("step 3: haluin haluin");
    callback()
  }, 2000);
}

function step4(callback) {
  setTimeout(() => {
    console.log("step 4: i prito na and pagkatapos ng 5-8minutes");
    callback()
  }, 4000);
}

function step5(callback) {
  setTimeout(() => {
    console.log("step 5: i lagay na sa plato and shalaa kainan naa!");
    callback()
  }, 6000);  
}

step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        step5(() => {

        })
      })
    })
  })
}) // WOW! THIS IS CALLED CALLBACK HILL!