/**
 * Filled tone by default
 * 
 * @author jordan.daigle
 * @date 2019-07-20
 */

import {MaterialDesignIconSharp} from './core/md-icon-sharp';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIconSharp);
}