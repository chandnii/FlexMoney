/* eslint-disable no-extend-native */
import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-canvas-mock";
import React from "react";
React.useLayoutEffect = React.useEffect;

window["ClassicEditor"] = {
  create: jest.fn().mockImplementation(() => {
    return new Promise((resolve) => {
      resolve();
    });
  }),
};

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

if (!String.prototype.capitalize) {
  // eslint-disable-next-line no-extend-native
  // eslint-disable-next-line strict
  String.prototype.capitalize = function () {
    return this.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };
}

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, "g"), replacement);
  };
}

if (!String.prototype.removeSpecialCharacters) {
  String.prototype.removeSpecialCharacters = function () {
    return this.replace(/[!@#$%^&*(),._?":{}|<>]/g, " ");
  };
}
