import {
  API_URL,
  URL_COMICS,
  IMG_STANDART_XLARGE,
  IMG_NOT_AVAILABLE,
} from '../../constants/api';
import { getDataApi } from '../../utils/GetDataApi';
import { ROOT_INDEX } from '../../constants/root';

import './Comics.css';

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    console.log(data);

    let htmlContent = '';

    data.forEach(({ id, title, thumbnail: { path, extension } }) => {
      if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
        const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
        htmlContent += `
        <li class="comics__item">
            <span class="comics__title">${title}</span>
            <img class="comics__img" src="${imgSrc}" />
        </li>
      `;
      }
    });

    const htmlWrapper = `
        <ul class="comics__container">
            ${htmlContent}
        </ul>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}
export default new Comics();
