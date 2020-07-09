/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/*eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('snet_yolov3_object_detection.Boxes', null, global);
goog.exportSymbol('snet_yolov3_object_detection.Input', null, global);
goog.exportSymbol('snet_yolov3_object_detection.Output', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_yolov3_object_detection.Input = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_yolov3_object_detection.Input, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_yolov3_object_detection.Input.displayName = 'snet_yolov3_object_detection.Input';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_yolov3_object_detection.Input.prototype.toObject = function(opt_includeInstance) {
  return snet_yolov3_object_detection.Input.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_yolov3_object_detection.Input} msg The msg instance to transform.
 * @return {!Object}
 */
snet_yolov3_object_detection.Input.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: jspb.Message.getFieldWithDefault(msg, 1, ""),
    imgPath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    confidence: +jspb.Message.getFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_yolov3_object_detection.Input}
 */
snet_yolov3_object_detection.Input.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_yolov3_object_detection.Input;
  return snet_yolov3_object_detection.Input.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_yolov3_object_detection.Input} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_yolov3_object_detection.Input}
 */
snet_yolov3_object_detection.Input.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgPath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_yolov3_object_detection.Input} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_yolov3_object_detection.Input.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_yolov3_object_detection.Input.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_yolov3_object_detection.Input.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getImgPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional string model = 1;
 * @return {string}
 */
snet_yolov3_object_detection.Input.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
snet_yolov3_object_detection.Input.prototype.setModel = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string img_path = 2;
 * @return {string}
 */
snet_yolov3_object_detection.Input.prototype.getImgPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
snet_yolov3_object_detection.Input.prototype.setImgPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional float confidence = 3;
 * @return {number}
 */
snet_yolov3_object_detection.Input.prototype.getConfidence = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
snet_yolov3_object_detection.Input.prototype.setConfidence = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_yolov3_object_detection.Boxes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_yolov3_object_detection.Boxes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_yolov3_object_detection.Boxes.displayName = 'snet_yolov3_object_detection.Boxes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_yolov3_object_detection.Boxes.prototype.toObject = function(opt_includeInstance) {
  return snet_yolov3_object_detection.Boxes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_yolov3_object_detection.Boxes} msg The msg instance to transform.
 * @return {!Object}
 */
snet_yolov3_object_detection.Boxes.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0),
    w: jspb.Message.getFieldWithDefault(msg, 3, 0),
    h: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_yolov3_object_detection.Boxes}
 */
snet_yolov3_object_detection.Boxes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_yolov3_object_detection.Boxes;
  return snet_yolov3_object_detection.Boxes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_yolov3_object_detection.Boxes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_yolov3_object_detection.Boxes}
 */
snet_yolov3_object_detection.Boxes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setW(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setH(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_yolov3_object_detection.Boxes} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_yolov3_object_detection.Boxes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_yolov3_object_detection.Boxes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_yolov3_object_detection.Boxes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getW();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getH();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
snet_yolov3_object_detection.Boxes.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
snet_yolov3_object_detection.Boxes.prototype.setX = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
snet_yolov3_object_detection.Boxes.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
snet_yolov3_object_detection.Boxes.prototype.setY = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 w = 3;
 * @return {number}
 */
snet_yolov3_object_detection.Boxes.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
snet_yolov3_object_detection.Boxes.prototype.setW = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 h = 4;
 * @return {number}
 */
snet_yolov3_object_detection.Boxes.prototype.getH = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
snet_yolov3_object_detection.Boxes.prototype.setH = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_yolov3_object_detection.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, snet_yolov3_object_detection.Output.repeatedFields_, null);
};
goog.inherits(snet_yolov3_object_detection.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_yolov3_object_detection.Output.displayName = 'snet_yolov3_object_detection.Output';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
snet_yolov3_object_detection.Output.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_yolov3_object_detection.Output.prototype.toObject = function(opt_includeInstance) {
  return snet_yolov3_object_detection.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_yolov3_object_detection.Output} msg The msg instance to transform.
 * @return {!Object}
 */
snet_yolov3_object_detection.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    deltaTime: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    boxesList: jspb.Message.toObjectList(msg.getBoxesList(),
    snet_yolov3_object_detection.Boxes.toObject, includeInstance),
    classIdsList: jspb.Message.getField(msg, 3),
    confidencesList: jspb.Message.getRepeatedFloatingPointField(msg, 4),
    imgBase64: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_yolov3_object_detection.Output}
 */
snet_yolov3_object_detection.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_yolov3_object_detection.Output;
  return snet_yolov3_object_detection.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_yolov3_object_detection.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_yolov3_object_detection.Output}
 */
snet_yolov3_object_detection.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDeltaTime(value);
      break;
    case 2:
      var value = new snet_yolov3_object_detection.Boxes;
      reader.readMessage(value,snet_yolov3_object_detection.Boxes.deserializeBinaryFromReader);
      msg.addBoxes(value);
      break;
    case 3:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setClassIdsList(value);
      break;
    case 4:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setConfidencesList(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgBase64(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_yolov3_object_detection.Output} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_yolov3_object_detection.Output.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_yolov3_object_detection.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_yolov3_object_detection.Output.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeltaTime();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = this.getBoxesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      snet_yolov3_object_detection.Boxes.serializeBinaryToWriter
    );
  }
  f = this.getClassIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = this.getConfidencesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
  f = this.getImgBase64();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional float delta_time = 1;
 * @return {number}
 */
snet_yolov3_object_detection.Output.prototype.getDeltaTime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
snet_yolov3_object_detection.Output.prototype.setDeltaTime = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Boxes boxes = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!snet_yolov3_object_detection.Boxes>}
 */
snet_yolov3_object_detection.Output.prototype.getBoxesList = function() {
  return /** @type{!Array.<!snet_yolov3_object_detection.Boxes>} */ (
    jspb.Message.getRepeatedWrapperField(this, snet_yolov3_object_detection.Boxes, 2));
};


/** @param {!Array.<!snet_yolov3_object_detection.Boxes>} value */
snet_yolov3_object_detection.Output.prototype.setBoxesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!snet_yolov3_object_detection.Boxes=} opt_value
 * @param {number=} opt_index
 * @return {!snet_yolov3_object_detection.Boxes}
 */
snet_yolov3_object_detection.Output.prototype.addBoxes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, snet_yolov3_object_detection.Boxes, opt_index);
};


snet_yolov3_object_detection.Output.prototype.clearBoxesList = function() {
  this.setBoxesList([]);
};


/**
 * repeated int32 class_ids = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
snet_yolov3_object_detection.Output.prototype.getClassIdsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<number>} value */
snet_yolov3_object_detection.Output.prototype.setClassIdsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_yolov3_object_detection.Output.prototype.addClassIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


snet_yolov3_object_detection.Output.prototype.clearClassIdsList = function() {
  this.setClassIdsList([]);
};


/**
 * repeated float confidences = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
snet_yolov3_object_detection.Output.prototype.getConfidencesList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/** @param {!Array.<number>} value */
snet_yolov3_object_detection.Output.prototype.setConfidencesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
snet_yolov3_object_detection.Output.prototype.addConfidences = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


snet_yolov3_object_detection.Output.prototype.clearConfidencesList = function() {
  this.setConfidencesList([]);
};


/**
 * optional string img_base64 = 5;
 * @return {string}
 */
snet_yolov3_object_detection.Output.prototype.getImgBase64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
snet_yolov3_object_detection.Output.prototype.setImgBase64 = function(value) {
  jspb.Message.setField(this, 5, value);
};


goog.object.extend(exports, snet_yolov3_object_detection);
