export const checkYourWus = (dataBanano, dataFold) => {
  let lastPayDay = dataBanano.payments[0].created_at;
  let lastWorkUnit = dataFold.last;
  let nextDayFromTheLastWorkUnit = getJumpDate(lastWorkUnit, 1).getTime();
  let paydayTime = new Date(lastPayDay).getTime();
  let todayAtMidnight = todayDate().getTime();

  //Verify if the next day from the last work unit has payment, AND
  //Verify if the next day from last work unit done is bigger than today
  if (
    nextDayFromTheLastWorkUnit >= paydayTime &&
    todayAtMidnight <= nextDayFromTheLastWorkUnit &&
    lastWorkUnit
  ) {
    return `
    <section class="banano__info">
    <p class="banano__info--status">Account Status: active</p>
    </section>`;
  } else {
    return `
    <section class="banano__suspended">
    <section class="banano__suspended--info">
      <p>It seems your bananominer ID is inactive due to lack of recent folding activity.<br>
      Please re-enter your ban_ address on <a href="http://www.bananominer.com" target="_blank" title="click here to visit">bananominer.com</a></p>
    </section>
    </section>
    `;
  }
};

const todayDate = () => {
  const datetime = new Date();
  datetime.setHours(0, 0, 0, 0);
  return datetime;
};

const getJumpDate = (date, numberJump) => {
  let newDataJump = new Date(date);
  newDataJump.setDate(newDataJump.getDate() + numberJump);
  newDataJump.setHours(0, 0, 0, 0);
  return newDataJump;
};
