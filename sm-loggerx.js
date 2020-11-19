const fs = require('fs')
const dt = require("node-datetime")

const cfg = {
  "path": "logs/",
  "datetime_pattern": {
    "fmtDatetime": "d-m-Y H:M:S",
    "fmtDate": "d-m-Y"
  },
  "file": {
    "err": "logger-*-.err",
    "out": "logger-*-.out"
  },
  "logs_enabled": {
    "info": true,
    "warning": true,
    "critical": true,
    "err": true
  }
}

const _datetime = currentDate().date_time
const _date = currentDate().date
const _dir = cfg.path
const _file_err = cfg.file.err.replace('*-', _date)
const _file_out = cfg.file.out.replace('*-', _date)

function currentDate() {
  let dte = dt.create()
  let date_time = dte.format(cfg.datetime_pattern.fmtDatetime)
  let date = dte.format(cfg.datetime_pattern.fmtDate)
  return { date_time, date }
}

function writelog(message, file) {
  if (!fs.existsSync(_dir)) fs.mkdirSync(_dir, 0744)
  fs.appendFileSync(_dir + file, `\n${message}`, (err => console.log(err)))
}

function info(message) {
  if (cfg.logs_enabled.info) {
    message = `[INFO] - ${_datetime} > ${JSON.stringify(message)}`
    writelog(message, _file_out)
  }
}

function warning(message) {
  if (cfg.logs_enabled.warning) {
    message = `[WARNING] - ${_datetime} > ${JSON.stringify(message)}`
    writelog(message, _file_out)
  }
}

function critical(message) {
  if (cfg.logs_enabled.critical) {
    message = `[CRITICAL] - ${_datetime} > ${JSON.stringify(message)}`
    writelog(message, _file_out)
  }
}

function err(message) {
  if (cfg.logs_enabled.err) {
    message = `[ERROR] - ${_datetime} > ${JSON.stringify(message)}`
    writelog(message, _file_err)
  }
}

exports.info = info
exports.warning = warning
exports.critical = critical
exports.err = err