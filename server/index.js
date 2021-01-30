/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/api.js":
/*!***************************!*\
  !*** ./src/server/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/users */ \"./src/server/routes/users.js\");\n/* harmony import */ var _routes_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/categories */ \"./src/server/routes/categories.js\");\n/* harmony import */ var _routes_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/products */ \"./src/server/routes/products.js\");\n/* harmony import */ var _routes_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/login */ \"./src/server/routes/login.js\");\n/* harmony import */ var _routes_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/image */ \"./src/server/routes/image.js\");\n/* harmony import */ var _routes_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/upload */ \"./src/server/routes/upload.js\");\n\n\n\n\n\n\n\nconst api = express__WEBPACK_IMPORTED_MODULE_0___default()(); //ROUTES\n\napi.use('/users', _routes_users__WEBPACK_IMPORTED_MODULE_1__.default);\napi.use('/categories', _routes_categories__WEBPACK_IMPORTED_MODULE_2__.default);\napi.use('/products', _routes_products__WEBPACK_IMPORTED_MODULE_3__.default);\napi.use('/login', _routes_login__WEBPACK_IMPORTED_MODULE_4__.default);\napi.use('/image', _routes_image__WEBPACK_IMPORTED_MODULE_5__.default);\napi.use('/upload', _routes_upload__WEBPACK_IMPORTED_MODULE_6__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n//# sourceURL=webpack://ts_rest_server/./src/server/api.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/server/api.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_3___default().config();\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use('/api', _api__WEBPACK_IMPORTED_MODULE_0__.default);\napp.listen(process.env.PORT, () => {\n  console.log(`Server running on port: ${process.env.PORT}`);\n});\nmongoose__WEBPACK_IMPORTED_MODULE_4___default().connect(process.env.DB_URL, {\n  useCreateIndex: true,\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}, err => {\n  if (err) throw new (mongoose__WEBPACK_IMPORTED_MODULE_4___default().Error)(err.message);\n  console.log('Data Base running');\n});\n\n//# sourceURL=webpack://ts_rest_server/./src/server/index.js?");

/***/ }),

/***/ "./src/server/middlewares/auth.js":
/*!****************************************!*\
  !*** ./src/server/middlewares/auth.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verifyToken\": () => /* binding */ verifyToken,\n/* harmony export */   \"verifyAdminRole\": () => /* binding */ verifyAdminRole,\n/* harmony export */   \"verifyTokenImg\": () => /* binding */ verifyTokenImg\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst verifyToken = (req, res, next) => {\n  let token = req.get('token');\n  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.SEED, (err, decoded) => {\n    if (err) {\n      return res.status(401).json({\n        ok: false,\n        err\n      });\n    }\n\n    req.user = decoded.user;\n    next();\n  });\n};\nconst verifyAdminRole = (req, res, next) => {\n  if (req.user.role === 'ADMIN_ROLE') {\n    next();\n  } else {\n    res.status(401).json({\n      ok: false,\n      err: {\n        message: 'EL usuario actual no tiene permisos para realizar la acción'\n      }\n    });\n  }\n};\nconst verifyTokenImg = (req, res, next) => {\n  let token = req.query.token;\n  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.SEED, (err, decoded) => {\n    if (err) {\n      return res.status(401).json({\n        ok: false,\n        err\n      });\n    }\n\n    req.user = decoded.user;\n    next();\n  });\n};\n\n//# sourceURL=webpack://ts_rest_server/./src/server/middlewares/auth.js?");

/***/ }),

/***/ "./src/server/models/category.js":
/*!***************************************!*\
  !*** ./src/server/models/category.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst categorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  description: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  user: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    required: true,\n    ref: 'User'\n  }\n});\ncategorySchema.plugin((mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default()), {\n  message: 'Ya existe una categoria con el nombre: {PATH}'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Category', categorySchema));\n\n//# sourceURL=webpack://ts_rest_server/./src/server/models/category.js?");

/***/ }),

/***/ "./src/server/models/product.js":
/*!**************************************!*\
  !*** ./src/server/models/product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    required: [true, 'El nombre es necesario'],\n    unique: true\n  },\n  price: {\n    type: Number,\n    required: [true, 'El precio unitario es necesario']\n  },\n  description: {\n    type: String,\n    required: false\n  },\n  img: {\n    type: String,\n    required: false\n  },\n  active: {\n    type: Boolean,\n    required: true,\n    default: true\n  },\n  category: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: 'Category',\n    required: true\n  },\n  user: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: 'User'\n  }\n});\nproductSchema.plugin((mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default()), {\n  message: 'Ya existe un producto con el nombre: {VALUE}'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Product', productSchema));\n\n//# sourceURL=webpack://ts_rest_server/./src/server/models/product.js?");

/***/ }),

/***/ "./src/server/models/user.js":
/*!***********************************!*\
  !*** ./src/server/models/user.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst validRoles = {\n  values: ['ADMIN_ROLE', 'USER_ROLE'],\n  message: '{VALUE} no es un rol valid'\n};\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    required: [true, 'El nombre es necesario']\n  },\n  email: {\n    type: String,\n    required: [true, 'El email es necesario'],\n    unique: true\n  },\n  password: {\n    type: String,\n    required: [true, 'La contraseña es necesaria']\n  },\n  img: {\n    type: String,\n    required: false\n  },\n  role: {\n    type: String,\n    default: 'USER_ROLE',\n    enum: validRoles\n  },\n  state: {\n    type: Boolean,\n    default: true\n  },\n  google: {\n    type: Boolean,\n    default: false\n  }\n});\nuserSchema.plugin((mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default()), {\n  message: 'El {PATH} ingresado ya esta siendo utilizado'\n});\n\nuserSchema.methods.toJSON = function () {\n  let userObject = this.toObject();\n  delete userObject.password;\n  delete userObject.google;\n  return userObject;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema));\n\n//# sourceURL=webpack://ts_rest_server/./src/server/models/user.js?");

/***/ }),

/***/ "./src/server/routes/categories.js":
/*!*****************************************!*\
  !*** ./src/server/routes/categories.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/category */ \"./src/server/models/category.js\");\n/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/auth */ \"./src/server/middlewares/auth.js\");\n //MODELS\n\n //MIDDLEWARES\n\n //LOGIC\n\nconst categoriesRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\ncategoriesRouter.get('/', _middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken, (req, res) => {\n  _models_category__WEBPACK_IMPORTED_MODULE_1__.default.find({}).exec((err, categories) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!categories) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    _models_category__WEBPACK_IMPORTED_MODULE_1__.default.countDocuments((err, count) => {\n      res.json({\n        ok: true,\n        count,\n        categories\n      });\n    });\n  });\n});\ncategoriesRouter.get('/:id', _middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken, (req, res) => {\n  let id = req.params.id;\n  _models_category__WEBPACK_IMPORTED_MODULE_1__.default.findById(id, {}, {}, (err, categoryDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!categoryDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    res.json({\n      ok: true,\n      category: categoryDB\n    });\n  });\n});\ncategoriesRouter.post('/', _middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken, (req, res) => {\n  let body = req.body;\n  let category = new _models_category__WEBPACK_IMPORTED_MODULE_1__.default({\n    description: body.description,\n    user: req.user._id\n  });\n  category.save((err, categoryDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!categoryDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    res.json({\n      ok: true,\n      category: categoryDB\n    });\n  });\n});\ncategoriesRouter.put('/:id', [_middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken, _middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.verifyAdminRole], (req, res) => {\n  let id = req.params.id;\n  let body = req.body;\n  _models_category__WEBPACK_IMPORTED_MODULE_1__.default.findById(id, {}, {}, (err, categoryDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!categoryDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    categoryDB.description = body.description;\n    categoryDB.save((err, updatedCategory) => {\n      if (err) {\n        return res.status(500).json({\n          ok: false,\n          err\n        });\n      }\n\n      res.status(201).json({\n        ok: true,\n        message: 'Categoria actualizada',\n        category: updatedCategory\n      });\n    });\n  });\n});\ncategoriesRouter.delete('/:id', [_middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken, _middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.verifyAdminRole], (req, res) => {\n  let id = req.params.id;\n  _models_category__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndDelete(id, (err, categoryDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!categoryDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    res.json({\n      ok: true,\n      message: 'Categoria borrada',\n      category: categoryDB\n    });\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoriesRouter);\n\n//# sourceURL=webpack://ts_rest_server/./src/server/routes/categories.js?");

/***/ }),

/***/ "./src/server/routes/image.js":
/*!************************************!*\
  !*** ./src/server/routes/image.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/auth */ \"./src/server/middlewares/auth.js\");\n\n\n //MIDDLEWARES\n\n //LOGIC\n\nconst imageRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nimageRouter.get('/:type/:img', _middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyTokenImg, (req, res) => {\n  let type = req.params.type;\n  let img = req.params.img;\n  let imagePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, `../uploads/${type}/${img}`);\n\n  if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(imagePath)) {\n    res.sendFile(imagePath);\n  } else {\n    let noImagePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, `../src/server/assets/images/no-image.png`);\n    res.sendFile(noImagePath);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageRouter);\n\n//# sourceURL=webpack://ts_rest_server/./src/server/routes/image.js?");

/***/ }),

/***/ "./src/server/routes/login.js":
/*!************************************!*\
  !*** ./src/server/routes/login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n\n\n //MODELS\n\n //LOGIC\n\nconst loginRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nloginRouter.post('/', (req, res) => {\n  let body = req.body;\n  _models_user__WEBPACK_IMPORTED_MODULE_3__.default.findOne({\n    email: body.email\n  }, (err, userDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!userDB) {\n      return res.status(400).json({\n        ok: false,\n        err: {\n          message: '(Usuario) o contraseña incorrecto'\n        }\n      });\n    }\n\n    if (!bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(body.password, userDB.password)) {\n      return res.status(400).json({\n        ok: false,\n        err: {\n          message: 'Usuario o (contraseña) incorrecto'\n        }\n      });\n    }\n\n    let token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n      user: userDB\n    }, process.env.SEED, {\n      expiresIn: '48h'\n    });\n    res.json({\n      ok: true,\n      user: userDB,\n      token\n    });\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginRouter);\n\n//# sourceURL=webpack://ts_rest_server/./src/server/routes/login.js?");

/***/ }),

/***/ "./src/server/routes/products.js":
/*!***************************************!*\
  !*** ./src/server/routes/products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares/auth */ \"./src/server/middlewares/auth.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product */ \"./src/server/models/product.js\");\n //MIDDLEWARES\n\n //MODELS\n\n //LOGIC\n\nconst productsRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nproductsRouter.get('/', _middlewares_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken, (req, res) => {\n  _models_product__WEBPACK_IMPORTED_MODULE_2__.default.find({\n    active: true\n  }).populate('user', 'name email').populate('category', 'description').exec((err, products) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!products) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    _models_product__WEBPACK_IMPORTED_MODULE_2__.default.countDocuments({\n      active: true\n    }, (err, count) => {\n      res.json({\n        ok: true,\n        count,\n        products\n      });\n    });\n  });\n});\nproductsRouter.get('/:id', _middlewares_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken, (req, res) => {\n  let id = req.params.id;\n  _models_product__WEBPACK_IMPORTED_MODULE_2__.default.findById(id).populate('user', 'name email').populate('category', 'description').exec((err, productDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!productDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    res.json({\n      ok: true,\n      product: productDB\n    });\n  });\n});\nproductsRouter.get('/search/:keyword', (req, res) => {\n  let keyword = req.params.keyword;\n  let regex = RegExp(keyword, 'i');\n  _models_product__WEBPACK_IMPORTED_MODULE_2__.default.find({\n    name: regex\n  }).populate('user', 'name email').populate('category', 'description').exec((err, products) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!products) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    _models_product__WEBPACK_IMPORTED_MODULE_2__.default.countDocuments({\n      name: regex\n    }, (err, count) => {\n      res.json({\n        ok: true,\n        count,\n        products\n      });\n    });\n  });\n});\nproductsRouter.post('/', _middlewares_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken, (req, res) => {\n  let body = req.body;\n  let product = new _models_product__WEBPACK_IMPORTED_MODULE_2__.default({\n    name: body.name,\n    description: body.description,\n    price: body.price,\n    img: body.img,\n    active: body.active,\n    category: body.category,\n    // OJO\n    user: req.user._id\n  });\n  product.save((err, productDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!productDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    res.json({\n      ok: true,\n      product: productDB\n    });\n  });\n});\nproductsRouter.put('/:id', _middlewares_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken, (req, res) => {\n  let id = req.params.id;\n  let body = req.body;\n  _models_product__WEBPACK_IMPORTED_MODULE_2__.default.findById(id, {}, {}, (err, productDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!productDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    productDB.name = body.name;\n    productDB.description = body.description;\n    productDB.price = body.price;\n    productDB.img = body.img;\n    productDB.active = body.active;\n    productDB.category = body.category;\n    productDB.save((err, updatedProduct) => {\n      if (err) {\n        return res.status(500).json({\n          ok: false,\n          err\n        });\n      }\n\n      res.status(201).json({\n        ok: true,\n        message: 'Producto actualizado',\n        product: updatedProduct\n      });\n    });\n  });\n});\nproductsRouter.delete('/:id', _middlewares_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken, (req, res) => {\n  let id = req.params.id;\n  _models_product__WEBPACK_IMPORTED_MODULE_2__.default.findById(id, (err, productDB) => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!productDB) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    productDB.active = false;\n    productDB.save((err, deletedProduct) => {\n      if (err) {\n        return res.status(500).json({\n          ok: false,\n          err\n        });\n      }\n\n      res.json({\n        ok: true,\n        message: 'Producto desactivado',\n        product: deletedProduct\n      });\n    });\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsRouter);\n\n//# sourceURL=webpack://ts_rest_server/./src/server/routes/products.js?");

/***/ }),

/***/ "./src/server/routes/upload.js":
/*!*************************************!*\
  !*** ./src/server/routes/upload.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/product */ \"./src/server/models/product.js\");\n\n\n\n //MODELS\n\n\n //VALID OPTIONS\n\nconst validExtensions = ['png', 'jpg'];\nconst validDestinations = ['users', 'products'];\nconst uploadRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nuploadRouter.use(express_fileupload__WEBPACK_IMPORTED_MODULE_1___default()({\n  useTempFiles: true\n}));\nuploadRouter.put('/:destination/:id', (req, res) => {\n  let destination = req.params.destination;\n  let id = req.params.id;\n\n  if (!req.files) {\n    return res.status(400).json({\n      ok: false,\n      err: {\n        message: 'No se ha seleccionado ningun archivo'\n      }\n    });\n  }\n\n  let file = req.files.file;\n  let fileNameSplitted = file.name.split('.');\n  let fileExtension = fileNameSplitted[fileNameSplitted.length - 1];\n\n  if (validExtensions.indexOf(fileExtension) < 0) {\n    return res.status(400).json({\n      ok: false,\n      err: {\n        message: 'Solo se permiten archivos con extensiones ' + validExtensions.join(' o ') + '.',\n        ext: fileExtension\n      }\n    });\n  }\n\n  if (validDestinations.indexOf(destination) < 0) {\n    return res.status(400).json({\n      ok: false,\n      err: {\n        message: 'Solo se permiten los destinos ' + validDestinations.join(' o ') + '.'\n      }\n    });\n  }\n\n  let uniqueFileName = `${id}-${new Date().getMilliseconds()}.${fileExtension}`;\n  file.mv(`./uploads/${destination}/${uniqueFileName}`, err => {\n    if (err) {\n      return res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    switch (destination) {\n      case 'users':\n        userImageUpload(id, res, uniqueFileName);\n        break;\n\n      case 'products':\n        productImageUpload(id, res, uniqueFileName);\n\n      default:\n        break;\n    }\n  });\n}); //FUNCTIONS\n\nconst userImageUpload = (id, res, filename) => {\n  _models_user__WEBPACK_IMPORTED_MODULE_4__.default.findById(id, (err, userDB) => {\n    if (err) {\n      deleteOldImg(filename, 'users');\n      return res.status(500).json({\n        ok: false,\n        message: `Usuario con ID ${err.value} no existe`,\n        err\n      });\n    }\n\n    if (!userDB) {\n      deleteOldImg(filename, 'users');\n      return res.status(400).json({\n        ok: false,\n        err: {\n          message: 'No se encontro el usuario'\n        }\n      });\n    }\n\n    deleteOldImg(userDB.img, 'users');\n    userDB.img = filename;\n    userDB.save((err, savedUser) => {\n      if (err) {\n        return res.status(500).json({\n          ok: false,\n          err\n        });\n      }\n\n      res.json({\n        ok: true,\n        message: 'Archivo subido y usuario actualizado correctamente',\n        user: savedUser\n      });\n    });\n  });\n};\n\nconst productImageUpload = (id, res, filename) => {\n  _models_product__WEBPACK_IMPORTED_MODULE_5__.default.findById(id, (err, productDB) => {\n    if (err) {\n      deleteOldImg(filename, 'products');\n      return res.status(500).json({\n        ok: false,\n        message: `Producto con ID ${err.value} no existe`,\n        err\n      });\n    }\n\n    if (!productDB) {\n      deleteOldImg(filename, 'products');\n      return res.status(400).json({\n        ok: false,\n        err: {\n          message: 'No se encontro el producto'\n        }\n      });\n    }\n\n    deleteOldImg(productDB.img, 'products');\n    productDB.img = filename;\n    productDB.save((err, savedProduct) => {\n      if (err) {\n        return res.status(500).json({\n          ok: false,\n          err\n        });\n      }\n\n      res.json({\n        ok: true,\n        message: 'Archivo subido y producto actualizado correctamente',\n        product: savedProduct\n      });\n    });\n  });\n};\n\nconst deleteOldImg = (filename, destination) => {\n  let imagePath = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(__dirname, `../../uploads/${destination}/${filename}`);\n\n  if (fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(imagePath)) {\n    fs__WEBPACK_IMPORTED_MODULE_2___default().unlinkSync(imagePath);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadRouter);\n\n//# sourceURL=webpack://ts_rest_server/./src/server/routes/upload.js?");

/***/ }),

/***/ "./src/server/routes/users.js":
/*!************************************!*\
  !*** ./src/server/routes/users.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/auth */ \"./src/server/middlewares/auth.js\");\n\n //MODELS\n\n //MIDDLEWARES\n\n //LOGIC\n\nconst usersRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nusersRouter.get('/', _middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyToken, (req, res) => {\n  let skip = req.query.skip || 0;\n  skip = Number(skip);\n  let show = req.query.show || 5;\n  show = Number(show);\n  _models_user__WEBPACK_IMPORTED_MODULE_2__.default.find({}).skip(skip).limit(show).exec((err, users) => {\n    if (err) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    _models_user__WEBPACK_IMPORTED_MODULE_2__.default.countDocuments({}, (err, count) => {\n      if (err) {\n        return res.status(400).json({\n          ok: false,\n          err\n        });\n      }\n\n      res.json({\n        ok: true,\n        count,\n        users\n      });\n    });\n  });\n});\nusersRouter.post('/', [_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyToken, _middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyAdminRole], (req, res) => {\n  let body = req.body;\n  let user = new _models_user__WEBPACK_IMPORTED_MODULE_2__.default({\n    name: body.name,\n    email: body.email,\n    password: bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync(body.password, 10),\n    role: body.role\n  });\n  user.save({}, (err, userDB) => {\n    if (err) {\n      res.status(500).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!userDB) {\n      res.status(400).json({\n        ok: false,\n        message: 'El usuario no fue guardado correctamente'\n      });\n    }\n\n    res.status(200).json({\n      ok: true,\n      message: 'Usuario guardado correctamente',\n      user: userDB\n    });\n  });\n});\nusersRouter.put('/:id', [_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyToken, _middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyAdminRole], (req, res) => {\n  let body = req.body;\n  let id = req.params.id;\n  delete body.password;\n  delete body.google;\n  _models_user__WEBPACK_IMPORTED_MODULE_2__.default.findByIdAndUpdate(id, body, {\n    new: true,\n    runValidators: true\n  }, (err, userDB) => {\n    if (err) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    res.json({\n      ok: true,\n      user: userDB\n    });\n  });\n});\nusersRouter.delete('/:id', [_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyToken, _middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.verifyAdminRole], (req, res) => {\n  let id = req.params.id;\n  _models_user__WEBPACK_IMPORTED_MODULE_2__.default.findByIdAndRemove(id, {}, (err, deletedUser) => {\n    if (err) {\n      return res.status(400).json({\n        ok: false,\n        err\n      });\n    }\n\n    if (!deletedUser) {\n      return res.status(400).json({\n        ok: false,\n        err: {\n          message: 'El usuario no fue encontrado'\n        }\n      });\n    }\n\n    res.json({\n      ok: true,\n      user: deletedUser\n    });\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersRouter);\n\n//# sourceURL=webpack://ts_rest_server/./src/server/routes/users.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-fileupload");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("mongoose-unique-validator");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/server/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;