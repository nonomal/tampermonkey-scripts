import Bar from '../../common/Bar';
import $ from 'jquery';

export default class Electron {
  static selectors = {
    bar: '.announcement-banner',
  };

  static replace() {
    if (location.host === 'www.electronjs.org') {
      Bar.replace({
        barSelector: this.selectors.bar,
        isObserveBar: false,
        hideBarSelector: this.selectors.bar,
        isObserveHideBar: false,
        replaceBarCallback: () => {
          $(Bar.replaceBarSelector.barUl + ':eq(0)').css('height', '25px');
          $(Bar.replaceBarSelector.barUl + ':eq(1)').css('height', '20px');
        },
      });
      $(this.selectors.bar).css({ padding: 0 });
    }
  }
}
