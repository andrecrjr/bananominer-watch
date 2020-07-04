export const checkYourWus = (dataBanano, dataFold) => {
  let lastPayDay = dataBanano.payments[0].created_at;
  let lastWorkUnit = dataFold.last;

  //Verify if the next day from the last work unit has payment, if it's not, check fold@home FALSE
  //Verify if the next day from last work unit done is bigger than today

  if (
    getJumpDate(lastWorkUnit, 1).getTime() >= new Date(lastPayDay).getTime() &&
    todayDate().getTime() <= getJumpDate(lastWorkUnit, 1)
  ) {
    return `<section class="banano__info">
    <p>Your work unit has been working normal</p>
    </section>`;
  } else {
    return `<section class="banano__info">
    <p>Whoops has something wrong check if your fold@home is active!</p>
    </section>`;
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
