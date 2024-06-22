(() => {
  const abc = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }

    return 1;
  };

  abc("hola mundo");
})();

/* never significa que es una funcion que eventualmente va a terminar con un error */
