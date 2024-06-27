

export const uniqueId = ()  => {

    const timestamp = new Date().getTime();
    const randomNumber = Math.random();
    const timestampHex = timestamp.toString(16);
    const randomNumberHex = randomNumber.toString(16);
    const uniqueId = timestampHex + randomNumberHex;
  
    return uniqueId;
}

  