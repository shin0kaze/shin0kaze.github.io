webpackJsonp([0],{

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreditsScene = function (_Phaser$Scene) {
  _inherits(CreditsScene, _Phaser$Scene);

  function CreditsScene() {
    _classCallCheck(this, CreditsScene);

    return _possibleConstructorReturn(this, (CreditsScene.__proto__ || Object.getPrototypeOf(CreditsScene)).call(this, 'Credits'));
  }

  _createClass(CreditsScene, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
      this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
      this.madeByText = this.add.text(0, 0, 'Created By: Sh1n0k4z3', { fontSize: '26px', fill: '#fff' });
      this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

      Phaser.Display.Align.In.Center(this.creditsText, this.zone);

      Phaser.Display.Align.In.Center(this.madeByText, this.zone);

      this.madeByText.setY(1000);
      this.creditsTween = this.tweens.add({
        targets: this.creditsText,
        y: -100,
        ease: 'Power1',
        duration: 3000,
        delay: 1000,
        onComplete: function onComplete() {
          this.destroy;
        }
      });

      this.madeByTween = this.tweens.add({
        targets: this.madeByText,
        y: -300,
        ease: 'Power1',
        duration: 8000,
        delay: 1000,
        onComplete: function () {
          this.madeByTween.destroy;
          this.scene.start('Title');
        }.bind(this)
      });
    }
  }]);

  return CreditsScene;
}(Phaser.Scene);

exports.default = CreditsScene;
;

/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(548);

var _checkbox = __webpack_require__(1454);

var _label = __webpack_require__(549);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsScene = function (_Phaser$Scene) {
  _inherits(OptionsScene, _Phaser$Scene);

  function OptionsScene() {
    _classCallCheck(this, OptionsScene);

    return _possibleConstructorReturn(this, (OptionsScene.__proto__ || Object.getPrototypeOf(OptionsScene)).call(this, 'Options'));
  }

  _createClass(OptionsScene, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.musicOn = true;
      this.soundOn = true;
      var btnTexture = this.textures.get('button');
      var chkTexture = this.textures.get('check');
      this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
      var ui = this.cache.json.get('locale').ui;

      this.musicCheck = new _checkbox.Checkbox(this, 200, 300, chkTexture, function () {}, ui.btnPlay);
      this.add.existing(this.musicCheck);

      this.soundCheck = new _checkbox.Checkbox(this, 200, 400, chkTexture, function () {}, ui.btnPlay);
      this.add.existing(this.soundCheck);

      this.saveOptButton = new _button.Button(this, 100, 500, btnTexture, function () {
        _this2.scene.start('Title');
      }, ui.btnPlay);
      this.add.existing(this.saveOptButton);

      this.cancelOptButton = new _button.Button(this, 250, 500, btnTexture, function () {
        _this2.scene.start('Title');
      }, ui.btnPlay);
      this.add.existing(this.cancelOptButton);
    }
  }]);

  return OptionsScene;
}(Phaser.Scene);

exports.default = OptionsScene;
;

/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = exports.Checkbox = function (_Phaser$GameObjects$I) {
  _inherits(Checkbox, _Phaser$GameObjects$I);

  function Checkbox(scene, x, y, spritesheet, callback, text) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, scene, x, y, spritesheet, 2));

    _this.caption = null;
    if (text != '') {
      _this.caption = scene.add.text(x, y, text, { fill: '#0ff' });
      _this.caption.setDepth(1);
      _this.caption.setOrigin(0.5, 0.5);
      _this.caption.bounds = _this.caption.getBounds();
    }
    _this.setInteractive({ useHandCursor: true }).on('pointerover', function () {
      return _this.hover();
    }).on('pointerout', function () {
      return _this.release();
    }).on('pointerdown', function () {
      return _this.press();
    }).on('pointerup', function () {
      _this.hover();
      callback();
    });
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'hover',
    value: function hover() {
      this.setFrame(3);
      if (this.caption != null) {
        this.caption.setStyle({ fill: '#0f0' });
      }
    }
  }, {
    key: 'release',
    value: function release() {
      this.setFrame(2);
      if (this.caption != null) {
        this.caption.setStyle({ fill: '#0ff' });
      }
    }
  }, {
    key: 'press',
    value: function press() {
      this.setFrame(1);
      if (this.caption != null) {
        this.caption.setStyle({ fill: '#ff0' });
      }
    }
  }]);

  return Checkbox;
}(Phaser.GameObjects.Image);

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameScene = __webpack_require__(547);

var _gameScene2 = _interopRequireDefault(_gameScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreloadScene = function (_Phaser$Scene) {
  _inherits(PreloadScene, _Phaser$Scene);

  function PreloadScene() {
    _classCallCheck(this, PreloadScene);

    return _possibleConstructorReturn(this, (PreloadScene.__proto__ || Object.getPrototypeOf(PreloadScene)).call(this, 'Preload'));
  }

  _createClass(PreloadScene, [{
    key: 'preload',
    value: function preload() {
      console.log('start preloading for game');
      var logo = this.add.image(400, 150, 'boot', 'logo.png');
      logo.setScale(0.4, 0.4);

      var loadFill = this.add.image(400, 300, 'boot', 'progressBarFill.png');
      var loadEmpty = this.add.image(400, 300, 'boot', 'progressBarEmpty.png');
      var width = window.config.width;
      var height = window.config.height;

      var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
          font: '20px monospace',
          fill: '#ffffff'
        }
      });
      loadingText.setOrigin(0.5, 0.5);

      var percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      percentText.setOrigin(0.5, 0.5);

      var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      assetText.setOrigin(0.5, 0.5);

      this.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
        loadFill.setScale(value, 1);
      });

      this.load.on('fileprogress', function (file) {
        assetText.setText('Loading asset: ' + file.key);
      });

      this.load.on('complete', function () {
        loadFill.destroy();
        loadEmpty.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.ready();
      }.bind(this));

      this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);

      this.load.atlas('guiElem', './res/graphic/gui/elements.png', './res/graphic/gui/elements.json');

      this.load.json('locale', '/res/loc/' + window.config.settings.locale + '.json');
    }
  }, {
    key: 'create',
    value: function create() {
      console.log(this.cache.json.get('engLocale'));
      this.textures.addSpriteSheetFromAtlas('button', {
        atlas: 'guiElem',
        frame: 'button',
        frameWidth: 120,
        frameHeight: 30,
        endFrame: 3
      });
      this.textures.addSpriteSheetFromAtlas('check', {
        atlas: 'guiElem',
        frame: 'check',
        frameWidth: 120,
        frameHeight: 30,
        endFrame: 3
      });
    }
  }, {
    key: 'init',
    value: function init() {
      this.readyCount = 0;
    }
  }, {
    key: 'ready',
    value: function ready() {
      this.readyCount++;
      console.log(this.readyCount);
      if (this.readyCount === 2) {
        this.scene.start('Title');
      }
    }
  }]);

  return PreloadScene;
}(Phaser.Scene);

exports.default = PreloadScene;
;

/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(546);

var _config2 = _interopRequireDefault(_config);

var _button = __webpack_require__(548);

var _label = __webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleScene = function (_Phaser$Scene) {
  _inherits(TitleScene, _Phaser$Scene);

  function TitleScene() {
    _classCallCheck(this, TitleScene);

    var _this = _possibleConstructorReturn(this, (TitleScene.__proto__ || Object.getPrototypeOf(TitleScene)).call(this, 'Title'));

    _this.name = 'Title';
    _this.once = true;
    return _this;
  }

  _createClass(TitleScene, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      if (this.once) {
        this.once = false;
      }
      console.log(this.name);

      var width = window.config.width / 2;
      var height = window.config.height / 2;
      var ui = this.cache.json.get('locale').ui;
      var btnTexture = this.textures.get('button');
      this.playButton = new _button.Button(this, width, height, btnTexture, function () {
        _this2.scene.start('Game');
      }, ui.btnPlay);
      this.add.existing(this.playButton);
      this.continueButton = new _button.Button(this, width, height + 50, btnTexture, function () {
        console.log('fuck off');
      }, ui.btnContinue);
      this.add.existing(this.continueButton);
      this.optionsButton = new _button.Button(this, width, height + 100, btnTexture, function () {
        _this2.scene.start('Options');
      }, ui.btnOptions);
      this.add.existing(this.optionsButton);
      this.creditsButton = new _button.Button(this, width, height + 150, btnTexture, function () {
        _this2.scene.start('Credits');
      }, ui.btnCredits);
      this.add.existing(this.creditsButton);
    }
  }]);

  return TitleScene;
}(Phaser.Scene);

exports.default = TitleScene;
;

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(161);

exports.default = {
  type: Phaser.AUTO,
  parent: 'phaser-game',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.NONE
  },
  settings: {
    locale: 'en'
  }
};

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScene = function (_Phaser$Scene) {
  _inherits(GameScene, _Phaser$Scene);

  function GameScene() {
    _classCallCheck(this, GameScene);

    return _possibleConstructorReturn(this, (GameScene.__proto__ || Object.getPrototypeOf(GameScene)).call(this, 'Game'));
  }

  _createClass(GameScene, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {}
  }]);

  return GameScene;
}(Phaser.Scene);

exports.default = GameScene;

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_Phaser$GameObjects$I) {
  _inherits(Button, _Phaser$GameObjects$I);

  function Button(scene, x, y, spritesheet, callback, text) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, scene, x, y, spritesheet, 2));

    _this.caption = null;
    if (text != '') {
      _this.caption = scene.add.text(x, y, text, { fill: '#0ff' });
      _this.caption.setDepth(1);
      _this.caption.setOrigin(0.5, 0.5);
    }
    _this.setInteractive({ useHandCursor: true }).on('pointerover', function () {
      return _this.hover();
    }).on('pointerout', function () {
      return _this.release();
    }).on('pointerdown', function () {
      return _this.press();
    }).on('pointerup', function () {
      _this.hover();
      callback();
    });
    return _this;
  }

  _createClass(Button, [{
    key: 'hover',
    value: function hover() {
      this.setFrame(3);
      if (this.caption != null) {
        this.caption.setStyle({ fill: '#0f0' });
      }
    }
  }, {
    key: 'release',
    value: function release() {
      this.setFrame(2);
      if (this.caption != null) {
        this.caption.setStyle({ fill: '#0ff' });
      }
    }
  }, {
    key: 'press',
    value: function press() {
      this.setFrame(1);
      if (this.caption != null) {
        this.caption.setStyle({ fill: '#ff0' });
      }
    }
  }]);

  return Button;
}(Phaser.GameObjects.Image);

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = exports.Label = function (_Phaser$GameObjects$T) {
  _inherits(Label, _Phaser$GameObjects$T);

  function Label(scene, x, y, text, style) {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, scene, x, y, text, style));
  }

  _createClass(Label, [{
    key: 'hover',
    value: function hover() {
      this.setStyle({ fill: '#ff0' });
    }
  }, {
    key: 'release',
    value: function release() {
      this.setStyle({ fill: '#0f0' });
    }
  }, {
    key: 'press',
    value: function press() {
      this.setStyle({ fill: '#0ff' });
    }
  }]);

  return Label;
}(Phaser.GameObjects.Text);

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(161);

var _config = __webpack_require__(546);

var _config2 = _interopRequireDefault(_config);

var _creditsScene = __webpack_require__(1452);

var _creditsScene2 = _interopRequireDefault(_creditsScene);

var _gameScene = __webpack_require__(547);

var _gameScene2 = _interopRequireDefault(_gameScene);

var _optionsScene = __webpack_require__(1453);

var _optionsScene2 = _interopRequireDefault(_optionsScene);

var _preloadScene = __webpack_require__(1455);

var _preloadScene2 = _interopRequireDefault(_preloadScene);

var _titleScene = __webpack_require__(1456);

var _titleScene2 = _interopRequireDefault(_titleScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game(config) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, config));

    _this.scene.add('Boot', BootScene);
    _this.scene.add('Preload', _preloadScene2.default);
    _this.scene.add('Title', _titleScene2.default);
    _this.scene.add('Options', _optionsScene2.default);
    _this.scene.add('Credits', _creditsScene2.default);
    _this.scene.add('Game', _gameScene2.default);
    _this.scene.start('Boot');
    return _this;
  }

  return Game;
}(Phaser.Game);

var BootScene = function (_Phaser$Scene) {
  _inherits(BootScene, _Phaser$Scene);

  function BootScene() {
    _classCallCheck(this, BootScene);

    return _possibleConstructorReturn(this, (BootScene.__proto__ || Object.getPrototypeOf(BootScene)).call(this, 'Boot'));
  }

  _createClass(BootScene, [{
    key: 'preload',
    value: function preload() {
      this.load.atlas('boot', '/res/boot/boot.png', '/res/boot/boot.json');
    }
  }, {
    key: 'create',
    value: function create() {
      this.scene.start('Preload');
    }
  }]);

  return BootScene;
}(Phaser.Scene);
/**
 * Сохраняем конфиг глобально, что бы не импортить его каждый раз.
 * просто нельзя так просто взять и получить размеры сцены -_-
 * есть конечно способ через cameras, но вдруг кто то поменяет вид камеры?
*/


window.config = _config2.default;
window.game = new Game(window.config);

/***/ })

},[550]);