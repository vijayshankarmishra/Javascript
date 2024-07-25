(function chainew(){
    console.log(`DB Connected`);
})();

( () => {
    console.log(`DB Connected Two`);
})();

((name) => {
    console.log(`Connected to DB with ${name}`);
}) ("Vijayshankar");