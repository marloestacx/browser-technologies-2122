const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enqueteSchema = new Schema(
  {
    studentName: {
      type: String,
    },
    studentID: {
      type: Number,
    },

    WAFSteacherName: {
      type: String,
    },
    WAFSweeks: {
      type: String,
    },
    WAFSmaterial: {
      type: Number,
    },
    WAFSexplanation: {
      type: Number,
    },
    WAFSunderstanding: {
      type: Number,
    },

    CSSteacherName: {
      type: String,
    },
    CSSweeks: {
      type: Number,
    },
    CSSmaterial: {
      type: Number,
    },
    CSSexplanation: {
      type: Number,
    },
    CSSunderstanding: {
      type: Number,
    },

    PWAteacherName: {
      type: String,
    },
    PWAweeks: {
      type: Number,
    },
    PWAmaterial: {
      type: Number,
    },
    PWAexplanation: {
      type: Number,
    },
    PWAunderstanding: {
      type: Number,
    },

    BTteacherName: {
      type: String,
    },
    BTweeks: {
      type: Number,
    },
    BTmaterial: {
      type: Number,
    },
    BTexplanation: {
      type: Number,
    },
    BTunderstanding: {
      type: Number,
    },
    HCDteacherName: {
      type: String,
    },
    HCDweeks: {
      type: Number,
    },
    HCDmaterial: {
      type: Number,
    },
    HCDexplanation: {
      type: Number,
    },
    HCDunderstanding: {
      type: Number,
    },

    RWteacherName: {
      type: String,
    },
    RWweeks: {
      type: Number,
    },
    RWmaterial: {
      type: Number,
    },
    RWexplanation: {
      type: Number,
    },
    RWunderstanding: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Enquete = mongoose.model("Enquete", enqueteSchema);
module.exports = Enquete;
