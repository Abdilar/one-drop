import {cssTransition} from "react-toastify";

export const toastAnimationOption = cssTransition({
  enter: 'animation--flipIn',
  exit: 'animation--flipOut',
  duration: 750,
  appendPosition: false,
  collapse: true,
  collapseDuration: 300
});
