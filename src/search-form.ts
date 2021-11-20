import { renderBlock } from './lib.js'

function dateToString(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function renderSearchFormBlock(
  dateIn: string,
  dateOut: string
) {
  let dateInAsDate: Date;

  if (!dateIn) {
    dateInAsDate = new Date(new Date().setDate(new Date().getDate() + 1));
    dateIn = dateToString(dateInAsDate);
  } else {
    dateInAsDate = new Date(dateIn);
  }

  if (!dateOut) {
    const dateOutAsDate = new Date(new Date(dateInAsDate).setDate(new Date().getDate() + 2));
    dateOut = dateToString(dateOutAsDate);
  }

  const minDate = dateToString(new Date());

  const twoMonthAhead = new Date(new Date().setMonth(new Date().getMonth() + 2));
  twoMonthAhead.setDate(0);

  const maxDate = dateToString(twoMonthAhead);

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${dateIn} min=${minDate} max=${maxDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${dateOut} min=${minDate} max=${maxDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
