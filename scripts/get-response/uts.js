function uts() {
    console.log("testNum | Pass/Fail | score | machineActive | expectedResponse | response");
    console.log("---");
    let pass;
    let testNum;
    let score;
    let machineActive;
    let expectedResponse;
    let response;
    let fail = 0;

    // Configura los valores iniciales de score y machineActive antes del bucle
    score = 1;
    machineActive = true;

    // hacer un array de numeros, implementar este for en otro documento, más simple gracias al array, aqui solo el output
     
    for (let i = 1; i <= 3; i++) {
        testNum = i;

        if (i === 1) {
            score = 75;
            machineActive = false;
            expectedResponse = "Turn the machine on!!!";
        }
        if (i === 2) {
            score = 75;
            machineActive = true;
            expectedResponse = "That\'s a great score, you really know your stuff.";
        }
        if (i === 3) {
            score = 150;
            machineActive = true;
            expectedResponse = "This is not possible, an error has occurred.";
        }
        response = getResponse(score, machineActive);
        if (response === expectedResponse) {
            pass = "pass";
        } else {
            pass = "fail";
            fail++;
        }

        console.log(i + " | " + pass + " | " + score + " | " + machineActive + " | " + expectedResponse + " | " + response);

    }
    console.log("---");
    console.log("Fails:" + fail);
}
