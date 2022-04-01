const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enqueteSchema = new Schema(
  {
    studentName: {
      type: String,
    },
    studentID: {
      type: String,
    },

    WAFSteacherName: {
      type: String,
    },
    WAFSweeks: {
      type: String,
    },
    WAFSmaterial: {
      type: String,
    },
    WAFSexplanation: {
      type: String,
    },
    WAFSunderstanding: {
      type: String,
    },

    CSSteacherName: {
      type: String,
    },
    CSSweeks: {
      type: String,
    },
    CSSmaterial: {
      type: String,
    },
    CSSexplanation: {
      type: String,
    },
    CSSunderstanding: {
      type: String,
    },

    PWAteacherName: {
      type: String,
    },
    PWAweeks: {
      type: String,
    },
    PWAmaterial: {
      type: String,
    },
    PWAexplanation: {
      type: String,
    },
    PWAunderstanding: {
      type: String,
    },

    BTteacherName: {
      type: String,
    },
    BTweeks: {
      type: String,
    },
    BTmaterial: {
      type: String,
    },
    BTexplanation: {
      type: String,
    },
    BTunderstanding: {
      type: String,
    },
    HCDteacherName: {
      type: String,
    },
    HCDweeks: {
      type: String,
    },
    HCDmaterial: {
      type: String,
    },
    HCDexplanation: {
      type: String,
    },
    HCDunderstanding: {
      type: String,
    },

    RWteacherName: {
      type: String,
    },
    RWweeks: {
      type: String,
    },
    RWmaterial: {
      type: String,
    },
    RWexplanation: {
      type: String,
    },
    RWunderstanding: {
      type: String,
    },
  },
  { timestamps: true }
);

const Enquete = mongoose.model("Enquete", enqueteSchema);
module.exports = Enquete;
