import { renderBlock } from './lib.js'

function dateToString(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function renderSearchFormBlock(
  dateIn?: Date,
  dateOut?: Date
) {
  if (!dateIn) {
    dateIn = new Date(new Date().setDate(new Date().getDate() + 1));
  }

  if (!dateOut) {
    dateOut = new Date(new Date(dateIn).setDate(new Date().getDate() + 2));
  }

  const minDate = new Date();

  const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2));
  maxDate.setDate(0);

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
            <input id="check-in-date" type="date" value=${dateToString(dateIn)} min=${dateToString(minDate)} max=${dateToString(maxDate)} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${dateToString(dateOut)} min=${dateToString(minDate)} max=${dateToString(maxDate)} name="checkout" />
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
