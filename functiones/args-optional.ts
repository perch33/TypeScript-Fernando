(() => {
    const fullName = (firstName: string, lastName?: string | boolean): string => {
      return `${firstName} ${lastName || 'sin last name'}`;
    };
  
    const name = fullName("Tony", "Stark");
  
    console.log(name);
  })();
  